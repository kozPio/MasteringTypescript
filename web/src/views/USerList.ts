import { CollectionView } from "./ColectionView";
import { User, UserData } from "../models/User";
import { Collection } from "../models/Collection";
import { UserEdit } from "./UserEdit";



export class UserList extends CollectionView<User, UserData>{
  
  

  constructor( public parent: Element, public collection: Collection<User,UserData>){
    super(parent, collection);
    
  }
  
  render(): void {
    this.collection.fetch()

    this.collection.on('change', ()=> {
      for (let i =0; i< this.collection.models.length; i++){
      this.renderItem(this.collection.models[i], this.parent)
        
      }
    })
    
  }

  renderItem(model: User, itemParent: Element): void {
    const userEdit = new UserEdit(itemParent , model, model.get('name'));
    userEdit.renderUser();

  }

}