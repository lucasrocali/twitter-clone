import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import PostCell from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/PostCell', module).add('default', () => (
  <Container>
    <PostCell text={'PostCell Component'} {...actions} />
  </Container>
));
