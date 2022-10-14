import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import Button from 'src/components/Button';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const Header = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  padding-vertical: 4px;
  align-items: center;
`;

const TouchView = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })``;

const CancelText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.fixed.blue};
  font-size: 17px;
`;

const HeaderContent = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-horizontal: 20px;
  flex-direction: row;
`;

const AvatarView = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.color.gray.c100};
`;

const TextView = styled.View`
  padding-left: 10px;
  flex: 1;
`;

const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 19px;
`;

// const MAX_CHARS = 180;

interface CreatePostLayoutProps {
  initialText?: string;
  loading?: boolean;
  onGoBack: () => void;
  onTweet: (text: string) => void;
}

export default function CreatePostLayout({
  initialText = '',
  loading,
  onGoBack,
  onTweet,
}: CreatePostLayoutProps) {
  const [text, setText] = useState(initialText);
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <TouchView testID={'button-go-back'} onPress={() => onGoBack()}>
          <CancelText>{t('cancel')}</CancelText>
        </TouchView>
        <HeaderContent />
        <Button
          testID={'button-create-post'}
          disabled={text.length === 0}
          text={t('tweet')}
          loading={loading}
          onPress={() => onTweet(text)}
        />
      </Header>
      <Content>
        <AvatarView />
        <TextView>
          <TextInput
            testID={'text-input'}
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder={t('textPlaceholder')}
            placeholderTextColor={theme.color.gray.c500}
            multiline
          />
        </TextView>
      </Content>
    </Container>
  );
}
