var FuctureNavigation = (function () {
    function FuctureNavigation() {
        this._items = new Array();
    }
    FuctureNavigation.prototype.addNavigationItem = function (item) {
        this._items.push(item);
    };
    FuctureNavigation.prototype.getNavigationItems = function () {
        return this._items;
    };
    return FuctureNavigation;
})();
exports.FuctureNavigation = FuctureNavigation;
