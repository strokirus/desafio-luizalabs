import React from 'react';
import { object, bool, func, number } from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';

const CepContainer = ({ result, isLoading, error, closeCep }) => (
  <article>
    {isLoading &&
      <h3>Carregando</h3>
    }

    {error === 417 &&
      <h3>CEP inexistente</h3>
    }

    {error === 412 &&
      <h3>CEP mal formado</h3>
    }

    {result.logradouro &&
      <h1>{result.logradouro}</h1>
    }
    {result.complemento && result.complemento.length &&
      <p>{result.complemento}</p>
    }
    {result.bairro && result.bairro.length &&
      <p>{result.bairro}</p>
    }
    {result.localidade && result.localidade.length &&
      <p>{result.localidade} - {result.uf}</p>
    }
    {result.cep && result.cep.length &&
      <p>{result.cep}</p>
    }
    {closeCep &&
      <button onClick={closeCep}>x</button>
    }
    {result.geo !== undefined &&
      <Map center={[result.geo.lat, result.geo.lng]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[result.geo.lat, result.geo.lng]} />
      </Map>
    }
  </article>
);

CepContainer.propTypes = {
  result: object,
  isLoading: bool,
  error: number,
  closeCep: func,
};

CepContainer.defaultProps = {
  result: {},
  isLoading: true,
  error: 200,
  closeCep: () => {},
};

export default CepContainer;
