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
exports.login = exports.register = exports.userById = exports.getAllUsers = void 0;
const usersService_1 = require("../services/usersService");
const credentialsService_1 = require("../services/credentialsService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.allUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const userById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userById = yield (0, usersService_1.searchById)(Number(req.params.id));
        res.status(200).json(userById);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.userById = userById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password, email, birthdate, nDni } = req.body;
    try {
        const register = yield (0, usersService_1.newUser)(name, username, password, email, birthdate, nDni);
        res.status(201).json(register);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield (0, credentialsService_1.log)(username, password);
        res.status(201).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.login = login;
