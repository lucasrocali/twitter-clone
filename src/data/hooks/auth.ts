import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import {
  login,
  LoginData,
  LoginErrorData,
  LoginVars,
} from '../operations/auth';

export function useLoginMutation(
  options?: Omit<
    UseMutationOptions<
      LoginData,
      AxiosError<LoginErrorData>,
      LoginVars,
      string
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('login', login, options);
}
