export type ObjectType = Record<string, any>;

export interface ISpecialization {
  Name: FilterEnum;
}

export interface IRestaurant {
  Name: string;
  Logo: string;
  MinCost: number;
  DeliveryCost: number;
  DeliveryTime: number;
  PositiveReviews: number;
  ReviewsCount: number;
  Specializations: ISpecialization[];
}

export interface IHit {
  ProductName: string;
  ProductImage: string;
  ProductPrice: number;
  ProductDescription: string;
  RestaurantId: number;
  RestaurantName: string;
  RestaurantLogo: string;
}

export interface IReview {
  IsPositive: boolean;
  Message: string;
  DateAdded: string;
  UserFIO: string;
  RestaurantName: string;
}

export enum FilterEnum {
  FREE_DELIVERY = 'Бесплатная доставка',
  PIZZA = 'Пицца',
  SUSHI = 'Суши',
  BURGER = 'Бургеры',
  PIE = 'Пироги'
}
