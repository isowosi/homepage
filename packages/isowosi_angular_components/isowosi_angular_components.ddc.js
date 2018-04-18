define(['dart_sdk', 'packages/isowosi_angular_components/src/components/isowosi_logo/isowosi_logo', 'packages/isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer', 'packages/isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy', 'packages/isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer'], function(dart_sdk, isowosi_logo, isowosi_impressum, isowosi_footer, isowosi_privacy_policy, isowosi_external_footer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__components__isowosi_logo__isowosi_logo = isowosi_logo.src__components__isowosi_logo__isowosi_logo;
  const src__components__isowosi_impressum__isowosi_impressum = isowosi_impressum.src__components__isowosi_impressum__isowosi_impressum;
  const src__components__isowosi_footer__isowosi_footer = isowosi_footer.src__components__isowosi_footer__isowosi_footer;
  const src__components__isowosi_privacy_policy__isowosi_privacy_policy = isowosi_privacy_policy.src__components__isowosi_privacy_policy__isowosi_privacy_policy;
  const src__components__isowosi_external_footer__isowosi_external_footer = isowosi_external_footer.src__components__isowosi_external_footer__isowosi_external_footer;
  const _root = Object.create(null);
  const isowosi_angular_components = Object.create(_root);
  dart.defineLazy(isowosi_angular_components, {
    /*isowosi_angular_components.isowosiDirectives*/get isowosiDirectives() {
      return dart.constList([dart.wrapType(src__components__isowosi_logo__isowosi_logo.IsowosiLogoComponent), dart.wrapType(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent), dart.wrapType(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent), dart.wrapType(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent), dart.wrapType(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent)], core.Type);
    }
  });
  dart.trackLibraries("packages/isowosi_angular_components/isowosi_angular_components.ddc", {
    "package:isowosi_angular_components/isowosi_angular_components.dart": isowosi_angular_components
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_angular_components.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAOiB,4CAAiB;YAAG,iBACnC,+EAAoB,EACpB,8FAAyB,EACzB,qFAAsB,EACtB,4GAA6B,EAC7B,+GAA8B","file":"isowosi_angular_components.ddc.js"}');
  // Exports:
  return {
    isowosi_angular_components: isowosi_angular_components
  };
});

//# sourceMappingURL=isowosi_angular_components.ddc.js.map
