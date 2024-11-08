import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {Launch} from "../entities/Launch";
import {NotFoundError} from "../exceptions/NotFoundError";

export class GetAllLaunches {
    constructor(private launchRepository : ILaunchRepository) {
    }

    async execute(): Promise<Launch[]> {
        const launches = await this.launchRepository.getAllLaunches();

        if (!launches || launches.length === 0) {
            throw new NotFoundError('No launches found');
        }

        return launches;
    }
}