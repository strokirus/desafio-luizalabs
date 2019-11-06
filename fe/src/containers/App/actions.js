import C from './constants';

export const setSearch = params => ({
  type: C.SET_SEARCH,
  params,
});

export const fetchCep = () => ({
  type: C.FETCH_CEP_REQUEST,
});

export const toggleCep = () => ({
  type: C.TOGGLE_CEP,
});

