import {Launch} from "../../domain/entities/Launch";
import axios from "axios";
import {BASE_API_URL} from "../../shared/constants/constants";
import {LaunchAPIResponse} from "./LaunchAPIResponse";
import {LaunchPresenter} from "../../interfaces/presenters/LaunchPresenter";
import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";

export class LaunchAPIService implements ILaunchRepository {

    async getAllLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/?ordering=-last_updated`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            throw new Error(`Failed to fetch launches: ${error.message}`);
        }
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/upcoming`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            throw new Error(`Failed to fetch upcoming launches: ${error.message}`);
        }
    }

    async getLaunch(id: string): Promise<Launch> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/${id}`);
            return LaunchPresenter.toEntity(response.data);
        } catch (error: any) {
            throw new Error(`Failed to fetch launch: ${error.message}`);
        }
    }
}