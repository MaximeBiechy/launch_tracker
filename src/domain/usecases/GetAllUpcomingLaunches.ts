import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {Launch} from "../entities/Launch";

export class GetAllUpcomingLaunches {
    constructor(private launchRepository: ILaunchRepository) {
    }

    async execute(): Promise<Launch[]> {
        return this.launchRepository.getAllUpcomingLaunches();
    }
}