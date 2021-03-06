import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'assets/styles/theme';
import tw from 'tailwind.macro';

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    ${tw`text-gray-600 hover:text-gray-500`};
  }
`;
