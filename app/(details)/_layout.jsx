import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='productDetails' options={{headerShown:false}}/>
    </Stack>
  )
}

export default DetailsLayout