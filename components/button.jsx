import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = ({text,additional,onPress,textStyle}) => {
  return (
    <TouchableOpacity className={`p-3 rounded-md justify-center items-center ${additional}`}>
      <Text className={`text-base font-osemibold ${textStyle} `}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
