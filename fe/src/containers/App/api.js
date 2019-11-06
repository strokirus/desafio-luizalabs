import axios from 'axios';
import {
  apiEndpoints,
} from '../../settings';

export const requestCep = query => (
  axios({
    url: `${apiEndpoints.cep}?number=${query}`,
    method: 'GET',
  }).then(result => (
    result
  ))
);

export default {
  requestCep,
};
