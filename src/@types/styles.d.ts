import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;

      primary: {
        main: string;
        light: string;
        dark: string;
        lighter: string;
      };

      success: {
        main: string;
      };

      danger: {
        main: string;
        light: string;
        dark: string;
      };

      gray: {
        900: string;
        200: string;
        100: string;
      };
    };
  }
}
