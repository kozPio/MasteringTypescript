import 'reflect-metadata';
import { AppRouter } from '../../appRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { Request, Response, RequestHandler ,NextFunction } from 'express';


function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction){
    if(!req.body){
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if(!req.body[key]){
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  }
}


export function controller(routePrefiix: string) {
  return function(target: Function) {

    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
     const routeHandler = target.prototype[key];
     const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key);
     const method: Methods = Reflect.getMetadata(MetadataKeys.Method, target.prototype, key);
     const middlewares = Reflect.getMetadata(MetadataKeys.Midleware, target.prototype, key) || [];

     const requireBodyProps = Reflect.getMetadata(MetadataKeys.Vallidator, target.prototype, key) || [];


     const validator = bodyValidators(requireBodyProps);

     if(path) {
       router[method](`${routePrefiix}${path}`, ...middlewares, validator, routeHandler)
     }
    }
  }
}