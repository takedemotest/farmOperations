import { NOT_FOUND, NotFoundError, getCurrentInjector, inject, isNotFound, setCurrentInjector } from "@nf-internal/chunk-VFV7Y3ES";
import "@nf-internal/chunk-FMGVFGPW";
// node_modules/@angular/core/fesm2022/primitives-di.mjs
function defineInjectable(opts) {
    return {
        token: opts.token,
        providedIn: opts.providedIn || null,
        factory: opts.factory,
        value: void 0
    };
}
function registerInjectable(ctor, declaration) {
    ctor.\u0275prov = declaration;
    return ctor;
}
export { NOT_FOUND, NotFoundError, defineInjectable, getCurrentInjector, inject, isNotFound, registerInjectable, setCurrentInjector };
/*! Bundled license information:

@angular/core/fesm2022/primitives-di.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=_angular_core_primitives_di.omp9BX9qiy-dev.js.map
