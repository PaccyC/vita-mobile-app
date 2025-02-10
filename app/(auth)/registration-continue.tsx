import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { icons } from "@/constants";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text,ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from "twrnc";

const RegistrationContinue = () => {
  const [isValid,setIsValid]= useState(true)
  const handleGoBack = ()=>{}
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
    <ScrollView style={tw`flex-grow`}>
    <View style={tw`flex-1 bg-white py-4`}>
      <View style={tw`w-full  px-2`}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={tw`w-[200px] items-start mb-4`}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={[tw`w-full mb-3`, { backgroundColor: "#F3F4F6", height: 2 }]}
      />
      <View style={tw`px-3`}>
        <Text style={[tw`text-3xl mb-3`, { fontFamily: "Jakarta-SemiBold" }]}>
        Register
        </Text>
        <Text style={[tw`text-gray-600 text-base mb-6 leading-5`]}>
        Please enter a form to continue the register
        </Text>
          <CustomInput
            label="Email"
            labelStyle="text-[#18181B]"
            inputStyle=""
            containerStyle=""
            iconStyle=""
            style=""
            placeholder="Enter your full name"
          />
          <CustomInput
            label="Password"
            labelStyle="text-[#18181B]"
            inputStyle=""
            containerStyle=""
            iconStyle=""
            style=""
            secureTextEntry={true}
            placeholder="Enter your Email"
          />

          <CustomInput
            label="Password"
            labelStyle="text-[#18181B]"
            inputStyle=""
            containerStyle=""
            iconStyle=""
            style=""
            secureTextEntry={true}
            placeholder="Enter your password"
            icon={icons.check}
          />
          <CustomInput
            label="Password"
            labelStyle="text-[#18181B]"
            inputStyle=""
            containerStyle=""
            iconStyle=""
            style=""
            secureTextEntry={true}
            placeholder="Confirm your password"
            icon={icons.check}
          />

          <CustomButton 
            onPress={() => {}} 
            title="Sign up" 
            style="mt-6 border border-[#F3F4F6]"
            textColor={`${isValid ? "white":"#D4D4D8"}`}
            backgroundColor={`${isValid ? "#254EDB":"#F3F4F6  "}`}
            
            />

          <Link
            href="/(auth)/sign-in"
            style={[tw`mt-10 text-center text-lg`, { color: "#858585" }]}
          >
            <Text style={[tw`text-[#254EDB] text-sm`,{fontFamily:"Jakarta-Bold"}]}>I have an account? Sign in</Text>
            
          </Link>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationContinue;
