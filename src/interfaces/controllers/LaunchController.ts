import {Request, Response} from 'express';
import {GetLaunch} from "../../domain/usecases/GetLaunch";

export class LaunchController {
    constructor(public getLaunch: GetLaunch) {
    }

    async fetchLaunch(req: Request, res: Response) {
        try {
            const launch = await this.getLaunch.execute(req.params.id);
            res.status(200).json(launch);
        } catch (error) {
            res.status(500).json({error: 'Failed to fetch launch'});
        }
    }
}