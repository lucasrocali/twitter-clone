import { User, Post } from './models';

export const USER_1: User = {
  id: 1,
  nickname: 'craig_love',
  name: 'Martha Craig',
  email: 'craig@email.com',
  created_at: '2022-06-07T12:32:44.000-03:00',
  updated_at: '2022-06-07T12:32:44.000-03:00',
};

export const USER_2: User = {
  id: 1,
  nickname: 'maxjacobson',
  name: 'Maximmilian',
  email: 'craig@email.com',
  created_at: '2022-06-07T12:32:44.000-03:00',
  updated_at: '2022-06-07T12:32:44.000-03:00',
};

export const POST_1: Post = {
  id: 1,
  user_id: 1,
  content:
    'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
  created_at: '2022-06-07T12:51:35.000-03:00',
  updated_at: '2022-06-07T12:51:35.000-03:00',
  user: USER_1,
};

export const POST_2: Post = {
  id: 2,
  user_id: 1,
  content: 'Y’all ready for this next post?',
  created_at: '2022-06-07T12:51:35.000-03:00',
  updated_at: '2022-06-07T12:51:35.000-03:00',
  user: USER_2,
};
