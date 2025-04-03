import axios from 'axios';

const API_URL = 'https://amaranth-muskox.aws-us-east-1.cubecloudapp.dev/dev-mode/feat/frontend-hiring-task/cubejs-api/v1/load';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuZElkIjoiNDkiLCJleHAiOjE3NDM0OTYyMTIsImlzcyI6ImN1YmVjbG91ZCJ9.luqfkt0CQW_B01j5oAvl_8hicbFzPmyLXfvEZYJbej4';

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