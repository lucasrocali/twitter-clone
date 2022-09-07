import { axiosInstance } from '../api';

//login
export interface LoginVars {
  email: string;
  password: string;
}

export type LoginData = {
  type: string;
  token: string;
  expires_at: string;
};

type ErrorInfo = {
  message: string;
};

export type LoginErrorData = {
  errors: ErrorInfo[];
};

export async function login({
  email,
  password,
}: LoginVars): Promise<LoginData> {
  const { data } = await axiosInstance.post<LoginData>(`/login`, {
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
