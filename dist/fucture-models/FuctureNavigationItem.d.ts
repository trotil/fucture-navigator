import { IFuctureNavigationItem } from './interfaces/IFuctureNavigationItem';
export declare class FuctureNavigationItem implements IFuctureNavigationItem {
    title: string;
    link: string;
    openInNewTab: boolean;
    iconSrc: string;
    iconAlt: string;
    iconWidth: number;
    iconHeight: number;
    children: Array<IFuctureNavigationItem>;
    constructor(title: string, link: string, openInNewTab?: boolean, iconSrc?: string, iconAlt?: string, iconWidth?: number, iconHeight?: number, children?: Array<IFuctureNavigationItem>);
}
