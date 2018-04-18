define(['dart_sdk', 'packages/angular/src/core/testability/testability', 'packages/angular/src/core/render/api', 'packages/angular/src/platform/dom/shared_styles_host', 'packages/angular/src/platform/browser_common', 'packages/angular/src/di/injector/empty', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/application_tokens', 'packages/angular/src/core/security', 'packages/angular/src/platform/dom/events/event_manager', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/core/linker/component_resolver', 'packages/angular/src/core/linker/dynamic_component_loader'], function(dart_sdk, testability, api, shared_styles_host, browser_common, empty, modules, application_ref, app_view_utils, optimizations, ng_zone, application_tokens, security, event_manager, host, component_resolver, dynamic_component_loader) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__core__render__api = api.src__core__render__api;
  const src__platform__dom__shared_styles_host = shared_styles_host.src__platform__dom__shared_styles_host;
  const src__platform__browser_common = browser_common.src__platform__browser_common;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__empty = empty.src__di__injector__empty;
  const src__di__injector__runtime = empty.src__di__injector__runtime;
  const src__bootstrap__modules = modules.src__bootstrap__modules;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__application_tokens = application_tokens.src__core__application_tokens;
  const src__core__security = security.src__core__security;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__core__linker__component_resolver = component_resolver.src__core__linker__component_resolver;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const _root = Object.create(null);
  const src__bootstrap__run = Object.create(_root);
  const $_get = dartx._get;
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToObject = () => (VoidToObject = dart.constFn(dart.fnType(core.Object, [])))();
  let LinkedMapOfObject$VoidToObject = () => (LinkedMapOfObject$VoidToObject = dart.constFn(_js_helper.LinkedMap$(core.Object, VoidToObject())))();
  let VoidToApplicationRef = () => (VoidToApplicationRef = dart.constFn(dart.fnType(src__core__application_ref.ApplicationRef, [])))();
  let VoidToAppViewUtils = () => (VoidToAppViewUtils = dart.constFn(dart.fnType(src__core__linker__app_view_utils.AppViewUtils, [])))();
  let VoidToInjector = () => (VoidToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [])))();
  let MapOfObject$VoidToObject = () => (MapOfObject$VoidToObject = dart.constFn(core.Map$(core.Object, VoidToObject())))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let __ToReflectiveInjector = () => (__ToReflectiveInjector = dart.constFn(dart.fnType(src__di__injector__runtime.ReflectiveInjector, [], [src__di__injector__injector.Injector])))();
  dart.defineLazy(src__bootstrap__run, {
    /*src__bootstrap__run._platformInjectorCache*/get _platformInjectorCache() {
      return null;
    },
    set _platformInjectorCache(_) {}
  });
  src__bootstrap__run.platformInjector = function() {
    if (src__bootstrap__run._platformInjectorCache == null) {
      let testabilityRegistry = new src__core__testability__testability.TestabilityRegistry.new();
      let t = src__core__render__api.sharedStylesHost;
      t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
      dart.dcall(src__platform__browser_common.createInitDomAdapter(testabilityRegistry), []);
      src__bootstrap__run._platformInjectorCache = src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__core__testability__testability.TestabilityRegistry), testabilityRegistry]));
    }
    return src__bootstrap__run._platformInjectorCache;
  };
  src__bootstrap__run.appInjector = function(userProvidedInjector) {
    let minimalInjector = src__bootstrap__modules.minimalApp(src__bootstrap__run.platformInjector());
    let applicationRef = null;
    let appGlobalInjector = new src__bootstrap__run._LazyInjector.new(new (LinkedMapOfObject$VoidToObject()).from([dart.wrapType(src__core__application_ref.ApplicationRef), dart.fn(() => applicationRef, VoidToApplicationRef()), dart.wrapType(src__core__linker__app_view_utils.AppViewUtils), dart.fn(() => src__core__linker__app_view_utils.appViewUtils, VoidToAppViewUtils())]), src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, minimalInjector));
    let userInjector = userProvidedInjector(appGlobalInjector);
    let ngZone = src__runtime__optimizations.unsafeCast(src__core__zone__ng_zone.NgZone, minimalInjector.get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
    return ngZone.run(src__di__injector__injector.Injector, dart.fn(() => {
      applicationRef = new src__core__application_ref.ApplicationRefImpl.new(ngZone, userInjector);
      src__core__linker__app_view_utils.appViewUtils = new src__core__linker__app_view_utils.AppViewUtils.new(src__runtime__optimizations.unsafeCast(core.String, userInjector.get(src__core__application_tokens.APP_ID)), src__runtime__optimizations.unsafeCast(src__core__security.SanitizationService, userInjector.get(dart.wrapType(src__core__security.SanitizationService))), src__runtime__optimizations.unsafeCast(src__platform__dom__events__event_manager.EventManager, minimalInjector.get(dart.wrapType(src__platform__dom__events__event_manager.EventManager))));
      return userInjector;
    }, VoidToInjector()));
  };
  let const$;
  const _providers = Symbol('_providers');
  src__bootstrap__run._LazyInjector = class _LazyInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      let result = this[_providers][$_get](token);
      if (result == null) {
        if (token === dart.wrapType(src__di__injector__injector.Injector)) {
          return this;
        }
        return orElse;
      }
      return result();
    }
  };
  (src__bootstrap__run._LazyInjector.new = function(providers, parent) {
    if (parent === void 0) parent = const$ || (const$ = dart.const(new src__di__injector__empty.EmptyInjector.new()));
    this[_providers] = providers;
    src__bootstrap__run._LazyInjector.__proto__.new.call(this, parent);
  }).prototype = src__bootstrap__run._LazyInjector.prototype;
  dart.addTypeTests(src__bootstrap__run._LazyInjector);
  dart.setMethodSignature(src__bootstrap__run._LazyInjector, () => ({
    __proto__: dart.getMethods(src__bootstrap__run._LazyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__bootstrap__run._LazyInjector, () => ({
    __proto__: dart.getFields(src__bootstrap__run._LazyInjector.__proto__),
    [_providers]: dart.finalFieldType(MapOfObject$VoidToObject())
  }));
  src__bootstrap__run._identityInjector = function(parent) {
    if (parent === void 0) parent = null;
    return parent;
  };
  src__bootstrap__run.runApp = function(T, componentFactory, opts) {
    let createInjector = opts && 'createInjector' in opts ? opts.createInjector : dart.fn(src__bootstrap__run._identityInjector, __ToInjector());
    if (dart.test(src__runtime__optimizations.isDevMode) && componentFactory == null) {
      dart.throw(new core.ArgumentError.notNull('componentFactory'));
    }
    let injector = src__bootstrap__run.appInjector(createInjector);
    let appRef = src__runtime__optimizations.unsafeCast(src__core__application_ref.ApplicationRef, injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
    return appRef.bootstrap(T, componentFactory, injector);
  };
  src__bootstrap__run.runAppAsync = function(T, componentFactory, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let createInjector = opts && 'createInjector' in opts ? opts.createInjector : dart.fn(src__bootstrap__run._identityInjector, __ToInjector());
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      if (componentFactory == null) {
        dart.throw(new core.ArgumentError.notNull('componentFactory'));
      }
      if (beforeComponentCreated == null) {
        dart.throw(new core.ArgumentError.notNull('beforeComponentCreated'));
      }
    }
    let injector = src__bootstrap__run.appInjector(createInjector);
    return beforeComponentCreated(injector).then(src__core__linker__component_factory.ComponentRef$(T), dart.fn(_ => {
      let appRef = src__runtime__optimizations.unsafeCast(src__core__application_ref.ApplicationRef, injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
      return appRef.bootstrap(T, componentFactory, injector);
    }, dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [dart.void])));
  };
  let const$0;
  src__bootstrap__run.runAppLegacy = function(T, componentType, opts) {
    let createInjectorFromProviders = opts && 'createInjectorFromProviders' in opts ? opts.createInjectorFromProviders : const$0 || (const$0 = dart.constList([], core.Object));
    let initReflector = opts && 'initReflector' in opts ? opts.initReflector : null;
    if (!(dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic)) || dart.equals(dart.wrapType(T), componentType))) dart.assertFailed(dart.str`Expected ${componentType} == ${dart.wrapType(T)}`);
    if (initReflector != null) {
      initReflector();
    }
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      if (componentType == null) {
        dart.throw(new core.ArgumentError.notNull('componentType'));
      }
      if (initReflector == null) {
        try {
          src__core__linker__component_resolver.typeToFactory(componentType);
        } catch (_) {
          if (core.StateError.is(_)) {
            dart.throw(new core.ArgumentError.new(dart.str`Could not bootstrap ${componentType}: provide "initReflector".`));
          } else
            throw _;
        }
      }
    }
    return src__bootstrap__run.runApp(T, src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentFactory$(T), src__core__linker__component_resolver.typeToFactory(componentType)), {createInjector: dart.fn(parent => {
        if (parent === void 0) parent = null;
        return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), createInjectorFromProviders]), src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, parent));
      }, __ToReflectiveInjector())});
  };
  let const$1;
  src__bootstrap__run.runAppLegacyAsync = function(T, componentType, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let createInjectorFromProviders = opts && 'createInjectorFromProviders' in opts ? opts.createInjectorFromProviders : const$1 || (const$1 = dart.constList([], core.Object));
    let initReflector = opts && 'initReflector' in opts ? opts.initReflector : null;
    if (!(dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic)) || dart.equals(dart.wrapType(T), componentType))) dart.assertFailed(dart.str`Expected ${componentType} == ${dart.wrapType(T)}`);
    if (initReflector != null) {
      initReflector();
    }
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      if (componentType == null) {
        dart.throw(new core.ArgumentError.notNull('componentType'));
      }
      if (initReflector == null) {
        try {
          src__core__linker__component_resolver.typeToFactory(componentType);
        } catch (_) {
          if (core.StateError.is(_)) {
            dart.throw(new core.ArgumentError.new(dart.str`Could not bootstrap ${componentType}: provide "initReflector".`));
          } else
            throw _;
        }
      }
    }
    return src__bootstrap__run.runAppAsync(T, src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentFactory$(T), src__core__linker__component_resolver.typeToFactory(componentType)), {beforeComponentCreated: beforeComponentCreated, createInjector: dart.fn(parent => {
        if (parent === void 0) parent = null;
        return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), createInjectorFromProviders]), src__runtime__optimizations.unsafeCast(src__di__injector__hierarchical.HierarchicalInjector, parent));
      }, __ToReflectiveInjector())});
  };
  let const$2;
  src__bootstrap__run.bootstrapStatic = function(T, componentType, providers, initReflector) {
    if (providers === void 0) providers = const$2 || (const$2 = dart.constList([], core.Object));
    if (initReflector === void 0) initReflector = null;
    return async.Future$(src__core__linker__component_factory.ComponentRef$(T)).microtask(dart.fn(() => src__bootstrap__run.runAppLegacy(T, componentType, {createInjectorFromProviders: providers, initReflector: initReflector}), dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [])));
  };
  dart.trackLibraries("packages/angular/src/bootstrap/run.ddc", {
    "package:angular/src/bootstrap/run.dart": src__bootstrap__run
  }, '{"version":3,"sourceRoot":"","sources":["run.dart"],"names":[],"mappings":"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","file":"run.ddc.js"}');
  // Exports:
  return {
    src__bootstrap__run: src__bootstrap__run
  };
});

//# sourceMappingURL=run.ddc.js.map
