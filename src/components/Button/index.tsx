import React from 'react';
import styled, { useTheme } from 'styled-components/native';

type ButtonStyle = 'default' | 'outline';

interface ContainerProps {
  buttonStyle: ButtonStyle;
  disabled?: boolean;
}
const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<ContainerProps>`
  height: 40px;
  background-color: ${({ disabled, buttonStyle, theme }) =>
    disabled
      ? theme.color.fixed.lightBlue
      : buttonStyle === 'default'
      ? theme.color.fixed.blue
      : theme.color.gray.c25};
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.color.fixed.lightBlue : theme.color.fixed.blue};
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
`;

interface TextProps {
  buttonStyle: ButtonStyle;
}
const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ buttonStyle, theme }) =>
    buttonStyle === 'default' ? theme.color.gray.c25 : theme.color.fixed.blue};
  font-size: 16px;
`;

const Loading = styled.ActivityIndicator``;

interface ButtonProps {
  testID?: string;
  text: string;
  disabled?: boolean;
  buttonStyle?: ButtonStyle;
  loading?: boolean;
  onPress: () => void;
}

export default function Button({
  testID,
  text,
  disabled,
  buttonStyle = 'default',
  loading,
  onPress,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      testID={testID}
      onPress={() => onPress()}
      disabled={disabled}
      buttonStyle={buttonStyle}
    >
      {loading ? (
        <Loading color={theme.color.gray.c25} />
      ) : (
        <Text buttonStyle={buttonStyle}>{text}</Text>
      )}
    </Container>
  );
}
