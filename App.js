/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Screens/DrawerContent';

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Avatar, 
  Title,
  Caption,    
  Paragraph,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import MainTabScreen from './Screens/MainTabScreen';
import BookmarkScreen from './Screens/BookmarkScreen';
import ExploreScreen from './Screens/ExploreScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const App = () => {
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         <Drawer.Screen name="Bookmark" component={BookmarkScreen} /> 
         <Drawer.Screen name="Explore" component={ExploreScreen} /> 

      </Drawer.Navigator>
      {/* <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: "#009387",
          },
        headerTintColor:"#fff",
        headerTitleStyle: {
          fontWeight:"bold",
           }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
