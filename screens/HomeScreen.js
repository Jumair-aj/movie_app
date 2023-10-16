import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import TrendingMovies from "../components/trendingMovies";
import MoviesList from "../components/moviesList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/moviedb";

const ios = Platform.OS == "ios";
export default function HomeScreen() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true)
   const navigation = useNavigation()


   useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
   }, [])
   
   const getTrendingMovies =async () =>{
    const data = await fetchTrendingMovies()

    if(data && data.results){
      setTrendingMovies(data.results)
    }
    setLoading(false)
   }
   const getUpcomingMovies =async () =>{
    const data = await fetchUpcomingMovies()

    if(data && data.results){
      setUpcomingMovies(data.results)
    }
    
   }
   const getTopRatedMovies =async () =>{
    const data = await fetchTopRatedMovies()

    if(data && data.results){
      setTopRatedMovies(data.results)
    }
   
   }

  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className={ios ? "mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between align-center mx-4">
          <Bars3CenterLeftIcon size={"30"} color={"white"} strokeWidth={2.5} />
          <View>
            <Text className="text-white text-3xl font-bold">
              <Text style={styles.text}>M</Text>ovies
            </Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.push('Search')}>
            <MagnifyingGlassIcon
              size={"30"}
              color={"white"}
              strokeWidth={2.5}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? <Loading/> : (
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies */}
       { trendingMovies.length >0 && <TrendingMovies data={trendingMovies} />}
        
        {/* Upcoming Movies */}
        <MoviesList title='Upcoming' data={upcomingMovies}/>

        {/* Top Rated Movies */}
        <MoviesList title='Top Rated' data={upcomingMovies}/>

      </ScrollView>)}
    </View>
  );
}
