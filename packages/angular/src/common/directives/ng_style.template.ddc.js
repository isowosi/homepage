define(['dart_sdk', 'packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template', 'packages/angular/core.template', 'packages/angular/src/runtime.template'], function(dart_sdk, default_keyvalue_differ, core, runtime) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__differs__default_keyvalue_differ$46template = default_keyvalue_differ.src__core__change_detection__differs__default_keyvalue_differ$46template;
  const core$46template = core.core$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_style$46template = Object.create(_root);
  dart.defineLazy(src__common__directives__ng_style$46template, {
    /*src__common__directives__ng_style$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_style$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_style$46template._visited)) {
      return;
    }
    src__common__directives__ng_style$46template._visited = true;
    src__core__change_detection__differs__default_keyvalue_differ$46template.initReflector();
    core$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/common/directives/ng_style.template.ddc", {
    "package:angular/src/common/directives/ng_style.template.dart": src__common__directives__ng_style$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_style.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAeI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,sFAAa;AACnB,IAAM,6BAAa;AACnB,IAAM,qCAAa;EACrB","file":"ng_style.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_style$46template: src__common__directives__ng_style$46template
  };
});

//# sourceMappingURL=ng_style.template.ddc.js.map
