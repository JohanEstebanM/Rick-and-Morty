import axios from 'axios';

export async function getLocationData(id) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
