define(['dart_sdk', 'packages/angular/src/core/linker/component_resolver', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/di/injector/empty'], function(dart_sdk, component_resolver, host, optimizations, empty) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_resolver = component_resolver.src__core__linker__component_resolver;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = host.src__core__linker__view_container_ref;
  const src__core__linker__component_loader = host.src__core__linker__component_loader;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const _root = Object.create(null);
  const src__core__linker__dynamic_component_loader = Object.create(_root);
  const $remove = dartx.remove;
  let FutureOfComponentFactory = () => (FutureOfComponentFactory = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentFactory)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _loader = Symbol('_loader');
  src__core__linker__dynamic_component_loader.SlowComponentLoader = class SlowComponentLoader extends core.Object {
    load(T, type, injector) {
      let factoryFuture = FutureOfComponentFactory().value(src__core__linker__component_resolver.typeToFactory(type));
      return factoryFuture.then(src__core__linker__component_factory.ComponentRef$(T), dart.fn(component => {
        let reference = this[_loader].loadDetached(dart.dynamic, component, {injector: injector});
        reference.onDestroy(dart.fn(() => {
          reference.location[$remove]();
        }, VoidToNull()));
        return src__runtime__optimizations.unsafeCast(async.FutureOr$(src__core__linker__component_factory.ComponentRef$(T)), reference);
      }, dart.fnType(async.FutureOr$(src__core__linker__component_factory.ComponentRef$(T)), [src__core__linker__component_factory.ComponentFactory])));
    }
    loadNextToLocation(T, type, location, injector) {
      if (injector === void 0) injector = null;
      let factoryFuture = FutureOfComponentFactory().value(src__core__linker__component_resolver.typeToFactory(type));
      return factoryFuture.then(src__core__linker__component_factory.ComponentRef$(T), dart.fn(component => this[_loader].loadNextToLocation(T, src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentFactory$(T), component), location, {injector: injector}), dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory])));
    }
  };
  (src__core__linker__dynamic_component_loader.SlowComponentLoader.new = function(loader) {
    this[_loader] = loader;
  }).prototype = src__core__linker__dynamic_component_loader.SlowComponentLoader.prototype;
  dart.addTypeTests(src__core__linker__dynamic_component_loader.SlowComponentLoader);
  dart.setMethodSignature(src__core__linker__dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getMethods(src__core__linker__dynamic_component_loader.SlowComponentLoader.__proto__),
    load: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__di__injector__injector.Injector]]),
    loadNextToLocation: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__core__linker__view_container_ref.ViewContainerRef], [src__di__injector__injector.Injector]])
  }));
  dart.setFieldSignature(src__core__linker__dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getFields(src__core__linker__dynamic_component_loader.SlowComponentLoader.__proto__),
    [_loader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader)
  }));
  dart.trackLibraries("packages/angular/src/core/linker/dynamic_component_loader.ddc", {
    "package:angular/src/core/linker/dynamic_component_loader.dart": src__core__linker__dynamic_component_loader
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component_loader.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;YA0BkC,IAAS,EAAE,QAAiB;AAE1D,UAAM,gBAAgB,AAAI,gCAAY,CAAC,mDAAa,CAAC,IAAI;AACzD,YAAO,cAAa,KAAK,wDAAC,QAAC,SAAS;AAClC,YAAM,YAAY,aAAO,aAAa,eAAC,SAAS,aAAY,QAAQ;AACpE,iBAAS,UAAU,CAAC;AAClB,mBAAS,SAAS,SAAO;;AAE3B,cAAO,uCAAU,yEAAC,SAAS;;IAE/B;0BAME,IAAS,EACT,QAAyB,EACzB,QAAiB;+BAAR;AAGT,UAAM,gBAAgB,AAAI,gCAAY,CAAC,mDAAa,CAAC,IAAI;AACzD,YAAO,cAAa,KAAK,wDAAC,QAAC,SAAS,IAC3B,aAAO,mBAAmB,IAC/B,sCAAU,4DAAC,SAAS,GACpB,QAAQ,aACE,QAAQ;IAGxB;;kFAlC+B,MAAO;IAAP,aAAO,GAAP,MAAO;EAAC","file":"dynamic_component_loader.ddc.js"}');
  // Exports:
  return {
    src__core__linker__dynamic_component_loader: src__core__linker__dynamic_component_loader
  };
});

//# sourceMappingURL=dynamic_component_loader.ddc.js.map
