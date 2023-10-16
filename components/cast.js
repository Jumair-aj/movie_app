import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Cast({cast}) {
    let personName = 'Matt Damon'
    let characterName = 'Mr. Ripley'
    const navigation = useNavigation()
  return (
    <View className='my-6'>
      <Text className='mx-4 text-lg text-white mb-5'>Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
        {cast && cast.map((person,index)=>(
            <TouchableOpacity
            key={index}
            onPress={()=>{navigation.navigate('Person',person)}}
            className='mr-4 items-center'
            >
                <View 
                className='rounded-full border border-neutral-500 overflow-hidden h-20 w-20 items-center'
                >
                <Image
                source={require('../assets/images/actorImg.jpg')}
                className='h-24 w-20 rounded-2xl'
                />
                </View>
            <Text className='text-white text-sm mt-1'>
                {characterName >14 ?characterName.slice(0,14)+'...' : characterName}
            </Text>
            <Text className='text-neutral-400 text-sm mt-1'>
                {personName >14 ? personName.slice(0,14)+'...' : personName}
            </Text>

        </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  )
}