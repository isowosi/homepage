define(['dart_sdk', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/di/reflector', 'packages/angular/src/core/di.template', 'packages/angular/src/core/change_detection/host.template', 'packages/angular/src/core/linker/component_resolver.template', 'packages/angular/src/runtime.template'], function(dart_sdk, dynamic_component_loader, host, reflector, di, host$, component_resolver, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const src__core__linker__component_loader = host.src__core__linker__component_loader;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__linker__component_factory$46template = host$.src__core__linker__component_factory$46template;
  const src__core__linker__component_loader$46template = host$.src__core__linker__component_loader$46template;
  const src__core__linker__view_container_ref$46template = host$.src__core__linker__view_container_ref$46template;
  const src__core__linker__component_resolver$46template = component_resolver.src__core__linker__component_resolver$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__core__linker__dynamic_component_loader$46template = Object.create(_root);
  let ComponentLoaderToSlowComponentLoader = () => (ComponentLoaderToSlowComponentLoader = dart.constFn(dart.fnType(src__core__linker__dynamic_component_loader.SlowComponentLoader, [src__core__linker__component_loader.ComponentLoader])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(src__core__linker__dynamic_component_loader$46template, {
    /*src__core__linker__dynamic_component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__core__linker__dynamic_component_loader$46template.initReflector = function() {
    if (dart.test(src__core__linker__dynamic_component_loader$46template._visited)) {
      return;
    }
    src__core__linker__dynamic_component_loader$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), dart.fn(p0 => new src__core__linker__dynamic_component_loader.SlowComponentLoader.new(p0), ComponentLoaderToSlowComponentLoader()));
    src__di__reflector.registerDependencies(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__linker__component_loader.ComponentLoader)], core.Object))], ListOfObject())));
    src__core__di$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/linker/dynamic_component_loader.template.ddc", {
    "package:angular/src/core/linker/dynamic_component_loader.template.dart": src__core__linker__dynamic_component_loader$46template
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component_loader.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAuBI,+DAAQ;YAAG;;;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAO,kCAAe,CAAC,8EAAmB,EAAE,QAAC,EAAsB,IAAK,IAAI,mEAAmB,CAAC,EAAE;AAClG,IAAO,uCAAoB,CAAC,8EAAmB,EAAE,sCAC/C,oCAAW,kEAAe;AAE5B,IAAM,sCAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,8DAAa;EACrB","file":"dynamic_component_loader.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__dynamic_component_loader$46template: src__core__linker__dynamic_component_loader$46template
  };
});

//# sourceMappingURL=dynamic_component_loader.template.ddc.js.map
