import {ILaunchRepository} from "../repositories/ILaunchRepository";
import {Agency} from "../entities/Agency";
import {NotFoundError} from "../exceptions/NotFoundError";

export class GetAgency {
    constructor(private launchRepository: ILaunchRepository) {
    }

    async execute(id: string): Promise<Agency> {
        const agency = this.launchRepository.getAgency(id);

        if (!agency) {
            throw new NotFoundError("Agency not found");
        }

        return agency;
    }
}