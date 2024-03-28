import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

// const bdd: Credential[] = [
//     {
//         id: 1,
//         username: 'alvarezmar',
//         password: 'root'
//     }
// ];

// let id: number = 1;

export const newCredential = async (username: string, password: string): Promise<Credential> => {
    const credential: Credential = AppDataSource.getRepository(Credential).create({
        // id,
        username,
        password
    });
    const results = await AppDataSource.getRepository(Credential).save(credential);
    // bdd.push(credential);
    return credential;
}

export const log = async (username: string, password: string): Promise<User | null> => {
    // const credential = bdd.find(user => user.username === username);

    const credential = await AppDataSource.getRepository(Credential).findOneBy({ username });
    if(!credential) throw Error('User not found.');
    if(credential.password !== password) throw Error('Wrong password.');

    const user = await AppDataSource.getRepository(User).findOneBy({
        credential: {id: credential.id}
    })

    return user;
}