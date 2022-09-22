import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  isValidEmail,
  isValidName,
  isValidNickname,
  isValidPassword,
} from 'src/utils';
import Button from 'src/components/Button';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import TextInput from 'src/components/TextInput';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 20px;
  padding-horizontal: 20px;
`;

const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
  margin-vertical: 20px;
  text-align: center;
`;

interface InputInfo {
  nickname: string;
  name: string;
  email: string;
  password: string;
}

interface SignupLayoutProps {
  initialNickname?: string;
  initialName?: string;
  initialEmail?: string;
  initialPassword?: string;
  loading: boolean;
  errorMessage?: string;
  onGoBack: () => void;
  onConfirm: (input: InputInfo) => void;
}

export default function SignupLayout({
  initialNickname = '',
  initialName = '',
  initialEmail = '',
  initialPassword = '',
  loading,
  errorMessage,
  onGoBack,
  onConfirm,
}: SignupLayoutProps) {
  const [nickname, setNickname] = useState(initialNickname);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const validNickname = isValidNickname(nickname);
  const validName = isValidName(name);
  const validEmail = isValidEmail(email);
  const validPassword = isValidPassword(password);

  const registerEnabled =
    validNickname && validName && validEmail && validPassword;

  return (
    <Container>
      <NavHeader title={t('register')} onGoBack={onGoBack} />
      <ScrollView>
        <TextInput
          testID={'text-input-nickname'}
          placeholder={t('nickname')}
          value={nickname}
          invalid={!validNickname}
          onChangeText={(text) => setNickname(text)}
        />
        <TextInput
          testID={'text-input-name'}
          placeholder={t('name')}
          value={name}
          invalid={!validName}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          testID={'text-input-email'}
          placeholder={t('email')}
          value={email}
          invalid={!validEmail}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          testID={'text-input-password'}
          placeholder={t('password')}
          value={password}
          invalid={!validPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          testID={'button-confirm'}
          text={t('confirmRegister')}
          disabled={!registerEnabled}
          loading={loading}
          onPress={() =>
            onConfirm({
              nickname,
              name,
              email,
              password,
            })
          }
        />
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </ScrollView>
    </Container>
  );
}
