import axios from 'axios';
import { API_BASE_URL } from '../config.ts';

export const getLaunches = async () => {
    const response = await axios.get(`${API_BASE_URL}/launches`);
    return response.data;
};
