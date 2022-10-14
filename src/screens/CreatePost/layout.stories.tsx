import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CreatePostLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
  onTweet: action('onTweet'),
};
storiesOf('screens/CreatePost', module)
  .add('default', () => <CreatePostLayout {...actions} />)
  .add('loading', () => (
    <CreatePostLayout {...actions} initialText={'Post 1'} loading />
  ));
