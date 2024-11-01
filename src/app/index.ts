import express, { Request, Response } from 'express';
import launchRoutes from "./routes/launchRoutes";

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use('/api', launchRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Space');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});