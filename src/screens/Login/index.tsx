import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'src/context/auth';
import { useLoginMutation } from 'src/data/hooks/auth';
import { RootStackParamList } from 'src/navigation/types';
import LoginLayout from './layout';

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginNavProp>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { onLogin } = useAuth();

  const { mutate: login, isLoading } = useLoginMutation({
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
    <LoginLayout
      loading={isLoading}
      errorMessage={errorMessage}
      onLogin={(email, password) => login({ email, password })}
      onRegister={() => navigation.navigate('Signup')}
    />
  );
}
