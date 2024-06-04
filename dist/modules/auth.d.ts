export declare const verifyPassword: (password: any, hashedPassword: any) => Promise<boolean>;
export declare const hashPassword: (password: any) => Promise<string>;
export declare const createJwt: (user: any) => string;
