import {Launch} from "../entities/Launch";

export interface ILaunchAPIService {
    getAllLaunches(): Promise<Launch[]>;
    getAllUpcomingLaunches(): Promise<Launch[]>;
    getLaunch(id: string): Promise<Launch>;
}