import { graphql, useStaticQuery } from 'gatsby';

export const useData = () => {
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

  return {...data.api};
};
