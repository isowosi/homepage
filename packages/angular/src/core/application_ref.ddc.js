define(['dart_sdk', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/facade/exception_handler', 'packages/angular/src/core/testability/testability', 'packages/angular/src/di/injector/empty'], function(dart_sdk, optimizations, ng_zone, host, exception_handler, testability, empty) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__change_detection__host = host.src__core__change_detection__host;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__facade__exception_handler = exception_handler.src__facade__exception_handler;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const _root = Object.create(null);
  const src__core__application_ref = Object.create(_root);
  const $join = dartx.join;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $replaceWith = dartx.replaceWith;
  const $append = dartx.append;
  const $remove = dartx.remove;
  const $contains = dartx.contains;
  const $clear = dartx.clear;
  let JSArrayOfFunction = () => (JSArrayOfFunction = dart.constFn(_interceptors.JSArray$(core.Function)))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentRef)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let ListOfFunction = () => (ListOfFunction = dart.constFn(core.List$(core.Function)))();
  let ListOfComponentRef = () => (ListOfComponentRef = dart.constFn(core.List$(src__core__linker__component_factory.ComponentRef)))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  src__core__application_ref.createNgZone = function() {
    return new src__core__zone__ng_zone.NgZone.new({enableLongStackTrace: src__runtime__optimizations.isDevMode});
  };
  src__core__application_ref.ApplicationRef = class ApplicationRef extends core.Object {};
  (src__core__application_ref.ApplicationRef.new = function() {
  }).prototype = src__core__application_ref.ApplicationRef.prototype;
  dart.addTypeTests(src__core__application_ref.ApplicationRef);
  src__core__application_ref.ApplicationRef[dart.implements] = () => [src__core__change_detection__host.ChangeDetectionHost];
  const _zone = Symbol('_zone');
  const _injector = Symbol('_injector');
  const _disposeListeners = Symbol('_disposeListeners');
  const _rootComponents = Symbol('_rootComponents');
  const _streamSubscriptions = Symbol('_streamSubscriptions');
  const _exceptionHandler = Symbol('_exceptionHandler');
  let const$;
  const _unloadComponent = Symbol('_unloadComponent');
  const _loadComponent = Symbol('_loadComponent');
  const ApplicationRef_ChangeDetectionHost$ = class ApplicationRef_ChangeDetectionHost extends src__core__application_ref.ApplicationRef {};
  (ApplicationRef_ChangeDetectionHost$.new = function() {
    src__core__change_detection__host.ChangeDetectionHost.new.call(this);
  }).prototype = ApplicationRef_ChangeDetectionHost$.prototype;
  dart.mixinMembers(ApplicationRef_ChangeDetectionHost$, src__core__change_detection__host.ChangeDetectionHost);
  src__core__application_ref.ApplicationRefImpl = class ApplicationRefImpl extends ApplicationRef_ChangeDetectionHost$ {
    registerDisposeListener(dispose) {
      this[_disposeListeners][$add](dispose);
    }
    bootstrap(T, componentFactory, parent) {
      if (parent === void 0) parent = null;
      return src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentRef$(T), this.run(core.Object, dart.fn(() => {
        let compRef = componentFactory.create(parent != null ? parent : this[_injector], const$ || (const$ = dart.constList([], core.List)));
        let existingElement = html.document.querySelector(componentFactory.selector);
        let replacement = null;
        if (existingElement != null) {
          let newElement = compRef.location;
          if (newElement.id == null || newElement.id[$isEmpty]) {
            newElement.id = existingElement.id;
          }
          existingElement[$replaceWith](newElement);
          replacement = newElement;
        } else {
          if (!(compRef.location != null)) dart.assertFailed(dart.str`Could not locate node with selector ${componentFactory.selector}`);
          html.document.body[$append](compRef.location);
        }
        compRef.onDestroy(dart.fn(() => {
          this[_unloadComponent](compRef);
          replacement == null ? null : replacement[$remove]();
        }, VoidToNull()));
        let testability = compRef.injector.get(dart.wrapType(src__core__testability__testability.Testability), null);
        if (testability != null) {
          dart.dsend(compRef.injector.get(dart.wrapType(src__core__testability__testability.TestabilityRegistry)), 'registerApplication', [compRef.location, testability]);
        }
        this[_loadComponent](compRef);
        return compRef;
      }, dart.fnType(src__core__linker__component_factory.ComponentRef$(T), []))));
    }
    [_loadComponent](componentRef) {
      this.registerChangeDetector(componentRef.changeDetectorRef);
      this.tick();
      this[_rootComponents][$add](componentRef);
    }
    [_unloadComponent](componentRef) {
      if (!dart.test(this[_rootComponents][$contains](componentRef))) {
        return;
      }
      this.unregisterChangeDetector(componentRef.changeDetectorRef);
      this[_rootComponents][$remove](componentRef);
    }
    get injector() {
      return this[_injector];
    }
    dispose() {
      for (let ref of this[_rootComponents]) {
        ref.destroy();
      }
      for (let dispose of this[_disposeListeners]) {
        dart.dcall(dispose, []);
      }
      this[_disposeListeners][$clear]();
      for (let subscription of this[_streamSubscriptions]) {
        subscription.cancel();
      }
      this[_streamSubscriptions][$clear]();
    }
    handleUncaughtException(error, trace) {
      if (trace === void 0) trace = null;
      this[_exceptionHandler].call(error, trace);
    }
    runInZone(R, callback) {
      return this[_zone].run(R, callback);
    }
  };
  (src__core__application_ref.ApplicationRefImpl.new = function(zone, injector) {
    this[_disposeListeners] = JSArrayOfFunction().of([]);
    this[_rootComponents] = JSArrayOfComponentRef().of([]);
    this[_streamSubscriptions] = JSArrayOfStreamSubscription().of([]);
    this[_exceptionHandler] = null;
    this[_zone] = zone;
    this[_injector] = injector;
    src__core__application_ref.ApplicationRefImpl.__proto__.new.call(this);
    this[_zone].run(core.Null, dart.fn(() => {
      this[_exceptionHandler] = src__runtime__optimizations.unsafeCast(src__facade__exception_handler.ExceptionHandler, this[_injector].get(dart.wrapType(src__facade__exception_handler.ExceptionHandler)));
    }, VoidToNull()));
    this[_streamSubscriptions][$add](this[_zone].onError.listen(dart.fn(error => {
      this.handleUncaughtException(error.error, core.StackTrace.fromString(error.stackTrace[$join]('\n')));
    }, NgZoneErrorToNull())));
    this[_streamSubscriptions][$add](this[_zone].onMicrotaskEmpty.listen(dart.fn(_ => {
      this[_zone].runGuarded(dart.fn(() => {
        this.tick();
      }, VoidToNull()));
    }, ObjectToNull())));
  }).prototype = src__core__application_ref.ApplicationRefImpl.prototype;
  dart.addTypeTests(src__core__application_ref.ApplicationRefImpl);
  dart.setMethodSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getMethods(src__core__application_ref.ApplicationRefImpl.__proto__),
    registerDisposeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    bootstrap: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], [src__di__injector__injector.Injector]]),
    [_loadComponent]: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef]),
    [_unloadComponent]: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef]),
    dispose: dart.fnType(dart.void, []),
    handleUncaughtException: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
    runInZone: dart.gFnType(R => [R, [dart.fnType(R, [])]])
  }));
  dart.setGetterSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getGetters(src__core__application_ref.ApplicationRefImpl.__proto__),
    injector: src__di__injector__injector.Injector
  }));
  dart.setFieldSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getFields(src__core__application_ref.ApplicationRefImpl.__proto__),
    [_zone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_injector]: dart.finalFieldType(src__di__injector__injector.Injector),
    [_disposeListeners]: dart.finalFieldType(ListOfFunction()),
    [_rootComponents]: dart.finalFieldType(ListOfComponentRef()),
    [_streamSubscriptions]: dart.finalFieldType(ListOfStreamSubscription()),
    [_exceptionHandler]: dart.fieldType(src__facade__exception_handler.ExceptionHandler)
  }));
  dart.trackLibraries("packages/angular/src/core/application_ref.ddc", {
    "package:angular/src/core/application_ref.dart": src__core__application_ref
  }, '{"version":3,"sourceRoot":"","sources":["application_ref.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAeyB,KAAI,mCAAM,wBAAuB,qCAAS;EAAC;;;EAqCpE;;;;;;;;;;;;;;;;;;4BA4B+B,OAAc;AACzC,6BAAiB,MAAI,CAAC,OAAO;IAC/B;iBAGE,gBAAoC,EACpC,MAAe;6BAAN;AAET,YAAO,uCAAU,wDAAC,QAAG,cAAC;AACpB,YAAI,UAAU,gBAAgB,OAAO,CAAC,MAAM,WAAN,MAAM,GAAI,eAAS,EAAE;AAC3D,YAAQ,kBACJ,aAAQ,cAAc,CAAC,gBAAgB,SAAS;AACpD,YAAQ;AACR,YAAI,eAAe,IAAI,MAAM;AAC3B,cAAQ,aAAa,OAAO,SAAS;AAIrC,cAAI,UAAU,GAAG,IAAI,QAAQ,UAAU,GAAG,UAAQ,EAAE;AAClD,sBAAU,GAAG,GAAG,eAAe,GAAG;;AAEpC,yBAAe,cAAY,CAAC,UAAU;AACtC,qBAAW,GAAG,UAAU;eACnB;AACL,gBAAO,OAAO,SAAS,IAAI,yBACvB,+CAAuC,gBAAgB,SAAS;AACpE,uBAAQ,KAAK,SAAO,CAAC,OAAO,SAAS;;AAEvC,eAAO,UAAU,CAAC;AAChB,gCAAgB,CAAC,OAAO;AACxB,qBAAW,kBAAX,WAAW,SAAQ;;AAErB,YAAI,cAAc,OAAO,SAAS,IAAI,CAAC,8DAAW,EAAE;AACpD,YAAI,WAAW,IAAI,MAAM;AACvB,4BAAO,SAAS,IACR,CAAC,sEAAmB,2BACH,OAAO,SAAS,EAAE,WAAW;;AAExD,4BAAc,CAAC,OAAO;AACtB,cAAO,QAAO;;IAElB;qBAEoB,YAAkC;AACpD,iCAAsB,CAAC,YAAY,kBAAkB;AACrD,eAAI;AACJ,2BAAe,MAAI,CAAC,YAAY;IAClC;uBAEsB,YAAkC;AACtD,qBAAK,qBAAe,WAAS,CAAC,YAAY,IAAG;AAC3C;;AAEF,mCAAwB,CAAC,YAAY,kBAAkB;AACvD,2BAAe,SAAO,CAAC,YAAY;IACrC;;YAGyB,gBAAS;;;AAIhC,eAAS,MAAO,sBAAe,EAAE;AAC/B,WAAG,QAAQ;;AAEb,eAAS,UAAW,wBAAiB,EAAE;AACrC,0BAAO;;AAET,6BAAiB,QAAM;AACvB,eAAS,eAAgB,2BAAoB,EAAE;AAC7C,oBAAY,OAAO;;AAErB,gCAAoB,QAAM;IAC5B;4BAG6B,KAAY,EAAG,KAAgB;4BAAL;AACrD,6BAAiB,KAAK,CAAC,KAAK,EAAE,KAAK;IACrC;iBAGe,QAAqB;YAAK,YAAK,IAAI,IAAC,QAAQ;IAAC;;gEAjGpC,IAAK,EAAO,QAAS;IANxB,uBAAiB,GAAG;IAChB,qBAAe,GAAG;IACZ,0BAAoB,GAAG;IAErC,uBAAiB;IAEV,WAAK,GAAL,IAAK;IAAO,eAAS,GAAT,QAAS;;AAC3C,eAAK,IAAI,YAAC;AACR,6BAAiB,GAAG,sCAAU,kDAAC,eAAS,IAAI,CAAC,8DAAgB;;AAE/D,8BAAoB,MAAI,CAAC,WAAK,QAAQ,OAAO,CAAC,QAAC,KAAiB;AAC9D,kCAAuB,CACrB,KAAK,MAAM,EACX,AAAI,0BAAqB,CAAC,KAAK,WAAW,OAAK,CAAC;;AAGpD,8BAAoB,MAAI,CAAC,WAAK,iBAAiB,OAAO,CAAC,QAAC,CAAC;AACvD,iBAAK,WAAW,CAAC;AACf,iBAAI;;;EAGV","file":"application_ref.ddc.js"}');
  // Exports:
  return {
    src__core__application_ref: src__core__application_ref
  };
});

//# sourceMappingURL=application_ref.ddc.js.map
