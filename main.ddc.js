define(['dart_sdk', 'packages/angular/src/di/injector/empty', 'packages/angular_router/src/location/platform_location', 'packages/angular/src/core/di/opaque_token', 'packages/angular_router/src/location/path_location_strategy', 'packages/angular_router/src/location/browser_platform_location', 'packages/angular_router/src/location/location_strategy', 'packages/angular_router/src/location/location', 'packages/angular_router/src/router_hook', 'packages/angular_router/src/router/router_impl', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/isowosi_homepage/isowosi_homepage.template', 'packages/isowosi_homepage/isowosi_homepage', 'packages/angular/src/bootstrap/run'], function(dart_sdk, empty, platform_location, opaque_token, path_location_strategy, browser_platform_location, location_strategy, location, router_hook, router_impl, router_outlet_directive, angular, angular_router, isowosi_homepage, isowosi_homepage$, run) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__location__platform_location = platform_location.src__location__platform_location;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__location__path_location_strategy = path_location_strategy.src__location__path_location_strategy;
  const src__location__browser_platform_location = browser_platform_location.src__location__browser_platform_location;
  const src__location__location_strategy = location_strategy.src__location__location_strategy;
  const src__location__location = location.src__location__location;
  const src__router_hook = router_hook.src__router_hook;
  const src__router__router_impl = router_impl.src__router__router_impl;
  const src__router__router = router_outlet_directive.src__router__router;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const isowosi_homepage$46template = isowosi_homepage.isowosi_homepage$46template;
  const isowosi_homepage$0 = isowosi_homepage$.isowosi_homepage;
  const src__bootstrap__run = run.src__bootstrap__run;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.rootInjector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$rootInjector.__(parent);
  };
  const _field0 = Symbol('_field0');
  const _field1 = Symbol('_field1');
  const _field2 = Symbol('_field2');
  const _field3 = Symbol('_field3');
  let const$;
  const _getPathLocationStrategy$0 = Symbol('_getPathLocationStrategy$0');
  const _getBrowserPlatformLocation$1 = Symbol('_getBrowserPlatformLocation$1');
  const _getLocation$2 = Symbol('_getLocation$2');
  const _getRouterImpl$3 = Symbol('_getRouterImpl$3');
  const _getInjector$4 = Symbol('_getInjector$4');
  main$46template._Injector$rootInjector = class _Injector$rootInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getPathLocationStrategy$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new src__location__path_location_strategy.PathLocationStrategy.new(this.inject(src__location__platform_location.PlatformLocation, dart.wrapType(src__location__platform_location.PlatformLocation)), core.String._check(this.injectOptional(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new('appBaseHref'))), null))) : t;
    }
    [_getBrowserPlatformLocation$1]() {
      let t = this[_field1];
      return t == null ? this[_field1] = new src__location__browser_platform_location.BrowserPlatformLocation.new() : t;
    }
    [_getLocation$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__location__location.Location.new(this.inject(src__location__location_strategy.LocationStrategy, dart.wrapType(src__location__location_strategy.LocationStrategy))) : t;
    }
    [_getRouterImpl$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__router__router_impl.RouterImpl.new(this.inject(src__location__location.Location, dart.wrapType(src__location__location.Location)), src__router_hook.RouterHook._check(this.injectOptional(dart.wrapType(src__router_hook.RouterHook), null))) : t;
    }
    [_getInjector$4]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__location__location_strategy.LocationStrategy)) {
        return this[_getPathLocationStrategy$0]();
      }
      if (token === dart.wrapType(src__location__platform_location.PlatformLocation)) {
        return this[_getBrowserPlatformLocation$1]();
      }
      if (token === dart.wrapType(src__location__location.Location)) {
        return this[_getLocation$2]();
      }
      if (token === dart.wrapType(src__router__router.Router)) {
        return this[_getRouterImpl$3]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$4]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$rootInjector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    main$46template._Injector$rootInjector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$rootInjector.prototype;
  dart.addTypeTests(main$46template._Injector$rootInjector);
  dart.setMethodSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$rootInjector.__proto__),
    [_getPathLocationStrategy$0]: dart.fnType(src__location__path_location_strategy.PathLocationStrategy, []),
    [_getBrowserPlatformLocation$1]: dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, []),
    [_getLocation$2]: dart.fnType(src__location__location.Location, []),
    [_getRouterImpl$3]: dart.fnType(src__router__router_impl.RouterImpl, []),
    [_getInjector$4]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$rootInjector, () => ({
    __proto__: dart.getFields(main$46template._Injector$rootInjector.__proto__),
    [_field0]: dart.fieldType(src__location__path_location_strategy.PathLocationStrategy),
    [_field1]: dart.fieldType(src__location__browser_platform_location.BrowserPlatformLocation),
    [_field2]: dart.fieldType(src__location__location.Location),
    [_field3]: dart.fieldType(src__router__router_impl.RouterImpl)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    isowosi_homepage$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main.rootInjector*/get rootInjector() {
      return dart.fn(main$46template.rootInjector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    src__bootstrap__run.runApp(isowosi_homepage$0.IsowosiHomepageComponent, isowosi_homepage$46template.IsowosiHomepageComponentNgFactory, {createInjector: main.rootInjector});
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;QA8C+D,2BAAG;;;;;;;;;;;;QC7BzD,2BAAE;;;;;;;oED6BoD,2BAAG,gBAAH,2BAAG;mDAnB9B,MAAmB;2BAAN;UAAY,KAAI,yCAAwB,CAAC,MAAM;EAAC;;;;;;;;;;;;;cAatC,aAAO;yCAAK,IAAI,8DAAwB,CAAC,WAAM,oDAAK,gEAAgB,sBAAG,mBAAc,CAAC,mCAAM,2BAAuB,CAAC,kBAAgB;IAAM;;cACpI,aAAO;yCAAK,IAAI,oEAA2B;IAAE;;cAC3E,aAAO;yCAAK,IAAI,oCAAY,CAAC,WAAM,oDAAK,gEAAgB;IAAE;;cACtD,aAAO;yCAAK,IAAI,uCAAc,CAAC,WAAM,mCAAK,+CAAQ,sCAAG,mBAAc,CAAM,0CAAU,EAAE;IAAM;;YAC/F;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAS,AAAI,2BAAD,gBAAgB;AAC9E,UAAI,AAAU,KAAK,KAAM,gEAAgB,EAAG;AAC1C,cAAO,iCAA0B;;AAEnC,UAAI,AAAU,KAAK,KAAM,gEAAgB,EAAG;AAC1C,cAAO,oCAA6B;;AAEtC,UAAI,AAAU,KAAK,KAAM,+CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,yCAAM,EAAG;AACjC,cAAO,uBAAgB;;AAEzB,UAAI,AAAU,KAAK,KAAM,cAbkC,2BAAG,UAa7B,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;wDAjC0B,MAAmB;2BAAN;IAEd,aAAO;IAEJ,aAAO;IAEtB,aAAO;IAEL,aAAO;AAR4B,gIAAM,MAAM;EAAC;;;;;;;;kCAgBF,2BAAG;;;;;;;;;;;MAoB9D,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IC3DO,AD2DD,2BC3DG,cD2DU;EACrB;;MC/DsB,iBAAY;YAAa,+DAAqB;;;;AAGlE,8BAAM,8CAAC,AAAG,2BAAD,kCAAkC,mBAAkB,iBAAY;EAC3E","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
