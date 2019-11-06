import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, string, bool, object, number } from 'prop-types';

import {
  fetchCep,
  setSearch,
  toggleCep,
 } from './actions';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import CepContainer from '../../components/CepContainer/CepContainer';
import { cepMask } from '../../utils';

class AppContainer extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  onTextChange = (event) => {
    this.props.setSearch(cepMask(event.target.value));
  }

  /**
   * Trigged by user when click in keys. Verify if user can do search or
   * want clear your search
   * @param event Event passed by user changes values
  */
  onKeyUp = (event) => {
    const { availableButton } = this.props;

    if (availableButton && event.key === 'Enter') {
      this.onClickSubmit();
    }

    if (event.key === 'Escape') {
      this.onCloseCep();
    }
  };

  /**
   * Trigger when user click in submit info and search cep
  */
  onClickSubmit = () => {
    this.props.fetchCep();
  }

  /**
   * Trigged when user want to clear and close CepContainer
  */
  onCloseCep = () => {
    this.props.toggleCep();
  }

  render() {
    const { search, result, isLoading, open, error, availableButton } = this.props;

    return (
      <Fragment>
        <SearchContainer
          text={search}
          availableButton={availableButton}
          onUpdate={this.onTextChange}
          onClick={this.onClickSubmit}
          onKeyUp={this.onKeyUp}
        />
        {open &&
          <CepContainer
            result={result}
            isLoading={isLoading}
            closeCep={this.onCloseCep}
            error={error}
          />
        }
      </Fragment>
    );
  }
}

AppContainer.propTypes = {
  fetchCep: func.isRequired,
  setSearch: func.isRequired,
  search: string,
  result: object,
  isLoading: bool,
  open: bool,
  toggleCep: func,
  error: number,
  availableButton: bool,
};

AppContainer.defaultProps = {
  search: '',
  result: {},
  isLoading: false,
  open: false,
  error: 200,
  availableButton: false,
  toggleCep: () => {},
};

function mapStateToProps(state, ownProps) {
  const { search, isLoading, result, open, error, availableButton } = state.app;
  return {
    ...ownProps,
    search,
    error,
    result,
    open,
    isLoading,
    availableButton,
  };
}

const mapDispatchToProps = {
  fetchCep,
  setSearch,
  toggleCep,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
