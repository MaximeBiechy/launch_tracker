import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";
import {Launch} from "../../domain/entities/Launch";
import {LaunchAPIService} from "../services/LaunchAPIService";

export class LaunchRepository implements ILaunchRepository {
    private launchAPIService: LaunchAPIService;

    constructor(launchAPIService: LaunchAPIService) {
        this.launchAPIService = launchAPIService;
    }

    async getAllLaunches() : Promise<Launch[]> {
        return await this.launchAPIService.getAllLaunches();
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        return await this.launchAPIService.getAllUpcomingLaunches();
    }

}