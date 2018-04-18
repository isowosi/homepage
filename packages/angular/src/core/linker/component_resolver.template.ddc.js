define(['dart_sdk', 'packages/angular/src/core/change_detection/host.template', 'packages/angular/src/di/reflector.template', 'packages/angular/src/runtime.template'], function(dart_sdk, host, reflector, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory$46template = host.src__core__linker__component_factory$46template;
  const src__di__reflector$46template = reflector.src__di__reflector$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__core__linker__component_resolver$46template = Object.create(_root);
  dart.defineLazy(src__core__linker__component_resolver$46template, {
    /*src__core__linker__component_resolver$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_resolver$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_resolver$46template._visited)) {
      return;
    }
    src__core__linker__component_resolver$46template._visited = true;
    src__core__linker__component_factory$46template.initReflector();
    src__di__reflector$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/linker/component_resolver.template.ddc", {
    "package:angular/src/core/linker/component_resolver.template.dart": src__core__linker__component_resolver$46template
  }, '{"version":3,"sourceRoot":"","sources":["component_resolver.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAeI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,6DAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,qCAAa;EACrB","file":"component_resolver.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__component_resolver$46template: src__core__linker__component_resolver$46template
  };
});

//# sourceMappingURL=component_resolver.template.ddc.js.map
