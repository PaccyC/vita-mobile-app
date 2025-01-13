import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Link } from 'expo-router';

const Footer = () => {
  return (
    <View style={tw`w-full pb-5`}>
      <Text style={tw`text-center text-sm text-gray-500`}>
        By signing up or logging in, I accept the apps{' '}
        <Link href="/" style={tw`text-blue-600 font-medium`}>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/" style={tw`text-blue-600 font-medium`}>
          Privacy Policy
        </Link>
        .
      </Text>
    </View>
  );
};

export default Footer;
