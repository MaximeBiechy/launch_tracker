import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {Launch} from "../entities/Launch";

export class GetLaunch {
    constructor(private launchRepository: LaunchRepository) {
    }

    async execute(id: string): Promise<Launch> {
        return await this.launchRepository.getLaunch(id);
    }
}