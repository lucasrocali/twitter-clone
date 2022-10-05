import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      gray: {
        c25: string;
        c50: string;
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
        c600: string;
        c700: string;
        c800: string;
        c900: string;
      };
      primary: {
        c25: string;
        c50: string;
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
        c600: string;
        c700: string;
        c800: string;
        c900: string;
      };
      fixed: {
        blue: string;
        lightBlue: string;
        red: string;
        green: string;
      };
    };
    fontFamily: {
      inter: {
        light: string;
        regular: string;
        bold: string;
      };
    };
  }
}
