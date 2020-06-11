import React from 'react';
import { useSelector } from 'react-redux';

import { restaurantSelector } from '../../state/restaurant';
import { findRestaurants } from '../../helpers/restaurant';
import { useData } from '../../hooks/useData';
import Icon from '../../utils/Icon';
import { getPercent } from '../../helpers/utils';
import {
  EmptyResult, LikeWrapper, ListItem, ListItemContent,
  ListItemImage, ListItemMain, ListItemName, ListItemNav,
  ListItemSpec, ListItemStats, ListItemTitle, ListWrapper
} from './styles';

/**
 * List component
 */
const List: React.FC = () => {
  const { restaurants } = useData();
  const { search, filters } = useSelector(restaurantSelector);
  const items = findRestaurants(restaurants, search, filters);

  return (
    <ListWrapper>
      {!restaurants.length ? (
        <EmptyResult>Загрузка...</EmptyResult>
      ) : !items.length ? (
        <EmptyResult>Поиск не дал результатов</EmptyResult>
      ) : items.map(({
                    Name, Logo, Specializations,
                    ReviewsCount, PositiveReviews, MinCost,
                    DeliveryCost, DeliveryTime
        }) => (
          <ListItem key={Name}>
            <ListItemImage>
              <a href="#"><img src={Logo} alt={Name} /></a>
            </ListItemImage>
            <ListItemMain>
              <ListItemContent>
                <ListItemTitle>
                  <ListItemName><a href="#">{Name}</a></ListItemName>
                  <LikeWrapper>
                    <Icon icon="thumbs-up" className="mr-2 text-gray-600" />
                    {getPercent(ReviewsCount, PositiveReviews)} %
                  </LikeWrapper>
                </ListItemTitle>
                <ListItemSpec>
                  {Specializations.map(s => s.Name).join(' / ')}
                </ListItemSpec>
                <ListItemNav>
                  <a href="#">Меню</a>
                  <a href="#">Инфо</a>
                  <a href="#">Отзывы ({ReviewsCount})</a>
                </ListItemNav>
              </ListItemContent>
              <ListItemStats>
                <div>Мин. сумма заказа: <b>{MinCost}</b></div>
                {DeliveryCost ? (
                  <div>Стоимость доставки: <b>{DeliveryCost}</b></div>
                ) : (
                  <div><b>Бесплатная доставка</b></div>
                )}
                <div>Время доставки: <b>{DeliveryTime}</b></div>
              </ListItemStats>
            </ListItemMain>
          </ListItem>
        ))}
    </ListWrapper>
  );
};

export default List;
