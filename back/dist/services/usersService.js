"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = exports.searchById = exports.allUsers = void 0;
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const credentialsService_1 = require("./credentialsService");
const allUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.AppDataSource.getRepository(User_1.User).find({
        relations: { appointments: true }
    });
    return users;
});
exports.allUsers = allUsers;
const searchById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userById = yield data_source_1.AppDataSource.getRepository(User_1.User).findOne({
        where: { id }, relations: { appointments: true }
    });
    if (!userById)
        throw Error('Usuario no encontrado.');
    return userById;
});
exports.searchById = searchById;
const newUser = (name, username, password, email, birthdate, nDni) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredentialId = yield (0, credentialsService_1.newCredential)(username, password);
    const newUser = data_source_1.AppDataSource.getRepository(User_1.User).create({
        name,
        email,
        birthdate,
        nDni,
        credential: newCredentialId
    });
    const results = yield data_source_1.AppDataSource.getRepository(User_1.User).save(newUser);
    return results;
});
exports.newUser = newUser;
