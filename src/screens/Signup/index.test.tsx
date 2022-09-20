import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import SignupScreen from './';
import { AuthData, AuthErrorData } from 'src/data/operations/auth';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  reset: mockReset,
  navigate: mockNavigate,
});

const server = setupServer(
  rest.post(`${API_URL}/register`, (_, res, ctx) => {
    return res(
      ctx.json<AuthData>({
        type: 'bearer',
        token:
          'Mjk.zrj9OxVL3kNsHerFEnfClAR1sfucyD9KFbuyIa8Gz23JFOeV4mIPVjcdOfJD',
        expires_at: '2022-09-30T20:00:58.116-03:00',
      }),
    );
  }),
);

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should navigate back and disable register button if no input', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <SignupScreen />
      </AppProviders>,
    );

    const buttonBack = getByTestId('button-back');
    fireEvent.press(buttonBack);
    expect(mockGoBack).toBeCalled();

    const buttonConfirm = getByTestId('button-confirm');
    fireEvent.press(buttonConfirm);
    expect(mockReset).not.toBeCalled();
  });

  test('should reset navigation to MainTab on success response', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <SignupScreen />
      </AppProviders>,
    );

    fireEvent.changeText(getByTestId('text-input-nickname'), 'joao');

    fireEvent.changeText(getByTestId('text-input-name'), 'Joao');

    fireEvent.changeText(getByTestId('text-input-email'), 'joao@email.com');

    fireEvent.changeText(getByTestId('text-input-password'), 'Teste123.');

    fireEvent.press(getByTestId('button-confirm'));

    await waitFor(() => {
      expect(mockReset).toBeCalledWith({
        routes: [{ name: 'MainTab' }],
      });
    });
  });

  test('should show error message on error response', async () => {
    const errorMessage = 'Some error';
    server.use(
      rest.post(`${API_URL}/register`, (_, res, ctx) => {
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
        <SignupScreen />
      </AppProviders>,
    );

    fireEvent.changeText(getByTestId('text-input-nickname'), 'joao');

    fireEvent.changeText(getByTestId('text-input-name'), 'Joao');

    fireEvent.changeText(getByTestId('text-input-email'), 'joao@email.com');

    fireEvent.changeText(getByTestId('text-input-password'), 'Teste123.');

    fireEvent.press(getByTestId('button-confirm'));

    const errorText = await findByText(errorMessage);
    expect(errorText).toBeTruthy();
  });
});
