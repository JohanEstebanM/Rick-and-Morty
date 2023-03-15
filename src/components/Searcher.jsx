import React, { useEffect, useState } from 'react';
import { getLocationData } from '../utils/getLocation';
import { getRandomNumber } from '../utils/getRandomNumber';
import InfoLocation from './InfoLocation';
import '../App.css';

const Searcher = () => {
  const [formData, setFormData] = useState({ search: '' });
  const [location, setLocation] = useState({});

  async function locationRandom() {
    const locationRandom = await getLocationData(getRandomNumber(1, 126));
    setLocation(locationRandom.data);
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const locationData = await getLocationData(formData.search);
    setLocation(locationData.data);
  }

  useEffect(() => {
    locationRandom();
  }, []);

  return (
    <main>
      <div className="searcher">
        <h2>Wiki de Rick and Morty</h2>
        <div>
          <form onSubmit={handleSubmit} className="form__searcher">
            <input
              type="text"
              name="search"
              value={formData.search}
              onChange={handleInputChange}
              className="searcher__input__text"
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
      <InfoLocation location={location}></InfoLocation>
    </main>
  );
};

export default Searcher;
