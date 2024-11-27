import {Request, Response} from 'express';
import {GetAgency} from "../../domain/usecases/GetAgency";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class AgencyController {
    constructor(public getAgency: GetAgency) {
    }

    async fetchAgency(req: Request<{id: string}>, res: Response) {
        try {
            const agency = await this.getAgency.execute(req.params.id);
            res.status(200).json(agency);
        } catch (error: any) {
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