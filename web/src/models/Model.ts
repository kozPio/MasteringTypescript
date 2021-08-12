import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  get <K extends keyof T>(key: K): T[K];
  getAll(): T; 
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName:string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}


export class Model<T extends HasId> {
  constructor( 
    private atributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
    ){}

    

    on = this.events.on;
    trigger = this.events.trigger;
    get = this.atributes.get;
   
  
    
  
    set(update: T): void {
      this.atributes.set(update);
      this.events.trigger('change');
    }
  
    fetch(): void {
      const id = this.atributes.get('id');
  
      if(typeof id !== 'number'){
        throw new Error('Cannot fetch wothout id');
      }
  
      this.sync.fetch(id).then((response: AxiosResponse): void => {
        this.set(response.data);
      })
    }
  
    save(): void {
      this.sync.save(this.atributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      })
    }
}