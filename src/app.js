import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors({
    origin: (process.env.ORIGIN),
    credentials: true
}));
app.use(cookieParser());

export const app = express();