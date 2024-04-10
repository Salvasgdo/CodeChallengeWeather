import axios from 'axios';

const BASE_URL = 'https://search.reservamos.mx/api/v2/places';

export async function fetchName(name) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: name,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching name:', error);
    return null;
  }
}
