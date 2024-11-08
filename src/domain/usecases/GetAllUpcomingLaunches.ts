import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {Launch} from "../entities/Launch";

export class GetAllUpcomingLaunches {
    constructor(private launchRepository: ILaunchRepository) {
    }

    async execute(): Promise<Launch[]> {
        const launches = await this.launchRepository.getAllUpcomingLaunches();

        if (!launches || launches.length === 0) {
            throw new Error('No launches found');
        }

        return launches;
    }
}