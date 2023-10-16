import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import {  HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/cast'
import MoviesList from '../components/moviesList'
import Loading from '../components/loading'

var {width,height} = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const topMargin = ios ? '' : 'mt-3'
export default function MovieScreen() {
    const {params:item} = useRoute()
    const [isFavourite, setIsFavourite]= useState(false)
    const [cast, setCast]= useState([1,2,3,4])
    const [similarMovies, setSimilarMovies]= useState([1,2,3])
    const navigation = useNavigation()
    const movieName = 'Unbearable weights of massive Talent'
  const [loading, setLoading] = useState(false)
  const [movieData,setMovieData] = useState([])
useEffect(()=>{
    console.log('item.id', item.id)
})

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:20}}
    className='bg-neutral-900 flex-1'
    >
      <View className='w-full'>
        <SafeAreaView className={"absolute w-full z-20  flex-row justify-between items-center px-4 "+topMargin}>
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=>navigation.goBack()}>
                <ChevronLeftIcon size={28} color={'white'} strokeWidth={2.5} />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-xl p-1" onPress={()=>setIsFavourite(!isFavourite)}>
                <HeartIcon size={28} color={isFavourite ? 'red':'white'} strokeWidth={2.5} />
            </TouchableOpacity>
        </SafeAreaView>
        {loading ? <Loading/> :<View>
            <Image
            source={require('../assets/images/moviePoster1.jpg')}
            style={{width:width,height:height*0.55}}
            />
            <LinearGradient
             colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']} 
             style={{width,height:height*0.4}}
            className='bottom-0 absolute'
            />
        </View>}
        </View>
        <View style={{marginTop:height*0.09}} className='space-y-3'>
            <Text className='text-center text-white text-3xl font-bold tracking-wider'>{movieName}</Text>
            <Text className="text-neutral-400 font-semibold text-base text-center ">
                Released • 2020 • 170 min
            </Text>
            <View className='flex-row justify-center mx-4 space-x-2'>
                <Text className='text-neutral-400 font-semibold text-center text-base'>Action •</Text>
                <Text className='text-neutral-400 font-semibold text-center text-base'>Thriller •</Text>
                <Text className='text-neutral-400 font-semibold text-center text-base'>Comedy</Text>
            </View>
            <View>
            <Text className='text-neutral-400 mx-4 tracking-wide'>
A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him.
            </Text>
            </View>

            {/* Cast */}
            <Cast cast={cast}/>

            {/* Similar Movies */}
            {/* <MoviesList title={'Similar Movies'} hideSeeAll={false} data={similarMovies}/> */}

        </View>
    </ScrollView>
  )
}