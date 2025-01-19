import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyTabBar from '@/components/customs/MyTabBar';
import { Image, Text, View, StyleSheet } from 'react-native';
import CustomHeader from '@/components/customs/customHeader';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function LogoTitle() {
  return (
    <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();



  return (
    <Tabs
      tabBar={props => <MyTabBar {...props} />}
    // screenOptions={{
    //   header: () => <Text style={{marginTop: 30}}>just a test</Text>
    // }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          header: () => <CustomHeader type="index" />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          header: () => <CustomHeader type="page" title="Products" />,
        }}
      />
      <Tabs.Screen
        name="lives"
        options={{
          title: 'My home',
          header: () => <CustomHeader type="page" title="Lives" />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          header: () => <CustomHeader type="page" title="Transactions" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          header: () => <CustomHeader type="profile" />,
        }}
      />
    </Tabs>
  );
}
