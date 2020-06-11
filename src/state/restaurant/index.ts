import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

import { FilterEnum, IHit, IRestaurant, IReview } from '../../config/definitions';

interface RestaurantState {
  search: string;
  filters: FilterEnum[];
  restaurants: IRestaurant[];
  hits: IHit[];
  reviews: IReview[];
}

const initialState: RestaurantState = {
  search: '',
  filters: [],
  restaurants: [],
  hits: [],
  reviews: [],
};

// Slice
const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    toggleFilter: (state, action: PayloadAction<FilterEnum>) => {
      const { payload } = action;
      const index = state.filters.findIndex(filter => filter === payload);

      if (index > -1) {
        state.filters.splice(index, 1);
      } else {
        state.filters.push(payload);
      }
    },
    setRestaurants: (state, action: PayloadAction<IRestaurant[]>) => {
      state.restaurants = action.payload;
    },
    setHits: (state, action: PayloadAction<IHit[]>) => {
      state.hits = action.payload;
    },
    setReviews: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload;
    },
  }
});

// Reducers
export default restaurantSlice.reducer;

// Selectors
export const restaurantSelector = (state: RootState) => state.restaurant;

// Actions
const { setSearch, toggleFilter, setRestaurants, setHits, setReviews } = restaurantSlice.actions;

// Thunks
/*export const getRestaurants = (): Thunk => (dispatch: Dispatch) => {
  (async function() {
    const { restaurants } = store.getState().restaurant;

    if (!restaurants.length) {
      const response = await fetch(GET_RESTAURANTS);
      const newRestaurants = await response.json();

      dispatch(setRestaurants(newRestaurants));
    }
  })();
};

export const getHits = (): Thunk => (dispatch: Dispatch) => {
  (async function() {
    const { hits } = store.getState().restaurant;

    if (!hits.length) {
      const response = await fetch(GET_HITS);
      const newHits = await response.json();

      dispatch(setHits(newHits));
    }
  })();
};

export const getReviews = (): Thunk => (dispatch: Dispatch) => {
  (async function() {
    const { reviews } = store.getState().restaurant;

    if (!reviews.length) {
      const response = await fetch(GET_REVIEWS);
      const newReviews = await response.json();

      dispatch(setReviews(newReviews));
    }
  })();
};*/

export { setRestaurants, setHits, setReviews, setSearch, toggleFilter };
