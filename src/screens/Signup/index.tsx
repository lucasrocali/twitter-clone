import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import SignupLayout from './layout';

type SignupNavProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function Signup() {
  const navigation = useNavigation<SignupNavProp>();

  return (
    <SignupLayout
      onGoBack={() => navigation.goBack()}
      onConfirm={() => console.log('TODO: onCofirm')}
    />
  );
}
