import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { POST_1, POST_2 } from 'src/data/mocks';
import FeedLayout from './layout';

storiesOf('screens/Feed', module)
  .add('default', () => (
    <FeedLayout
      posts={[POST_1, POST_2]}
      loading={false}
      onCreatePost={action('onCreatePost')}
    />
  ))
  .add('loading', () => (
    <FeedLayout
      posts={[]}
      loading={true}
      onCreatePost={action('onCreatePost')}
    />
  ));
