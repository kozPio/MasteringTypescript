import { Collection } from '../models/Collection';




export abstract class CollectionView<T, K> {

  

  constructor(public parent: Element, public collection: Collection<T,K>, public elementId?: string) {
  }


  render(): void {

  }


  abstract renderItem(Model: T, itemParent: Element): void;
}