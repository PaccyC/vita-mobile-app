import { SafeAreaView, View, Image, Text } from "react-native";
import React, { useRef, useState } from "react";
import tw from "twrnc";
import Swiper from "react-native-swiper";
import { data } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);
  const lastSlide = activeIndex === data.onboarding.length - 1;

  return (
    <SafeAreaView style={tw`flex h-full justify-center items-center pb-8`}>
      <Swiper
        loop={false}
        ref={swiperRef}
        dot={
          <View
            style={[tw`h-1 mx-1`, { width: 32, backgroundColor: "#E5E7EB" }]}
          />
        }
        activeDot={
          <View
            style={[
              tw`h-1 mx-1 rounded-full`,
              { width: 32, backgroundColor: "#254EDB" },
            ]}
          />
        }
        paginationStyle={{
          position: "absolute",
          bottom: 170,
          alignSelf: "flex-start"
        }}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {data.onboarding.map((item) => (
          <View key={item.id}>
            <Image source={item.image} style={[tw`w-full`, { height: 400 }]} />

            <View style={tw`p-6`}>
              <Text style={tw`font-bold text-3xl mt-6`}>{item.title}</Text>
              <Text style={[tw`font-medium text-sm mt-2`, { color: "#3F3F46" }]}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>

      {lastSlide ? (
        <View style={tw`px-6 w-full `}>
          <CustomButton
            title="Get Started !"
            onPress={()=> router.replace("/(auth)/welcome")}
            textColor="white"
            backgroundColor="#254EDB"
            style="mt-2"
             
          />
        </View>
      ) : (
        <View style={tw`flex-row w-full justify-between px-6`}>
          <CustomButton
            title="Skip"
            onPress={()=>router.replace("/(auth)/welcome")}
            backgroundColor="#F9FAFB"
            textColor="#18181B"
            style="flex-1 mr-2"
          />
          <CustomButton
            title="Next"
            onPress={()=> swiperRef.current?.scrollBy(1)}
            backgroundColor="#254EDB"
            textColor="#FFFFFF"
            style="flex-1 ml-2"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;
