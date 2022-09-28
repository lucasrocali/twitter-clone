import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Launch: undefined;
  Login: undefined;
  Signup: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Base: undefined;
};

export type FeedStackParamList = {
  Feed: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type MainTabParamList = {
  FeedStack: NavigatorScreenParams<FeedStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

//- Root
//  - Launch
//  - Login
//  - Signup
//  - Base
//  - MainTab
//    - FeedStack
//      - Feed
//    - ProfileStack
//      - Profile
