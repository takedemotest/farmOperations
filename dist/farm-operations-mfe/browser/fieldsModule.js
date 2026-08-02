// src/app/fields-component/fields-component.ts
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
var FieldsComponent = class _FieldsComponent {
    static \u0275fac = function FieldsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FieldsComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _FieldsComponent, selectors: [["app-fields-component"]], decls: 2, vars: 0, template: function FieldsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275domElementStart(0, "p");
                i0.\u0275\u0275text(1, "fields-component works!");
                i0.\u0275\u0275domElementEnd();
            }
        }, encapsulation: 2 });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FieldsComponent, [{
            type: Component,
            args: [{ selector: "app-fields-component", imports: [], template: "<p>fields-component works!</p>\n" }]
        }], null, null);
})();
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(FieldsComponent, { className: "FieldsComponent", filePath: "src/app/fields-component/fields-component.ts", lineNumber: 9 });
})();
export { FieldsComponent };
//# sourceMappingURL=fieldsModule.js.map
