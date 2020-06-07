import { FilterEnum, IRestaurant } from '../config/definitions';

export const findRestaurants = (
  restaurants: IRestaurant[],
  search: string,
  filters: FilterEnum[]
) => {
  const specs = [...filters];
  const freeCostFilterIndex = specs.indexOf(FilterEnum.FREE_DELIVERY);

  if (freeCostFilterIndex > -1) {
    specs.splice(freeCostFilterIndex, 1);
  }

  return restaurants.filter(r => (!search || r.Name.toLowerCase().includes(search.toLowerCase()))
    && (!specs.length || r.Specializations.some(s => specs.includes(s.Name)))
    && (freeCostFilterIndex === -1 || !r.DeliveryCost));
};
