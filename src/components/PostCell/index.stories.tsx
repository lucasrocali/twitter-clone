import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import { POST_1, POST_2 } from 'src/data/mocks';
import PostCell from './';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/PostCell', module).add('default', () => (
  <Container>
    <PostCell post={POST_1} {...actions} />
    <PostCell post={POST_2} {...actions} />
  </Container>
));
