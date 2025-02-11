import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { RefObject, useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import { router } from "expo-router";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import OTPInput from "@/components/OTPInput";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import TimerSvg from "@/assets/svgs/TimerSvg";

const OTP = () => {
  const phoneInputRef = useRef<PhoneInput>(null);

  // States
  const [valid, setValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [codes, setCodes] = useState<string[] | undefined>(Array(4).fill(""));
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [timeLeft, setTimeLeft] = useState(60);
  const [errorMessages, setErrorMessages] = useState<string[]>();

  useEffect(() => {
    if (timeLeft == 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      setErrorMessages(undefined);
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[3].current?.focus();
      return;
    }
    setErrorMessages(undefined);
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    setValid(true);

    if (text !== "" && index < 3) {
      refs[index + 1].current?.focus();
    }
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/welcome");
    }
  };
  return (
    <KeyboardAvoidingView
    style={tw`flex flex-1`}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={60} // Adjust based on header height
  >
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <View
        style={tw`flex-grow flex justify-between`}
       
       
      >
        <View>
          {/* Back button and OTP explanation */}
          <TouchableOpacity
            onPress={handleGoBack}
            style={tw`w-[200px] justify-center items-start px-3 py-4`}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <View
            style={[tw`w-full mb-5`, { backgroundColor: "#F3F4F6", height: 2 }]}
          />
          <View style={tw`px-3`}>
            <Text
              style={[tw`text-3xl mb-4`, { fontFamily: "Jakarta-SemiBold" }]}
            >
              Send OTP Code
            </Text>
            <Text style={[tw`text-gray-600 text-base mb-6 leading-5`]}>
              Enter the 6-digit that we have sent via the phone number to{" "}
              <Text style={[tw``, { fontFamily: "Jakarta-Bold" }]}>
                +62 812- 2569 - 2023
              </Text>
            </Text>

            <OTPInput
              codes={codes!}
              errorMessages={errorMessages}
              onChangeCode={onChangeCode}
              refs={refs}
            />

            <View style={tw`w-full flex flex-row gap-3 items-start`}>
              {timeLeft > 0 ? (
                <>
                  <TimerSvg />
                  <Text>{formatTime(timeLeft)}</Text>
                </>
              ) : (
                <Text>The time is up, try getting a new code</Text>
              )}
            </View>
          </View>
        </View>

        <View style={tw`w-full px-3 items-center`}>
          <CustomButton
            title="Continue"
            onPress={() => router.replace("/(auth)/registration-continue")}
            backgroundColor={valid ? "#254EDB" : "#F3F4F6"}
            textColor={valid ? "white" : "#D4D4D8"}
            style="mb-4"
            disabled={!valid}
          />
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  </KeyboardAvoidingView>

  );
};

export default OTP;
