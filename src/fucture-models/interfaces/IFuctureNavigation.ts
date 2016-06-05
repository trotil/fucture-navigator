import {IFuctureNavigationItem} from './IFuctureNavigationItem';

export interface IFuctureNavigation {
    addNavigationItem(item: IFuctureNavigationItem);
    getNavigationItems():Array<IFuctureNavigationItem>;
}
