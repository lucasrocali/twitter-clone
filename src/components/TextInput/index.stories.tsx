import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import TextInput from './';
import { action } from '@storybook/addon-actions';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

export const actions = {
  onChangeText: action('onChangeText'),
};
storiesOf('components/TextInput', module).add('default', () => (
  <Container>
    <TextInput value={''} placeholder={'Email'} {...actions} />
    <TextInput value={''} placeholder={'Email'} invalid {...actions} />
    <TextInput
      value={''}
      placeholder={'Password'}
      secureTextEntry
      {...actions}
    />
    <TextInput value={''} placeholder={'Name'} {...actions} />
    <TextInput value={''} placeholder={'Nickname'} {...actions} />
  </Container>
));
