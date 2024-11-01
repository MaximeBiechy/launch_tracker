import { Request, Response } from 'express';
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";

export class LaunchesController {
    constructor(public getAllLaunches: GetAllLaunches) {}

    async fetchAllLaunches(req: Request, res: Response) {
        try {
            const launches = await this.getAllLaunches.execute();
            res.status(200).json(launches);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch launches' });
        }
    }

}