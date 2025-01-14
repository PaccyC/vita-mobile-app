import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { View, Text, SafeAreaView,ScrollView, TouchableOpacity } from "react-native";

import tw from "twrnc";

const RegistrationContinue = () => {
  return (
    <ScrollView
      style={tw`flex flex-1 bg-white`}
      contentContainerStyle={
        {
          justifyContent: "space-between",
          alignItems:'center'
        }
      }
    >
      <View style={tw`flex-1 mt-8`}>
        <TouchableOpacity
          onPress={() => {}}
          style={[tw`w-full items-start px-3 mb-5 relative top-2 `]}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={[tw`w-full mb-5`, { backgroundColor: "black", height: 2 }]}
        />
        <View style={tw`px-3`}>
          <Text style={[tw`text-3xl mb-4`, { fontFamily: "Jakarta-SemiBold" }]}>
            Register
          </Text>
          <Text style={[tw`text-gray-600 text-base mb-6 leading-5`]}>
          Please enter a form to continue the register
          </Text>
        </View>

        <View style={tw`p-5`}>
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
          />

          <CustomButton 
            onPress={() => {}} 
            title="Sign up" 
            style="mt-6 border border-[#F3F4F6]"
            textColor="#D4D4D8"
            backgroundColor="#F3F4F6"
            
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
  );
};

export default RegistrationContinue;
