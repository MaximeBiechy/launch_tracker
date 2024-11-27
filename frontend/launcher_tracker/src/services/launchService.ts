import axios from 'axios';
import { API_BASE_URL } from '../config.ts';

export const getUpcomingLaunches = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/launches/upcoming`);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
    }
};

export const getLaunchById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/launches/${id}`);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
    }
};

export const getAgencyById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/agencies/${id}`);
        return response.data
    } catch (error: any) {
        handleApiError(error);
    }
}

const handleApiError = (error: any) => {
    if (error.response) {
        const status = error.response.status;
        if (status === 429) {
            throw new Error(`${status} : Too many requests. Please try again later.`);
        } else if (status === 502) {
            throw new Error(`${status} : The server is temporarily unavailable.`);
        } else {
            throw new Error(`Error ${status}: ${error.response.data.message || 'An error has occurred.'}`);
        }
    } else if (error.request) {
        // ! Server error
        throw new Error('No response from the server. Please check your connection.');
    } else {
        // ! Client error
        throw new Error(`Error: ${error.message}`);
    }
};
