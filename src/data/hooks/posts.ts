import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { getPosts, PostsData } from '../operations/posts';

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
