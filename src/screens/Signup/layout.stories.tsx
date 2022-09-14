import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import SignupLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
  onConfirm: action('onConfirm'),
};
storiesOf('screens/Signup', module).add('default', () => (
  <SignupLayout {...actions} />
));
