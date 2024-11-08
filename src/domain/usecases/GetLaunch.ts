import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {Launch} from "../entities/Launch";

export class GetLaunch {
    constructor(private launchRepository: LaunchRepository) {
    }

    async execute(id: string): Promise<Launch> {
        const launch = await this.launchRepository.getLaunch(id);

        if (!launch) {
            throw new Error('Launch not found');
        }

        return launch;
    }
}