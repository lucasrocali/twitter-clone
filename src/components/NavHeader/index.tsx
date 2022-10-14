import React from 'react';
import styled from 'styled-components/native';
import ButtonIcon from '../ButtonIcon';

const Container = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
`;

const Content = styled.View``;

const Title = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray.c900};
  text-align: center;
`;

const LeftButtonView = styled.View`
  position: absolute;
  left: 0px;
  width: 30px;
`;

const RightButtonView = styled.View`
  position: absolute;
  right: 0px;
`;
const BackButtonIcon = styled(ButtonIcon).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.color.gray.c900,
}))``;

interface NavHeaderProps {
  title: string;
  RightComponent?: JSX.Element;
  onGoBack?: () => void;
}

export default function NavHeader({
  title,
  RightComponent,
  onGoBack,
}: NavHeaderProps) {
  return (
    <Container>
      <Content>
        <LeftButtonView>
          {onGoBack ? (
            <BackButtonIcon testID={'button-back'} onPress={() => onGoBack()} />
          ) : null}
        </LeftButtonView>
        <Title>{title}</Title>
        <RightButtonView>{RightComponent}</RightButtonView>
      </Content>
    </Container>
  );
}
