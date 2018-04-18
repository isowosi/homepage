define(['dart_sdk', 'packages/isowosi_angular_components/src/all_components.template', 'packages/isowosi_angular_components/src/routes.template'], function(dart_sdk, all_components, routes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__all_components$46template = all_components.src__all_components$46template;
  const src__routes$46template = routes.src__routes$46template;
  const _root = Object.create(null);
  const isowosi_angular_components$46template = Object.create(_root);
  dart.defineLazy(isowosi_angular_components$46template, {
    /*isowosi_angular_components$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  isowosi_angular_components$46template.initReflector = function() {
    if (dart.test(isowosi_angular_components$46template._visited)) {
      return;
    }
    isowosi_angular_components$46template._visited = true;
    src__all_components$46template.initReflector();
    src__all_components$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_angular_components/isowosi_angular_components.template.ddc", {
    "package:isowosi_angular_components/isowosi_angular_components.template.dart": isowosi_angular_components$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_angular_components.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,oCAAa;EACrB","file":"isowosi_angular_components.template.ddc.js"}');
  // Exports:
  return {
    isowosi_angular_components$46template: isowosi_angular_components$46template
  };
});

//# sourceMappingURL=isowosi_angular_components.template.ddc.js.map
