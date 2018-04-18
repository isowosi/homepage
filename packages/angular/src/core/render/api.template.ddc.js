define(['dart_sdk', 'packages/angular/src/core/di.template', 'packages/angular/src/core/metadata/view.template', 'packages/angular/src/runtime.template'], function(dart_sdk, di, view, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__metadata__view$46template = view.src__core__metadata__view$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__core__render__api$46template = Object.create(_root);
  dart.defineLazy(src__core__render__api$46template, {
    /*src__core__render__api$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__render__api$46template.initReflector = function() {
    if (dart.test(src__core__render__api$46template._visited)) {
      return;
    }
    src__core__render__api$46template._visited = true;
    src__core__di$46template.initReflector();
    src__core__metadata__view$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/render/api.template.ddc", {
    "package:angular/src/core/render/api.template.dart": src__core__render__api$46template
  }, '{"version":3,"sourceRoot":"","sources":["api.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAcI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,sCAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,qCAAa;EACrB","file":"api.template.ddc.js"}');
  // Exports:
  return {
    src__core__render__api$46template: src__core__render__api$46template
  };
});

//# sourceMappingURL=api.template.ddc.js.map
