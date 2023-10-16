import { View, Text, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../api/moviedb'

var {width,height} = Dimensions.get('window')
export default function TrendingMovies({data}) {
    const navigation = useNavigation()
    const handlePress = (item) =>{
navigation.push('Movie',item)
    }
  return (
    <View className='mb-8'>
      <Text className='text-xl text-white mx-4 mb-5'>Trending</Text>
      <Carousel
      data={data}
      renderItem={({item})=> <MovieCard item={item} handlePress={handlePress}/>}
      firstItem={1}
      inactiveSlideOpacity={0.6}
      sliderWidth={width}
      itemWidth={width*0.62}
      style={{display:'flex',alignItems:'center'}}
      />
    </View>
  )
}

const MovieCard = ({item,handlePress}) =>{
  console.log('item', item)
    return(
        <TouchableWithoutFeedback  onPress={()=>handlePress(item)}>
            <Image
                // source={require('../assets/images/moviePoster.jpg')}
                source={{uri: image500(item?.poster_path)}}
                style={{width:width*0.6,height:height*0.4}}
                className='rounded-xl'
            />
        </TouchableWithoutFeedback>
    )
}