import {Launch} from "../entities/Launch";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";
import {Agency} from "../entities/Agency";

export interface ILaunchRepository {
    getAllLaunches() : Promise<Launch[]>;
    getAllUpcomingLaunches(): Promise<Launch[]>;
    getLaunch(id: string): Promise<Launch>;
    getAgency(id: string): Promise<Agency>;
}