export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const toggleFavorite = () => ({
  type: TOGGLE_FAVORITE,
});
