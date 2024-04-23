import { Image, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import '../../constants/styles.css'

export default function TabsLayout() {
  const TabIcon = ({ focused, icons, name }) => {
    return (
      <View className="items-center justify-center">
        <Image
          source={icons}
          style={{
            width: 20,
            height: 20,
            tintColor: focused ? "#f29da0" : "#7a7a7a",
          }}
          className=""
        />
        <Text
          className={`text-xs font-oregular ${
            focused ? "font-obold text-[#f29da0]" : ""
          }`}
        >
          {name}
        </Text>
      </View>
    );
  };
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:{
            paddingVertical:4
          }
        }}
        
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Home" icons={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Wishlist" icons={icons.star} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Post",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Post" icons={icons.plus} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Chat" icons={icons.chat} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Profile" icons={icons.user} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
