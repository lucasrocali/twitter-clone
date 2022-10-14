import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { POST_1, POST_2 } from 'src/data/mocks';
import { PostsData } from 'src/data/operations/posts';
import FeedScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

const server = setupServer(
  rest.get(`${API_URL}/posts`, (_, res, ctx) => {
    return res(ctx.json<PostsData>([POST_1, POST_2]));
  }),
);

describe('FeedScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should show post content and handle navigation to CreatePost', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <FeedScreen />
      </AppProviders>,
    );

    const postContent1 = await findByText(POST_1.content);
    expect(postContent1).toBeTruthy();

    const buttonCreatePost = getByTestId('button-create-post');
    fireEvent.press(buttonCreatePost);
    expect(mockNavigate).toBeCalledWith('CreatePost');
  });
});
