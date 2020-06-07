import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { restaurantSelector, setSearch } from '../../state/restaurant';
import Icon from '../../utils/Icon';
import { SearchWrapper } from './styles';

/**
 * Search component
 */
const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(restaurantSelector);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }, []);

  return (
    <SearchWrapper>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Введите название..."
          className="w-full px-3 py-2 border border-gray-400 rounded text-gray-800 focus:outline-none focus:shadow-outline"
          value={search}
          onChange={onChange}
        />
        <div className="flex absolute top-0 right-0 items-center justify-center w-10 h-10">
          <Icon icon="search" className="text-gray-400" />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
