import {Launch} from "../../domain/entities/Launch";
import axios from "axios";
import {BASE_API_URL} from "../../shared/constants/constants";
import {LaunchAPIResponse} from "./LaunchAPIResponse";
import {LaunchPresenter} from "../../interfaces/presenters/LaunchPresenter";
import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class LaunchAPIService implements ILaunchRepository {

    async getAllLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/?ordering=-last_updated`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/upcoming`);
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

    private handleError(error: any): never {
        if (error.response) {
            if (error.response.status === 404) {
                throw new NotFoundError('Launch not found : ' + error.message);
            } else {
                throw new ExternalAPIError(`API error : ${error.message}`);
            }
        } else {
            throw new Error(`Failed to reach API: ${error.message}`);
        }
    }
}