import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCreatePostMutation } from 'src/data/hooks/posts';
import { FeedStackParamList } from 'src/navigation/types';
import CreatePostLayout from './layout';

type CreatePostNavProp = NativeStackNavigationProp<
  FeedStackParamList,
  'CreatePost'
>;

export default function CreatePost() {
  const navigation = useNavigation<CreatePostNavProp>();

  const { mutate: createPost, isLoading } = useCreatePostMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return (
    <CreatePostLayout
      loading={isLoading}
      onGoBack={() => navigation.goBack()}
      onTweet={(text) => createPost({ content: text })}
    />
  );
}
