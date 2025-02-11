import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Footer from "@/components/Footer";
import GoogleSvg from "@/assets/svgs/GoogleSvg";
import AppleSvg from "@/assets/svgs/AppleSvg";
const Welcome = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 relative  items-center`}>
      <Image source={images.WelcomeImage} resizeMode="contain" />

      <View style={tw` w-full px-3 py-5  items-start`}>
        <Text style={[tw`text-2xl`, { fontFamily: "Jakarta-Bold" }]}>Vita</Text>
        <Text
          style={[
            tw`font-medium mb-8`,
            { color: "#3F3F46", fontSize: 14, fontFamily: "Jakarta-Medium" },
          ]}
        >
          Begin your journey to better health!
        </Text>

        <View style={tw`w-full flex gap-3`}>
          <CustomButton
            title="Continue With Phone Number"
            onPress={()=>router.replace("/(auth)/sign-up")}
            backgroundColor="#254EDB"
            textColor="white"
            style={` text-sm`}
          />
           <CustomButton
       title='Sign In with Google'
       style=" w-full shadow-none border border-[#D2D6DB]"
       IconLeft={()=>(<GoogleSvg/>)}
       onPress={()=>{}}
       textColor="#254EDB"
       

       
      />
          <CustomButton
       title='Sign In with Apple'
       style=" w-full shadow-none"
       IconLeft={()=>(
        <AppleSvg />
       )}
       onPress={()=>{}}
       textColor="white"
       backgroundColor="#254EDB"

       
      />
        </View>

        <Link style={tw`mt-8 w-full text-center`} href="/(auth)/sign-in">
          <Text>Already have an account? </Text>
          <Text style={[{ color: "#254EDB" }]}>Sign In</Text>
        </Link>
      </View>

     {/* Footer text */}
     <Footer/>
    </SafeAreaView>
  );
};

export default Welcome;
