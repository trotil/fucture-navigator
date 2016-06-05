var FuctureNavigationItem = (function () {
    function FuctureNavigationItem(title, link, openInNewTab, iconSrc, iconAlt, iconWidth, iconHeight, children) {
        this.title = title;
        this.link = link;
        this.openInNewTab = openInNewTab;
        this.iconSrc = iconSrc;
        this.iconAlt = iconAlt;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
        this.children = children;
    }
    return FuctureNavigationItem;
})();
exports.FuctureNavigationItem = FuctureNavigationItem;
