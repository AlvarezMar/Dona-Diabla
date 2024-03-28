import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { newCredential } from "./credentialsService";

// const users: IUser[] = [
//     {
//         id: 1,
//         name: 'Juan Carlos Alvarez',
//         email: 'aamjuan@hotmail.com',
//         birthdate: '17/01/00',
//         nDni: 23457,
//         credentialsId: 1
//     }
// ];

export const allUsers = async (): Promise<User[]> => {
    const users: User[] = await AppDataSource.getRepository(User).find({
        relations: { appointments: true }
    })
    return users;
}

export const searchById = async (id: number): Promise<User> => {
    // const userById = users.find(user => user.id === id);

    const userById: User | null = await AppDataSource.getRepository(User).findOne({
        where: {id}, relations: { appointments: true }
    });

    if(!userById) throw Error('Usuario no encontrado.');
    return userById;
}

// let id: number = 1;

export const newUser = async (name: string, username: string,  password: string, email: string, birthdate: string, nDni: number): Promise<User> => {
    const newCredentialId = await newCredential(username, password);

    const newUser: User = AppDataSource.getRepository(User).create({
        // id,
        name,
        email,
        birthdate,
        nDni,
        credential: newCredentialId
    })
    const results = await AppDataSource.getRepository(User).save(newUser)

    // id++;
    return results;
}