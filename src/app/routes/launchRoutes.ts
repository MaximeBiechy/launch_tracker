import {Router} from "express";
import {LaunchesController} from "../../interfaces/controllers/LaunchesController";
import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";
import {GetAllUpcomingLaunches} from "../../domain/usecases/GetAllUpcomingLaunches";
import {UpcomingLaunchController} from "../../interfaces/controllers/UpcomingLaunchController";
import {GetLaunch} from "../../domain/usecases/GetLaunch";
import {LaunchController} from "../../interfaces/controllers/LaunchController";

const router = Router();

// ! SERVICES
const launchAPIService = new LaunchAPIService();

// ! REPOSITORIES
const launchRepository = new LaunchRepository(launchAPIService);

// ! USE CASES
const getAllLaunchesUseCase = new GetAllLaunches(launchRepository);
const getAllUpcomingLaunchesUseCase = new GetAllUpcomingLaunches(launchRepository);
const getLaunchUseCase = new GetLaunch(launchRepository);

// ! CONTROLLERS
const launchesController = new LaunchesController(getAllLaunchesUseCase);
const upcomingLaunchController = new UpcomingLaunchController(getAllUpcomingLaunchesUseCase);
const launchController = new LaunchController(getLaunchUseCase);

// ! ROUTES
// GET /launches - Fetch all launches
router.get('/launches', async (req, res) => {
    await launchesController.fetchAllLaunches(req, res);
});

// GET /launches/upcoming - Fetch all upcoming launches
router.get('/launches/upcoming', async (req, res) => {
    await upcomingLaunchController.fetchAllUpcomingLaunches(req, res);
});

// GET /launches/:id - Fetch a single launch
router.get('/launches/:id', async (req, res) => {
    await launchController.fetchLaunch(req, res);
});

export default router;