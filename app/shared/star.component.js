"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var starComponent = (function () {
    function starComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    starComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    starComponent.prototype.onClick = function () {
        this.ratingClicked.emit("El rating de este producto \n        es: " + this.rating);
    };
    return starComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], starComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], starComponent.prototype, "ratingClicked", void 0);
starComponent = __decorate([
    core_1.Component({
        selector: 'ai-star',
        templateUrl: 'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.css']
    }),
    __metadata("design:paramtypes", [])
], starComponent);
exports.starComponent = starComponent;
//# sourceMappingURL=star.component.js.map