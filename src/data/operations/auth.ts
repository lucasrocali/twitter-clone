import { axiosInstance } from '../api';

//auth
export type AuthData = {
  type: string;
  token: string;
  expires_at: string;
};

type ErrorInfo = {
  message: string;
};

export type AuthErrorData = {
  errors: ErrorInfo[];
};

//login
export interface LoginVars {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginVars): Promise<AuthData> {
  const { data } = await axiosInstance.post<AuthData>(`/login`, {
    email,
    password,
  });
  return data;
}

//refreshToken
export type RefreshTokenData = {
  token: string;
};

export async function refreshToken(): Promise<RefreshTokenData> {
  // const { data } = await axiosInstance.get<RefreshTokenData>(`/token`);
  return {
    token: 'mocked--refreshed-token',
  };
}

//register
export interface RegisterVars {
  nickname: string;
  name: string;
  email: string;
  password: string;
}

export async function register({
  nickname,
  name,
  email,
  password,
}: RegisterVars): Promise<AuthData> {
  const { data } = await axiosInstance.post<AuthData>(`/register`, {
    nickname,
    name,
    email,
    password,
  });
  return data;
}
