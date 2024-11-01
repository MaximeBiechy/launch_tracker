import {Launch} from "../../domain/entities/Launch";
import axios from "axios";
import {BASE_API_URL} from "../../shared/constants/constants";
import {LaunchAPIResponse} from "./LaunchAPIResponse";

export class LaunchAPIService {
    async getAllLaunches(): Promise<Launch[]> {
        const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches`);
        return response.data.results.map((launch: any)=> ({
            id: launch.id,
            name: launch.name,
            date: launch.net,
            image_url: launch.image.image_url
        }));
    }
}