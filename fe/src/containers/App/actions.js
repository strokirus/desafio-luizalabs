import C from './constants';

/**
 * Request to store in Redux search text
 * @param params Info passed by user with your search
 * @return {Promise} yield to store information
 */
export const setSearch = params => ({
  type: C.SET_SEARCH,
  params,
});

/**
 * Request to CEP Request and store
 */
export const fetchCep = () => ({
  type: C.FETCH_CEP_REQUEST,
});

/**
 * Action to toggle CepContainer
 */
export const toggleCep = () => ({
  type: C.TOGGLE_CEP,
});

