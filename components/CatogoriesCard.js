import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CatogoriesCard = ({title, imgUrl}) => {
  return (
    <TouchableOpacity style = {{position: 'relative', marginRight: 8}}>
        <Image style = {{height: 40}} source={{uri: imgUrl}} />
      <Text style = {{ bottom: 1, color: "white", left: 1, fontWeight: 700 }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CatogoriesCard;