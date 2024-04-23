import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import ImageDetailsScroll from "../../components/imageDetailsScroll";
import icons from "../../constants/icons";
import { Rows, Table } from "react-native-table-component";
import ButtonComponent from "../../components/button";

const ProductDetails = () => {
  const detailDescription = [
    {
      id: 1,
      filled: "Dresses",
      properties: "Type",
    },
    {
      id: 2,
      filled: "M",
      properties: "Size",
    },
    {
      id: 3,
      filled: "Used",
      properties: "Condition",
    },
    {
      id: 4,
      filled: "Long",
      properties: "Sleeve Length",
    },
    {
      id: 5,
      filled: "Other Brand",
      properties: "Brand",
    },
    {
      id: 6,
      filled: "Blue",
      properties: "Color",
    },
    {
      id: 7,
      filled: "Other",
      properties: "Dresses Subtype",
    },
    // {
    //   id: 8,
    //   filled: "Other",
    //   properties: "Closure",
    // },
  ];

  const renderItem = ({ item }) => (
    <View className="flex-1 mb-2 ml-3">
      <Text className="font-obold text-base text-gray-700 ">{item.filled}</Text>
      <Text className="font-oregular text-base text-gray-700 uppercase">
        {item.properties}
      </Text>
    </View>
  );
  return (
    <SafeAreaView className="w-full ">
      <ScrollView className="">
        <View>
          <View className="w-full h-[290px] relative">
            <TouchableOpacity className="absolute top-4 left-4 bg-white z-20 p-3 rounded-full">
              <Image source={icons.leftArrow} className="w-4 h-4 z-20" />
            </TouchableOpacity>
            <Image
              source={images.redTwo}
              className="w-full h-full "
              resizeMode="cover"
            />
          </View>
          <View className="flex-col space-y-3 mt-5 px-4">
            <Text className="font-osemibold text-sm text-gray-600">
              Clothes
            </Text>
            <Text className="font-obold text-lg text-gray-800">
              Light Brown Coat
            </Text>
            <View className="flex-row items-center justify-between">
              <View className="flex">
                <Text className="font-osemibold text-sm text-gray-800">
                  Seller
                </Text>
                <View className="flex-col space-y-2">
                  <View className="flex-row items-center gap-3">
                    <Image
                      source={images.redTwo}
                      className="w-14 h-14 rounded-full"
                      resizeMode="cover"
                    />
                    <View>
                      <Text className="font-osemibold text-sm text-gray-800">
                        Jenny Doe
                      </Text>
                      <Text className="font-osemibold text-sm text-gray-600">
                        Manager
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex-row gap-3">
                <TouchableOpacity>
                  <Image
                    source={icons.chat}
                    className="w-6 h-6  "
                    style={{ tintColor: "#151515" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={icons.call}
                    className="w-6 h-6  "
                    style={{ tintColor: "#FF4747" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text className="text-primary font-oextrabold text-xl">
                ETB 23,500
              </Text>
            </View>
            <View className="border-b-2 pb-3 border-gray-500">
              <Text className="font-obold text-lg">Product Details</Text>
              <Text className="font-oregular text-sm text-gray-600 text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </View>
            <View className="">
              <FlatList
                data={detailDescription}
                keyExtractor={(item) => item.$id}
                numColumns={2}
                renderItem={renderItem}
              />
            </View>
          </View>
          <View className="w-full flex-row space-x-3 px-5 items-center justify-center">
            <ButtonComponent
              text="Chat"
              additional="flex-1 bg-blackCustom mr-2 "
              textStyle="text-white"
            />
            <ButtonComponent
              text="Call"
              additional="flex-1 bg-primary ml-2"
              textStyle="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
