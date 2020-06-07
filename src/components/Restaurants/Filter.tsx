import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { restaurantSelector, toggleFilter } from '../../state/restaurant';
import { FilterEnum } from '../../config/definitions';
import { SidebarWrapper } from './styles';

/**
 * Filter component
 */
const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(restaurantSelector);

  const onChange = useCallback((filter: FilterEnum) => {
    dispatch(toggleFilter(filter));
  }, []);

  return (
    <SidebarWrapper>
      <div className="sticky top-0 pt-2">
        <div className="text-2xl mb-8">Поиск заведения</div>
        <div className="flex flex-wrap flex-row lg:flex-col">
          {Object.values(FilterEnum).map((key: FilterEnum, index: number) => (
            <div key={key} className="mb-3 whitespace-no-wrap mr-4 lg:mr-0">
              <input
                type="checkbox"
                id={`filter-${index}`}
                className="form-checkbox text-gray-600"
                checked={filters.includes(key)}
                onChange={() => onChange(key)}
              />
              <label htmlFor={`filter-${index}`} className="pl-2">{key}</label>
            </div>
          ))}
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Filter;
