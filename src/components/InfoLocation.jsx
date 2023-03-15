import React from 'react';
import InfoResidents from './InfoResidents';

const InfoLocation = ({ location }) => {
  return (
    <div>
      <div className="location">
        <h2>{location.name}</h2>
        <div className="location__info">
          <p>
            Tipo: <span>{location.type}</span>
          </p>
          <p>
            Dimension: <span>{location.dimension}</span>
          </p>
          {location.residents ? (
            <p>
              Habitantes: <span>{location.residents.length}</span>
            </p>
          ) : (
            <p>No hay información disponible sobre los habitantes.</p>
          )}
        </div>
      </div>
      <InfoResidents residents={location.residents}></InfoResidents>
    </div>
  );
};

export default InfoLocation;
