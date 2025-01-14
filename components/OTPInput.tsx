import { View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React from 'react'
import tw from "twrnc"

const OTPInput = ({

    codes,
    refs,
    errorMessages,
    onChangeCode
}:OTPInputProps) => {
  return (

      <View style={tw`flex flex-row w-full flex-grow justify-between mb-4`}>
        {codes.map((code,index)=>(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              key={index}
              autoComplete='one-time-code'
              enterKeyHint='next'
              style={[tw`text-2xl h-[48] w-[48] rounded-lg bg-white text-black px-2 py-1 text-center`,
                {height:48, width: 48,color: "black",borderColor: "#254EDB",borderWidth:1,}
              ]}
              keyboardType='numeric'
              inputMode='numeric'
              onChangeText={(text:string)=>onChangeCode(text,index)}
              value={code}
              maxLength={index === 0 ? codes.length : 1}
              ref={refs[index]}
              onKeyPress={({nativeEvent: {key}})=>{
                if(key === "Backspace" && index >0){
                    onChangeCode("",index -1);
                    refs[index -1].current?.focus();
                }
              }}
              secureTextEntry={true}
            />
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        ))}

      </View>
   
  )
}

export default OTPInput