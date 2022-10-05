import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import CreatePostLayout from './layout';

type CreatePostNavProp = NativeStackNavigationProp<RootStackParamList, 'CreatePost'>;

// type CreatePostRouteProp = RouteProp<RootStackParamList, 'CreatePost'>;

export default function CreatePost() {
  const navigation = useNavigation<CreatePostNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<CreatePostRouteProp>();

  return <CreatePostLayout onGoBack={() => navigation.goBack()} />;
}
