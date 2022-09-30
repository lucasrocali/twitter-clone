import React from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import PostCell from 'src/components/PostCell';
import { StackScreen } from 'src/components/Screen';
import { Post } from 'src/data/models';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView``;

const ContentView = styled.View`
  padding-top: 20px;
`;

const Loading = styled.ActivityIndicator``;

interface FeedLayoutProps {
  posts: Post[];
  loading: boolean;
}

export default function FeedLayout({ posts, loading }: FeedLayoutProps) {
  return (
    <Container>
      <NavHeader title={t('feed')} />
      <ScrollView>
        {posts.map((post) => (
          <PostCell key={post.id} post={post} />
        ))}
        {loading ? (
          <ContentView>
            <Loading />
          </ContentView>
        ) : null}
      </ScrollView>
    </Container>
  );
}
