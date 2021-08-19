import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';



export function bodyValidaor(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor){
    Reflect.defineMetadata(MetadataKeys.Vallidator, keys, target, key);
  };
}
