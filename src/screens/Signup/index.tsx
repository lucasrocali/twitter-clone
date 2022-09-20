import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { useAuth } from 'src/context/auth';
import SignupLayout from './layout';
import { useRegisterMutation } from 'src/data/hooks/auth';

type SignupNavProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function Signup() {
  const navigation = useNavigation<SignupNavProp>();

  const [errorMessage, setErrorMessage] = useState<string>();

  const { onLogin } = useAuth();

  const { mutate: register, isLoading } = useRegisterMutation({
    onSuccess: ({ token }) => {
      onLogin(token);
      navigation.reset({
        routes: [{ name: 'MainTab' }],
      });
    },
    onError: (error) => {
      const message = error.response?.data?.errors?.[0]?.message;
      setErrorMessage(message);
    },
  });

  return (
    <SignupLayout
      loading={isLoading}
      errorMessage={errorMessage}
      onGoBack={() => navigation.goBack()}
      onConfirm={({ nickname, name, email, password }) =>
        register({ nickname, name, email, password })
      }
    />
  );
}
