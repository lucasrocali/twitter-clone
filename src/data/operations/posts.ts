import { axiosInstance } from '../api';
import { Post } from '../models';

//getPosts
export type PostsData = Post[];

export async function getPosts(): Promise<PostsData> {
  const { data } = await axiosInstance.get<PostsData>('/posts');
  return data;
}

//createPost
export type CreatePostVar = {
  content: string;
};

export type CreatePostData = Post;

export async function createPost({
  content,
}: CreatePostVar): Promise<CreatePostData> {
  const { data } = await axiosInstance.post<CreatePostData>('/posts', {
    content,
  });
  return data;
}
