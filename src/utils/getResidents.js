import axios from 'axios';

export async function getResidents(URL) {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error);
  }
}
