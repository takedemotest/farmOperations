// src/app/crop-component/crop-component.ts
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
var CropComponent = class _CropComponent {
    static \u0275fac = function CropComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CropComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _CropComponent, selectors: [["app-crop-component"]], decls: 2, vars: 0, template: function CropComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275domElementStart(0, "p");
                i0.\u0275\u0275text(1, "crop-component works!");
                i0.\u0275\u0275domElementEnd();
            }
        }, encapsulation: 2 });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(CropComponent, [{
            type: Component,
            args: [{ selector: "app-crop-component", imports: [], template: "<p>crop-component works!</p>\n" }]
        }], null, null);
})();
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(CropComponent, { className: "CropComponent", filePath: "src/app/crop-component/crop-component.ts", lineNumber: 9 });
})();
export { CropComponent };
//# sourceMappingURL=cropModule.js.map
