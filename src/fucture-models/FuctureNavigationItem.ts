import {IFuctureNavigationItem} from './interfaces/IFuctureNavigationItem';

export class FuctureNavigationItem implements IFuctureNavigationItem {
    title: string;
    link: string;
    openInNewTab: boolean;
    iconSrc: string;
    iconAlt: string;
    iconWidth: number;
    iconHeight: number;
    children: Array<IFuctureNavigationItem>;
    
    constructor(title: string, link: string, openInNewTab?: boolean, iconSrc?: string, iconAlt?: string, iconWidth?: number, iconHeight?: number, children?: Array<IFuctureNavigationItem>) {
        this.title = title;
        this.link = link;
        this.openInNewTab = openInNewTab;
        this.iconSrc = iconSrc;
        this.iconAlt = iconAlt;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
        this.children = children;
    }
}