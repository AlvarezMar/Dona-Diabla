//* Definición de controladores para manejar las operaciones de 'users'.

import { Request, Response } from "express"
import { allUsers, newUser, searchById } from "../services/usersService"
import { User } from "../entities/User";
import { log } from "../services/credentialsService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await allUsers();
        res.status(200).json(users)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const userById = async (req: Request, res: Response) => {
    try {
        const userById: User = await searchById(Number(req.params.id));
        res.status(200).json(userById);

    } catch (error: any) {
        res.status(404).json({message: error.message})  
    }
}

export const register = async (req: Request, res: Response) => {
    const { name, username, password, email, birthdate, nDni } = req.body;
    try {
        const register = await newUser(name, username, password, email, birthdate, nDni);
        res.status(201).json(register)
        
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await log(username, password);
        res.status(201).json({ login: true, user})
        
    } catch (error: any) {
        res.status(400).json({message: error.message})     
    }
}