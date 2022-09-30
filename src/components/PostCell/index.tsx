import React from 'react';
import styled from 'styled-components/native';
import { Post } from 'src/data/models';
import Icon from '../Icon';

const Container = styled.View`
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c200};
  flex-direction: row;
`;

const ImageView = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.color.gray.c100};
`;

const Content = styled.View`
  flex: 1;
  margin-left: 8px;
`;

const ContentHeader = styled.View`
  flex-direction: row;
`;

const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

const InfoText = styled.Text`
  margin-left: 2px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c600};
  font-size: 16px;
`;

const ContentText = styled.Text`
  padding-vertical: 2px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

const ContentFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 20px;
`;

const FooterCol = styled.TouchableOpacity`
  flex-direction: row;
`;

const PostIcon = styled(Icon).attrs(({ theme }) => ({
  size: 15,
  color: theme.color.gray.c500,
}))``;

const FooterText = styled.Text`
  margin-left: 2px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c500};
  font-size: 12px;
`;

interface PostCellProps {
  post: Post;
}

export default function PostCell({ post }: PostCellProps) {
  // const useTheme
  return (
    <Container>
      <ImageView />
      <Content>
        <ContentHeader>
          <NameText>{post.user.name}</NameText>
          <InfoText>{`@${post.user.nickname} · 1h`}</InfoText>
        </ContentHeader>
        <ContentText>{post.content}</ContentText>
        <ContentFooter>
          <FooterCol>
            <PostIcon name={'comment-o'} />
            <FooterText>{28}</FooterText>
          </FooterCol>
          <FooterCol>
            <PostIcon name={'retweet'} />
            <FooterText>{5}</FooterText>
          </FooterCol>
          <FooterCol>
            <PostIcon name={'heart-o'} />
            <FooterText>{21}</FooterText>
          </FooterCol>
          <FooterCol>
            <PostIcon name={'share-square-o'} />
          </FooterCol>
        </ContentFooter>
      </Content>
    </Container>
  );
}
