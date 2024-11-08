import express, {Request, Response} from 'express';
import cors from 'cors';
import launchRoutes from "./routes/launchRoutes";
import {APP_CONFIG} from "../shared/config/config";
import {BASE_URL} from "../shared/constants/constants";

const app = express();
const PORT = APP_CONFIG.port;

app.use(cors({
    origin: `${BASE_URL}:8080`,
}));
app.use(express.json());
app.use('/api', launchRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Space');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});