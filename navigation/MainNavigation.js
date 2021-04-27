import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import DetailScreen from '../screens/DetailScreen';
import AllCatScreen from '../screens/AllCatScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
    return <HomeStack.Navigator screenOptions={{
        headerShown:false
    }}>
        <HomeStack.Screen name="Home" component ={HomeScreen}/>
        <HomeStack.Screen name="Profile" component ={ProfileScreen}/>
        <HomeStack.Screen name="Detail" component ={DetailScreen}/>
        <HomeStack.Screen name="AllCat" component ={AllCatScreen}/>
    </HomeStack.Navigator>
};
const UserStack = createStackNavigator();
const UserStackNavigator = () => {
    return <UserStack.Navigator>
        <UserStack.Screen name="Login" component ={LoginScreen}/>
        <UserStack.Screen name="SignUp" component ={SignUpScreen}/>
    </UserStack.Navigator>
};

const MainDraw = createDrawerNavigator();
const MainDrawNavigator = () => {
    return <MainDraw.Navigator>
        <MainDraw.Screen name="Main" component={HomeStackNavigator}/>
        <MainDraw.Screen name="User" component ={UserStackNavigator}/>
    </MainDraw.Navigator>
};

export default MainDrawNavigator;