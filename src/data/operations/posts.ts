import { axiosInstance } from '../api';
import { Post } from '../models';

//getPosts
export type PostsData = Post[];

export async function getPosts(): Promise<PostsData> {
  const { data } = await axiosInstance.get<PostsData>('/posts');
  return data;
}
