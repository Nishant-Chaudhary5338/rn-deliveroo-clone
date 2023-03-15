import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from "react-native-heroicons/outline"
import Catogories from '../components/Catogories'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "Home Page",
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView style = {{backgroundColor: "white"}}>
      
      <View style = {{display: 'flex', flexDirection: "row",}}>
        <Image style = {{height: 40, width: 40, padding: 16, borderRadius: 100 }} source={{uri: "https://links.papareact.com/wru"}} />
      
      <View style = {{flex: 1}}>
        <Text style= {{fontSize: "small", color: "gray", fontWeight: 400}}>Deliver Now</Text>
        <Text style = {{fontSize: "medium", fontWeight: 700,}}>Current Location
        <ChevronDownIcon  size = {20} color = "black"/>
        </Text>
        
      </View>
      <UserIcon size = {35} color = "skyblue" />
      </View>
      <View style = {{display: "flex", flexDirection: "row"}}>
        <View style = {{display: "flex", flexDirection: "row", flex: 1, backgroundColor: "lightgray", padding: 4 }}>
          <MagnifyingGlassIcon size = {20} color = "gray" />
          <TextInput placeholder='Dishes and Cuisine' />
        
        </View>
        <AdjustmentsHorizontalIcon size = {20} color = "skyblue" />
      
      </View>
      {/*body*/}
      <ScrollView>
        <Catogories style = {{backgroundColor: "white"}} />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;