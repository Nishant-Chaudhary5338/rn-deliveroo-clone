import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, featuredCatogory}) => {
  return (
    <View>
      <View style ={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
        <Text>{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text>{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator = {false}
        contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10}}
      >

        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        <RestaurantCard title= "Featured" imgUrl= "https://links.papareact.com/wru" />
        

      </ScrollView>
    </View>
  )
}

export default FeaturedRow