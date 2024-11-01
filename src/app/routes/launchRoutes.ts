import {Router} from "express";
import {LaunchController} from "../../interfaces/controllers/LaunchController";
import {LaunchRepository} from "../../infrastructure/repositories/LaunchRepository";
import {GetAllLaunches} from "../../domain/usecases/GetAllLaunches";
import {LaunchAPIService} from "../../infrastructure/services/LaunchAPIService";

const router = Router();

const launchAPIService = new LaunchAPIService();
const launchRepository = new LaunchRepository(launchAPIService);
const getAllLaunchesUseCase = new GetAllLaunches(launchRepository)
const launchController = new LaunchController(getAllLaunchesUseCase);

router.get('/launches', async (req, res) => {
    await launchController.fetchAllLaunches(req, res);
});

export default router;