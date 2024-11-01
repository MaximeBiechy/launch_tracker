import {Launch} from "../entities/Launch";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";

export interface ILaunchRepository {
    getAllLaunches() : Promise<Launch[]>;
    getAllUpcomingLaunches(): Promise<Launch[]>;
    getLaunch(id: string): Promise<Launch>;
}