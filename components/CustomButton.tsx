import { TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from "twrnc"

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: any;
    backgroundColor?: string
    textColor?: string
  
}
const CustomButton = ({title,onPress,disabled,textColor, style,backgroundColor}: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[tw` w-full p-3 rounded-lg   ${style}`,{backgroundColor}]}
      >
        <Text style={[tw`text-center font-bold`,{color: textColor}]}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton