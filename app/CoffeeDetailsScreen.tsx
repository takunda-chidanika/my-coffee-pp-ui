import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function CoffeeDetailsScreen() {
    const item = useLocalSearchParams();
    const navigation = useNavigation();
    const [size, setSize] = useState('small');
    return (
        <ScrollView className='flex-1'>

            <Image source={require("../assets/images/background-image.jpg")}
                blurRadius={10}
                style={{
                    height: 300,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                }}
                className='w-full absolute'
            />
            <View className='mx-4 my-4 flex-row justify-between items-center'>
                <TouchableOpacity
                    className='p-1 rounded-full bg-gray-600'
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    className='p-2 rounded-full bg-gray-600'
                >
                    <Entypo name="heart" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View className='flex-row justify-center rounded-full'>
                {/* @ts-ignore */}
                <Image source={item.image} className='h-60 w-60 rounded-full' />
            </View>
            <View className='flex-row mx-4 items-center rounded-2xl py-2 px-2 space-x-2 w-16 bg-slate-200'>
                <Entypo name="star-outlined" size={24} color="white" />
                <Text className='text-base font-semibold text-gray-600'>{item.stars}</Text>
            </View>
            <View className='mx-4 flex-row justify-between items-center'>
                <Text className='text-3xl text-gray-500 font-bold'>
                    {item.name}
                </Text>
                <Text className='text-lg font-bold text-gray-600'>
                    ${item.price}
                </Text>
            </View>
            <View className='mx-2 space-y-2'>
                <Text className='text-lg font-bold text-gray-700'>
                    Coffee Size
                </Text>
                <View className='flex-row justify-between space-x-1'>
                    <TouchableOpacity
                        onPress={() => setSize('small')}
                        className={` p-3 px-8 rounded-full ${size == "small" ? "bg-slate-800" : "bg-slate-200"
                            }`}
                    >
                        <Text className={`font-bold ${size == "small" ? "text-gray-200" : "text-gray-800"
                            }`}> Small</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSize('medium')}
                        className={` p-3 px-8 rounded-full ${size == "medium" ? "bg-slate-800" : "bg-slate-200"
                            }`}
                    >
                        <Text className={`font-bold ${size == "medium" ? "text-gray-200" : "text-gray-800"
                            }`}> Medium </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSize('large')}
                        className={` p-3 px-8 rounded-full ${size == "large" ? "bg-slate-800" : "bg-slate-200"
                            }`}
                    >
                        <Text className={`font-bold ${size == "large" ? "text-gray-200" : "text-gray-800"
                            }`}> Large</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='mx-4 space-y-2 h-28'>
                <Text className='text-lg font-bold text-gray-600'>
                    About
                </Text>
                <Text className='text-gray-800'>
                    {item.desc}
                </Text>
            </View>
            <View className='flex-row justify-between items-center mx-4 mb-2'>
                <View className='flex-row items-center space-x-1'>
                    <Text className='text-base text-gray-700 font-semibold opacity-60'>Volume</Text>
                    <Text className='text-base text-gray-800 font-semibold'>{item.volume}</Text>
                </View>
                <View
                    className='flex-row items-center space-x-4 border-gray-500 border-1 rounded-full p-1 px-6'>
                    <TouchableOpacity
                    >
                        <AntDesign name="pluscircle" size={25} color="gray" />
                    </TouchableOpacity>
                    <Text className='font-extrabold text-lg'>
                        2
                    </Text>
                    <TouchableOpacity
                    >
                        <AntDesign name="minuscircle" size={25} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex-row justify-between items-center mx-4'>
                <TouchableOpacity className='p-2 rounded-full border-gray-500 border-1'>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className='p-2 rounded-full flex-1 bg-gray-600 ml-4'>
                    <Text className='text-center text-base text-semibold text-gray-100'>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}