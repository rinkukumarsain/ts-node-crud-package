import { Application } from 'express';
declare const createServer: (mongoUri: string) => Application;
export default createServer;
