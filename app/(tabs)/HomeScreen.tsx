import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { coffee_categories, coffee_items } from '../../constant';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../../components/CoffeeCard';

const welcomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1)

  return (
    <View className='flex-1 relative bg-gray-50'>
      <StatusBar />
      <Image source={require("../../assets/images/background-image.jpg")}
        style={{
          height: 250
        }}
        blurRadius={15}
        className='absolute w-full -top-5' />

      <View className='flex-1'>
        <View className='px-4 flex-row justify-between items-center'>
          <Image source={require('../../assets/images/avatar.webp')} className='h-10 w-10 rounded-full' />
          <View className='flex-row items-center space-x-2'>
            <Ionicons name="location" size={24} color="brown" />
            <Text className='font-bold text-gray-800 text-2xl'>Harare, Zimbabwe.</Text>
          </View>
          <FontAwesome name="bell-o" size={24} color="black" />
        </View>
        {/* search bar */}
        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center items-center rounded-full p-1 bg-gray-200'>
            <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700' />
            <TouchableOpacity className='rounded-full p-2 bg-gray-400'>
              <FontAwesome5 name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className='px-5 mt-6'>
          {/* @ts-ignore */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={coffee_categories}
            keyExtractor={item => item.id}
            className='overflow-visible'
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeClassText = isActive ? 'text-gray-400 font-bold underline' : 'text-gray-700'
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  className='p-4 px-4 my-1 rounded-full mr-2 shadow bg-slate-100'
                >
                  <Text
                    className={`font-semibold ${activeClassText}`}
                  >{item.title}</Text>
                </TouchableOpacity>

              )
            }}
          />
        </View>
        <View className='mt-4  py-2'>
          <Carousel
            containerCustomStyle={{
              overflow: 'visible',
            }}
            data={coffee_items}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{
              display: 'flex',
              alignItems: 'center'
            }}
          />
        </View>
        {/* Safe Area View */}
      </View>
    </View>
  )
}

export default welcomeScreen

const styles = StyleSheet.create({})