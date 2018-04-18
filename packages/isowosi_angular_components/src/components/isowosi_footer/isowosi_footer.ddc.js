define(['dart_sdk', 'packages/isowosi_angular_components/src/routes'], function(dart_sdk, routes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__routes = routes.src__routes;
  const _root = Object.create(null);
  const src__components__isowosi_footer__isowosi_footer = Object.create(_root);
  src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent = class IsowosiFooterComponent extends core.Object {
    get privacyPolicyUrl() {
      return this[privacyPolicyUrl];
    }
    set privacyPolicyUrl(value) {
      super.privacyPolicyUrl = value;
    }
    get impressumUrl() {
      return this[impressumUrl];
    }
    set impressumUrl(value) {
      super.impressumUrl = value;
    }
    get privacyPolicy() {
      return this[privacyPolicy];
    }
    set privacyPolicy(value) {
      this[privacyPolicy] = value;
    }
  };
  (src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent.new = function() {
    this[privacyPolicyUrl] = src__routes.privacyPolicyRoute.toUrl();
    this[impressumUrl] = src__routes.impressumRoute.toUrl();
    this[privacyPolicy] = false;
  }).prototype = src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent.prototype;
  dart.addTypeTests(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent);
  const privacyPolicyUrl = Symbol("IsowosiFooterComponent.privacyPolicyUrl");
  const impressumUrl = Symbol("IsowosiFooterComponent.impressumUrl");
  const privacyPolicy = Symbol("IsowosiFooterComponent.privacyPolicy");
  dart.setFieldSignature(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent, () => ({
    __proto__: dart.getFields(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent.__proto__),
    privacyPolicyUrl: dart.finalFieldType(core.String),
    impressumUrl: dart.finalFieldType(core.String),
    privacyPolicy: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.dart": src__components__isowosi_footer__isowosi_footer
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_footer.dart"],"names":[],"mappings":";;;;;;;;;IAWe;;;;;;IACA;;;;;;IAER;;;;;;;;IAHQ,sBAAgB,GAAG,8BAAkB,MAAM;IAC3C,kBAAY,GAAG,0BAAc,MAAM;IAE3C,mBAAa,GAAG;EACvB","file":"isowosi_footer.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_footer__isowosi_footer: src__components__isowosi_footer__isowosi_footer
  };
});

//# sourceMappingURL=isowosi_footer.ddc.js.map
