define(['dart_sdk', 'packages/angular_router/src/router/router_state', 'packages/angular/src/core/change_detection/host', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/url', 'packages/angular_router/src/location/hash_location_strategy', 'packages/angular_router/src/router/navigation_params', 'packages/collection/src/equality', 'packages/angular_router/src/route_definition', 'packages/angular_router/src/location/location', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router_hook'], function(dart_sdk, router_state, host, router_outlet_directive, url, hash_location_strategy, navigation_params, equality, route_definition, location, lifecycle, router_hook) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router_state = router_state.src__router__router_state;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__url = url.src__url;
  const src__location__hash_location_strategy = hash_location_strategy.src__location__hash_location_strategy;
  const src__router__navigation_params = navigation_params.src__router__navigation_params;
  const src__equality = equality.src__equality;
  const src__route_definition = route_definition.src__route_definition;
  const src__location__location = location.src__location__location;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router_hook = router_hook.src__router_hook;
  const _root = Object.create(null);
  const src__router__router_impl = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $startsWith = dartx.startsWith;
  const $length = dartx.length;
  const $take = dartx.take;
  const $fold = dartx.fold;
  const $substring = dartx.substring;
  const $insert = dartx.insert;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $_get = dartx._get;
  let StreamControllerOfRouterState = () => (StreamControllerOfRouterState = dart.constFn(async.StreamController$(src__router__router_state.RouterState)))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentRef)))();
  let FutureOfNavigationResult = () => (FutureOfNavigationResult = dart.constFn(async.Future$(src__router__router.NavigationResult)))();
  let NavigationResultToNull = () => (NavigationResultToNull = dart.constFn(dart.fnType(core.Null, [src__router__router.NavigationResult])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let NavigationResultToFutureOfNavigationResult = () => (NavigationResultToFutureOfNavigationResult = dart.constFn(dart.fnType(FutureOfNavigationResult(), [src__router__router.NavigationResult])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let StringAndRouteDefinitionToString = () => (StringAndRouteDefinitionToString = dart.constFn(dart.fnType(core.String, [core.String, src__route_definition.RouteDefinition])))();
  let FutureOfMutableRouterState = () => (FutureOfMutableRouterState = dart.constFn(async.Future$(src__router__router_state.MutableRouterState)))();
  let MutableRouterStateToFutureOfMutableRouterState = () => (MutableRouterStateToFutureOfMutableRouterState = dart.constFn(dart.fnType(FutureOfMutableRouterState(), [src__router__router_state.MutableRouterState])))();
  let IterableOfComponentRef = () => (IterableOfComponentRef = dart.constFn(core.Iterable$(src__core__linker__component_factory.ComponentRef)))();
  const _location = Symbol('_location');
  const _routerHook = Symbol('_routerHook');
  const _onRouteActivated = Symbol('_onRouteActivated');
  const _activeState = Symbol('_activeState');
  const _activeComponentRefs = Symbol('_activeComponentRefs');
  const _onNavigationStart = Symbol('_onNavigationStart');
  const _rootOutlet = Symbol('_rootOutlet');
  const _lastNavigation = Symbol('_lastNavigation');
  const _enqueueNavigation = Symbol('_enqueueNavigation');
  const _getAbsolutePath = Symbol('_getAbsolutePath');
  const _navigate = Symbol('_navigate');
  const _canNavigate = Symbol('_canNavigate');
  let const$;
  const _resolveState = Symbol('_resolveState');
  const _canDeactivate = Symbol('_canDeactivate');
  const _canActivate = Symbol('_canActivate');
  const _activateRouterState = Symbol('_activateRouterState');
  const _attachDefaultChildren = Symbol('_attachDefaultChildren');
  const _resolveStateForOutlet = Symbol('_resolveStateForOutlet');
  const _getTypeFromRoute = Symbol('_getTypeFromRoute');
  src__router__router_impl.RouterImpl = class RouterImpl extends src__router__router.Router {
    get current() {
      return this[_activeState];
    }
    get onNavigationStart() {
      let t = this[_onNavigationStart];
      t == null ? this[_onNavigationStart] = StreamControllerOfString().broadcast({sync: true}) : t;
      return this[_onNavigationStart].stream;
    }
    get stream() {
      return this[_onRouteActivated].stream;
    }
    registerRootOutlet(routerOutlet) {
      if (this[_rootOutlet] == null) {
        this[_rootOutlet] = routerOutlet;
        let url = src__url.Url.parse(this[_location].path());
        this[_enqueueNavigation](url.path, new src__router__navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: dart.test(src__url.Url.isHashStrategy) ? url.fragment : src__url.Url.normalizeHash(this[_location].hash()), updateUrl: false}));
      }
    }
    unregisterRootOutlet(routerOutlet) {
      if (dart.equals(this[_rootOutlet], routerOutlet)) {
        this[_rootOutlet] = null;
        this[_activeState] = null;
      }
    }
    navigate(path, navigationParams) {
      if (navigationParams === void 0) navigationParams = null;
      let absolutePath = this[_getAbsolutePath](path, this[_activeState]);
      return this[_enqueueNavigation](absolutePath, navigationParams);
    }
    [_enqueueNavigation](path, navigationParams) {
      return this[_lastNavigation] = this[_lastNavigation].then(src__router__router.NavigationResult, dart.fn(_ => this[_navigate](path, navigationParams), NavigationResultToFutureOfNavigationResult()));
    }
    [_navigate](path, navigationParams, opts) {
      return async.async(src__router__router.NavigationResult, (function* _navigate$() {
        let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
        if (!dart.test(isRedirect)) {
          if (!dart.test(yield this[_canNavigate]())) {
            return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
          } else {
            let t = this[_onNavigationStart];
            t == null ? null : t.add(path);
          }
        }
        navigationParams == null ? null : navigationParams.assertValid();
        let l = (yield this[_routerHook] == null ? null : this[_routerHook].navigationPath(path, navigationParams));
        path = l != null ? l : path;
        path = src__url.Url.normalizePath(path);
        let l$ = (yield this[_routerHook] == null ? null : this[_routerHook].navigationParams(path, navigationParams));
        navigationParams = l$ != null ? l$ : navigationParams;
        navigationParams == null ? null : navigationParams.assertValid();
        let l$0 = navigationParams == null ? null : navigationParams.queryParameters;
        let queryParameters = l$0 != null ? l$0 : new (IdentityMapOfString$String()).new();
        let reload = navigationParams != null ? navigationParams.reload : false;
        if (!dart.test(reload) && this.current != null && path == this.current.path && (() => {
          let l = navigationParams == null ? null : navigationParams.fragment;
          return l != null ? l : '';
        })() === this.current.fragment && dart.test((const$ || (const$ = dart.const(new src__equality.MapEquality.new()))).equals(queryParameters, this.current.queryParameters))) {
          return src__router__router.NavigationResult.SUCCESS;
        }
        let nextState = (yield this[_resolveState](path, navigationParams));
        if (nextState == null) {
          return src__router__router.NavigationResult.INVALID_ROUTE;
        }
        if (dart.test(nextState.routes[$isNotEmpty]) && src__route_definition.RedirectRouteDefinition.is(nextState.routes[$last])) {
          let redirectUrl = src__route_definition.RedirectRouteDefinition.as(nextState.routes[$last]).redirectTo;
          return this[_navigate](this[_getAbsolutePath](redirectUrl, nextState.build()), navigationParams == null ? null : new src__router__navigation_params.NavigationParams.new({fragment: navigationParams.fragment, queryParameters: navigationParams.queryParameters}), {isRedirect: true});
        }
        if (!dart.test(yield this[_canDeactivate](nextState))) {
          return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
        }
        if (!dart.test(yield this[_canActivate](nextState))) {
          return src__router__router.NavigationResult.BLOCKED_BY_GUARD;
        }
        yield this[_activateRouterState](nextState);
        if (navigationParams == null || dart.test(navigationParams.updateUrl)) {
          let url = nextState.build().toUrl();
          if (navigationParams != null && dart.test(navigationParams.replace)) {
            this[_location].replaceState(url);
          } else {
            this[_location].go(url);
          }
        }
        return src__router__router.NavigationResult.SUCCESS;
      }).bind(this));
    }
    [_getAbsolutePath](path, state) {
      if (path[$startsWith]('./')) {
        let currentRoutes = state.routes[$take](dart.notNull(state.routes[$length]) - 1);
        let currentPath = currentRoutes[$fold](core.String, '', dart.fn((soFar, route) => dart.notNull(soFar) + dart.notNull(route.toUrl(state.parameters)), StringAndRouteDefinitionToString()));
        return src__location__location.Location.joinWithSlash(currentPath, path[$substring](2));
      }
      return path;
    }
    [_resolveState](path, navigationParams) {
      return this[_resolveStateForOutlet](this[_rootOutlet], path).then(src__router__router_state.MutableRouterState, dart.fn(routerState => {
        if (routerState != null) {
          routerState.path = path;
          if (navigationParams != null) {
            routerState.fragment = navigationParams.fragment;
            routerState.queryParameters = navigationParams.queryParameters;
          }
          return this[_attachDefaultChildren](routerState);
        }
      }, MutableRouterStateToFutureOfMutableRouterState()));
    }
    [_resolveStateForOutlet](outlet, path) {
      return async.async(src__router__router_state.MutableRouterState, (function* _resolveStateForOutlet$() {
        if (outlet == null) {
          if (path === '') {
            return new src__router__router_state.MutableRouterState.new();
          }
          return null;
        }
        for (let route of outlet.routes) {
          let match = route.toRegExp().matchAsPrefix(path);
          if (match != null) {
            let routerState = null;
            let component = (yield this[_getTypeFromRoute](route));
            let componentRef = component != null ? outlet.prepare(component) : null;
            if (match.end !== path.length) {
              if (componentRef == null) {
                continue;
              }
              let nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              if (nextOutlet == null) {
                continue;
              }
            }
            if (componentRef != null) {
              let nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              routerState = (yield this[_resolveStateForOutlet](nextOutlet, path[$substring](match.end)));
            }
            if (routerState == null) {
              if (match.end !== path.length) {
                continue;
              }
              routerState = new src__router__router_state.MutableRouterState.new();
            }
            routerState.routes[$insert](0, route);
            if (component != null) {
              routerState.factories[$_set](componentRef, component);
              routerState.components[$insert](0, componentRef);
            }
            let parameters = route.parameters;
            let index = 1;
            for (let parameter of parameters) {
              routerState.parameters[$_set](parameter, core.Uri.decodeComponent(match._get(index++)));
            }
            return routerState;
          }
        }
        if (path === '') {
          return new src__router__router_state.MutableRouterState.new();
        }
        return null;
      }).bind(this));
    }
    [_getTypeFromRoute](route) {
      if (src__route_definition.ComponentRouteDefinition.is(route)) {
        return route.component;
      }
      if (src__route_definition.DeferredRouteDefinition.is(route)) {
        return route.loader();
      }
      return null;
    }
    [_attachDefaultChildren](stateSoFar) {
      return async.async(src__router__router_state.MutableRouterState, (function* _attachDefaultChildren$() {
        let nextOutlet = null;
        if (stateSoFar.routes[$length] === 0) {
          nextOutlet = this[_rootOutlet];
        } else {
          let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
          if (component == null) {
            return stateSoFar;
          }
          nextOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(stateSoFar.components[$last].injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
        }
        if (nextOutlet == null) {
          return stateSoFar;
        }
        for (let route of nextOutlet.routes) {
          if (dart.test(route.useAsDefault)) {
            stateSoFar.routes[$add](route);
            let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
            if (component != null) {
              let instance = nextOutlet.prepare(component);
              stateSoFar.factories[$_set](instance, component);
              stateSoFar.components[$add](instance);
              return this[_attachDefaultChildren](stateSoFar);
            }
            return stateSoFar;
          }
        }
        return stateSoFar;
      }).bind(this));
    }
    [_canNavigate]() {
      return async.async(core.bool, (function* _canNavigate() {
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.CanNavigate.is(component) && !dart.test(yield component.canNavigate())) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_canDeactivate](mutableNextState) {
      return async.async(core.bool, (function* _canDeactivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.CanDeactivate.is(component) && !dart.test(yield component.canDeactivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook] != null && !dart.test(yield this[_routerHook].canDeactivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_canActivate](mutableNextState) {
      return async.async(core.bool, (function* _canActivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of mutableNextState.components) {
          let component = componentRef.instance;
          if (src__lifecycle.CanActivate.is(component) && !dart.test(yield component.canActivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook] != null && !dart.test(yield this[_routerHook].canActivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_activateRouterState](mutableNextState) {
      return async.async(dart.dynamic, (function* _activateRouterState() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (src__lifecycle.OnDeactivate.is(component)) {
            component.onDeactivate(this[_activeState], nextState);
          }
        }
        let currentOutlet = this[_rootOutlet];
        for (let i = 0, len = mutableNextState.components[$length]; i < dart.notNull(len); ++i) {
          let resolvedComponentRef = mutableNextState.components[$_get](i);
          let componentFactory = mutableNextState.factories[$_get](resolvedComponentRef);
          yield currentOutlet.activate(componentFactory, this[_activeState], nextState);
          let componentRef = currentOutlet.prepare(componentFactory);
          if (!(componentRef == resolvedComponentRef)) {
            mutableNextState.components[$_set](i, componentRef);
          }
          currentOutlet = src__directives__router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(src__router__router_outlet_token.RouterOutletToken)), 'routerOutlet'));
          let component = componentRef.instance;
          if (src__lifecycle.OnActivate.is(component)) {
            component.onActivate(this[_activeState], nextState);
          }
        }
        this[_onRouteActivated].add(nextState);
        this[_activeState] = nextState;
        this[_activeComponentRefs] = mutableNextState.components;
      }).bind(this));
    }
  };
  (src__router__router_impl.RouterImpl.new = function(location, routerHook) {
    this[_onRouteActivated] = StreamControllerOfRouterState().broadcast({sync: true});
    this[_activeState] = null;
    this[_activeComponentRefs] = JSArrayOfComponentRef().of([]);
    this[_onNavigationStart] = null;
    this[_rootOutlet] = null;
    this[_lastNavigation] = FutureOfNavigationResult().value();
    this[_location] = location;
    this[_routerHook] = routerHook;
    src__url.Url.isHashStrategy = src__location__hash_location_strategy.HashLocationStrategy.is(this[_location].platformStrategy);
    this[_location].subscribe(dart.fn(_ => {
      let url = src__url.Url.parse(this[_location].path());
      let fragment = dart.test(src__url.Url.isHashStrategy) ? url.fragment : src__url.Url.normalizeHash(this[_location].hash());
      let navigationParams = new src__router__navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: fragment, updateUrl: false});
      this[_enqueueNavigation](url.path, navigationParams).then(core.Null, dart.fn(navigationResult => {
        if (navigationResult === src__router__router.NavigationResult.BLOCKED_BY_GUARD) {
          this[_location].replaceState(this[_activeState].toUrl());
        }
      }, NavigationResultToNull()));
    }, dynamicToNull()));
  }).prototype = src__router__router_impl.RouterImpl.prototype;
  dart.addTypeTests(src__router__router_impl.RouterImpl);
  dart.setMethodSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getMethods(src__router__router_impl.RouterImpl.__proto__),
    registerRootOutlet: dart.fnType(dart.void, [src__directives__router_outlet_directive.RouterOutlet]),
    unregisterRootOutlet: dart.fnType(dart.void, [src__directives__router_outlet_directive.RouterOutlet]),
    navigate: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String], [src__router__navigation_params.NavigationParams]),
    [_enqueueNavigation]: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String, src__router__navigation_params.NavigationParams]),
    [_navigate]: dart.fnType(async.Future$(src__router__router.NavigationResult), [core.String, src__router__navigation_params.NavigationParams], {isRedirect: core.bool}),
    [_getAbsolutePath]: dart.fnType(core.String, [core.String, src__router__router_state.RouterState]),
    [_resolveState]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [core.String, src__router__navigation_params.NavigationParams]),
    [_resolveStateForOutlet]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [src__directives__router_outlet_directive.RouterOutlet, core.String]),
    [_getTypeFromRoute]: dart.fnType(async.FutureOr$(src__core__linker__component_factory.ComponentFactory), [src__route_definition.RouteDefinition]),
    [_attachDefaultChildren]: dart.fnType(async.Future$(src__router__router_state.MutableRouterState), [src__router__router_state.MutableRouterState]),
    [_canNavigate]: dart.fnType(async.Future$(core.bool), []),
    [_canDeactivate]: dart.fnType(async.Future$(core.bool), [src__router__router_state.MutableRouterState]),
    [_canActivate]: dart.fnType(async.Future$(core.bool), [src__router__router_state.MutableRouterState]),
    [_activateRouterState]: dart.fnType(async.Future, [src__router__router_state.MutableRouterState])
  }));
  dart.setGetterSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getGetters(src__router__router_impl.RouterImpl.__proto__),
    current: src__router__router_state.RouterState,
    onNavigationStart: async.Stream$(core.String),
    stream: async.Stream$(src__router__router_state.RouterState)
  }));
  dart.setFieldSignature(src__router__router_impl.RouterImpl, () => ({
    __proto__: dart.getFields(src__router__router_impl.RouterImpl.__proto__),
    [_onRouteActivated]: dart.finalFieldType(StreamControllerOfRouterState()),
    [_location]: dart.finalFieldType(src__location__location.Location),
    [_routerHook]: dart.finalFieldType(src__router_hook.RouterHook),
    [_activeState]: dart.fieldType(src__router__router_state.RouterState),
    [_activeComponentRefs]: dart.fieldType(IterableOfComponentRef()),
    [_onNavigationStart]: dart.fieldType(StreamControllerOfString()),
    [_rootOutlet]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_lastNavigation]: dart.fieldType(FutureOfNavigationResult())
  }));
  dart.trackLibraries("packages/angular_router/src/router/router_impl.ddc", {
    "package:angular_router/src/router/router_impl.dart": src__router__router_impl
  }, '{"version":3,"sourceRoot":"","sources":["router_impl.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA+D6B,mBAAY;;;AAIrC,sCAAkB;6CAAK,AAAI,oCAAkC,QAAO;AACpE,YAAO,yBAAkB,OAAO;IAClC;;YAGkC,wBAAiB,OAAO;;uBAGlC,YAAyB;AAC/C,UAAI,iBAAW,IAAI,MAAM;AACvB,yBAAW,GAAG,YAAY;AAE1B,YAAI,MAAM,YAAG,MAAM,CAAC,eAAS,KAAK;AAClC,gCAAkB,CACd,GAAG,KAAK,EACR,IAAI,mDAAgB,mBACC,GAAG,gBAAgB,sBAC1B,YAAG,eAAe,IACtB,GAAG,SAAS,GACZ,YAAG,cAAc,CAAC,eAAS,KAAK,gBAC3B;;IAEvB;yBAG0B,YAAyB;AACjD,sBAAI,iBAAW,EAAI,YAAY,GAAE;AAC/B,yBAAW,GAAG;AACd,0BAAY,GAAG;;IAEnB;aAOE,IAAW,EACX,gBAAiC;uCAAhB;AAEjB,UAAM,eAAe,sBAAgB,CAAC,IAAI,EAAE,kBAAY;AACxD,YAAO,yBAAkB,CAAC,YAAY,EAAE,gBAAgB;IAC1D;yBAIE,IAAW,EACX,gBAAiC;AAEjC,YAAO,sBAAe,GAClB,qBAAe,KAAK,uCAAC,QAAC,CAAC,IAAK,eAAS,CAAC,IAAI,EAAE,gBAAgB;IAClE;gBAME,IAAW,EACX,gBAAiC;AAEhC;YADI,8DAAY;AAEjB,uBAAK,UAAU,GAAE;AAEf,yBAAK,MAAM,kBAAY,KAAI;AACzB,kBAAO,qCAAgB,iBAAiB;iBACnC;AACL,4CAAkB;qCAAM,IAAI;;;AAIhC,wBAAgB,kBAAhB,gBAAgB,YAAa;AAC7B,iBAAO,MAAM,iBAAW,kBAAX,iBAAW,eAAgB,CAAC,IAAI,EAAE,gBAAgB;QAA/D,IAAI,mBAAgE,IAAI;AACxE,YAAI,GAAG,YAAG,cAAc,CAAC,IAAI;AAC7B,kBACI,MAAM,iBAAW,kBAAX,iBAAW,iBAAkB,CAAC,IAAI,EAAE,gBAAgB;QAD9D,gBAAgB,qBAER,gBAAgB;AACxB,wBAAgB,kBAAhB,gBAAgB,YAAa;AAE7B,kBAAuB,gBAAgB,kBAAhB,gBAAgB,gBAAiB;YAApD,sCAAwD;AAC5D,YAAI,SAAS,gBAAgB,IAAI,OAAO,gBAAgB,OAAO,GAAG;AAClE,uBAAK,MAAM,KACP,YAAO,IAAI,QACX,IAAI,IAAI,YAAO,KAAK,IACpB;kBAAC,gBAAgB,kBAAhB,gBAAgB,SAAU;iCAAI;iBAAO,YAAO,SAAS,eACtD,mCAAM,6BAAW,YAAS,CAAC,eAAe,EAAE,YAAO,gBAAgB,IAAG;AACxE,gBAAO,qCAAgB,QAAQ;;AAGjC,YAAmB,aAAY,MAAM,mBAAa,CAAC,IAAI,EAAE,gBAAgB;AACzE,YAAI,SAAS,IAAI,MAAM;AACrB,gBAAO,qCAAgB,cAAc;;AAGvC,sBAAI,SAAS,OAAO,aAAW,sDAC3B,SAAS,OAAO,OAAK,GAA6B;AACpD,cAAI,+DACC,SAAS,OAAO,OAAK,YAAuC;AACjE,gBAAO,gBAAS,CACd,sBAAgB,CAAC,WAAW,EAAE,SAAS,MAAM,KAC7C,gBAAgB,IAAI,OACd,OACA,IAAI,mDAAgB,YACR,gBAAgB,SAAS,mBAClB,gBAAgB,gBAAgB,iBAC7C;;AAIhB,uBAAK,MAAM,oBAAc,CAAC,SAAS,IAAG;AACpC,gBAAO,qCAAgB,iBAAiB;;AAE1C,uBAAK,MAAM,kBAAY,CAAC,SAAS,IAAG;AAClC,gBAAO,qCAAgB,iBAAiB;;AAG1C,cAAM,0BAAoB,CAAC,SAAS;AACpC,YAAI,gBAAgB,IAAI,kBAAQ,gBAAgB,UAAU,GAAE;AAC1D,cAAM,MAAM,SAAS,MAAM,QAAQ;AACnC,cAAI,gBAAgB,IAAI,kBAAQ,gBAAgB,QAAQ,GAAE;AACxD,2BAAS,aAAa,CAAC,GAAG;iBACrB;AACL,2BAAS,GAAG,CAAC,GAAG;;;AAIpB,cAAO,qCAAgB,QAAQ;MACjC;;uBAKwB,IAAW,EAAE,KAAiB;AACpD,UAAI,IAAI,aAAW,CAAC,OAAO;AACzB,YAAI,gBAAgB,KAAK,OAAO,OAAK,CAAqB,aAApB,KAAK,OAAO,SAAO,IAAG;AAC5D,YAAO,cAAc,aAAa,OAAK,cACnC,IAAI,SAAC,KAAK,EAAE,KAAK,KAAW,aAAN,KAAK,iBAAG,KAAK,MAAM,CAAC,KAAK,WAAW;AAE9D,cAAO,iCAAQ,cAAc,CAAC,WAAW,EAAE,IAAI,YAAU,CAAC;;AAG5D,YAAO,KAAI;IACb;oBAIE,IAAW,EACX,gBAAiC;AAEjC,YAAO,6BAAsB,CAAC,iBAAW,EAAE,IAAI,MAAM,+CAAC,QAAC,WAAW;AAChE,YAAI,WAAW,IAAI,MAAM;AACvB,qBAAW,KAAK,GAAG,IAAI;AACvB,cAAI,gBAAgB,IAAI,MAAM;AAC5B,uBAAW,SAAS,GAAG,gBAAgB,SAAS;AAChD,uBAAW,gBAAgB,GAAG,gBAAgB,gBAAgB;;AAEhE,gBAAO,6BAAsB,CAAC,WAAW;;;IAG/C;6BAMI,MAAmB,EAAE,IAAW;AAAE;AACpC,YAAI,MAAM,IAAI,MAAM;AAClB,cAAI,IAAI,KAAI,IAAI;AACd,kBAAO,KAAI,gDAAkB;;AAE/B,gBAAO;;AAGT,iBAAqB,QAAS,OAAM,OAAO,EAAE;AAC3C,cAAM,QAAQ,KAAK,SAAS,gBAAgB,CAAC,IAAI;AACjD,cAAI,KAAK,IAAI,MAAM;AACjB,gBAAmB;AACnB,gBAAM,aAAY,MAAM,uBAAiB,CAAC,KAAK;AAC/C,gBAAa,eACT,SAAS,IAAI,OAAO,MAAM,QAAQ,CAAC,SAAS,IAAI;AAIpD,gBAAI,KAAK,IAAI,KAAI,IAAI,OAAO,EAAE;AAG5B,kBAAI,YAAY,IAAI,MAAM;AACxB;;AAGF,kBAAa,qFACT,YAAY,SAAS,IAAI,CAAC,iEAAiB;AAE/C,kBAAI,UAAU,IAAI,MAAM;AACtB;;;AAIJ,gBAAI,YAAY,IAAI,MAAM;AACxB,kBAAa,qFACT,YAAY,SAAS,IAAI,CAAC,iEAAiB;AAC/C,yBAAW,IAAG,MAAM,4BAAsB,CACtC,UAAU,EAAE,IAAI,YAAU,CAAC,KAAK,IAAI;;AAE1C,gBAAI,WAAW,IAAI,MAAM;AACvB,kBAAI,KAAK,IAAI,KAAI,IAAI,OAAO,EAAE;AAC5B;;AAGF,yBAAW,GAAG,IAAI,gDAAkB;;AAGtC,uBAAW,OAAO,SAAO,CAAC,GAAG,KAAK;AAElC,gBAAI,SAAS,IAAI,MAAM;AACrB,cACE,AAAE,qBAAS,QAAC,YAAY,EAAI,SAAS;cACrC,AAAE,sBAAU,SAAO,CAAC,GAAG,YAAY;;AAGvC,gBAAiB,aAAa,KAAK,WAAW;AAE9C,gBAAI,QAAQ;AACZ,qBAAY,YAAa,WAAU,EAAE;AACnC,yBAAW,WAAW,QAAC,SAAS,EAC5B,QAAG,gBAAgB,CAAC,KAAK,MAAC,KAAK;;AAGrC,kBAAO,YAAW;;;AAItB,YAAI,IAAI,KAAI,IAAI;AACd,gBAAO,KAAI,gDAAkB;;AAG/B,cAAO;MACT;;wBAM6C,KAAqB;AAChE,4DAAI,KAAK,GAA8B;AACrC,cAAO,MAAK,UAAU;;AAExB,2DAAI,KAAK,GAA6B;AACpC,cAAO,MAAK,OAAO;;AAErB,YAAO;IACT;6BAQI,UAA6B;AAAE;AACjC,YAAa;AACb,YAAI,UAAU,OAAO,SAAO,KAAI,GAAG;AACjC,oBAAU,GAAG,iBAAW;eACnB;AAGL,cAAM,aAAY,MAAM,uBAAiB,CAAC,UAAU,OAAO,OAAK;AAChE,cAAI,SAAS,IAAI,MAAM;AACrB,kBAAO,WAAU;;AAGnB,oBAAU,2EAAG,UAAU,WAAW,OAAK,SAAS,IACxC,CAAC,iEAAiB;;AAG5B,YAAI,UAAU,IAAI,MAAM;AACtB,gBAAO,WAAU;;AAGnB,iBAAqB,QAAS,WAAU,OAAO,EAAE;AAE/C,wBAAI,KAAK,aAAa,GAAE;AACtB,sBAAU,OAAO,MAAI,CAAC,KAAK;AAE3B,gBAAM,aAAY,MAAM,uBAAiB,CAAC,UAAU,OAAO,OAAK;AAGhE,gBAAI,SAAS,IAAI,MAAM;AACrB,kBAAM,WAAW,UAAU,QAAQ,CAAC,SAAS;AAC7C,cACE,AAAE,oBAAS,QAAC,QAAQ,EAAI,SAAS;cACjC,AAAE,qBAAU,MAAI,CAAC,QAAQ;AAC3B,oBAAO,6BAAsB,CAAC,UAAU;;AAG1C,kBAAO,WAAU;;;AAIrB,cAAO,WAAU;MACnB;;;AAG4B;AAC1B,iBAAS,eAAgB,2BAAoB,EAAE;AAC7C,cAAM,YAAY,YAAY,SAAS;AACvC,4CAAI,SAAS,gBAAoB,MAAM,SAAS,YAAY,KAAI;AAC9D,kBAAO;;;AAGX,cAAO;MACT;;qBAM4B,gBAAmC;AAAE;AAC/D,YAAY,YAAY,gBAAgB,MAAM;AAC9C,iBAAkB,eAAgB,2BAAoB,EAAE;AACtD,cAAO,YAAY,YAAY,SAAS;AACxC,8CAAI,SAAS,gBACP,MAAM,SAAS,cAAc,CAAC,kBAAY,EAAE,SAAS,IAAI;AAC7D,kBAAO;;AAET,cAAI,iBAAW,IAAI,mBACb,MAAM,iBAAW,cAAc,CAC7B,SAAS,EAAE,kBAAY,EAAE,SAAS,IAAI;AAC5C,kBAAO;;;AAIX,cAAO;MACT;;mBAG0B,gBAAmC;AAAE;AAC7D,YAAY,YAAY,gBAAgB,MAAM;AAC9C,iBAAkB,eAAgB,iBAAgB,WAAW,EAAE;AAC7D,cAAO,YAAY,YAAY,SAAS;AACxC,4CAAI,SAAS,gBACP,MAAM,SAAS,YAAY,CAAC,kBAAY,EAAE,SAAS,IAAI;AAC3D,kBAAO;;AAET,cAAI,iBAAW,IAAI,mBACb,MAAM,iBAAW,YAAY,CAC3B,SAAS,EAAE,kBAAY,EAAE,SAAS,IAAI;AAC5C,kBAAO;;;AAIX,cAAO;MACT;;2BAG4B,gBAAmC;AAAE;AAC/D,YAAM,YAAY,gBAAgB,MAAM;AAExC,iBAAW,eAAgB,2BAAoB,EAAE;AAC/C,cAAM,YAAY,YAAY,SAAS;AACvC,6CAAI,SAAS,GAAkB;AAC7B,qBAAS,aAAa,CAAC,kBAAY,EAAE,SAAS;;;AAIlD,YAAI,gBAAgB,iBAAW;AAC/B,iBAAS,IAAI,GAAG,MAAM,gBAAgB,WAAW,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,EAAE,CAAC,EAAE;AAEtE,cAAM,uBAAuB,gBAAgB,WAAW,QAAC,CAAC;AAC1D,cAAM,mBAAmB,gBAAgB,UAAU,QAAC,oBAAoB;AAExE,gBAAM,aAAa,SAAS,CAAC,gBAAgB,EAAE,kBAAY,EAAE,SAAS;AACtE,cAAM,eAAe,aAAa,QAAQ,CAAC,gBAAgB;AAC3D,gBAAK,AAAU,YAAY,IAAE,oBAAoB,GAAG;AAGlD,4BAAgB,WAAW,QAAC,CAAC,EAAI,YAAY;;AAE/C,uBAAa,2EAAG,YAAY,SAAS,IAAI,CAAC,iEAAiB;AAC3D,cAAM,YAAY,YAAY,SAAS;AACvC,2CAAI,SAAS,GAAgB;AAC3B,qBAAS,WAAW,CAAC,kBAAY,EAAE,SAAS;;;AAIhD,+BAAiB,IAAI,CAAC,SAAS;AAC/B,0BAAY,GAAG,SAAS;AACxB,kCAAoB,GAAG,gBAAgB,WAAW;MACpD;;;sDA7ZgB,QAAS,EAAmB,UAAW;IAfnB,uBAAiB,GACjD,AAAI,yCAAuC,QAAO;IAG1C,kBAAY;IACD,0BAAoB,GAAG;IACrB,wBAAkB;IAC9B,iBAAW;IAMC,qBAAe,GAAG,AAAI,gCAAY;IAE3C,eAAS,GAAT,QAAS;IAAmB,iBAAW,GAAX,UAAW;AACrD,IAAI,2BAAc,iEAAG,eAAS,iBAAiB;AAE/C,mBAAS,UAAU,CAAC,QAAC,CAAC;AACpB,UAAM,MAAM,YAAG,MAAM,CAAC,eAAS,KAAK;AACpC,UAAM,qBAAW,YAAG,eAAe,IAC7B,GAAG,SAAS,GACZ,YAAG,cAAc,CAAC,eAAS,KAAK;AACtC,UAAM,mBAAmB,IAAI,mDAAgB,mBACxB,GAAG,gBAAgB,YAC1B,QAAQ,aACP;AACf,8BAAkB,CAAC,GAAG,KAAK,EAAE,gBAAgB,MAAM,YAAC,QAAC,gBAAgB;AAGnE,YAAI,gBAAgB,KAAI,oCAAgB,iBAAiB,EAAE;AACzD,yBAAS,aAAa,CAAC,kBAAY,MAAM;;;;EAIjD","file":"router_impl.ddc.js"}');
  // Exports:
  return {
    src__router__router_impl: src__router__router_impl
  };
});

//# sourceMappingURL=router_impl.ddc.js.map
