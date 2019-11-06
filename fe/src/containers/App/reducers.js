import C from './constants';

const initialState = {
  result: undefined,
  isLoading: true,
  search: '',
  error: false,
  open: false,
};

const appReducer = (state, action) => {
  switch (action.type) {

    case C.FETCH_CEP_REQUEST:
      return {
        ...state,
        isLoading: true,
        open: true,
        error: false,
        result: undefined,
      };

    case C.FETCH_CEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        result: action.data || undefined,
      };

    case C.FETCH_CEP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case C.SET_SEARCH:
      return {
        ...state,
        search: action.params,
      };

    case C.TOGGLE_CEP:
      return {
        ...state,
        open: !state.open,
        search: !state.open ? state.search : '',
      };

    default:
      return state || initialState;
  }
};

export default appReducer;
