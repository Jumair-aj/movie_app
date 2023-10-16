import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import {  HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import MoviesList from '../components/moviesList'
import Loading from '../components/loading'



var {width,height} = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const verticalMargin = ios ? '' : 'mt-3'
export default function PersonScreen() {
    const {params:item} = useRoute()
    const [isFavourite, setIsFavourite]= useState(false)
    const [personMovie, setPersonMovie]= useState([1,2,3,4,5])
    const navigation= useNavigation()
    const [loading, setLoading] = useState(false)

  return (
    <ScrollView 
    className="flex-1 bg-neutral-900" 
    contentContainerStyle={{paddingBottom: 20}}>
    {/* back button */}
    <SafeAreaView 
        className={"flex-row justify-between items-center mx-4 z-10 "+verticalMargin}>
        <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite? 'red': 'white'} />
        </TouchableOpacity>
    </SafeAreaView>
    {loading ? <Loading/> :   <View>
                    <View 
                        className="flex-row justify-center"
                        style={{
                            shadowColor: 'gray',
                            shadowRadius: 40,
                            shadowOffset: {width: 0, height: 5},
                            shadowOpacity: 1,
                        }}
                    >
                        <View 
                        className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                            <Image 
                                // source={require('../assets/images/castImage2.png')} 
                                source={require('../assets/images/actorImg.jpg')}
                                style={{height: height*0.43, width: width*0.74}}
                            />
                        </View>
                    </View>
            <View className="mt-7">
                <Text className='text-3xl font-bold text-center text-white'>Matt Damon</Text>
                <Text className='text-base  text-center text-neutral-400'>Manchester United, United Kingdom</Text>
            </View>
            <View className='mx-3 p-4 mt-6 flex-row justify-center space-x-4 items-center bg-neutral-700 rounded-full'>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 text-sm'>Male</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Birthday</Text>
                        <Text className='text-neutral-300 text-sm'>25-05-1970</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Known for</Text>
                        <Text className='text-neutral-300 text-sm'>Acting</Text>
                    </View>
                    <View className=' px-2 items-center'>
                        <Text className='text-white font-semibold'>Popularity</Text>
                        <Text className='text-neutral-300 text-sm'>64.72%</Text>
                    </View>
            </View>
                    <View className='space-y-2 my-6 mx-4'>
                        <Text className='text-lg text-white'>Biography</Text>
                        <Text className='tracking-wide text-neutral-400'>Matthew Paige Damon is an American actor, film producer, and screenwriter. Ranked among Forbes' most bankable stars, the films in which he has appeared have collectively earned over $3.88 billion at the North American box office, making him one of the highest-grossing actors of all time.</Text>
                    </View>

                        {/* Actor's Movies */}
                        <MoviesList title={'Movies'} hideSeeAll={false} data={personMovie}/>
        </View>}

            </ScrollView>
  )
}