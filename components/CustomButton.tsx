import { TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { ButtonProps } from '@/types/types'


const CustomButton = ({title,onPress,disabled,textColor,IconLeft, style,backgroundColor}: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[tw`w-full rounded-lg flex flex-row justify-center p-3 items-center    ${style}`,{backgroundColor}]}
      >
     {IconLeft && <IconLeft/>}
    <Text style={[tw`text-center font-bold`,{color: textColor}]}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton