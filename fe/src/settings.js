export const routePaths = {
  home: '/',
};

let server = 'http://localhost:5000/';

if (location.hostname.indexOf('firebaseapp') >= 0) {
  server = 'https://diasalexandre-challenges.firebaseapp.com/';
}

export const apiEndpoints = {
  cep: `${server}/cep`,
};
