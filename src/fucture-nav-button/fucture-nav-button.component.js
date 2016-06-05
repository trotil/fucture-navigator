var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var FuctureNavButtonComponent = (function () {
    function FuctureNavButtonComponent() {
    }
    FuctureNavButtonComponent.prototype.ngOnInit = function () {
        console.log(this.navigationItem);
    };
    __decorate([
        core_1.Input()
    ], FuctureNavButtonComponent.prototype, "navigationItem");
    FuctureNavButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fucture-nav-button',
            templateUrl: 'fucture-nav-button.component.html',
            styleUrls: ['fucture-nav-button.component.css']
        })
    ], FuctureNavButtonComponent);
    return FuctureNavButtonComponent;
})();
exports.FuctureNavButtonComponent = FuctureNavButtonComponent;
