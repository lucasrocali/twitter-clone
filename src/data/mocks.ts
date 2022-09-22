import { User, Post } from './models';

export const USER_1: User = {
  id: 1,
  nickname: 'test',
  name: 'Test',
  email: 'email@email.com',
  created_at: '2022-06-07T12:32:44.000-03:00',
  updated_at: '2022-06-07T12:32:44.000-03:00',
};

export const POST_1: Post = {
  id: 1,
  user_id: 1,
  content: 'Post 1',
  created_at: '2022-06-07T12:51:35.000-03:00',
  updated_at: '2022-06-07T12:51:35.000-03:00',
  user: USER_1,
};

export const POST_2: Post = {
  id: 2,
  user_id: 1,
  content: 'Post 2',
  created_at: '2022-06-07T12:51:35.000-03:00',
  updated_at: '2022-06-07T12:51:35.000-03:00',
  user: USER_1,
};
