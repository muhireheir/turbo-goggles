"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success = (res, message, data) => {
    const resp = res.status(200).json({ message, data });
    return resp;
};
const badRequest = (res, message) => res.status(400).json({ message });
const forbidden = (res, message) => res.status(403).json({ message });
const conflict = (res, message) => res.status(409).json({ message });
const serverError = (res, message) => res.status(500).json({ message });
exports.default = {
    success, serverError, badRequest, conflict, forbidden,
};
