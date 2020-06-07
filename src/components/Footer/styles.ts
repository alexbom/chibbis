import styled from 'styled-components';
import tw from 'tailwind.macro';

export const FooterWrapper = styled.footer`
  ${tw`flex items-center justify-between p-5 pt-8 pb-8 bg-gray-800`};
  border-color: ${({ theme }) => theme.colors.border};
`;
