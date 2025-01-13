import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
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

  const handleContinue= ()=>{

  }
  const handleGoBack = ()=>{
    if(router.canGoBack()){
      router.back()
    }
    else{
      router.push("/welcome")
    }
  }
  return (
    <SafeAreaView style={tw`flex-1  bg-white`}>
       <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={tw`flex-1 flex justify-between`}
      >
      
      <View>

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

        

        <Text style={[tw`text-lg font-medium mb-2`,{color:"#18181B"}]}>Phone Number</Text>
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
   
       

      </View>

      </View>
      <View style={tw`w-full px-3 items-center`}>
      <CustomButton
         title='Continue'
         onPress={handleContinue}
         backgroundColor={valid ? "#254EDB":"#F3F4F6"}
         textColor={valid ? "white":"#D4D4D8"}
         style="mb-10"
         disabled={!valid}
        />
      <Footer/>
      </View>

      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

export default Register