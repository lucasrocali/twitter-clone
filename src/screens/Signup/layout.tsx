import React, { useState } from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';
import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 20px;
  padding-horizontal: 20px;
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
  onGoBack: () => void;
  onConfirm: (input: InputInfo) => void;
}

export default function SignupLayout({
  initialNickname = '',
  initialName = '',
  initialEmail = '',
  initialPassword = '',
  onGoBack,
  onConfirm,
}: SignupLayoutProps) {
  const [nickname, setNickname] = useState(initialNickname);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const registerEnabled =
    nickname.length > 0 &&
    name.length > 0 &&
    email.length > 0 &&
    password.length > 0;

  return (
    <Container>
      <NavHeader title={t('register')} onGoBack={onGoBack} />
      <ScrollView>
        <TextInput
          testID={'text-input-nickname'}
          placeholder={t('nickname')}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
        <TextInput
          testID={'text-input-name'}
          placeholder={t('name')}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          testID={'text-input-email'}
          placeholder={t('email')}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          testID={'text-input-password'}
          placeholder={t('password')}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          testID={'button-confirm'}
          text={t('confirmRegister')}
          disabled={!registerEnabled}
          onPress={() =>
            onConfirm({
              nickname,
              name,
              email,
              password,
            })
          }
        />
      </ScrollView>
    </Container>
  );
}
