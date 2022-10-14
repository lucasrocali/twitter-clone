import { AxiosError } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import {
  createPost,
  CreatePostData,
  CreatePostVar,
  getPosts,
  PostsData,
} from '../operations/posts';

//usePostsQuery
type PostsQueryOptions = {
  options?: Omit<
    UseQueryOptions<PostsData, AxiosError>,
    'queryKey' | 'queryFn'
  >;
};

export function usePostsQuery({ options = {} }: PostsQueryOptions) {
  return useQuery(['posts'], getPosts, options);
}

//useCreatePostMutation
export function useCreatePostMutation(
  options?: Omit<
    UseMutationOptions<CreatePostData, AxiosError, CreatePostVar>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('createPost', createPost, options);
}
