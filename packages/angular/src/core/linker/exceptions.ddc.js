define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__linker__exceptions = Object.create(_root);
  const _message = Symbol('_message');
  src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException = class ExpressionChangedAfterItHasBeenCheckedException extends core.Object {
    toString() {
      return this[_message];
    }
  };
  (src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.new = function(oldValue, currValue, context) {
    this[_message] = "Expression has changed after it was checked. " + dart.str`Previous value: '${oldValue}'. Current value: '${currValue}'`;
  }).prototype = src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.prototype;
  dart.addTypeTests(src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException);
  src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException, () => ({
    __proto__: dart.getFields(src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.__proto__),
    [_message]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException, ['toString']);
  dart.trackLibraries("packages/angular/src/core/linker/exceptions.ddc", {
    "package:angular/src/core/linker/exceptions.dart": src__core__linker__exceptions
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.dart"],"names":[],"mappings":";;;;;;;;;;YAwCuB,eAAQ;;;gGALzB,QAAgB,EAAE,SAAiB,EAAE,OAAe;IAClD,cAAQ,GAAG,kDACP,4BAAmB,QAAQ,sBAAoB,SAAS;EAAE","file":"exceptions.ddc.js"}');
  // Exports:
  return {
    src__core__linker__exceptions: src__core__linker__exceptions
  };
});

//# sourceMappingURL=exceptions.ddc.js.map
