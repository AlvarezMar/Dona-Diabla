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
exports.log = exports.newCredential = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const User_1 = require("../entities/User");
const newCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = data_source_1.AppDataSource.getRepository(Credential_1.Credential).create({
        username,
        password
    });
    const results = yield data_source_1.AppDataSource.getRepository(Credential_1.Credential).save(credential);
    return credential;
});
exports.newCredential = newCredential;
const log = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield data_source_1.AppDataSource.getRepository(Credential_1.Credential).findOneBy({ username });
    if (!credential)
        throw Error('User not found.');
    if (credential.password !== password)
        throw Error('Wrong password.');
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({
        credential: { id: credential.id }
    });
    return user;
});
exports.log = log;
