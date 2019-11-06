import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, string, bool, object } from 'prop-types';

import {
  fetchCep,
  setSearch,
  toggleCep,
 } from './actions';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import CepContainer from '../../components/CepContainer/CepContainer';

class AppContainer extends Component {
  onTextChange = (event) => {
    this.props.setSearch(event.target.value);
  }

  onClickSubmit = () => {
    this.props.fetchCep();
  }

  onCloseCep = () => {
    this.props.toggleCep();
  }

  render() {
    const { search, result, isLoading, open, error } = this.props;

    return (
      <Fragment>
        <SearchContainer
          text={search}
          onUpdate={this.onTextChange}
          onClick={this.onClickSubmit}
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
  error: bool,
};

AppContainer.defaultProps = {
  search: '',
  result: {},
  isLoading: false,
  open: false,
  error: false,
  toggleCep: () => {},
};

function mapStateToProps(state, ownProps) {
  const { search, isLoading, result, open, error } = state.app;
  return {
    ...ownProps,
    search,
    error,
    result,
    open,
    isLoading,
  };
}

const mapDispatchToProps = {
  fetchCep,
  setSearch,
  toggleCep,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
