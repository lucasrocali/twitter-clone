import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

interface ITextInputComp {
  invalid?: boolean;
}

const TextInputComp = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.gray.c500,
}))<ITextInputComp>`
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray.c900};
  ${({ invalid, theme }) =>
    Platform.OS === 'web' &&
    `outline-color: ${
      invalid ? theme.color.fixed.red : theme.color.fixed.green
    }`};
`;

interface TextInputProps {
  testID?: string;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  invalid?: boolean;
  onChangeText: (text: string) => void;
}

export default function TextInput({
  testID,
  value,
  placeholder,
  secureTextEntry,
  invalid,
  onChangeText,
}: TextInputProps) {
  return (
    <TextInputComp
      testID={testID}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      invalid={invalid}
      onChangeText={(text) => onChangeText(text)}
    />
  );
}
