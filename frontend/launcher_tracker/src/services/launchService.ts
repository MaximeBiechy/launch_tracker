import axios from 'axios';
import {API_BASE_URL} from '../config.ts';

export const getUpcomingLaunches = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/launches/upcoming`);
        return response.data;
    } catch (error: any) {
        console.error(error);
        throw new Error(error.message);
    }
}
