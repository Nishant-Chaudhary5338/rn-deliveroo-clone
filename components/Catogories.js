import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatogoriesCard from './CatogoriesCard';

const Catogories = () => {
  return (
    <ScrollView style = {{backgroundColor: "gray"}} horizontal showsHorizontalScrollIndicator = {false}
    contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10

    }}
    >
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      <CatogoriesCard  title = "testing" imgUrl="https://links.papareact.com/wru"/>
      

    </ScrollView>
  )
}

export default Catogories;