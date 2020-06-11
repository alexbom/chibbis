import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { graphql, useStaticQuery } from 'gatsby';

import { setRestaurants, setHits, setReviews } from '../../state/restaurant';
import Filter from './Filter';
import Search from './Search';
import List from './List';
import Hits from './Hits';
import Reviews from './Reviews';

import { Main, Wrapper } from './styles';

/**
 * Restaurants component
 */
const Restaurants: React.FC = () => (
  <Wrapper>
    <Filter />
    <Main>
      <Search />
      <List />
      <Hits />
      <Reviews />
    </Main>
  </Wrapper>
);

export default Restaurants;
