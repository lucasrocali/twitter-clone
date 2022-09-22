import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { AuthData, AuthErrorData } from 'src/data/operations/auth';
import LoginScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
  reset: mockReset,
});

const server = setupServer(
  rest.post(`${API_URL}/login`, (_, res, ctx) => {
    return res(
      ctx.json<AuthData>({
        type: 'bearer',
        token:
          'MjI.vcBJQDC7WsctVDs6NcFy8PxKMmhmeFMqhy-FYvdWxA9MzJUbPWWpJnfTpK1t',
        expires_at: '2022-09-16T20:31:08.532-03:00',
      }),
    );
  }),
);

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should disable login button if no email or password input', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const buttonLogin = getByTestId('button-login');
    fireEvent.press(buttonLogin);
    expect(mockReset).not.toBeCalled();
  });

  test('should reset navigation to MainTab on success login', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const textInputEmail = getByTestId('text-input-email');
    fireEvent.changeText(textInputEmail, 'u1@email.com');

    const textInputPassword = getByTestId('text-input-password');
    fireEvent.changeText(textInputPassword, 'test1234');

    const buttonLogin = getByTestId('button-login');
    fireEvent.press(buttonLogin);

    await waitFor(() => {
      expect(mockReset).toBeCalledWith({
        routes: [{ name: 'MainTab' }],
      });
    });
  });

  test('should show error message on login error', async () => {
    const errorMessage = 'Some error';
    server.use(
      rest.post(`${API_URL}/login`, (_, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json<AuthErrorData>({
            errors: [
              {
                message: errorMessage,
              },
            ],
          }),
        );
      }),
    );

    const { getByTestId, findByText } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const textInputEmail = getByTestId('text-input-email');
    fireEvent.changeText(textInputEmail, 'u1@email.com');

    const textInputPassword = getByTestId('text-input-password');
    fireEvent.changeText(textInputPassword, 'test1234');

    const buttonLogin = getByTestId('button-login');
    fireEvent.press(buttonLogin);

    const errorText = await findByText(errorMessage);
    expect(errorText).toBeTruthy();
  });

  test('should navigate to Signup', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <LoginScreen />
      </AppProviders>,
    );

    const buttonRegister = getByTestId('button-register');
    fireEvent.press(buttonRegister);
    expect(mockNavigate).toBeCalledWith('Signup');
  });
});
