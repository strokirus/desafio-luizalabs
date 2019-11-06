import React from 'react';
import renderer from 'react-test-renderer';
import CepContainer from './CepContainer';

const props = {
  closeCep: jest.fn(),
  error: 200,
  result: {
    cep: '69028-401',
    logradouro: 'Rua Sargento Aguiar',
    complemento: 'Próximo',
    bairro: 'Flores',
    localidade: 'Manaus',
    uf: 'AM',
    unidade: '',
    ibge: '1302603',
    gia: '',
    geo: undefined,
  },
  isLoading: false,
};

const propsError = {
  closeCep: jest.fn(),
  error: 417,
  result: undefined,
  isLoading: false,
};

describe('(Component) CepContainer', () => {
  it('should render an CepContainer with loading state', () => {
    const tree = renderer.create(<CepContainer isLoading closeCep={props.closeCep} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an CepContainer with result', () => {
    const tree = renderer.create(<CepContainer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an CepContainer with error 417', () => {
    const tree = renderer.create(<CepContainer {...propsError} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an CepContainer with error 412', () => {
    propsError.error = 412;
    const tree = renderer.create(<CepContainer {...propsError} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
