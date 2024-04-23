import React, {useEffect} from 'react'
import { SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'

const RootLayout = () => {
    const [fontsLoaded,error] = useFonts({
        "OpenSansBold" : require("../assets/fonts/OpenSans-Bold.ttf"),
        "OpenSansExtraBold" : require("../assets/fonts/OpenSans-ExtraBold.ttf"),
        "OpenSansItalic" : require("../assets/fonts/OpenSans-Italic.ttf"),
        "OpenSansLight" : require("../assets/fonts/OpenSans-Light.ttf"),
        "OpenSansMedium" : require("../assets/fonts/OpenSans-Medium.ttf"),
        "OpenSansRegular" : require("../assets/fonts/OpenSans-Regular.ttf"),
        "OpenSansSemiBold" : require("../assets/fonts/OpenSans-SemiBold.ttf"),
    })

    useEffect(() => {
      if (error) throw new Error

      if (fontsLoaded) SplashScreen.hideAsync
    }, [fontsLoaded,error])

    if(!fontsLoaded && !error) return null
    
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='(details)' options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout
