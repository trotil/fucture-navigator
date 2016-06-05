export interface IFuctureNavigationItem {
    title: string;
    link: string;
    openInNewTab?: boolean;
    iconSrc?: string;
    iconAlt?: string;
    iconWidth?: number;
    iconHeight?: number;
    children?: Array<IFuctureNavigationItem>;
}
