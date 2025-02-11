import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';


const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:30 PM",
  "02:00 PM",
  "03:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

const genders = ["Male", "Female"];
const CreateAppointment = () => {


  const currentDate = new Date();
  
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedGender, setSelectedGender] = useState("Male");



  const [month, setMonth] = useState(currentDate.getMonth())
  const [year, setYear] = useState(currentDate.getFullYear());
  const [dates, setDates] = useState<any>([]);

  const generateDates = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate(); 
    const newDates = [];

    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
      const weekDay = date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
      newDates.push({ id: day, day: day.toString(), label: weekDay });
    }

    setDates(newDates);
  };

  useEffect(() => {
    generateDates();
  }, [month, year]);

  const prevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  // Function to go to the next month
  const nextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((prev) => prev + 1);
  };


  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      <ScrollView
        contentContainerStyle={tw`flex-grow pb-10`}
        keyboardShouldPersistTaps="handled"
        style={tw`flex-grow px-6 py-4 `}
      >
        <View style={tw`flex flex-row items-center `}>
          <TouchableOpacity
            style={tw`h-12 w-12 bg-transparent border border-[#F1F4F7] rounded-lg flex justify-center items-center mr-8`}
            onPress={() => {}}
          >
            <FontAwesome5 name="arrow-left" size={20} color="#222B45" />
          </TouchableOpacity>

          <Text style={tw`text-[#222B45]  text-2xl font-medium`}>
            New Appointment
          </Text>
        </View>

     =<View style={tw`mt-6`}>
    
          <View style={tw`flex flex-row items-center justify-between mb-4`}>
            <TouchableOpacity onPress={prevMonth}>
              <Entypo name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-lg font-semibold`}>
              {new Date(year, month).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </Text>
            <TouchableOpacity onPress={nextMonth}>
              <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Days List */}
          <FlatList
            horizontal
            data={dates}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedDate(item.id)}
                style={[
                  tw`w-20 h-20 rounded-lg justify-center items-center border mr-2`,
                  selectedDate === item.id
                    ? tw`bg-blue-500 border-blue-500`
                    : tw`border-gray-200`,
                ]}
              >
                <Text
                  style={tw`text-lg font-semibold ${selectedDate === item.id ? "text-white" : "text-black"}`}
                >
                  {item.day}
                </Text>
                <Text
                  style={tw`text-xs ${selectedDate === item.id ? "text-white font-medium" : "text-gray-500"}`}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg text-[#222B45] font-semibold mb-4`}>
            Available Time
          </Text>

          <View style={tw`flex-row flex-wrap justify-between gap-2`}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                onPress={() => setSelectedTime(time)}
                style={[
                  tw`w-[30%] h-10 rounded-lg justify-center items-center border`,
                  selectedTime === time
                    ? tw`bg-blue-500 border-blue-500 `
                    : tw`border-gray-200`,
                ]}
              >
                <Text
                  style={tw`${selectedTime === time ? "text-white font-medium" : "text-black"}`}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg text-[#222B45] font-semibold mb-4`}>
            Patient Details
          </Text>

          <CustomInput
            label="Full name"
            labelStyle="text-[14px] text-[#6B779A]"
            placeholder="Tolu Arowoselu"
            placeholderTextColor={"#222B45"}
            containerStyle="bg-[#6a769a0d]"
            
          />
          <CustomInput
            label="Age"
            labelStyle="text-[14px] text-[#6B779A]"
            placeholder="26-30"
            placeholderTextColor={"#222B45"}
            containerStyle="bg-[#6a769a0d]"
            
          />
        </View>
        <View style={tw`flex gap-2 mt-2`}>
          <Text style={tw`text-[14px] font-semibold text-[#6B779A]`}>
            Gender
          </Text>
          <View style={tw`flex flex-row gap-2`}>
            {genders.map((gender)=>(
              <TouchableOpacity
              key={gender}
              onPress={()=>setSelectedGender(gender)}
              style={tw`px-8  py-3 mr-2 rounded-lg ${selectedGender ===  gender ? "bg-[#3E64FF]": 'bg-transparent border border-[#6B779A]'}`}
              >
                <Text style={tw`text-[14px] ${selectedGender === gender ? "text-white": "text-[#6B779A]"}`}>{gender}</Text>
              
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Problem */}
        <View style={tw`flex gap-2 mt-4`}>
          <Text style={tw`text-[#6B779A] text-[14px] font-medium`}>Write your problem</Text>
          <TextInput
          style={tw`bg-[#6a769a0d] p-6 pt-4 pb-10 px-5 rounded-lg text-[16px]`}
          placeholder="Write your problem"
          multiline
          numberOfLines={10}
          placeholderTextColor="#6B779A"
          
        />
        </View>

        <CustomButton
         title="Set Appointment"
         backgroundColor="#3E64FF"
         style="mt-6 rounded-[20px] text-white text-[16px]"
         textColor="white"
         onPress={()=>router.replace("/(root)/(tabs)/doctor-profile")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};


export default CreateAppointment;
