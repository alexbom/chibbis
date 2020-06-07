import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`flex w-full flex-col lg:flex-row`};
`;

export const Main = styled.div`
  ${tw`flex flex-col flex-1`};
`;

export const SearchWrapper = styled.div`
  ${tw`sticky top-0 flex items-center w-full py-2 mb-2`};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SidebarWrapper = styled.div`
  ${tw`w-full lg:w-1/4`};
`;

export const ListWrapper = styled.div`
  ${tw`flex flex-col mb-10`};
`;

export const ListItem = styled.div`
  ${tw`flex mt-4 pb-4 border-b border-dotted flex-col items-center sm:flex-row sm:items-start lg:items-center`};
  border-color: ${({ theme }) => theme.colors.border};
`;
export const EmptyResult = styled.div`
  ${tw`pt-2 pb-10 text-center font-bold`};
`;

export const ListItemImage = styled.div`
  ${tw`mb-6 lg:mb-0`};
  width: 160px;
  img {
    ${tw`mx-auto`};
    height: 170px;
  }
`;

export const ListItemMain = styled.div`
  ${tw`flex flex-1 flex-col lg:flex-row sm:ml-6`};
`;

export const ListItemContent = styled.div`
  ${tw`flex flex-1 flex-col mb-6 lg:mb-0`};
  div {
    ${tw`leading-6`};
  }
`;

export const ListItemTitle = styled.div`
  ${tw`flex h-12 items-start`};
`;

export const ListItemName = styled.div`
  ${tw`text-xl font-bold`};
`;

export const LikeWrapper = styled.div`
  ${tw`flex items-center ml-6 whitespace-no-wrap text-gray-600`};
`;

export const ListItemSpec = styled.div`
  ${tw`h-12`};
`;

export const ListItemNav = styled.div`
  a {
    ${tw`mr-6`}
  }
`;

export const ListItemStats = styled.div`
  ${tw`flex flex-col lg:ml-10`};
  width: 200px;
  div:not(:last-child) {
    ${tw`h-12 leading-6`}
  }
`;

export const SectionTitle = styled.div`
  ${tw`text-2xl text-center mb-4`};
`;

export const HitsWrapper = styled.div`
  ${tw`flex flex-wrap justify-center lg:justify-between`};
`;

export const HitsItem = styled.div`
  ${tw`flex flex-col bg-gray-300 mb-6 mx-1 shadow-md border`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.border};
  width: 220px;
`;

export const HitsItemImage = styled.div`
  ${tw`flex items-center w-full`};
  height: 220px
`;

export const HitsItemMain = styled.div`
  ${tw`flex flex-col flex-1 p-4`};
  background-color: rgba(255, 255, 255, 0.05);
`;

export const HitsItemContent = styled.div`
  ${tw`flex-1`};
`;

export const HitsItemName = styled.div`
  ${tw`mb-4 text-lg font-bold`};
`;

export const HitsItemDescr = styled.div`
  ${tw`mb-6`};
`;

export const HitsItemPrice = styled.div`
  ${tw`text-right text-lg font-bold text-gray-600`};
  height: 27px;
`;

export const ReviewsListItem = styled.div`
  ${tw`mb-8`};
`;

export const ReviewsListItemTitle = styled.div`
  ${tw`mb-2 font-bold`};
`;

export const ReviewsListItemMessage = styled.div`
  ${tw`mb-2 break-words`};
`;

export const ReviewsListItemDate = styled.div`
  ${tw`text-gray-500`};
`;
