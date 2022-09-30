import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import Icon from 'src/components/Icon';
import Feed from 'src/screens/Feed';
import Launch from 'src/screens/Launch';
import Login from 'src/screens/Login';
import Profile from 'src/screens/Profile';
import Signup from 'src/screens/Signup';
import {
  RootStackParamList,
  MainTabParamList,
  FeedStackParamList,
  ProfileStackParamList,
} from './types';

const BottomTabNavigator = createBottomTabNavigator<MainTabParamList>();

const FeedStackNavigator = createNativeStackNavigator<FeedStackParamList>();
const ProfileStackNavigator =
  createNativeStackNavigator<ProfileStackParamList>();

function FeedStack(): JSX.Element {
  return (
    <FeedStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FeedStackNavigator.Screen name={'Feed'} component={Feed} />
    </FeedStackNavigator.Navigator>
  );
}

function ProfileStack(): JSX.Element {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen name={'Profile'} component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
}

function MainTab(): JSX.Element {
  const theme = useTheme();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return (
            <Icon
              name={route.name === 'FeedStack' ? 'list' : 'home'}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary.c500,
        tabBarInactiveTintColor: theme.color.gray.c600,
        tabBarStyle: {
          backgroundColor: theme.color.gray.c25,
        },
      })}
    >
      <BottomTabNavigator.Screen name={'FeedStack'} component={FeedStack} />
      <BottomTabNavigator.Screen
        name={'ProfileStack'}
        component={ProfileStack}
      />
    </BottomTabNavigator.Navigator>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name={'Launch'} component={Launch} />
        <RootStack.Screen
          name={'Login'}
          component={Login}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <RootStack.Screen name={'Signup'} component={Signup} />
        <RootStack.Screen
          name={'MainTab'}
          component={MainTab}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
