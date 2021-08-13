import { Collection } from '../models/Collection';




export abstract class CollectionView<T, K> {

  collection: Collection<T, K>;

  render(): void {

  }


  abstract renderItem(model: T, parentItem: Element): void;
}