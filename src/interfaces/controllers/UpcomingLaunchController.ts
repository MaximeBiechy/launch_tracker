import {Request, Response} from 'express';
import {GetAllUpcomingLaunches} from "../../domain/usecases/GetAllUpcomingLaunches";

export class UpcomingLaunchController {
    constructor(public getAllUpcomingLaunches: GetAllUpcomingLaunches) {
    }

    async fetchAllUpcomingLaunches(req: Request, res: Response) {
        try {
            const launches = await this.getAllUpcomingLaunches.execute();
            res.status(200).json(launches);
        } catch (error) {
            res.status(500).json({error: 'Failed to fetch upcoming launches'});
        }
    }
}