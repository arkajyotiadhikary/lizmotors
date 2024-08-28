import express from 'express';
import cors from 'cors';
// Routes
import userRouter from "./routes/user.route.js";
import moduleRouter from './routes/module.router.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/', userRouter);
app.use('/', moduleRouter);

export default app;
