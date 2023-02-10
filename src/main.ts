import express from 'express';
import { Router } from 'express';

import userRouter from './routes/user.routes';

const port = 5000;

const app = express();

const route = Router();

app.use(express.json());

route.use('/v1/user', userRouter);
app.use(route);

app.listen(port, () => `Server up on port: ${port}`);
