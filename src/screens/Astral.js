import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const Astral = () => {
    const {height,width}=Dimensions.get("window")
  return (
    <View>
      <Image source={require("../assets/image3.png")} style={{width:width, height:height,resizeMode:"contain",opacity:1}}/>
    </View>
  )
}

export default Astral