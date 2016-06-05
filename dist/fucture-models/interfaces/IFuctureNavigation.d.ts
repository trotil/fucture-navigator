import { IFuctureNavigationItem } from './IFuctureNavigationItem';
export interface IFuctureNavigation {
    addNavigationItem(item: IFuctureNavigationItem): any;
    getNavigationItems(): Array<IFuctureNavigationItem>;
}
