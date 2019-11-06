/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const typeServer = (location) => {
  let server = 'http://localhost:5000';

  if (location.hostname.indexOf('firebaseapp') >= 0) {
    server = 'https://diasalexandre-challenges.firebaseapp.com';
  }

  return server;
};

export const apiEndpoints = {
  cep: `${typeServer(location)}/cep`,
};
