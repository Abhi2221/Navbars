import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Animated,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const MainTabScreen =() => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-text-outline" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: "#009387",
        },
      headerTintColor:"#fff",
      headerTitleStyle: {
        fontWeight:"bold",
         }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
       headerLeft:()=> (
        <Entypo name={'menu'} size={35} backgroundColor= "#009387" color="#fff" onPress= {() => {navigation.openDrawer()}}/>
       )
      }} />
    </HomeStack.Navigator> 
  );
  const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#1f65ff',
        },
      headerTintColor:"#fff",
      headerTitleStyle: {
        fontWeight:"bold",
         }
    }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} options={{
         headerLeft:()=> (
        <Entypo name={'menu'} size={35} backgroundColor= '#1f65ff' color="#fff" onPress= {() => {navigation.openDrawer()}}/>
       )
      }} />
    </DetailStack.Navigator> 
  );
