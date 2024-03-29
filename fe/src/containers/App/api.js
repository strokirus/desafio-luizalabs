import axios from 'axios';
import {
  apiEndpoints,
} from '../../settings';

/**
 * Request to our service based in cep passed by user what information is
 * related of there cep
 * @param query Number of Cep formatted in formatCep rule (utils file)
 * @return {Object} Information related by our api and via cep with
 * logradouro, bairro, and geo (lat,lng)
 */
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
