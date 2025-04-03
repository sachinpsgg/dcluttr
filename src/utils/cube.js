import axios from 'axios';
const API_URL = import.meta.env.VITE_CUBE_API_URL;
const TOKEN = import.meta.env.VITE_CUBE_API_TOKEN;
export const fetchCubeData = async (query) => {
    try {
        const response = await axios.post(
            API_URL,
            { query, queryType: 'multi' },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        );
        return response.data.results
    } catch (error) {
        console.error('Error fetching Cube.js data:', error);
        return [];
    }
};