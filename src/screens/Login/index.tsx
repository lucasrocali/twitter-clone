import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'src/context/auth';
import { useLoginMutation } from 'src/data/hooks/auth';
import { RootStackParamList } from 'src/navigation/types';
import LoginLayout from './layout';

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginNavProp>();

  const { onLogin } = useAuth();

  const { mutate: login } = useLoginMutation({
    onSuccess: ({ token }) => {
      onLogin(token);
      navigation.reset({
        routes: [{ name: 'MainTab' }],
      });
    },
    onError: (error) => console.log({ error }),
  });

  //- se login success => navigation.reset MainTab
  //- se falha no login => mostrar mensagem de error
  //- onRegister => navigation.navigate SignUp

  return (
    <LoginLayout
      onLogin={(email, password) => login({ email, password })}
      onRegister={() => console.log('TODO')}
    />
  );
}
