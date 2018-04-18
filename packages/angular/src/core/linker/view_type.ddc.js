define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__linker__view_type = Object.create(_root);
  src__core__linker__view_type.ViewType = class ViewType extends core.Object {
    toString() {
      return {
        0: "ViewType.host",
        1: "ViewType.component",
        2: "ViewType.embedded"
      }[this.index];
    }
  };
  (src__core__linker__view_type.ViewType.new = function(x) {
    this.index = x;
  }).prototype = src__core__linker__view_type.ViewType.prototype;
  dart.addTypeTests(src__core__linker__view_type.ViewType);
  dart.setFieldSignature(src__core__linker__view_type.ViewType, () => ({
    __proto__: dart.getFields(src__core__linker__view_type.ViewType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__linker__view_type.ViewType, ['toString']);
  src__core__linker__view_type.ViewType.host = dart.const(new src__core__linker__view_type.ViewType.new(0));
  src__core__linker__view_type.ViewType.component = dart.const(new src__core__linker__view_type.ViewType.new(1));
  src__core__linker__view_type.ViewType.embedded = dart.const(new src__core__linker__view_type.ViewType.new(2));
  src__core__linker__view_type.ViewType.values = dart.constList([src__core__linker__view_type.ViewType.host, src__core__linker__view_type.ViewType.component, src__core__linker__view_type.ViewType.embedded], src__core__linker__view_type.ViewType);
  dart.trackLibraries("packages/angular/src/core/linker/view_type.ddc", {
    "package:angular/src/core/linker/view_type.dart": src__core__linker__view_type
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"view_type.ddc.js"}');
  // Exports:
  return {
    src__core__linker__view_type: src__core__linker__view_type
  };
});

//# sourceMappingURL=view_type.ddc.js.map
