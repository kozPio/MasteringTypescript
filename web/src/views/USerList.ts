import { CollectionView } from "./ColectionView";
import { User, UserData } from "../models/User";


export class userList extends CollectionView<User, UserData>{

  constructor( public parent: Element, public model: User){
    super();
  }

  renderItem(model: User, parentItem: Element): void {

  }

}