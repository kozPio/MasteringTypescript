import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';


export function use(middleware: RequestHandler) {
  return function ( target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(
      MetadataKeys.Midleware,
      target,
      key
      ) || [];

      Reflect.defineMetadata(MetadataKeys.Midleware, [...middlewares, middleware], target, key);
  }
}