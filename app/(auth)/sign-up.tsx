import { View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import tw from "twrnc"
import { router } from 'expo-router';
import PhoneInput from "react-native-phone-number-input"
import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';

const Register = () => {

  const phoneInputRef= useRef<PhoneInput>(null);

  // States
  const [valid,setValid]= useState(false)
  const [phoneNumber,setPhoneNumber] = useState("")
  const [countryCode,setCountryCode] = useState("US")


  const handleGoBack = ()=>{
    if(router.canGoBack()){
      router.back()
    }
    else{
      router.push("/welcome")
    }
  }
  return (
    <SafeAreaView style={[tw`flex flex-1  bg-white`]}>
      <ScrollView style={tw`flex-grow`}>

    <View style={tw`bg-white flex items-center justify-between`}>
      <TouchableOpacity
      onPress={handleGoBack}
      style={tw`w-full items-start px-3 mb-5`}>
       <MaterialCommunityIcons 
       name='chevron-left' 
       size={30} color="black"
       />
      </TouchableOpacity> 
      <View style={[tw`w-full mb-5`,{backgroundColor:"#F3F4F6", height: 2}]}/>

      <View style={tw`px-3`}>
        <Text style={[tw`text-3xl mb-4`,{fontFamily: "Jakarta-SemiBold"}]}>Register</Text>
        <Text  style={[tw`text-gray-600 text-base mb-6 leading-5`,]}>Please enter yout number to continue your registration</Text>

        <Text style={tw``}>Phone Number</Text>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <PhoneInput
        
          ref={phoneInputRef}
          defaultValue={phoneNumber}
          defaultCode={countryCode}
          layout='first'
          onChangeText={(text)=>setPhoneNumber(text)}
          onChangeFormattedText={(formattedText)=>{
            const isValid= phoneInputRef.current?.isValidNumber(formattedText);
            setValid(!!isValid)
          }}
          withDarkTheme={false}
          withShadow={true}
          autoFocus
          
        />
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      </View>
      <View style={tw`px-3 w-full`}>
        <CustomButton
         title='Continue'
         onPress={()=>router.replace("/(auth)/otp")}
         backgroundColor={valid ? "#254EDB":"#F3F4F6"}
         textColor={valid ? "white":"#D4D4D8"}
         style={"mt-6 w-full mb-10"}
         disabled={!valid}
        />
        <Footer/>
        
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register