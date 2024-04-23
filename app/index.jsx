import { useEffect } from 'react';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import images from '../constants/images'
export default function App() {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push('/home')
    }, 2000);
  
    return () => {
      clearTimeout(timeOut)
    }
  }, [])
  

  return (
    <SafeAreaView className = 'bg-white h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="px-4 w-full h-full justify-center items-center">
          <Image source={images.logo} className='w-[170px]'
          resizeMode='contain'
          
          />
        </View>
      </ScrollView>
      <StatusBar style='dark'/>
    </SafeAreaView>
  );
}

