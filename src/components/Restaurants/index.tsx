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
const Restaurants: React.FC = () => {
  const dispatch = useDispatch();
  const data = useStaticQuery(graphql`
    query {
      api {
        restaurants {
          Name
          Logo
          MinCost
          DeliveryCost
          DeliveryTime
          PositiveReviews
          ReviewsCount
          Specializations {
            Name
          }
        }
        hits {
          ProductName
          ProductImage
          ProductPrice
          ProductDescription
          RestaurantId
          RestaurantName
          RestaurantLogo
        }
        reviews {
          IsPositive
          Message
          DateAdded
          UserFIO
          RestaurantName
        }
      }
    }
  `);

  useEffect(() => {
    dispatch(setRestaurants(data.api.restaurants));
    dispatch(setHits(data.api.hits));
    dispatch(setReviews(data.api.reviews));
  }, []);

  return (
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
};

export default Restaurants;
