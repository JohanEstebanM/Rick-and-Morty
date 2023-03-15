import React, { useEffect, useState } from 'react';
import { getResidents } from '../utils/getResidents';

const InfoResidents = ({ residents }) => {
  const [residentsData, setResidentsData] = useState([]);

  useEffect(() => {
    async function showResidentData() {
      const residentsDataArray = [];
      if (residents.length) {
        for (let i = 0; i < residents.length; i++) {
          const residentData = await getResidents(residents[i]);
          residentsDataArray.push(residentData.data);
        }
      } else {
        console.log('no hay información de cada residente');
      }
      setResidentsData(residentsDataArray);
    }
    showResidentData();
  }, [residents]);

  return (
    <div className="residents">
      {residentsData.length === 0 ? (
        <div>
          <img src="/img/portal.png" alt="Imagen sin no hay habitantes" />
        </div>
      ) : (
        residentsData.map((resident) => (
          <div key={resident.id} className="resident">
            <img
              src={resident.image}
              alt="Imagen del residente"
              className="img__resident"
            />
            <div className="resident__info">
              <p>
                Nombre: <span>{resident.name}</span>
              </p>
              <p>
                Género: <span>{resident.gender}</span>
              </p>
              <p>
                Especie: <span>{resident.species}</span>
              </p>
              <p>
                Estado: <span>{resident.status}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default InfoResidents;
