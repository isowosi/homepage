define(['dart_sdk', 'packages/angular_router/angular_router.template'], function(dart_sdk, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__routes$46template = Object.create(_root);
  dart.defineLazy(src__routes$46template, {
    /*src__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes$46template.initReflector = function() {
    if (dart.test(src__routes$46template._visited)) {
      return;
    }
    src__routes$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_homepage/src/routes.template.ddc", {
    "package:isowosi_homepage/src/routes.template.dart": src__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["routes.template.dart"],"names":[],"mappings":";;;;;;;;;MAUI,+BAAQ;YAAG;;;;;AAEb,kBAAI,+BAAQ,GAAE;AACZ;;AAEF,sCAAW;AAEX,IAAM,uCAAa;EACrB","file":"routes.template.ddc.js"}');
  // Exports:
  return {
    src__routes$46template: src__routes$46template
  };
});

//# sourceMappingURL=routes.template.ddc.js.map
