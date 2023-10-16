import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'

var {width,height} = Dimensions.get('window')
export default function MoviesList({title, data, hideSeeAll}) {
    const movieName = 'Unbearable weights of massive Talent'
    const navigation = useNavigation()
  return (
    <View className='mb-8 space-y-4'>
        <View className="flex-row justify-between items-center mx-4">
      <Text className='text-white text-xl'>{title}</Text>
      {hideSeeAll && <TouchableOpacity>
        <Text style={styles.text} className='text-lg'>See all</Text>
      </TouchableOpacity>}
        </View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
    {data.map((item,index)=>(
        <TouchableOpacity 
        key={index}
        onPress={()=>{navigation.push("Movie",item)}}
        >  
        <View className='space-y-1 mr-4'>
            <Image 
            // source={require('../assets/images/moviePoster.jpg')}
            source={{uri:image185(item.poster_path) || fallbackMoviePoster}}
            style={{width:width*0.33,height:height*0.22}}
            className='rounded-3xl'
            />
        </View>
        <Text className='text-neutral-300 ml-1'>
{item.title.length > 14 ? item.title.slice(0,14)+'...' : item.title}
        </Text>
            </TouchableOpacity>
    ))

    }
</ScrollView>
    </View>
  )
}