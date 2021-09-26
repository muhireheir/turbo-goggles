declare namespace Express {
    interface Request {
        email?: string;
        user?: {
            _id?: string;
            email?: string;
            role?: string;
        };
    }
}
