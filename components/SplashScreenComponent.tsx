import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { View,Image,Text,StyleSheet } from "react-native";

const SplashScreenComponent = () => {
  
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/splash.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Vita Mobile App</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    logo: {
      width: 100,
      height: 100,
    },
    text: {
      position: 'absolute',
      bottom: 30,
      fontSize: 16,
      fontWeight: "semibold",
      color: '#13286D',
    },
  });
  
  export default SplashScreenComponent;