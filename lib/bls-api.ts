import axios from 'axios';

export async function fetchBusinessRoles(searchTerm: string = ''): Promise<{ role: string; salary: number }[]> {
  try {
    const response = await axios.get(`/api/bls?search=${encodeURIComponent(searchTerm)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching business roles:', error);
    return [];
  }
}