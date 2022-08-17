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

namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      DATABASE_URL: string;
    }
  }
