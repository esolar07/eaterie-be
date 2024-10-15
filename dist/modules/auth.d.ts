export declare const verifyPassword: (password: string, hashedPassword: string) => Promise<boolean>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const createJwt: (user: {
    id: any;
    email: string;
    password?: string;
}) => string;
export declare const verifyToken: (req: any, res: any, next: any) => void;
