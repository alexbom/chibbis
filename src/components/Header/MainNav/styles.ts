import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavProps {
  open: boolean;
}

export const MainNavWrapper = styled.div`
  ${tw`flex items-center ml-0 order-first sm:mr-auto sm:ml-5 sm:order-none`};
`;

export const Nav = styled.nav<NavProps>`
  ${tw`fixed bg-gray-800 z-50 sm:relative flex flex-col sm:flex-row w-full sm:w-auto left-0 top-0 h-screen sm:h-auto justify-center items-center`};
  ${({ open }) => !open && tw`hidden sm:flex`};
`;

export const NavItem = styled.span`
  ${tw`m-2`};

  a {
    ${tw`p-2 rounded-md text-white text-base font-light hover:text-indigo-100`};
  }

  a:hover {
    ${tw`bg-gray-900`};
  }

  a.active {
    ${tw`p-2 bg-red-600`};
  }
`;

export const OpenNavButton = styled.button`
  ${tw`flex items-center justify-center sm:hidden w-8 p-2`};

  svg {
    ${tw`fill-current text-indigo-200`};
  }

  &:hover svg {
    ${tw`fill-current text-indigo-100`};
  }
`;

export const CloseNavButton = styled(OpenNavButton)`
  ${tw`absolute top-0 left-0 m-5`}
`;
