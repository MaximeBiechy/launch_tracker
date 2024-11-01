import {Router} from "express";
import {LaunchController} from "../../interfaces/controllers/LaunchController";
import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";
import {GetAllUpcomingLaunches} from "../../domain/usecases/GetAllUpcomingLaunches";
import {UpcomingLaunchController} from "../../interfaces/controllers/UpcomingLaunchController";

const router = Router();

const launchAPIService = new LaunchAPIService();
const launchRepository = new LaunchRepository(launchAPIService);
const getAllLaunchesUseCase = new GetAllLaunches(launchRepository);
const getAllUpcomingLaunchesUseCase = new GetAllUpcomingLaunches(launchRepository);
const launchController = new LaunchController(getAllLaunchesUseCase);
const upcomingLaunchController = new UpcomingLaunchController(getAllUpcomingLaunchesUseCase);

router.get('/launches', async (req, res) => {
    await launchController.fetchAllLaunches(req, res);
});

router.get('/launches/upcoming', async (req, res) => {
    await upcomingLaunchController.fetchAllUpcomingLaunches(req, res);
});

export default router;