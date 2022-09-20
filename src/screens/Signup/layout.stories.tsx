import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import SignupLayout from './layout';

export const defaultProps = {
  loading: false,
  onGoBack: action('onGoBack'),
  onConfirm: action('onConfirm'),
};
storiesOf('screens/Signup', module)
  .add('default', () => <SignupLayout {...defaultProps} />)
  .add('loading', () => (
    <SignupLayout
      {...defaultProps}
      initialNickname={'joao'}
      initialName={'Joao'}
      initialEmail={'joao@email.com'}
      initialPassword={'Teste123.'}
      loading={true}
    />
  ))
  .add('error', () => (
    <SignupLayout
      {...defaultProps}
      initialNickname={'joao'}
      initialName={'Joao'}
      initialEmail={'joao@email.com'}
      initialPassword={'Teste123.'}
      errorMessage={'Some error'}
    />
  ));
