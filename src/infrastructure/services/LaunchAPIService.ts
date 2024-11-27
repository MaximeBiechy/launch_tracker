import {Launch} from "../../domain/entities/Launch";
import axios from "axios";
import {BASE_API_URL} from "../../shared/constants/constants";
import {LaunchAPIResponse} from "./LaunchAPIResponse";
import {LaunchPresenter} from "../../interfaces/presenters/LaunchPresenter";
import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";
import {Agency} from "../../domain/entities/Agency";
import {AgencyPresenter} from "../../interfaces/presenters/AgencyPresenter";
import {AgencyAPIResponse} from "./AgencyAPIResponse";

export class LaunchAPIService implements ILaunchRepository {

    async getAllLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/?ordering=net`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        try {
            const limit = 20;
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/upcoming/?limit=${limit}`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getLaunch(id: string): Promise<Launch> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/${id}`);
            return LaunchPresenter.toEntity(response.data);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getAgency(id: string) : Promise<Agency> {
        try {
            const response = await axios.get<AgencyAPIResponse>(`${BASE_API_URL}/agencies/${id}`);
            return AgencyPresenter.toEntity(response.data);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    private handleError(error: any): never {
        if (error.response) {
            const status = error.response.status;

            if (status === 404) {
                throw new NotFoundError(`${status} : Launch not found : ` + error.message);
            } else if (status === 429) {
                const retryAfter = error.response.headers['retry-after'];
                throw new ExternalAPIError(
                    retryAfter
                        ? `${status} : Too many requests sent. Try again in ${retryAfter} seconds.`
                        : `${status} : Too many requests sent. Try again later.`
                );
            } else {
                throw new ExternalAPIError(`API error : ${error.response.statusText}`);
            }
        } else if (error.request) {
            throw new Error(`No response from the server. Check your connection.`);
        } else {
            throw new Error(`Error : ${error.message}`);
        }
    }

}