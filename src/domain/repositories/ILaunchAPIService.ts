import {Launch} from "../entities/Launch";
import {Agency} from "../entities/Agency";

export interface ILaunchAPIService {
    getAllLaunches(): Promise<Launch[]>;
    getAllUpcomingLaunches(): Promise<Launch[]>;
    getLaunch(id: string): Promise<Launch>;
    getAgency(id: string): Promise<Agency>;
}