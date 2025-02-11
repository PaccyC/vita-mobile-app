import { View, Text, ScrollView, TouchableOpacity, Image,  } from "react-native";
import React from "react";
import tw from "twrnc";
import { Link, router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomInput from "@/components/CustomInput";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleGoBack = () => {
    router.push("/welcome");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
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
              Welcome Back
            </Text>
            <Text style={[tw`text-gray-600 text-base mb-6 leading-5`]}>
              Please enter a form to login this app
            </Text>

            <CustomInput
              containerStyle=""
              label="Email or Username"
              placeholder="Enter your email or username"
              labelStyle="text-[#18181B]"
              inputStyle=""
              iconStyle=""
              style=""
            />
            <CustomInput
              containerStyle=""
              label="Password"
              placeholder="Enter your password"
              labelStyle="text-[#18181B]"
              inputStyle=""
              iconStyle=""
              style=""
              icon={() => <Image source={icons.eye} />}
            />
            <View style={tw`w-full flex flex-row justify-end`}>
              <Link href="/(auth)/sign-in">
                <Text style={tw`text-[#3F3F46] text-sm font-medium`}>
                  Forgot Password
                </Text>
              </Link>
            </View>

            <CustomButton
              title="Sign In"
              backgroundColor="#254EDB"
              textColor="white"
              style="mt-10"
              onPress={() => router.replace("/(root)/(tabs)/doctor-profile")}
            />

            <View
              style={[tw`w-full mt-4`, { backgroundColor: "#F3F4F6", height: 2 }]}
            />
            <CustomButton
              title="Sign in with Google"
              backgroundColor="transparent"
              textColor="#254EDB"
              style="mt-4 border border-[#D2D6DB]"
              onPress={() => {}}
              IconLeft={() => <Image source={icons.google} />}
            />
            <CustomButton
              title="Sign in with Apple"
              backgroundColor="#254EDB"
              textColor="white"
              style="mt-5"
              onPress={() => {}}
              IconLeft={() => <Image source={icons.apple} />}
            />

            <Link
              href="/(auth)/registration-continue"
              style={tw`mt-10 text-center text-sm  mb-4`}
            >
              <Text>Don’t have an account ? </Text>
              <Text style={[tw`font-semibold`, { color: "#254EDB" }]}>
                Register
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
