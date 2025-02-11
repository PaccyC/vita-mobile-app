import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { CallSvg, ExperienceSvg, MessageSvg, PersonSvg, StarSvg, VideoSvg } from "@/assets/svgs";


const doctorDetails = [
  {
    value: "1000+",
    desctiption: "patients",
    icon: <PersonSvg/>,
    backgroundColor: "#7acdfa26",
  },
  {
    value: "10 Yrs",
    desctiption: "Experience",
    icon: <ExperienceSvg/>,
    backgroundColor: "#fdf2f4",
  },
  {
    value: "4.5",
    desctiption: "Ratings",
    icon: <StarSvg/>,
    backgroundColor: "#fef6ec",
  },
];


const communicationsMethods =[
  {
    methodName: "Messaging",
    description:"Chat me up, share photos.",
    icon: <MessageSvg/>,
    backgroundColor: "#eda1ab26"
  },
  {
    methodName: "Audio Call",
    description:"Call your doctor directly.",
    icon: <CallSvg/>,
    backgroundColor: "#7acdfa26"
  },
  {
    methodName: "Video Call",
    description:"See your doctor live.",
    icon: <VideoSvg/>,
    backgroundColor: "#f7c48226"
  }
]
const DoctorProfile = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView 
      style={tw`flex-1 bg-white`}
       contentContainerStyle={tw`flex-grow pt-4 pb-10`}
      >
        <LinearGradient
          colors={["#FFFFFF", "#FCFAFA"]}
          style={tw`w-full h-auto pb-4 px-6 rounded-b-3xl`}
          className=" rounded-b"
        >
          <View style={tw`flex flex-row items-center justify-between mb-2`}>
            <TouchableOpacity
              style={tw`h-12 w-12 bg-transparent border border-[#F1F4F7] rounded-lg flex justify-center items-center mr-8`}
              onPress={() => {}}
            >
              <FontAwesome5 name="arrow-left" size={20} color="#222B45" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={20} color="#231F20" />
            </TouchableOpacity>
          </View>
          <View style={tw` w-full flex flex-row justify-center items-center`}>
            <Image
              style={tw`shadow-md`}
              source={require("@/assets/images/doctor.png")}
            />
          </View>
          <View
            style={tw`flex w-full flex-col gap-2 items-center justify-center mb-4`}
          >
            <Text
              style={tw`text-[#222B45] text-[20px] font-medium text-center`}
            >
              Dr. Bellamy Nicholas
            </Text>
            <Text
              style={tw`text-[#6B779A] text-[14px] font-medium text-center`}
            >
              Viralogist
            </Text>
          </View>
          <View
            style={tw`flex w-full flex-row gap-4 flex-wrap justify-between`}
          >
            {doctorDetails.map((detail) => (
              <View
              key={detail.value}
                style={tw`min-h-[130px] flex-grow rounded-2xl bg-white flex gap-4 overflow-hidden`}
              >
                <View
                  style={tw`bg-[${detail.backgroundColor}] h-[60px] w-[50%] self-center rounded-b-lg flex justify-end items-center pb-2`}
                >
                  { detail.icon}
                </View>
                <View style={tw`flex`}>
                  <Text
                    style={tw`text-[#222B45] text-center text-[17px] font-medium`}
                  >
                   {detail.value}
                  </Text>
                  <Text
                    style={tw`text-[#6B779A] text-center text-[14px] font-normal`}
                  >
                    {detail.desctiption}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </LinearGradient>
        <View style={tw`mt-6 px-6`}>
          <Text style={tw`text-xl text-[#222B45] font-medium`}>
            About Doctor
          </Text>
          <Text style={tw`leading-[20px] font-normal text-[14px] text-[#6B779A]`}>
            Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital
            at London. He has achieved several awards and recognition for is
            contribution and service in his own field. He is available for
            private consultation.
          </Text>
        </View>
        <View style={tw`mt-6 px-6`}>
        <Text style={tw`text-xl text-[#222B45] font-medium`}>
           Working time
        </Text>
          <Text style={tw`leading-[20px] font-normal text-[14px] text-[#6B779A]`}>
           Mon - Sat (08:30 AM - 09:00 PM)
          </Text>
        </View>
        <View style={tw`mt-6 px-6 flex gap-3`}>
          <Text style={tw`text-xl text-[#222B45] font-medium`}>Communication</Text>
          <View style={tw`flex flex-col gap-4 items-center`}>
            {communicationsMethods.map((method)=>(
              <View 
              key={method.methodName} 
              style={tw`w-full flex flex-row gap-3 items-center `}>
                <View style={tw`w-12 h-12 bg-[${method.backgroundColor}] rounded-xl justify-center items-center`}>
                  {method.icon}
                </View>
                <View style={tw`flex`}>
                  <Text  style={tw`text-[#222B45] font-normal text-lg`}>{method.methodName}</Text>
                  <Text style={tw`text-[#6B779A] text-sm font-normal`}>{method.description}</Text>
                </View>
              
              </View>
            ))}
          </View>
        </View>
        <View style={tw`mt-6 px-6 `}>

          <CustomButton
            title="Book Appointment"
            textColor="white"
            backgroundColor="#3E64FF"
            style="rounded-[20px]"
            onPress={()=> router.replace("/(root)/(tabs)/create-appointment")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorProfile;
