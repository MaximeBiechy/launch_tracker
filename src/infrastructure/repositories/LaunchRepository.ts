import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";
import {Launch} from "../../domain/entities/Launch";
import {LaunchAPIService} from "../services/LaunchAPIService";
import {ILaunchAPIService} from "../../domain/repositories/ILaunchAPIService";

export class LaunchRepository implements ILaunchRepository {
    private launchAPIService: ILaunchAPIService;

    constructor(launchAPIService: ILaunchAPIService) {
        this.launchAPIService = launchAPIService;
    }

    async getAllLaunches() : Promise<Launch[]> {
        return await this.launchAPIService.getAllLaunches();
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        return await this.launchAPIService.getAllUpcomingLaunches();
    }

    async getLaunch(id: string): Promise<Launch> {
        return await this.launchAPIService.getLaunch(id);
    }

}