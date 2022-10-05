import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import Button from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
  padding: 20px;
`;

const VSpacer = styled.View`
  height: 10px;
`;

const Row = styled.View`
  flex-direction: row;
`;

export const actions = {
  onPress: action('onPress'),
};
storiesOf('components/Button', module).add('default', () => (
  <Container>
    <Button text={'Login'} {...actions} />
    <VSpacer />
    <Button text={'Login'} loading {...actions} />
    <VSpacer />
    <Button text={'Login'} {...actions} disabled />
    <VSpacer />
    <Button text={'Cadastrar'} buttonStyle={'outline'} {...actions} />
    <VSpacer />
    <Row>
      <Button text={'Tweet'} {...actions} disabled />
    </Row>
    <VSpacer />
    <Row>
      <Button text={'Tweet'} {...actions} />
    </Row>
  </Container>
));
