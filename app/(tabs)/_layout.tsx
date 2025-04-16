import React from 'react';
import { Tabs } from 'expo-router';
import IonicIcons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <IonicIcons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <IonicIcons
              name={
                focused
                  ? 'information-circle-sharp'
                  : 'information-circle-outline'
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
