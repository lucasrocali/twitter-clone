import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation /*, useRoute*/ } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import SignupScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
const mockReset = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  reset: mockReset,
  navigate: mockNavigate,
});

// (useRoute as jest.Mock).mockReturnValue({
//   params: {
//     id: '',
//   },
// });

const server = setupServer(
  rest.get(`${API_URL}/SOME_URL`, (_, res, ctx) => {
    return res(ctx.json({ foo: 'bar' }));
  }),
);

describe('SignupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  //criar test validação botão

  //criar validação email

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
});
