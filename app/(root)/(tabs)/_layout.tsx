import React from 'react'
import { Stack } from 'expo-router'

const TabsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      
    >
        <Stack.Screen  name='doctor-profile'/>
        <Stack.Screen  name='create-appointment'/>
    </Stack>
  )
}

export default TabsLayout