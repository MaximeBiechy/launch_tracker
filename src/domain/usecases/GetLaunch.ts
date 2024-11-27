import {Launch} from "../entities/Launch";
import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {NotFoundError} from "../exceptions/NotFoundError";

export class GetLaunch {
    constructor(private launchRepository: ILaunchRepository) {
    }

    async execute(id: string): Promise<Launch> {
        const launch = await this.launchRepository.getLaunch(id);

        if (!launch) {
            throw new NotFoundError('Launch not found');
        }

        return launch;
    }
}