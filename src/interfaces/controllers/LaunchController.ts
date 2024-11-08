import {Request, Response} from 'express';
import {GetLaunch} from "../../domain/usecases/GetLaunch";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class LaunchController {
    constructor(public getLaunch: GetLaunch) {
    }

    async fetchLaunch(req: Request, res: Response) {
        try {
            const launch = await this.getLaunch.execute(req.params.id);
            res.status(200).json(launch);
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({message: error.message});
            } else if (error instanceof ExternalAPIError) {
                res.status(502).json({message: error.message});
            } else {
                res.status(500).json({message: 'Internal server error'});
            }
        }
    }
}