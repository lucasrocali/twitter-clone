import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import LoginLayout from './layout';

export const actions = {
  onLogin: action('onLogin'),
  onRegister: action('onRegister'),
};
storiesOf('screens/Login', module).add('default', () => (
  <LoginLayout {...actions} />
));
