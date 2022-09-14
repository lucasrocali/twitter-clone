import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from 'src/components/Button';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';
import TextInput from 'src/components/TextInput';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 48px;
  margin-vertical: 76px;
  text-align: center;
`;

const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
  margin-vertical: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.View`
  padding-bottom: 12px;
`;

export interface LoginLayoutProps {
  initialEmail?: string;
  initialPassword?: string;
  loading: boolean;
  errorMessage?: string;
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
}

export default function LoginLayout({
  initialEmail = '',
  initialPassword = '',
  loading,
  errorMessage,
  onLogin,
  onRegister,
}: LoginLayoutProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const loginEnabled = email.length > 0 && password.length > 0;

  return (
    <Container>
      <NavHeader title={t('login')} />
      <ScrollView>
        <Title>{'Twitter Clone'}</Title>
        <TextInput
          testID={'text-input-email'}
          value={email}
          placeholder={t('email')}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          testID={'text-input-password'}
          value={password}
          placeholder={t('password')}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonWrapper>
          <Button
            testID={'button-login'}
            text={t('login')}
            disabled={!loginEnabled}
            loading={loading}
            onPress={() => onLogin(email, password)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            testID={'button-register'}
            text={t('register')}
            buttonStyle={'outline'}
            onPress={() => onRegister()}
          />
        </ButtonWrapper>
        <ErrorText>{errorMessage || ''}</ErrorText>
      </ScrollView>
    </Container>
  );
}
