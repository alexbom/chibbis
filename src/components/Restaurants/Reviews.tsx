import React from 'react';
import { useSelector } from 'react-redux';

import { IReview } from '../../config/definitions';
import { restaurantSelector } from '../../state/restaurant';
import { dateFormat } from '../../helpers/utils';
import Icon from '../../utils/Icon';
import {
  SectionTitle, ReviewsListItem, ReviewsListItemTitle,
  ReviewsListItemMessage, ReviewsListItemDate, EmptyResult, ListWrapper
} from './styles';

/**
 * Reviews component
 */
const Reviews: React.FC = () => {
  const { reviews } = useSelector(restaurantSelector);

  return (
    <>
      <SectionTitle>Отзывы</SectionTitle>
      {!reviews.length ? (
        <EmptyResult>Загрузка...</EmptyResult>
      ) : reviews.map((review: IReview, index: number) => (
        <ReviewsListItem key={`review-${index}`}>
          <ReviewsListItemTitle>
            {review.IsPositive && (
              <Icon icon="thumbs-up" className="mr-2" />
            )}
            {review.UserFIO} о ресторане <a href="#">{review.RestaurantName}</a>:
          </ReviewsListItemTitle>
          <ReviewsListItemMessage>
            {review.Message}
          </ReviewsListItemMessage>
          <ReviewsListItemDate>
            {dateFormat(review.DateAdded)}
          </ReviewsListItemDate>
        </ReviewsListItem>
      ))}
    </>
  );
};

export default Reviews;
