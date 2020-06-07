import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeaderWrapper = styled.div`
  ${tw`bg-gray-800 w-full`};
`;

export const HeaderMain = styled.div`
  ${tw`flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-5`};
`;

export const Title = styled.h3`
  ${tw`text-lg sm:text-xl font-semibold text-white`};
`;
