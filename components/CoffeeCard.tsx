import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const CoffeeCard = ({ item }: any) => {
    return (
        <View className='bg-gray-200 w-[250px] h-[320px] border-2 border-gray-300 rounded-3xl'>
            <View
                style={{
                    shadowColor: 'black',
                    shadowRadius: 30,
                    shadowOffset: {
                        width: 0,
                        height: 40,
                    }, shadowOpacity: 0.8
                }}
                className='flex-row justify-center mt-2'
            >
                <Image source={item.image} className='h-40 w-40 rounded-full' />
            </View>
            <View className='px-4 mt-2 space-x-3'>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-2xl text-gray-600 font-semibold z-10'>
                        {item.name}
                    </Text>
                    <View className='bg-gray-400 flex-row items-center rounded-3xl p-1 space-x-1 w-14'>
                        <FontAwesome name="star" size={16} color="gold" />
                        <Text className='text-base font-normal text-gray-100'>{item.stars}</Text>
                    </View>
                </View>
                <View className='flex-row space-x-1 z-10 mt-2'>
                    <Text className='text-base text-gray-500 font-semibold opacity-60'>Volume</Text>
                    <Text className='text-base text-gray-500 font-semibold'>{item.volume}</Text>
                </View>
                <View
                    style={{
                        shadowRadius: 25,
                        shadowOffset: {
                            width: 0,
                            height: 40,
                        },
                        shadowOpacity: 0.8
                    }}
                    className='flex-row justify-between items-center'
                >
                    <Text className='text-gray-600 font-bold text-lg'>${item.price}</Text>
                    <Link
                        href={{
                            pathname: '/CoffeeDetailsScreen',
                            params: item
                        }}
                        className='p-2 bg-gray-500 rounded-full shadow-2xl shadow-gray-800'>
                        <FontAwesome name="plus" size={20} color="white" />
                    </Link>
                </View>
            </View>
        </View>
    )
}

export default CoffeeCard

const styles = StyleSheet.create({})