import {
  isValidEmail,
  isValidName,
  isValidNickname,
  isValidPassword,
} from './';

test('isValidEmail', () => {
  expect(isValidEmail('ab')).toBe(false);
  expect(isValidEmail('ab@')).toBe(false);
  expect(isValidEmail('ab@a')).toBe(false);
  expect(isValidEmail('jose@uol.com,')).toBe(false);

  expect(isValidEmail('jose@uol.com')).toBe(true);
  expect(isValidEmail('jose123@uol.com')).toBe(true);
  expect(isValidEmail('jose.123@uol.com')).toBe(true);
});

test('isValidName', () => {
  expect(isValidName('J')).toBe(false);
  expect(isValidName('Jo')).toBe(false);
  expect(isValidName('Jo123')).toBe(false);

  expect(isValidName('Jos')).toBe(true);
  expect(isValidName('Jose')).toBe(true);
});

test('isValidPassword', () => {
  expect(isValidPassword('J')).toBe(false);
  expect(isValidPassword('Jo12345$#')).toBe(false);
  expect(isValidPassword('Jo12345')).toBe(false);

  expect(isValidPassword('Jo12345.')).toBe(true);
  expect(isValidPassword('Jo123456')).toBe(true);
  expect(isValidPassword('Jo123456Jo123456')).toBe(true);
});

test('isValidNickname', () => {
  expect(isValidNickname('J')).toBe(false);
  expect(isValidNickname('Jo5*')).toBe(false);
  expect(isValidNickname('Jo@')).toBe(false);

  expect(isValidNickname('Jose.123')).toBe(true);
  expect(isValidNickname('jose')).toBe(true);
  expect(isValidNickname('jose123')).toBe(true);
});
