import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import SignupLayout from './layout';

type SignupNavProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

// type SignupRouteProp = RouteProp<RootStackParamList, 'Signup'>;

export default function Signup() {
  const navigation = useNavigation<SignupNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<SignupRouteProp>();

  return <SignupLayout onGoBack={() => navigation.goBack()} />;
}
