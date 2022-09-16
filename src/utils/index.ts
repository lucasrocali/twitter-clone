export function isValidEmail(value: string): boolean {
  return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
}

export function isValidNickname(value: string): boolean {
  return /^[a-zA-Z0-9.]{3,20}$/.test(value);
}

export function isValidName(value: string): boolean {
  return /^[a-zA-Z]{3,30}$/.test(value);
}

export function isValidPassword(value: string): boolean {
  return /^[a-zA-Z0-9.]{8,30}$/.test(value);
}
