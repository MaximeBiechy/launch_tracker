import {Request, Response} from 'express';
import {GetAllUpcomingLaunches} from "../../domain/usecases/GetAllUpcomingLaunches";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class UpcomingLaunchController {
    constructor(public getAllUpcomingLaunches: GetAllUpcomingLaunches) {
    }

    async fetchAllUpcomingLaunches(req: Request, res: Response) {
        try {
            const launches = await this.getAllUpcomingLaunches.execute();
            res.status(200).json(launches);
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({message: error.message});
            } else if (error instanceof ExternalAPIError) {
                res.status(429).json({message: error.message});
            } else {
                res.status(500).json({message: 'Internal server error'});
            }
        }
    }
}