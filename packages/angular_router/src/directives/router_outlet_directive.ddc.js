define(['dart_sdk', 'packages/angular_router/src/router/router_state', 'packages/angular/src/core/change_detection/host', 'packages/angular_router/src/route_definition', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/di/injector/empty', 'packages/angular_router/src/lifecycle', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_router/src/router_hook'], function(dart_sdk, router_state, host, route_definition, optimizations, empty, lifecycle, lifecycle_hooks, router_hook) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router_state = router_state.src__router__router_state;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = host.src__core__linker__view_container_ref;
  const src__route_definition = route_definition.src__route_definition;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__router_hook = router_hook.src__router_hook;
  const _root = Object.create(null);
  const src__router__router_outlet_token = Object.create(_root);
  const src__router__router = Object.create(_root);
  const src__directives__router_outlet_directive = Object.create(_root);
  const $_get = dartx._get;
  const $values = dartx.values;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  let LinkedMapOfComponentFactory$ComponentRef = () => (LinkedMapOfComponentFactory$ComponentRef = dart.constFn(_js_helper.LinkedMap$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToComponentRef = () => (VoidToComponentRef = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentRef, [])))();
  let MapOfComponentFactory$ComponentRef = () => (MapOfComponentFactory$ComponentRef = dart.constFn(core.Map$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  src__router__router_outlet_token.RouterOutletToken = class RouterOutletToken extends core.Object {
    get routerOutlet() {
      return this[routerOutlet];
    }
    set routerOutlet(value) {
      this[routerOutlet] = value;
    }
  };
  (src__router__router_outlet_token.RouterOutletToken.new = function() {
    this[routerOutlet] = null;
  }).prototype = src__router__router_outlet_token.RouterOutletToken.prototype;
  dart.addTypeTests(src__router__router_outlet_token.RouterOutletToken);
  const routerOutlet = Symbol("RouterOutletToken.routerOutlet");
  dart.setFieldSignature(src__router__router_outlet_token.RouterOutletToken, () => ({
    __proto__: dart.getFields(src__router__router_outlet_token.RouterOutletToken.__proto__),
    routerOutlet: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet)
  }));
  src__router__router.NavigationResult = class NavigationResult extends core.Object {
    toString() {
      return {
        0: "NavigationResult.SUCCESS",
        1: "NavigationResult.BLOCKED_BY_GUARD",
        2: "NavigationResult.INVALID_ROUTE"
      }[this.index];
    }
  };
  (src__router__router.NavigationResult.new = function(x) {
    this.index = x;
  }).prototype = src__router__router.NavigationResult.prototype;
  dart.addTypeTests(src__router__router.NavigationResult);
  dart.setFieldSignature(src__router__router.NavigationResult, () => ({
    __proto__: dart.getFields(src__router__router.NavigationResult.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__router__router.NavigationResult, ['toString']);
  src__router__router.NavigationResult.SUCCESS = dart.const(new src__router__router.NavigationResult.new(0));
  src__router__router.NavigationResult.BLOCKED_BY_GUARD = dart.const(new src__router__router.NavigationResult.new(1));
  src__router__router.NavigationResult.INVALID_ROUTE = dart.const(new src__router__router.NavigationResult.new(2));
  src__router__router.NavigationResult.values = dart.constList([src__router__router.NavigationResult.SUCCESS, src__router__router.NavigationResult.BLOCKED_BY_GUARD, src__router__router.NavigationResult.INVALID_ROUTE], src__router__router.NavigationResult);
  src__router__router.Router = class Router extends core.Object {
    get onRouteActivated() {
      return this.stream;
    }
  };
  (src__router__router.Router.new = function() {
  }).prototype = src__router__router.Router.prototype;
  dart.addTypeTests(src__router__router.Router);
  dart.setGetterSignature(src__router__router.Router, () => ({
    __proto__: dart.getGetters(src__router__router.Router.__proto__),
    onRouteActivated: async.Stream$(src__router__router_state.RouterState)
  }));
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _router = Symbol('_router');
  const _routerHook = Symbol('_routerHook');
  const _loadedComponents = Symbol('_loadedComponents');
  const _activeComponentFactory = Symbol('_activeComponentFactory');
  const _routes = Symbol('_routes');
  let const$;
  const _activeComponent = Symbol('_activeComponent');
  const _shouldReuse = Symbol('_shouldReuse');
  src__directives__router_outlet_directive.RouterOutlet = class RouterOutlet extends core.Object {
    get [_activeComponent]() {
      return this[_loadedComponents][$_get](this[_activeComponentFactory]);
    }
    set routes(routes) {
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        for (let route of routes) {
          route.assertValid();
        }
        let hasDefault = false;
        for (let route of routes) {
          if (dart.test(route.useAsDefault)) {
            if (hasDefault) {
              dart.throw(new core.StateError.new('Only one route can be used as default'));
            }
            hasDefault = true;
          }
        }
      }
      this[_routes] = routes;
    }
    get routes() {
      let l = this[_routes];
      return l != null ? l : JSArrayOfRouteDefinition().of([]);
    }
    ngOnInit() {
      this[_router].registerRootOutlet(this);
    }
    ngOnDestroy() {
      for (let loadedComponent of this[_loadedComponents][$values]) {
        loadedComponent.destroy();
      }
      this[_viewContainerRef].clear();
      this[_router].unregisterRootOutlet(this);
    }
    prepare(componentFactory) {
      return this[_loadedComponents][$putIfAbsent](componentFactory, dart.fn(() => {
        let componentRef = componentFactory.create(src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__router__router_outlet_token.RouterOutletToken), new src__router__router_outlet_token.RouterOutletToken.new()]), src__di__injector__hierarchical.HierarchicalInjector._check(this[_viewContainerRef].injector)));
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;
      }, VoidToComponentRef()));
    }
    activate(componentFactory, oldState, newState) {
      return async.async(core.Null, (function* activate() {
        let activeComponent = this[_activeComponent];
        if (activeComponent != null) {
          let shouldReuse = (yield this[_shouldReuse](activeComponent.instance, oldState, newState));
          if (dart.test(shouldReuse)) {
            if (this[_activeComponentFactory] == componentFactory) return;
            for (let i = dart.notNull(this[_viewContainerRef].length) - 1; i >= 0; --i) {
              this[_viewContainerRef].detach(i);
            }
          } else {
            this[_loadedComponents][$remove](this[_activeComponentFactory]);
            activeComponent.destroy();
            this[_viewContainerRef].clear();
          }
        }
        this[_activeComponentFactory] = componentFactory;
        let component = this.prepare(componentFactory);
        this[_viewContainerRef].insert(component.hostView);
        component.changeDetectorRef.detectChanges();
      }).bind(this));
    }
    [_shouldReuse](instance, oldState, newState) {
      if (src__lifecycle.CanReuse.is(instance)) {
        return instance.canReuse(oldState, newState);
      }
      if (this[_routerHook] != null) {
        return this[_routerHook].canReuse(instance, oldState, newState);
      }
      return false;
    }
  };
  (src__directives__router_outlet_directive.RouterOutlet.new = function(token, viewContainerRef, router, routerHook) {
    this[_loadedComponents] = new (LinkedMapOfComponentFactory$ComponentRef()).new();
    this[_activeComponentFactory] = null;
    this[_routes] = const$ || (const$ = dart.constList([], src__route_definition.RouteDefinition));
    this[_viewContainerRef] = viewContainerRef;
    this[_router] = router;
    this[_routerHook] = routerHook;
    token == null ? null : token.routerOutlet = this;
  }).prototype = src__directives__router_outlet_directive.RouterOutlet.prototype;
  dart.addTypeTests(src__directives__router_outlet_directive.RouterOutlet);
  src__directives__router_outlet_directive.RouterOutlet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getMethods(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    prepare: dart.fnType(src__core__linker__component_factory.ComponentRef, [src__core__linker__component_factory.ComponentFactory]),
    activate: dart.fnType(async.Future$(core.Null), [src__core__linker__component_factory.ComponentFactory, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_shouldReuse]: dart.fnType(async.FutureOr$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setGetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getGetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_activeComponent]: src__core__linker__component_factory.ComponentRef,
    routes: core.List$(src__route_definition.RouteDefinition)
  }));
  dart.setSetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getSetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    routes: core.List$(src__route_definition.RouteDefinition)
  }));
  dart.setFieldSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getFields(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_routerHook]: dart.finalFieldType(src__router_hook.RouterHook),
    [_loadedComponents]: dart.finalFieldType(MapOfComponentFactory$ComponentRef()),
    [_activeComponentFactory]: dart.fieldType(src__core__linker__component_factory.ComponentFactory),
    [_routes]: dart.fieldType(ListOfRouteDefinition())
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.ddc", {
    "package:angular_router/src/router/router_outlet_token.dart": src__router__router_outlet_token,
    "package:angular_router/src/router/router.dart": src__router__router,
    "package:angular_router/src/directives/router_outlet_directive.dart": src__directives__router_outlet_directive
  }, '{"version":3,"sourceRoot":"","sources":["../router/router_outlet_token.dart","../router/router.dart","router_outlet_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;;;sBAAY;EAC3B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YCoC8C,YAAM;;;;EAyBpD;;;;;;;;;;;;;;;;;ACnBI,YAAO,wBAAiB,QAAC,6BAAuB;IAClD;eAmBW,MAA4B;AACrC,oBAAI,qCAAS,GAAE;AACb,iBAAW,QAAS,OAAM,EAAE;AAC1B,eAAK,YAAY;;AAEnB,YAAI,aAAa;AACjB,iBAAW,QAAS,OAAM,EAAE;AAC1B,wBAAI,KAAK,aAAa,GAAE;AACtB,gBAAI,UAAU,EAAE;AACd,yBAAM,IAAI,mBAAU,CAAC;;AAEvB,sBAAU,GAAG;;;;AAInB,mBAAO,GAAG,MAAM;IAClB;;cAGoC,aAAO;6BAAI;IAAE;;AAI/C,mBAAO,mBAAmB,CAAC;IAC7B;;AAIE,eAAS,kBAAmB,wBAAiB,SAAO,EAAE;AACpD,uBAAe,QAAQ;;AAEzB,6BAAiB,MAAM;AACvB,mBAAO,qBAAqB,CAAC;IAC/B;YAMqB,gBAAiC;AACpD,YAAO,wBAAiB,cAAY,CAAC,gBAAgB,EAAE;AACrD,YAAM,eAAe,gBAAgB,OAAO,CAAC,AAAI,wCAAY,CAAC,uCAC5D,iEAAiB,EAAE,IAAI,sDAAiB,kEACvC,uBAAiB,SAAS;AAC7B,oBAAY,kBAAkB,cAAc;AAC5C,cAAO,aAAY;;IAEvB;aAOE,gBAAiC,EACjC,QAAoB,EACpB,QAAoB;AACpB;AACA,YAAM,kBAAkB,sBAAgB;AACxC,YAAI,eAAe,IAAI,MAAM;AAC3B,cAAM,eAAc,MAAM,kBAAY,CACpC,eAAe,SAAS,EACxB,QAAQ,EACR,QAAQ;AAEV,wBAAI,WAAW,GAAE;AAEf,gBAAI,AAAU,6BAAuB,IAAE,gBAAgB,EAAG;AAE1D,qBAAS,IAA6B,aAAzB,uBAAiB,OAAO,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,EAAE,CAAC,EAAE;AACtD,qCAAiB,OAAO,CAAC,CAAC;;iBAEvB;AAEL,mCAAiB,SAAO,CAAC,6BAAuB;AAChD,2BAAe,QAAQ;AACvB,mCAAiB,MAAM;;;AAI3B,qCAAuB,GAAG,gBAAgB;AAC1C,YAAM,YAAY,YAAO,CAAC,gBAAgB;AAC1C,+BAAiB,OAAO,CAAC,SAAS,SAAS;AAC3C,iBAAS,kBAAkB,cAAc;MAC3C;;mBAGE,QAAe,EACf,QAAoB,EACpB,QAAoB;AAEpB,qCAAI,QAAQ,GAAc;AACxB,cAAO,SAAQ,SAAS,CAAC,QAAQ,EAAE,QAAQ;;AAE7C,UAAI,iBAAW,IAAI,MAAM;AACvB,cAAO,kBAAW,SAAS,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ;;AAE1D,YAAO;IACT;;wEA/HE,KAAmC,EAC9B,gBAAiB,EACjB,MAAO,EACK,UAAW;IAZxB,uBAAiB,GAAG;IAGT,6BAAuB;IAGlB,aAAO,GAAG;IAIzB,uBAAiB,GAAjB,gBAAiB;IACjB,aAAO,GAAP,MAAO;IACK,iBAAW,GAAX,UAAW;AAE5B,SAAK,kBAAL,KAAK,aAAc,GAAG;EACxB","file":"router_outlet_directive.ddc.js"}');
  // Exports:
  return {
    src__router__router_outlet_token: src__router__router_outlet_token,
    src__router__router: src__router__router,
    src__directives__router_outlet_directive: src__directives__router_outlet_directive
  };
});

//# sourceMappingURL=router_outlet_directive.ddc.js.map
