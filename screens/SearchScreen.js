import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'

var {width,height} = Dimensions.get('window')

export default function SearchScreen() {
    const navigation = useNavigation()
    const [ results,setResults] = useState([1,2,3,4,5])
  const [loading, setLoading] = useState(false)
  const movieName = 'Unbearable weights of massive Talent'

  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500  rounded-full">
        <TextInput 
        placeholder='Search Movies'
        placeholderTextColor={'lightgray'}
        className='pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider'
        />
        <TouchableOpacity className="bg-neutral-500 m-1 p-3 rounded-full" onPress={()=>navigation.navigate('Home')}>
            <XMarkIcon size={25} color={'white'}/>
        </TouchableOpacity>
      </View>
      {loading ? <Loading/> :results.length > 0 ?(
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      className='space-y-3'
      >
<Text className='text-white font-semibold ml-1'>Results ({results.length})</Text>
<View className="flex-row justify-center items-center flex-wrap">
    {results.map((item,index)=>(
        <TouchableWithoutFeedback
        key={index}
        onPress={()=>navigation.navigate("Movie",item)}
        >
            <View className='space-y-2 mb-4'>
<Image
source={require('../assets/images/moviePoster.jpg')}
className='rounded-3xl'
style={{width:width*0.4,height:height*0.3}}
/>
<Text className='text-neutral-400'>
{movieName.length > 22 ? movieName.slice(0,22)+'...' : movieName}

</Text>
</View>
        </TouchableWithoutFeedback>
    ))}

</View>
      </ScrollView>

      ):(
        <View className='flex-row justify-center'>
<Image
source={require('../assets/images/movieTime.png')}
className='h-96 w-96'/>
        </View>
      )}
    </SafeAreaView>
  )
}