import { IFuctureNavigation } from './interfaces/IFuctureNavigation'
import { IFuctureNavigationItem } from './interfaces/IFuctureNavigationItem'
import { FuctureNavigationItem } from './FuctureNavigationItem'

export class FuctureNavigation implements IFuctureNavigation {
    private _items: Array<IFuctureNavigationItem>;
    constructor() {
       this._items = new Array<FuctureNavigationItem>();
    }
    
    addNavigationItem(item: IFuctureNavigationItem){
        this._items.push(item);
    }
    
    getNavigationItems():Array<IFuctureNavigationItem>{
        return this._items;
    }
}