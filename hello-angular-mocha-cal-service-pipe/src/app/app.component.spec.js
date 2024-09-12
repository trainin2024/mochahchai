"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
// Adjust the import path as necessary
describe('AppComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create the component', () => {
        (0, chai_1.expect)(component).to.be.ok;
    });
    it('should display the correct message', () => {
        var _a;
        const compiled = fixture.nativeElement;
        (0, chai_1.expect)((_a = compiled.querySelector('div')) === null || _a === void 0 ? void 0 : _a.textContent).to.equal('Hello, World!');
    });
});
