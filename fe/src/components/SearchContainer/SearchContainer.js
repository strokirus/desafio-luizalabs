import React from 'react';
import { func, string, boolean } from 'prop-types';

const SearchContainer = ({ onUpdate, text, onClick, availableButton }) => (
  <header>
    <h3>Consultar</h3>
    <div>
      <p>CEP:</p>
      <input
        type="text"
        value={text}
        onChange={onUpdate}
        placeholder="00000-000"
        pattern="\d*"
        maxLength="9"
      />
      <button type="button" onClick={onClick} disabled={!availableButton}>Buscar</button>
    </div>
  </header>
);

SearchContainer.propTypes = {
  onUpdate: func.isRequired,
  onClick: func.isRequired,
  text: string,
  availableButton: boolean,
};

SearchContainer.defaultProps = {
  text: '',
  availableButton: true,
};

export default SearchContainer;
