define(['dart_sdk', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/di/injector/empty', 'packages/angular/src/di/reflector', 'packages/angular/src/facade/exception_handler.template', 'packages/angular/src/core/change_detection/host.template', 'packages/angular/src/core/di.template', 'packages/angular/src/runtime.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/core/zone/ng_zone.template'], function(dart_sdk, application_ref, ng_zone, empty, reflector, exception_handler, host, di, runtime, testability, ng_zone$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__di__reflector = reflector.src__di__reflector;
  const src__facade__exception_handler$46template = exception_handler.src__facade__exception_handler$46template;
  const src__core__change_detection__host$46template = host.src__core__change_detection__host$46template;
  const src__core__linker__component_factory$46template = host.src__core__linker__component_factory$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__core__zone__ng_zone$46template = ng_zone$.src__core__zone__ng_zone$46template;
  const _root = Object.create(null);
  const src__core__application_ref$46template = Object.create(_root);
  let NgZoneAndInjectorToApplicationRefImpl = () => (NgZoneAndInjectorToApplicationRefImpl = dart.constFn(dart.fnType(src__core__application_ref.ApplicationRefImpl, [src__core__zone__ng_zone.NgZone, src__di__injector__injector.Injector])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(src__core__application_ref$46template, {
    /*src__core__application_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  src__core__application_ref$46template.initReflector = function() {
    if (dart.test(src__core__application_ref$46template._visited)) {
      return;
    }
    src__core__application_ref$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__application_ref.ApplicationRefImpl), dart.fn((p0, p1) => new src__core__application_ref.ApplicationRefImpl.new(p0, p1), NgZoneAndInjectorToApplicationRefImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(src__core__application_ref.ApplicationRefImpl), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(src__di__injector__injector.Injector)], core.Object))], ListOfObject())));
    src__facade__exception_handler$46template.initReflector();
    src__core__change_detection__host$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__change_detection__host$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/application_ref.template.ddc", {
    "package:angular/src/core/application_ref.template.dart": src__core__application_ref$46template
  }, '{"version":3,"sourceRoot":"","sources":["application_ref.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MA8BI,8CAAQ;YAAG;;;;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAO,kCAAe,CAAC,4DAAkB,EAAE,SAAC,EAAa,EAAE,EAAe,KAAK,IAAI,iDAAkB,CAAC,EAAE,EAAE,EAAE;AAC5G,IAAO,uCAAoB,CAAC,4DAAkB,EAAE,sCAC9C,oCAAW,8CAAM,kBACjB,sCAAW,mDAAQ;AAErB,IAAM,uDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,iDAAa;EACrB","file":"application_ref.template.ddc.js"}');
  // Exports:
  return {
    src__core__application_ref$46template: src__core__application_ref$46template
  };
});

//# sourceMappingURL=application_ref.template.ddc.js.map
