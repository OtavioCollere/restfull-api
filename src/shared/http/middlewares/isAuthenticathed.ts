import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '@config/auth';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
  }

export default async function isAuthenticathed(request : Request, response : Response, next : NextFunction) 
{
    
    const authHeader = request.headers.authorization;

    if (!authHeader)
    {
        throw new AppError("Token JWT não encontrado.");
    }

    const [ bearer, token ] = authHeader.split(' ');

    try {

        const decodedToken = verify(token, authConfig.jwt.secret);

        const { sub } = decodedToken as ITokenPayload;

        request.user = {
            id : sub
        }

        return next();

    } catch (err)
    {
        throw new AppError("Token JWT inválido.")
    }

}