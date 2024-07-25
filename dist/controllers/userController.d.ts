import { Request, Response } from 'express';
export declare const createUser: (req: Request, res: Response) => Promise<void>;
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
export declare const getUser: (req: Request, res: Response) => Promise<void>;
export declare const updateUser: (req: Request, res: Response) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response) => Promise<void>;
