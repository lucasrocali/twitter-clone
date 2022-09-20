import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import {
  login,
  LoginVars,
  AuthData,
  AuthErrorData,
  register,
  RegisterVars,
} from '../operations/auth';

export function useLoginMutation(
  options?: Omit<
    UseMutationOptions<AuthData, AxiosError<AuthErrorData>, LoginVars, string>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('login', login, options);
}

export function useRegisterMutation(
  options?: Omit<
    UseMutationOptions<
      AuthData,
      AxiosError<AuthErrorData>,
      RegisterVars,
      string
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('register', register, options);
}
