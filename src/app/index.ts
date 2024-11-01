import express, {Request, Response} from 'express';
import launchRoutes from "./routes/launchRoutes";
import {APP_CONFIG} from "../shared/config/config";

const app = express();
const PORT = APP_CONFIG.port;

app.use(express.json());
app.use('/api', launchRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Space');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});