import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {Launch} from "../entities/Launch";

export class GetAllLaunches {
    constructor(private launchRepository : ILaunchRepository) {
    }

    async execute(): Promise<Launch[]> {
        return await this.launchRepository.getAllLaunches();
    }
}