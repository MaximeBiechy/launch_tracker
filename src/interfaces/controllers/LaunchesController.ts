import { Request, Response } from 'express';
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class LaunchesController {
    constructor(public getAllLaunches: GetAllLaunches) {}

    async fetchAllLaunches(req: Request, res: Response) {
        try {
            const launches = await this.getAllLaunches.execute();
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