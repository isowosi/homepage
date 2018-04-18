define(['dart_sdk', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/di/reflector'], function(dart_sdk, host, optimizations, reflector) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__di__reflector = reflector.src__di__reflector;
  const _root = Object.create(null);
  const src__core__linker__component_resolver = Object.create(_root);
  src__core__linker__component_resolver.typeToFactory = function(typeOrFactory) {
    return src__core__linker__component_factory.ComponentFactory.is(typeOrFactory) ? typeOrFactory : src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentFactory, src__di__reflector.getComponent(src__runtime__optimizations.unsafeCast(core.Type, typeOrFactory)));
  };
  dart.trackLibraries("packages/angular/src/core/linker/component_resolver.ddc", {
    "package:angular/src/core/linker/component_resolver.dart": src__core__linker__component_resolver
  }, '{"version":3,"sourceRoot":"","sources":["component_resolver.dart"],"names":[],"mappings":";;;;;;;;;;iEAY+B,aAAoB;oEAC/C,aAAa,IACP,aAAa,GACb,sCAAU,wDACR,AAAU,+BAAY,CAAC,sCAAU,YAAO,aAAa;EAAG","file":"component_resolver.ddc.js"}');
  // Exports:
  return {
    src__core__linker__component_resolver: src__core__linker__component_resolver
  };
});

//# sourceMappingURL=component_resolver.ddc.js.map
