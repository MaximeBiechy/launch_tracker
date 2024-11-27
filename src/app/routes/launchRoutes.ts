import {Router, Request, Response} from "express";
import {LaunchesController} from "../../interfaces/controllers/LaunchesController";
import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";
import {GetAllUpcomingLaunches} from "../../domain/usecases/GetAllUpcomingLaunches";
import {UpcomingLaunchController} from "../../interfaces/controllers/UpcomingLaunchController";
import {GetLaunch} from "../../domain/usecases/GetLaunch";
import {LaunchController} from "../../interfaces/controllers/LaunchController";
import {GetAgency} from "../../domain/usecases/GetAgency";
import {AgencyController} from "../../interfaces/controllers/AgencyController";

const router = Router();

// ! SERVICES
const launchAPIService = new LaunchAPIService();

// ! REPOSITORIES
const launchRepository = new LaunchRepository(launchAPIService);

// ! USE CASES
const getAllLaunchesUseCase = new GetAllLaunches(launchRepository);
const getAllUpcomingLaunchesUseCase = new GetAllUpcomingLaunches(launchRepository);
const getLaunchUseCase = new GetLaunch(launchRepository);
const getAgencyUseCase = new GetAgency(launchRepository);

// ! CONTROLLERS
const launchesController = new LaunchesController(getAllLaunchesUseCase);
const upcomingLaunchController = new UpcomingLaunchController(getAllUpcomingLaunchesUseCase);
const launchController = new LaunchController(getLaunchUseCase);
const agencyController = new AgencyController(getAgencyUseCase);

// ! ROUTES
// GET /launches - Fetch all launches
router.get('/launches', async (req: Request, res: Response) => {
    await launchesController.fetchAllLaunches(req, res);
});

// GET /launches/upcoming - Fetch all upcoming launches
router.get('/launches/upcoming', async (req: Request, res: Response) => {
    await upcomingLaunchController.fetchAllUpcomingLaunches(req, res);
});

// GET /launches/:id - Fetch a single launch
router.get('/launches/:id', async (req: Request<{id: string}>, res: Response) => {
    await launchController.fetchLaunch(req, res);
});

// GET /agencies/:id - Fetch a single agency
router.get('/agencies/:id', async (req: Request<{id: string}>, res: Response) => {
    await agencyController.fetchAgency(req, res);
});

export default router;