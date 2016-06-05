import { IFuctureNavigation } from './interfaces/IFuctureNavigation';
import { IFuctureNavigationItem } from './interfaces/IFuctureNavigationItem';
export declare class FuctureNavigation implements IFuctureNavigation {
    private _items;
    constructor();
    addNavigationItem(item: IFuctureNavigationItem): void;
    getNavigationItems(): Array<IFuctureNavigationItem>;
}
