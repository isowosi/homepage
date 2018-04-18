define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__components__isowosi_external_footer__isowosi_external_footer = Object.create(_root);
  src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent = class IsowosiExternalFooterComponent extends core.Object {
    get privacyPolicy() {
      return this[privacyPolicy];
    }
    set privacyPolicy(value) {
      this[privacyPolicy] = value;
    }
  };
  (src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent.new = function() {
    this[privacyPolicy] = false;
  }).prototype = src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent.prototype;
  dart.addTypeTests(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent);
  const privacyPolicy = Symbol("IsowosiExternalFooterComponent.privacyPolicy");
  dart.setFieldSignature(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent, () => ({
    __proto__: dart.getFields(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent.__proto__),
    privacyPolicy: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer.dart": src__components__isowosi_external_footer__isowosi_external_footer
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_external_footer.dart"],"names":[],"mappings":";;;;;;;;IAUO;;;;;;;;uBAAa,GAAG;EACvB","file":"isowosi_external_footer.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_external_footer__isowosi_external_footer: src__components__isowosi_external_footer__isowosi_external_footer
  };
});

//# sourceMappingURL=isowosi_external_footer.ddc.js.map
