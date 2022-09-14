import React from 'react';
import styled from 'styled-components/native';

const TextInputComp = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.gray.c500,
}))`
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray.c900};
`;

interface TextInputProps {
  testID?: string;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

export default function TextInput({
  testID,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
}: TextInputProps) {
  return (
    <TextInputComp
      testID={testID}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => onChangeText(text)}
    />
  );
}
