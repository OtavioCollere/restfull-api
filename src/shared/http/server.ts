import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './router';
import AppError from './errors/AppError';

const app = express();

app.use(router);

app.use((error : Error, request : Request, response : Response, next : NextFunction) => {
    if ( error instanceof AppError )
    {
        return response.status(error.statusCode).json({
            message: error.message,
            status : 'error'
        })
    } 
    
    return response.status(500).json({
        status : 'erro',
        message: 'Internal server error!'
    });

    
})

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 🏆");
})