declare namespace Express {
    interface Request {
        email?: string;
        user?: {
            id?: number;
            firstName?: string;
            lastName?: string;
            email?: string;
            password?: string;
            role?: string;
        };
    }
}
