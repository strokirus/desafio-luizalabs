import C from './constants';

const initialState = {
  result: undefined,
  isLoading: true,
  search: '',
  error: 200,
  open: false,
  availableButton: false,
};

const appReducer = (state, action) => {
  switch (action.type) {

    case C.FETCH_CEP_REQUEST:
      return {
        ...state,
        isLoading: true,
        open: true,
        error: 200,
        result: undefined,
      };

    case C.FETCH_CEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: 200,
        result: action.data || undefined,
      };

    case C.FETCH_CEP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case C.SET_SEARCH:
      return {
        ...state,
        search: action.params,
        availableButton: action.params.length === 9,
      };

    case C.TOGGLE_CEP:
      return {
        ...state,
        open: !state.open,
        search: !state.open ? state.search : '',
        availableButton: false,
      };

    default:
      return state || initialState;
  }
};

export default appReducer;
