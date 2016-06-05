var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var fucture_nav_button_component_1 = require('../fucture-nav-button/fucture-nav-button.component');
var FuctureNavComponent = (function () {
    function FuctureNavComponent() {
        this.altLogoText = "Logo";
    }
    FuctureNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], FuctureNavComponent.prototype, "navigationItems");
    __decorate([
        core_1.Input()
    ], FuctureNavComponent.prototype, "socialItems");
    __decorate([
        core_1.Input()
    ], FuctureNavComponent.prototype, "logoUrl");
    __decorate([
        core_1.Input()
    ], FuctureNavComponent.prototype, "altLogoText");
    FuctureNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fucture-nav',
            templateUrl: 'fucture-nav.component.html',
            styleUrls: ['fucture-nav.component.css'],
            directives: [fucture_nav_button_component_1.FuctureNavButtonComponent]
        })
    ], FuctureNavComponent);
    return FuctureNavComponent;
})();
exports.FuctureNavComponent = FuctureNavComponent;
