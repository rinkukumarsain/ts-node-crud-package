// src/index.d.ts
declare module 'ts-node-crud-package' {
  import { Application } from 'express';

  function createServer(mongoUri: string): Application;

  export default createServer;
}
