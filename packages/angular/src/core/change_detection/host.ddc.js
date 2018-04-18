define(['dart_sdk', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/linker/element_ref', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/render/api', 'packages/angular/src/di/errors', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/di/reflector'], function(dart_sdk, empty, change_detector_ref, constants, optimizations, element_ref, view_type, api, errors, app_view_utils, reflector) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__render__api = api.src__core__render__api;
  const src__di__errors = errors.src__di__errors;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__di__reflector = reflector.src__di__reflector;
  const _root = Object.create(null);
  const src__di__injector__element = Object.create(_root);
  const src__core__change_detection__host = Object.create(_root);
  const src__core__linker__view_container_ref = Object.create(_root);
  const src__core__linker__component_loader = Object.create(_root);
  const src__core__linker__view_container = Object.create(_root);
  const src__core__linker__template_ref = Object.create(_root);
  const src__core__linker__app_view = Object.create(_root);
  const src__core__linker__view_ref = Object.create(_root);
  const src__core__linker__component_factory = Object.create(_root);
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $clear = dartx.clear;
  const $indexOf = dartx.indexOf;
  const $addAll = dartx.addAll;
  const $removeAt = dartx.removeAt;
  const $insert = dartx.insert;
  const $clone = dartx.clone;
  const $contains = dartx.contains;
  const $last = dartx.last;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $classes = dartx.classes;
  const $attributes = dartx.attributes;
  const $getNamespacedAttributes = dartx.getNamespacedAttributes;
  const $append = dartx.append;
  const $nextNode = dartx.nextNode;
  const $createElement = dartx.createElement;
  let JSArrayOfChangeDetectorRef = () => (JSArrayOfChangeDetectorRef = dart.constFn(_interceptors.JSArray$(src__core__change_detection__change_detector_ref.ChangeDetectorRef)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(src__core__linker__app_view.AppView$(dart.void)))();
  let AppViewOfvoidAndElementTovoid = () => (AppViewOfvoidAndElementTovoid = dart.constFn(dart.fnType(dart.void, [AppViewOfvoid(), html.Element])))();
  let JSArrayOfAppViewOfvoidAndElementTovoid = () => (JSArrayOfAppViewOfvoidAndElementTovoid = dart.constFn(_interceptors.JSArray$(AppViewOfvoidAndElementTovoid())))();
  let JSArrayOfAppViewOfvoid = () => (JSArrayOfAppViewOfvoid = dart.constFn(_interceptors.JSArray$(AppViewOfvoid())))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfChangeDetectorRef = () => (ListOfChangeDetectorRef = dart.constFn(core.List$(src__core__change_detection__change_detector_ref.ChangeDetectorRef)))();
  let ListOfAppViewOfvoidAndElementTovoid = () => (ListOfAppViewOfvoidAndElementTovoid = dart.constFn(core.List$(AppViewOfvoidAndElementTovoid())))();
  let ListOfAppViewOfvoid = () => (ListOfAppViewOfvoid = dart.constFn(core.List$(AppViewOfvoid())))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core.List$(html.Element)))();
  let JSArrayOfAppView = () => (JSArrayOfAppView = dart.constFn(_interceptors.JSArray$(src__core__linker__app_view.AppView)))();
  let ListOfAppView = () => (ListOfAppView = dart.constFn(core.List$(src__core__linker__app_view.AppView)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfVoidTovoid = () => (JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let ListOfNode = () => (ListOfNode = dart.constFn(core.List$(html.Node)))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  const _view = Symbol('_view');
  const _nodeIndex = Symbol('_nodeIndex');
  const _parent = Symbol('_parent');
  const _injectFrom = Symbol('_injectFrom');
  src__di__injector__element.ElementInjector = class ElementInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_injectFrom](view, nodeIndex, token, orElse) {
      return view.injectorGet(token, nodeIndex, orElse);
    }
    injectOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this[_injectFrom](this[_view], this[_nodeIndex], token, orElse);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this[_injectFrom](this[_view].parentView, this[_view].viewData.parentIndex, token, orElse);
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return dart.throw(new core.UnimplementedError.new());
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return dart.throw(new core.UnimplementedError.new());
    }
    get parent() {
      if (this[_parent] == null) {
        this[_parent] = new src__di__injector__element.ElementInjector.new(this[_view].parentView, this[_view].viewData.parentIndex);
      }
      return this[_parent];
    }
  };
  (src__di__injector__element.ElementInjector.new = function(view, nodeIndex) {
    this[_parent] = null;
    this[_view] = view;
    this[_nodeIndex] = nodeIndex;
    src__di__injector__element.ElementInjector.__proto__.new.call(this);
  }).prototype = src__di__injector__element.ElementInjector.prototype;
  dart.addTypeTests(src__di__injector__element.ElementInjector);
  dart.setMethodSignature(src__di__injector__element.ElementInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__element.ElementInjector.__proto__),
    [_injectFrom]: dart.fnType(dart.dynamic, [src__core__linker__app_view.AppView, core.int, core.Object, core.Object]),
    injectOptional: dart.fnType(dart.dynamic, [core.Object], [core.Object]),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__element.ElementInjector, () => ({
    __proto__: dart.getFields(src__di__injector__element.ElementInjector.__proto__),
    [_view]: dart.finalFieldType(src__core__linker__app_view.AppView),
    [_nodeIndex]: dart.finalFieldType(core.int),
    [_parent]: dart.fieldType(src__di__injector__hierarchical.HierarchicalInjector)
  }));
  const _lastGuardedView = Symbol('_lastGuardedView');
  const _lastCaughtException = Symbol('_lastCaughtException');
  const _lastCaughtTrace = Symbol('_lastCaughtTrace');
  const _runningTick = Symbol('_runningTick');
  const _changeDetectors = Symbol('_changeDetectors');
  const _scheduledCallbacks = Symbol('_scheduledCallbacks');
  const _scheduledViews = Symbol('_scheduledViews');
  const _scheduledElements = Symbol('_scheduledElements');
  const _scheduleViewUpdate = Symbol('_scheduleViewUpdate');
  const _runViewUpdates = Symbol('_runViewUpdates');
  const _resetViewErrors = Symbol('_resetViewErrors');
  const _runTick = Symbol('_runTick');
  const _runTickGuarded = Symbol('_runTickGuarded');
  const _checkForChangeDetectionError = Symbol('_checkForChangeDetectionError');
  src__core__change_detection__host.ChangeDetectionHost = class ChangeDetectionHost extends core.Object {
    static get checkForCrashes() {
      return (() => {
        let t = src__core__change_detection__host.ChangeDetectionHost._current;
        return t == null ? null : t[_lastGuardedView];
      })() != null;
    }
    static handleCrash(view, error, trace) {
      let current = src__core__change_detection__host.ChangeDetectionHost._current;
      current[_lastGuardedView] = view;
      current[_lastCaughtException] = error;
      current[_lastCaughtTrace] = trace;
    }
    static scheduleViewUpdate(callback, view, host) {
      if (view.cdState === src__core__change_detection__constants.ChangeDetectorState.Errored) {
        return;
      }
      let current = src__core__change_detection__host.ChangeDetectionHost._current;
      if (!(current != null)) dart.assertFailed('No current ChangeDetectionHost in context');
      current[_scheduleViewUpdate](callback, view, host);
    }
    registerChangeDetector(detector) {
      this[_changeDetectors][$add](detector);
    }
    unregisterChangeDetector(detector) {
      this[_changeDetectors][$remove](detector);
    }
    [_scheduleViewUpdate](callback, view, host) {
      let callbacks = this[_scheduledCallbacks];
      let views = this[_scheduledViews];
      let elements = this[_scheduledElements];
      if (dart.test(callbacks[$isEmpty])) {
        async.scheduleMicrotask(dart.bind(this, _runViewUpdates));
      }
      callbacks[$add](callback);
      views[$add](view);
      elements[$add](host);
    }
    [_runViewUpdates]() {
      let callbacks = this[_scheduledCallbacks];
      let views = this[_scheduledViews];
      let elements = this[_scheduledElements];
      if (!dart.test(callbacks[$isNotEmpty])) dart.assertFailed('Expected at least one update');
      for (let i = 0, l = callbacks[$length]; i < dart.notNull(l); i++) {
        let callback = callbacks[$_get](i);
        let view = views[$_get](i);
        let host = elements[$_get](i);
        try {
          callback(view, host);
        } catch (e) {
          let s = dart.stackTrace(e);
          this.reportViewException(view, e, s);
          dart.rethrow(e);
        }
      }
      callbacks[$clear]();
      views[$clear]();
      elements[$clear]();
    }
    tick() {
      if (dart.test(src__runtime__optimizations.isDevMode) && dart.test(this[_runningTick])) {
        dart.throw(new core.StateError.new('Change detecion (tick) was called recursively'));
      }
      try {
        src__core__change_detection__host.ChangeDetectionHost._current = this;
        this[_runningTick] = true;
        this[_runTick]();
      } catch (e) {
        let s = dart.stackTrace(e);
        if (!dart.test(this[_runTickGuarded]())) {
          this.handleUncaughtException(e, s);
        }
        dart.rethrow(e);
      } finally {
        src__core__change_detection__host.ChangeDetectionHost._current = null;
        this[_runningTick] = false;
        this[_resetViewErrors]();
      }
    }
    [_runTick]() {
      let detectors = this[_changeDetectors];
      let length = detectors[$length];
      for (let i = 0; i < dart.notNull(length); i++) {
        detectors[$_get](i).detectChanges();
      }
      if (dart.test(src__core__change_detection__host.ChangeDetectionHost._enforceNoNewChanges)) {
        for (let i = 0; i < dart.notNull(length); i++) {
          detectors[$_get](i).checkNoChanges();
        }
      }
    }
    [_runTickGuarded]() {
      let detectors = this[_changeDetectors];
      let length = detectors[$length];
      for (let i = 0; i < dart.notNull(length); i++) {
        let detector = detectors[$_get](i);
        if (src__core__linker__view_ref.ViewRefImpl.is(detector)) {
          let view = detector.appView;
          this[_lastGuardedView] = view;
          view.detectChanges();
        }
      }
      return this[_checkForChangeDetectionError]();
    }
    [_checkForChangeDetectionError]() {
      if (this[_lastGuardedView] != null) {
        this.reportViewException(this[_lastGuardedView], this[_lastCaughtException], this[_lastCaughtTrace]);
        this[_resetViewErrors]();
        return true;
      }
      return false;
      return false;
    }
    [_resetViewErrors]() {
      this[_lastGuardedView] = this[_lastCaughtException] = this[_lastCaughtTrace] = null;
      return null;
      return null;
    }
    reportViewException(view, error, trace) {
      if (trace === void 0) trace = null;
      view.cdState = src__core__change_detection__constants.ChangeDetectorState.Errored;
      this.handleUncaughtException(error, trace);
      return null;
      return null;
    }
    run(R, callback) {
      let completer = async.Completer$(R).new();
      let result = null;
      this.runInZone(core.Null, dart.fn(() => {
        try {
          result = callback();
          if (async.Future.is(result)) {
            let resultCast = src__runtime__optimizations.unsafeCast(async.Future$(R), result);
            resultCast.then(core.Null, dart.fn(result => {
              completer.complete(result);
            }, dart.fnType(core.Null, [R])), {onError: dart.fn((e, s) => {
                let sCasted = src__runtime__optimizations.unsafeCast(core.StackTrace, s);
                completer.completeError(e, sCasted);
                this.handleUncaughtException(e, sCasted);
              }, dynamicAnddynamicToNull())});
          }
        } catch (e) {
          let s = dart.stackTrace(e);
          this.handleUncaughtException(e, s);
          dart.rethrow(e);
        }
      }, VoidToNull()));
      return async.Future.is(result) ? completer.future : result;
    }
  };
  (src__core__change_detection__host.ChangeDetectionHost.new = function() {
    this[_lastGuardedView] = null;
    this[_lastCaughtException] = null;
    this[_lastCaughtTrace] = null;
    this[_runningTick] = false;
    this[_changeDetectors] = JSArrayOfChangeDetectorRef().of([]);
    this[_scheduledCallbacks] = JSArrayOfAppViewOfvoidAndElementTovoid().of([]);
    this[_scheduledViews] = JSArrayOfAppViewOfvoid().of([]);
    this[_scheduledElements] = JSArrayOfElement().of([]);
  }).prototype = src__core__change_detection__host.ChangeDetectionHost.prototype;
  dart.addTypeTests(src__core__change_detection__host.ChangeDetectionHost);
  dart.setMethodSignature(src__core__change_detection__host.ChangeDetectionHost, () => ({
    __proto__: dart.getMethods(src__core__change_detection__host.ChangeDetectionHost.__proto__),
    registerChangeDetector: dart.fnType(dart.void, [src__core__change_detection__change_detector_ref.ChangeDetectorRef]),
    unregisterChangeDetector: dart.fnType(dart.void, [src__core__change_detection__change_detector_ref.ChangeDetectorRef]),
    [_scheduleViewUpdate]: dart.fnType(dart.void, [dart.fnType(dart.void, [src__core__linker__app_view.AppView$(dart.void), html.Element]), src__core__linker__app_view.AppView$(dart.void), html.Element]),
    [_runViewUpdates]: dart.fnType(dart.void, []),
    tick: dart.fnType(dart.void, []),
    [_runTick]: dart.fnType(dart.void, []),
    [_runTickGuarded]: dart.fnType(core.bool, []),
    [_checkForChangeDetectionError]: dart.fnType(core.bool, []),
    [_resetViewErrors]: dart.fnType(dart.void, []),
    reportViewException: dart.fnType(dart.void, [src__core__linker__app_view.AppView$(dart.void), core.Object], [core.StackTrace]),
    run: dart.gFnType(R => [async.FutureOr$(R), [dart.fnType(async.FutureOr$(R), [])]])
  }));
  dart.setFieldSignature(src__core__change_detection__host.ChangeDetectionHost, () => ({
    __proto__: dart.getFields(src__core__change_detection__host.ChangeDetectionHost.__proto__),
    [_lastGuardedView]: dart.fieldType(AppViewOfvoid()),
    [_lastCaughtException]: dart.fieldType(core.Object),
    [_lastCaughtTrace]: dart.fieldType(core.StackTrace),
    [_runningTick]: dart.fieldType(core.bool),
    [_changeDetectors]: dart.finalFieldType(ListOfChangeDetectorRef()),
    [_scheduledCallbacks]: dart.finalFieldType(ListOfAppViewOfvoidAndElementTovoid()),
    [_scheduledViews]: dart.finalFieldType(ListOfAppViewOfvoid()),
    [_scheduledElements]: dart.finalFieldType(ListOfElement())
  }));
  dart.defineLazy(src__core__change_detection__host.ChangeDetectionHost, {
    /*src__core__change_detection__host.ChangeDetectionHost._current*/get _current() {
      return null;
    },
    set _current(_) {},
    /*src__core__change_detection__host.ChangeDetectionHost._enforceNoNewChanges*/get _enforceNoNewChanges() {
      return src__runtime__optimizations.isDevMode;
    }
  });
  src__core__linker__view_container_ref.ViewContainerRef = class ViewContainerRef extends core.Object {};
  (src__core__linker__view_container_ref.ViewContainerRef.new = function() {
  }).prototype = src__core__linker__view_container_ref.ViewContainerRef.prototype;
  dart.addTypeTests(src__core__linker__view_container_ref.ViewContainerRef);
  src__core__linker__view_container_ref.ViewContainerRef[dart.implements] = () => [src__core__linker__component_loader.ComponentLoader];
  let const$;
  src__core__linker__component_loader.ComponentLoader = class ComponentLoader extends core.Object {
    loadDetached(T, component, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return component.create(injector != null ? injector : const$ || (const$ = dart.const(src__di__injector__injector.Injector.empty())));
    }
    loadNextTo(T, component, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return dart.throw(new core.UnsupportedError.new('Not used within a structural directive'));
    }
    loadNextToLocation(T, component, location, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return location.createComponent(T, component, location.length, injector != null ? injector : location.injector);
    }
  };
  (src__core__linker__component_loader.ComponentLoader.new = function() {
  }).prototype = src__core__linker__component_loader.ComponentLoader.prototype;
  dart.addTypeTests(src__core__linker__component_loader.ComponentLoader);
  dart.setMethodSignature(src__core__linker__component_loader.ComponentLoader, () => ({
    __proto__: dart.getMethods(src__core__linker__component_loader.ComponentLoader.__proto__),
    loadDetached: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], {injector: src__di__injector__injector.Injector}]),
    loadNextTo: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], {injector: src__di__injector__injector.Injector}]),
    loadNextToLocation: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T), src__core__linker__view_container_ref.ViewContainerRef], {injector: src__di__injector__injector.Injector}])
  }));
  const _elementRef = Symbol('_elementRef');
  const _parentInjector = Symbol('_parentInjector');
  src__core__linker__view_container.ViewContainer = class ViewContainer extends src__core__linker__component_loader.ComponentLoader {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get parentIndex() {
      return this[parentIndex$];
    }
    set parentIndex(value) {
      super.parentIndex = value;
    }
    get parentView() {
      return this[parentView$];
    }
    set parentView(value) {
      super.parentView = value;
    }
    get nativeElement() {
      return this[nativeElement$];
    }
    set nativeElement(value) {
      super.nativeElement = value;
    }
    get nestedViews() {
      return this[nestedViews];
    }
    set nestedViews(value) {
      this[nestedViews] = value;
    }
    get elementRef() {
      let t = this[_elementRef];
      return t == null ? this[_elementRef] = new src__core__linker__element_ref.ElementRef.new(this.nativeElement) : t;
    }
    get(index) {
      return this.nestedViews[$_get](index).viewData.ref;
    }
    get length() {
      let nested = this.nestedViews;
      return nested == null ? 0 : nested[$length];
    }
    get element() {
      return this.elementRef;
    }
    get parentInjector() {
      let t = this[_parentInjector];
      return t == null ? this[_parentInjector] = this.parentView.injector(this.parentIndex) : t;
    }
    get injector() {
      return this.parentView.injector(this.index);
    }
    detectChangesInNestedViews() {
      let _nestedViews = this.nestedViews;
      if (_nestedViews == null) return;
      for (let i = 0, len = _nestedViews[$length]; i < dart.notNull(len); i++) {
        _nestedViews[$_get](i).detectChanges();
      }
    }
    destroyNestedViews() {
      let _nestedViews = this.nestedViews;
      if (_nestedViews == null) return;
      for (let i = 0, len = _nestedViews[$length]; i < dart.notNull(len); i++) {
        _nestedViews[$_get](i).destroy();
      }
    }
    insertEmbeddedView(templateRef, index) {
      let viewRef = templateRef.createEmbeddedView();
      this.insert(viewRef, index);
      return viewRef;
    }
    createEmbeddedView(templateRef) {
      let viewRef = templateRef.createEmbeddedView();
      this.attachView(src__core__linker__view_ref.ViewRefImpl.as(viewRef).appView, this.length);
      return viewRef;
    }
    createComponent(T, componentFactory, index, injector, projectableNodes) {
      if (index === void 0) index = -1;
      if (injector === void 0) injector = null;
      if (projectableNodes === void 0) projectableNodes = null;
      let contextInjector = injector != null ? injector : this.parentInjector;
      let componentRef = componentFactory.create(contextInjector, projectableNodes);
      this.insert(componentRef.hostView, index);
      return componentRef;
    }
    insert(viewRef, index) {
      if (index === void 0) index = -1;
      if (index === -1) index = this.length;
      let viewRef_ = src__core__linker__view_ref.ViewRefImpl.as(viewRef);
      this.attachView(viewRef_.appView, index);
      return viewRef;
    }
    move(viewRef, currentIndex) {
      if (currentIndex === -1) return null;
      let viewRef_ = src__core__linker__view_ref.ViewRefImpl.as(viewRef);
      this.moveView(viewRef_.appView, currentIndex);
      return viewRef_;
    }
    indexOf(viewRef) {
      return this.nestedViews[$indexOf](src__core__linker__view_ref.ViewRefImpl.as(viewRef).appView);
    }
    remove(index) {
      if (index === void 0) index = -1;
      if (index === -1) index = dart.notNull(this.length) - 1;
      let view = this.detachView(index);
      view.destroy();
    }
    detach(index) {
      if (index === void 0) index = -1;
      if (index === -1) index = dart.notNull(this.length) - 1;
      return this.detachView(index).viewData.ref;
    }
    clear() {
      for (let i = dart.notNull(this.length) - 1; i >= 0; i--) {
        this.remove(i);
      }
    }
    mapNestedViews(T, U, callback) {
      let nestedViews = this.nestedViews;
      if (nestedViews == null || dart.test(nestedViews[$isEmpty])) {
        return dart.constList([], T);
      }
      let result = _interceptors.JSArray$(T).of([]);
      for (let i = 0, l = nestedViews[$length]; i < dart.notNull(l); i++) {
        result[$addAll](callback(src__runtime__optimizations.unsafeCast(U, nestedViews[$_get](i))));
      }
      return result;
    }
    moveView(view, currentIndex) {
      let views = this.nestedViews;
      let previousIndex = views[$indexOf](view);
      if (view.viewData.type === src__core__linker__view_type.ViewType.component) {
        dart.throw(core.Exception.new("Component views can't be moved!"));
      }
      if (views == null) {
        views = JSArrayOfAppView().of([]);
        this.nestedViews = views;
      }
      views[$removeAt](previousIndex);
      views[$insert](currentIndex, view);
      let refRenderNode = null;
      if (dart.notNull(currentIndex) > 0) {
        let prevView = views[$_get](dart.notNull(currentIndex) - 1);
        refRenderNode = prevView.lastRootNode;
      } else {
        refRenderNode = this.nativeElement;
      }
      if (refRenderNode != null) {
        view.attachViewAfter(refRenderNode, view.flatRootNodes);
      }
      view.markContentChildAsMoved(this);
    }
    attachView(view, viewIndex) {
      if (view.viewData.type === src__core__linker__view_type.ViewType.component) {
        dart.throw(new core.StateError.new("Component views can't be moved!"));
      }
      let l = this.nestedViews;
      let _nestedViews = l != null ? l : JSArrayOfAppView().of([]);
      _nestedViews[$insert](viewIndex, view);
      let refRenderNode = null;
      if (dart.notNull(viewIndex) > 0) {
        let prevView = _nestedViews[$_get](dart.notNull(viewIndex) - 1);
        refRenderNode = prevView.lastRootNode;
      } else {
        refRenderNode = this.nativeElement;
      }
      this.nestedViews = _nestedViews;
      if (refRenderNode != null) {
        view.attachViewAfter(refRenderNode, view.flatRootNodes);
      }
      view.addToContentChildren(this);
    }
    detachView(viewIndex) {
      let view = this.nestedViews[$removeAt](viewIndex);
      if (view.viewData.type === src__core__linker__view_type.ViewType.component) {
        dart.throw(new core.StateError.new("Component views can't be moved!"));
      }
      view.detachViewNodes(view.flatRootNodes);
      if (view.inlinedNodes != null) {
        view.detachViewNodes(view.inlinedNodes);
      }
      view.removeFromContentChildren(this);
      return view;
    }
    loadNextTo(T, component, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return this.loadNextToLocation(T, component, this, {injector: injector});
    }
  };
  (src__core__linker__view_container.ViewContainer.new = function(index, parentIndex, parentView, nativeElement) {
    this[nestedViews] = null;
    this[_elementRef] = null;
    this[_parentInjector] = null;
    this[index$] = index;
    this[parentIndex$] = parentIndex;
    this[parentView$] = parentView;
    this[nativeElement$] = nativeElement;
    src__core__linker__view_container.ViewContainer.__proto__.new.call(this);
  }).prototype = src__core__linker__view_container.ViewContainer.prototype;
  dart.addTypeTests(src__core__linker__view_container.ViewContainer);
  const index$ = Symbol("ViewContainer.index");
  const parentIndex$ = Symbol("ViewContainer.parentIndex");
  const parentView$ = Symbol("ViewContainer.parentView");
  const nativeElement$ = Symbol("ViewContainer.nativeElement");
  const nestedViews = Symbol("ViewContainer.nestedViews");
  src__core__linker__view_container.ViewContainer[dart.implements] = () => [src__core__linker__view_container_ref.ViewContainerRef];
  dart.setMethodSignature(src__core__linker__view_container.ViewContainer, () => ({
    __proto__: dart.getMethods(src__core__linker__view_container.ViewContainer.__proto__),
    get: dart.fnType(src__core__linker__view_ref.EmbeddedViewRef, [core.int]),
    detectChangesInNestedViews: dart.fnType(dart.void, []),
    destroyNestedViews: dart.fnType(dart.void, []),
    insertEmbeddedView: dart.fnType(src__core__linker__view_ref.EmbeddedViewRef, [src__core__linker__template_ref.TemplateRef, core.int]),
    createEmbeddedView: dart.fnType(src__core__linker__view_ref.EmbeddedViewRef, [src__core__linker__template_ref.TemplateRef]),
    createComponent: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], [core.int, src__di__injector__injector.Injector, core.List$(core.List)]]),
    insert: dart.fnType(src__core__linker__view_ref.ViewRef, [src__core__linker__view_ref.ViewRef], [core.int]),
    move: dart.fnType(src__core__linker__view_ref.ViewRef, [src__core__linker__view_ref.ViewRef, core.int]),
    indexOf: dart.fnType(core.int, [src__core__linker__view_ref.ViewRef]),
    remove: dart.fnType(dart.void, [], [core.int]),
    detach: dart.fnType(src__core__linker__view_ref.ViewRef, [], [core.int]),
    clear: dart.fnType(dart.void, []),
    mapNestedViews: dart.gFnType((T, U) => [core.List$(T), [dart.fnType(core.List$(T), [U])]], (T, U) => [dart.dynamic, src__core__linker__app_view.AppView]),
    moveView: dart.fnType(dart.void, [src__core__linker__app_view.AppView, core.int]),
    attachView: dart.fnType(dart.void, [src__core__linker__app_view.AppView, core.int]),
    detachView: dart.fnType(src__core__linker__app_view.AppView, [core.int])
  }));
  dart.setGetterSignature(src__core__linker__view_container.ViewContainer, () => ({
    __proto__: dart.getGetters(src__core__linker__view_container.ViewContainer.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef,
    length: core.int,
    element: src__core__linker__element_ref.ElementRef,
    parentInjector: src__di__injector__injector.Injector,
    injector: src__di__injector__injector.Injector
  }));
  dart.setFieldSignature(src__core__linker__view_container.ViewContainer, () => ({
    __proto__: dart.getFields(src__core__linker__view_container.ViewContainer.__proto__),
    index: dart.finalFieldType(core.int),
    parentIndex: dart.finalFieldType(core.int),
    parentView: dart.finalFieldType(src__core__linker__app_view.AppView),
    nativeElement: dart.finalFieldType(html.Node),
    nestedViews: dart.fieldType(ListOfAppView()),
    [_elementRef]: dart.fieldType(src__core__linker__element_ref.ElementRef),
    [_parentInjector]: dart.fieldType(src__di__injector__injector.Injector)
  }));
  const _viewContainer = Symbol('_viewContainer');
  const _viewFactory = Symbol('_viewFactory');
  src__core__linker__template_ref.TemplateRef = class TemplateRef extends core.Object {
    createEmbeddedView() {
      let parentView = this[_viewContainer].parentView;
      let view = src__core__linker__app_view.AppView._check(dart.dcall(this[_viewFactory], [parentView, this[_viewContainer].index]));
      view.create(parentView.ctx, parentView.viewData.projectableNodes);
      return view.viewData.ref;
    }
    get elementRef() {
      return this[_viewContainer].elementRef;
    }
  };
  (src__core__linker__template_ref.TemplateRef.new = function(viewContainer, viewFactory) {
    this[_viewContainer] = viewContainer;
    this[_viewFactory] = viewFactory;
  }).prototype = src__core__linker__template_ref.TemplateRef.prototype;
  dart.addTypeTests(src__core__linker__template_ref.TemplateRef);
  dart.setMethodSignature(src__core__linker__template_ref.TemplateRef, () => ({
    __proto__: dart.getMethods(src__core__linker__template_ref.TemplateRef.__proto__),
    createEmbeddedView: dart.fnType(src__core__linker__view_ref.EmbeddedViewRef, [])
  }));
  dart.setGetterSignature(src__core__linker__template_ref.TemplateRef, () => ({
    __proto__: dart.getGetters(src__core__linker__template_ref.TemplateRef.__proto__),
    elementRef: src__core__linker__element_ref.ElementRef
  }));
  dart.setFieldSignature(src__core__linker__template_ref.TemplateRef, () => ({
    __proto__: dart.getFields(src__core__linker__template_ref.TemplateRef.__proto__),
    [_viewContainer]: dart.finalFieldType(src__core__linker__view_container.ViewContainer),
    [_viewFactory]: dart.finalFieldType(core.Function)
  }));
  dart.defineLazy(src__core__linker__app_view, {
    /*src__core__linker__app_view._viewContainerAnchor*/get _viewContainerAnchor() {
      return html.Comment.new();
    }
  });
  src__core__linker__app_view.createViewContainerAnchor = function() {
    return src__runtime__optimizations.unsafeCast(html.Comment, src__core__linker__app_view._viewContainerAnchor[$clone](false));
  };
  dart.defineLazy(src__core__linker__app_view, {
    /*src__core__linker__app_view.domRootRendererIsDirty*/get domRootRendererIsDirty() {
      return false;
    },
    set domRootRendererIsDirty(_) {},
    /*src__core__linker__app_view._UndefinedInjectorResult*/get _UndefinedInjectorResult() {
      return dart.const(new core.Object.new());
    }
  });
  const _cdMode = Symbol('_cdMode');
  const _viewContainerElement = Symbol('_viewContainerElement');
  const _hostInjector = Symbol('_hostInjector');
  const _onDestroyCallbacks = Symbol('_onDestroyCallbacks');
  const _skipChangeDetection = Symbol('_skipChangeDetection');
  const _cdState = Symbol('_cdState');
  const _is_AppViewData_default = Symbol('_is_AppViewData_default');
  src__core__linker__app_view.AppViewData$ = dart.generic(T => {
    let AppViewDataOfT = () => (AppViewDataOfT = dart.constFn(src__core__linker__app_view.AppViewData$(T)))();
    class AppViewData extends core.Object {
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      get ref() {
        return this[ref];
      }
      set ref(value) {
        super.ref = value;
      }
      get destroyed() {
        return this[destroyed];
      }
      set destroyed(value) {
        this[destroyed] = value;
      }
      get projectableNodes() {
        return this[projectableNodes];
      }
      set projectableNodes(value) {
        this[projectableNodes] = value;
      }
      get subscriptions() {
        return this[subscriptions];
      }
      set subscriptions(value) {
        this[subscriptions] = value;
      }
      get rootNodesOrViewContainers() {
        return this[rootNodesOrViewContainers];
      }
      set rootNodesOrViewContainers(value) {
        this[rootNodesOrViewContainers] = value;
      }
      get inlinedNodes() {
        return this[inlinedNodes];
      }
      set inlinedNodes(value) {
        this[inlinedNodes] = value;
      }
      get parentIndex() {
        return this[parentIndex$];
      }
      set parentIndex(value) {
        super.parentIndex = value;
      }
      static new(appView, cdMode, viewType, parentIndex) {
        return new (AppViewDataOfT()).__(appView, cdMode, viewType, parentIndex);
        return null;
        return null;
      }
      set cdMode(value) {
        if (this[_cdMode] != value) {
          this[_cdMode] = value;
          this.updateSkipChangeDetectionFlag();
        }
      }
      set cdState(value) {
        if (this[_cdState] != value) {
          this[_cdState] = value;
          this.updateSkipChangeDetectionFlag();
        }
      }
      addInlinedNodes(nodes) {
        if (this.inlinedNodes == null) {
          this.inlinedNodes = nodes;
        } else {
          this.inlinedNodes[$addAll](nodes);
        }
      }
      updateSkipChangeDetectionFlag() {
        this[_skipChangeDetection] = this[_cdMode] === src__core__change_detection__constants.ChangeDetectionStrategy.Detached || this[_cdMode] === src__core__change_detection__constants.ChangeDetectionStrategy.Checked || this[_cdState] === src__core__change_detection__constants.ChangeDetectorState.Errored;
      }
      destroy() {
        if (this[_onDestroyCallbacks] != null) {
          for (let i = 0, len = this[_onDestroyCallbacks][$length]; i < dart.notNull(len); i++) {
            this[_onDestroyCallbacks][$_get](i)();
          }
        }
        if (this.subscriptions == null) return;
        for (let i = 0, len = this.subscriptions[$length]; i < dart.notNull(len); i++) {
          dart.dsend(this.subscriptions[$_get](i), 'cancel', []);
        }
      }
      addDestroyCallback(callback) {
        let t = this[_onDestroyCallbacks];
        t == null ? this[_onDestroyCallbacks] = JSArrayOfVoidTovoid().of([]) : t;
        this[_onDestroyCallbacks][$add](callback);
      }
    }
    (AppViewData.__ = function(appView, cdMode, type, parentIndex) {
      this[destroyed] = false;
      this[_viewContainerElement] = null;
      this[projectableNodes] = null;
      this[_hostInjector] = null;
      this[subscriptions] = null;
      this[_onDestroyCallbacks] = null;
      this[rootNodesOrViewContainers] = null;
      this[inlinedNodes] = null;
      this[_skipChangeDetection] = false;
      this[_cdState] = src__core__change_detection__constants.ChangeDetectorState.NeverChecked;
      this[_cdMode] = cdMode;
      this[type$] = type;
      this[parentIndex$] = parentIndex;
      this[ref] = new src__core__linker__view_ref.ViewRefImpl.new(appView);
    }).prototype = AppViewData.prototype;
    dart.addTypeTests(AppViewData);
    AppViewData.prototype[_is_AppViewData_default] = true;
    const type$ = Symbol("AppViewData.type");
    const ref = Symbol("AppViewData.ref");
    const destroyed = Symbol("AppViewData.destroyed");
    const projectableNodes = Symbol("AppViewData.projectableNodes");
    const subscriptions = Symbol("AppViewData.subscriptions");
    const rootNodesOrViewContainers = Symbol("AppViewData.rootNodesOrViewContainers");
    const inlinedNodes = Symbol("AppViewData.inlinedNodes");
    const parentIndex$ = Symbol("AppViewData.parentIndex");
    dart.setMethodSignature(AppViewData, () => ({
      __proto__: dart.getMethods(AppViewData.__proto__),
      addInlinedNodes: dart.fnType(dart.void, [core.List$(html.Node)]),
      updateSkipChangeDetectionFlag: dart.fnType(dart.void, []),
      destroy: dart.fnType(dart.void, []),
      addDestroyCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setSetterSignature(AppViewData, () => ({
      __proto__: dart.getSetters(AppViewData.__proto__),
      cdMode: core.int,
      cdState: core.int
    }));
    dart.setFieldSignature(AppViewData, () => ({
      __proto__: dart.getFields(AppViewData.__proto__),
      type: dart.finalFieldType(src__core__linker__view_type.ViewType),
      ref: dart.finalFieldType(src__core__linker__view_ref.ViewRefImpl),
      destroyed: dart.fieldType(core.bool),
      [_viewContainerElement]: dart.fieldType(src__core__linker__view_container.ViewContainer),
      projectableNodes: dart.fieldType(core.List),
      [_hostInjector]: dart.fieldType(src__di__injector__injector.Injector),
      subscriptions: dart.fieldType(core.List),
      [_onDestroyCallbacks]: dart.fieldType(ListOfVoidTovoid()),
      rootNodesOrViewContainers: dart.fieldType(core.List),
      inlinedNodes: dart.fieldType(ListOfNode()),
      parentIndex: dart.finalFieldType(core.int),
      [_cdMode]: dart.fieldType(core.int),
      [_skipChangeDetection]: dart.fieldType(core.bool),
      [_cdState]: dart.fieldType(core.int)
    }));
    return AppViewData;
  });
  src__core__linker__app_view.AppViewData = src__core__linker__app_view.AppViewData$();
  dart.addTypeTests(src__core__linker__app_view.AppViewData, _is_AppViewData_default);
  const _is_AppView_default = Symbol('_is_AppView_default');
  src__core__linker__app_view.AppView$ = dart.generic(T => {
    let AppViewDataOfT = () => (AppViewDataOfT = dart.constFn(src__core__linker__app_view.AppViewData$(T)))();
    class AppView extends core.Object {
      get viewData() {
        return this[viewData];
      }
      set viewData(value) {
        this[viewData] = AppViewDataOfT()._check(value);
      }
      get locals() {
        return this[locals$];
      }
      set locals(value) {
        super.locals = value;
      }
      get parentView() {
        return this[parentView$];
      }
      set parentView(value) {
        super.parentView = value;
      }
      get componentType() {
        return this[componentType];
      }
      set componentType(value) {
        this[componentType] = value;
      }
      get rootEl() {
        return this[rootEl];
      }
      set rootEl(value) {
        this[rootEl] = value;
      }
      get ctx() {
        return this[ctx];
      }
      set ctx(value) {
        this[ctx] = T._check(value);
      }
      setupComponentType(renderType) {
        if (!dart.test(renderType.stylesShimmed)) {
          renderType.shimStyles(src__core__render__api.sharedStylesHost);
          renderType.stylesShimmed = true;
        }
        this.componentType = renderType;
      }
      set cdMode(value) {
        this.viewData.cdMode = value;
      }
      get cdMode() {
        return this.viewData[_cdMode];
      }
      set cdState(value) {
        this.viewData.cdState = value;
      }
      get cdState() {
        return this.viewData[_cdState];
      }
      get ref() {
        return this.viewData.ref;
      }
      get projectableNodes() {
        return this.viewData.projectableNodes;
      }
      create(context, givenProjectableNodes) {
        T._check(context);
        this.ctx = context;
        this.viewData.projectableNodes = givenProjectableNodes;
        return this.build();
      }
      createHostView(hostInjector, givenProjectableNodes) {
        this.viewData[_hostInjector] = hostInjector;
        this.viewData.projectableNodes = givenProjectableNodes;
        return this.build();
      }
      build() {
        return null;
      }
      init0(e) {
        this.viewData.rootNodesOrViewContainers = [e];
        if (this.viewData.type === src__core__linker__view_type.ViewType.component) {
          this.dirtyParentQueriesInternal();
        }
        return;
        return;
        return;
      }
      init0WithSub(e, subscriptions) {
        this.viewData.subscriptions = subscriptions;
        this.init0(e);
        return;
        return;
        return;
      }
      init(rootNodesOrViewContainers, subscriptions) {
        this.viewData.rootNodesOrViewContainers = rootNodesOrViewContainers;
        this.viewData.subscriptions = subscriptions;
        if (this.viewData.type === src__core__linker__view_type.ViewType.component) {
          this.dirtyParentQueriesInternal();
        }
        return;
        return;
        return;
      }
      addInlinedNodes(anchor, inlinedNodes, isRoot) {
        if (isRoot === void 0) isRoot = false;
        src__core__linker__app_view.moveNodesAfterSibling(anchor, inlinedNodes);
        if (dart.test(isRoot)) {
          this.viewData.rootNodesOrViewContainers[$addAll](inlinedNodes);
        } else {
          this.viewData.addInlinedNodes(inlinedNodes);
        }
      }
      removeInlinedNodes(inlinedNodes, isRoot) {
        if (isRoot === void 0) isRoot = false;
        src__core__linker__app_view.detachAll(inlinedNodes);
        let nodeList = dart.test(isRoot) ? this.viewData.rootNodesOrViewContainers : this.viewData.inlinedNodes;
        for (let i = dart.notNull(nodeList[$length]) - 1; i >= 0; i--) {
          let node = nodeList[$_get](i);
          if (dart.test(inlinedNodes[$contains](node))) {
            nodeList[$remove](node);
          }
        }
      }
      attachViewAfter(node, viewRootNodes) {
        src__core__linker__app_view.moveNodesAfterSibling(node, viewRootNodes);
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      injectorGet(token, nodeIndex, notFoundValue) {
        if (notFoundValue === void 0) notFoundValue = src__di__injector__injector.throwIfNotFound;
        src__di__errors.debugInjectorEnter(token);
        let result = src__core__linker__app_view._UndefinedInjectorResult;
        let view = this;
        while (result === src__core__linker__app_view._UndefinedInjectorResult) {
          if (nodeIndex != null) {
            result = view.injectorGetInternal(token, nodeIndex, src__core__linker__app_view._UndefinedInjectorResult);
          }
          if (result === src__core__linker__app_view._UndefinedInjectorResult) {
            let injector = view.viewData[_hostInjector];
            if (injector != null) {
              result = injector.get(token, notFoundValue);
            }
          }
          nodeIndex = view.viewData.parentIndex;
          view = view.parentView;
        }
        src__di__errors.debugInjectorLeave(token);
        return result;
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        return notFoundResult;
      }
      injector(nodeIndex) {
        return new src__di__injector__element.ElementInjector.new(this, nodeIndex);
      }
      detachAndDestroy() {
        let containerElement = this.viewData[_viewContainerElement];
        containerElement == null ? null : containerElement.detachView(containerElement.nestedViews[$indexOf](this));
        this.destroy();
      }
      detachViewNodes(viewRootNodes) {
        src__core__linker__app_view.detachAll(viewRootNodes);
      }
      destroy() {
        if (dart.test(this.viewData.destroyed)) return;
        this.viewData.destroyed = true;
        this.viewData.destroy();
        this.destroyInternal();
        this.dirtyParentQueriesInternal();
      }
      addOnDestroyCallback(callback) {
        this.viewData.addDestroyCallback(callback);
      }
      destroyInternal() {}
      get changeDetectorRef() {
        return this.viewData.ref;
      }
      get inlinedNodes() {
        return this.viewData.inlinedNodes;
      }
      get flatRootNodes() {
        return src__core__linker__app_view._flattenNestedViews(this.viewData.rootNodesOrViewContainers);
      }
      get lastRootNode() {
        let lastNode = dart.test(this.viewData.rootNodesOrViewContainers[$isNotEmpty]) ? this.viewData.rootNodesOrViewContainers[$last] : null;
        return src__core__linker__app_view._findLastRenderNode(lastNode);
      }
      hasLocal(contextName) {
        return this.locals[$containsKey](contextName);
      }
      setLocal(contextName, value) {
        this.locals[$_set](contextName, value);
      }
      dirtyParentQueriesInternal() {}
      detectChanges() {
        if (dart.test(this.viewData[_skipChangeDetection])) {
          return;
        }
        if (dart.test(src__runtime__optimizations.isDevMode) && dart.test(this.viewData.destroyed)) {
          dart.throw(new core.StateError.new('detectChanges'));
        }
        if (dart.test(src__core__change_detection__host.ChangeDetectionHost.checkForCrashes)) {
          this.detectCrash();
        } else {
          this.detectChangesInternal();
        }
        if (this.viewData[_cdMode] === src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce) {
          this.viewData[_cdMode] = src__core__change_detection__constants.ChangeDetectionStrategy.Checked;
          this.viewData[_skipChangeDetection] = true;
        }
        this.cdState = src__core__change_detection__constants.ChangeDetectorState.CheckedBefore;
      }
      detectCrash() {
        try {
          this.detectChangesInternal();
        } catch (e) {
          let s = dart.stackTrace(e);
          src__core__change_detection__host.ChangeDetectionHost.handleCrash(this, e, s);
        }
      }
      detectChangesInternal() {}
      detectHostChanges(firstCheck) {}
      markContentChildAsMoved(renderViewContainer) {
        this.dirtyParentQueriesInternal();
      }
      addToContentChildren(renderViewContainer) {
        this.viewData[_viewContainerElement] = renderViewContainer;
        this.dirtyParentQueriesInternal();
      }
      removeFromContentChildren(renderViewContainer) {
        this.dirtyParentQueriesInternal();
        this.viewData[_viewContainerElement] = null;
      }
      markAsCheckOnce() {
        this.cdMode = src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce;
      }
      markStateChanged() {
        this.markPathToRootAsCheckOnce();
      }
      markPathToRootAsCheckOnce() {
        let view = this;
        while (view != null) {
          let cdMode = view.cdMode;
          if (cdMode === src__core__change_detection__constants.ChangeDetectionStrategy.Detached) break;
          if (cdMode === src__core__change_detection__constants.ChangeDetectionStrategy.Checked) {
            view.cdMode = src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce;
          }
          view = view.viewData.type === src__core__linker__view_type.ViewType.component ? view.parentView : (() => {
            let t = view.viewData[_viewContainerElement];
            return t == null ? null : t.parentView;
          })();
        }
      }
      initViewRoot(hostElement) {
        if (this.componentType.hostAttr != null) {
          hostElement[$classes].add(this.componentType.hostAttr);
        }
        return hostElement;
      }
      updateClass(element, className, isAdd) {
        if (dart.test(isAdd)) {
          element[$classes].add(className);
        } else {
          element[$classes].remove(className);
        }
      }
      updateElemClass(element, className, isAdd) {
        if (dart.test(isAdd)) {
          element[$classes].add(className);
        } else {
          element[$classes].remove(className);
        }
      }
      setAttr(renderElement, attributeName, attributeValue) {
        if (attributeValue != null) {
          renderElement.setAttribute(attributeName, attributeValue);
        } else {
          renderElement[$attributes][$remove](attributeName);
        }
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      createAttr(renderElement, attributeName, attributeValue) {
        renderElement.setAttribute(attributeName, attributeValue);
      }
      setAttrNS(renderElement, attrNS, attributeName, attributeValue) {
        if (attributeValue != null) {
          renderElement.setAttributeNS(attrNS, attributeName, attributeValue);
        } else {
          renderElement[$getNamespacedAttributes](attrNS)[$remove](attributeName);
        }
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      addShimC(element) {
        let contentClass = this.componentType.contentAttr;
        if (contentClass != null) element[$classes].add(contentClass);
      }
      addShimE(element) {
        let contentClass = this.componentType.contentAttr;
        if (contentClass != null) element[$classes].add(contentClass);
      }
      updateChildClass(element, newClass) {
        if (dart.equals(element, this.rootEl)) {
          let hostClass = this.componentType.hostAttr;
          element.className = hostClass == null ? newClass : dart.str`${newClass} ${hostClass}`;
          if (this.parentView != null && this.parentView.componentType != null) {
            this.parentView.addShimE(element);
          }
        } else {
          let contentClass = this.componentType.contentAttr;
          element.className = contentClass == null ? newClass : dart.str`${newClass} ${contentClass}`;
        }
      }
      setDomDirty() {
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      project(parentElement, index) {
        if (parentElement == null) return;
        let projectableNodes = this.viewData.projectableNodes;
        if (projectableNodes == null || dart.notNull(index) >= dart.notNull(projectableNodes[$length])) return;
        let projectables = core.List._check(projectableNodes[$_get](index));
        if (projectables == null) return;
        let projectableCount = projectables[$length];
        for (let i = 0; i < dart.notNull(projectableCount); i++) {
          let projectable = projectables[$_get](i);
          if (src__core__linker__view_container.ViewContainer.is(projectable)) {
            if (projectable.nestedViews == null) {
              parentElement[$append](projectable.nativeElement);
            } else {
              src__core__linker__app_view._appendNestedViewRenderNodes(parentElement, projectable);
            }
          } else if (core.List.is(projectable)) {
            for (let n = 0, len = projectable[$length]; n < dart.notNull(len); n++) {
              let node = projectable[$_get](n);
              if (src__core__linker__view_container.ViewContainer.is(node)) {
                if (node.nestedViews == null) {
                  let nativeNode = node.nativeElement;
                  parentElement[$append](nativeNode);
                } else {
                  src__core__linker__app_view._appendNestedViewRenderNodes(parentElement, node);
                }
              } else {
                let nativeNode = html.Node._check(node);
                parentElement[$append](nativeNode);
              }
            }
          } else {
            let child = html.Node._check(projectable);
            parentElement[$append](child);
          }
        }
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      eventHandler0(E, handler) {
        return dart.fn(event => {
          this.markPathToRootAsCheckOnce();
          src__core__linker__app_view_utils.appViewUtils.eventManager.getZone().runGuarded(handler);
        }, dart.fnType(core.Null, [E]));
      }
      eventHandler1(E, F, handler) {
        return dart.fn(event => {
          this.markPathToRootAsCheckOnce();
          src__core__linker__app_view_utils.appViewUtils.eventManager.getZone().runGuarded(dart.fn(() => handler(F.as(event)), VoidTovoid()));
        }, dart.fnType(core.Null, [E]));
      }
      setProp(element, name, value) {
        js_util.setProperty(element, name, value);
      }
      loadDeferred(loadComponentFunction, loadTemplateLibFunction, viewContainer, templateRef, initializer) {
        if (initializer === void 0) initializer = null;
        return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([loadComponentFunction(), loadTemplateLibFunction()])).then(core.Null, dart.fn(_ => {
          if (initializer != null) {
            initializer();
          }
          viewContainer.createEmbeddedView(templateRef);
          viewContainer.detectChangesInNestedViews();
        }, ListToNull()));
      }
    }
    (AppView.new = function(type, locals, parentView, parentIndex, cdMode) {
      this[viewData] = null;
      this[componentType] = null;
      this[rootEl] = null;
      this[ctx] = null;
      this[locals$] = locals;
      this[parentView$] = parentView;
      this.viewData = AppViewDataOfT().new(this, cdMode, type, parentIndex);
    }).prototype = AppView.prototype;
    dart.addTypeTests(AppView);
    AppView.prototype[_is_AppView_default] = true;
    const viewData = Symbol("AppView.viewData");
    const locals$ = Symbol("AppView.locals");
    const parentView$ = Symbol("AppView.parentView");
    const componentType = Symbol("AppView.componentType");
    const rootEl = Symbol("AppView.rootEl");
    const ctx = Symbol("AppView.ctx");
    dart.setMethodSignature(AppView, () => ({
      __proto__: dart.getMethods(AppView.__proto__),
      setupComponentType: dart.fnType(dart.void, [src__core__render__api.RenderComponentType]),
      create: dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [core.Object, core.List]),
      createHostView: dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [src__di__injector__injector.Injector, core.List]),
      build: dart.fnType(src__core__linker__component_factory.ComponentRef$(T), []),
      init0: dart.fnType(dart.void, [dart.dynamic]),
      init0WithSub: dart.fnType(dart.void, [dart.dynamic, core.List]),
      init: dart.fnType(dart.void, [core.List, core.List]),
      addInlinedNodes: dart.fnType(dart.void, [html.Node, core.List$(html.Node)], [core.bool]),
      removeInlinedNodes: dart.fnType(dart.void, [core.List$(html.Node)], [core.bool]),
      attachViewAfter: dart.fnType(dart.void, [html.Node, core.List$(html.Node)]),
      injectorGet: dart.fnType(dart.dynamic, [dart.dynamic, core.int], [dart.dynamic]),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
      injector: dart.fnType(src__di__injector__injector.Injector, [core.int]),
      detachAndDestroy: dart.fnType(dart.void, []),
      detachViewNodes: dart.fnType(dart.void, [core.List$(html.Node)]),
      destroy: dart.fnType(dart.void, []),
      addOnDestroyCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      destroyInternal: dart.fnType(dart.void, []),
      hasLocal: dart.fnType(core.bool, [core.String]),
      setLocal: dart.fnType(dart.void, [core.String, dart.dynamic]),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      detectChanges: dart.fnType(dart.void, []),
      detectCrash: dart.fnType(dart.void, []),
      detectChangesInternal: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      markContentChildAsMoved: dart.fnType(dart.void, [src__core__linker__view_container.ViewContainer]),
      addToContentChildren: dart.fnType(dart.void, [src__core__linker__view_container.ViewContainer]),
      removeFromContentChildren: dart.fnType(dart.void, [src__core__linker__view_container.ViewContainer]),
      markAsCheckOnce: dart.fnType(dart.void, []),
      markStateChanged: dart.fnType(dart.void, []),
      markPathToRootAsCheckOnce: dart.fnType(dart.void, []),
      initViewRoot: dart.fnType(html.HtmlElement, [html.HtmlElement]),
      updateClass: dart.fnType(dart.void, [html.HtmlElement, core.String, core.bool]),
      updateElemClass: dart.fnType(dart.void, [html.Element, core.String, core.bool]),
      setAttr: dart.fnType(dart.void, [html.Element, core.String, core.String]),
      createAttr: dart.fnType(dart.void, [html.Element, core.String, core.String]),
      setAttrNS: dart.fnType(dart.void, [html.Element, core.String, core.String, core.String]),
      addShimC: dart.fnType(dart.void, [html.HtmlElement]),
      addShimE: dart.fnType(dart.void, [html.Element]),
      updateChildClass: dart.fnType(dart.void, [html.Element, core.String]),
      setDomDirty: dart.fnType(dart.void, []),
      project: dart.fnType(dart.void, [html.Element, core.int]),
      eventHandler0: dart.gFnType(E => [dart.fnType(dart.void, [E]), [dart.fnType(dart.void, [])]]),
      eventHandler1: dart.gFnType((E, F) => [dart.fnType(dart.void, [E]), [dart.fnType(dart.void, [F])]], (E, F) => [dart.dynamic, E]),
      setProp: dart.fnType(dart.void, [html.Element, core.String, core.Object]),
      loadDeferred: dart.fnType(async.Future$(core.Null), [dart.fnType(async.Future, []), dart.fnType(async.Future, []), src__core__linker__view_container.ViewContainer, src__core__linker__template_ref.TemplateRef], [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(AppView, () => ({
      __proto__: dart.getGetters(AppView.__proto__),
      cdMode: core.int,
      cdState: core.int,
      ref: src__core__linker__view_ref.ViewRefImpl,
      projectableNodes: core.List,
      changeDetectorRef: src__core__change_detection__change_detector_ref.ChangeDetectorRef,
      inlinedNodes: core.List$(html.Node),
      flatRootNodes: core.List$(html.Node),
      lastRootNode: html.Node
    }));
    dart.setSetterSignature(AppView, () => ({
      __proto__: dart.getSetters(AppView.__proto__),
      cdMode: core.int,
      cdState: core.int
    }));
    dart.setFieldSignature(AppView, () => ({
      __proto__: dart.getFields(AppView.__proto__),
      viewData: dart.fieldType(AppViewDataOfT()),
      locals: dart.finalFieldType(MapOfString$dynamic()),
      parentView: dart.finalFieldType(src__core__linker__app_view.AppView),
      componentType: dart.fieldType(src__core__render__api.RenderComponentType),
      rootEl: dart.fieldType(html.HtmlElement),
      ctx: dart.fieldType(T)
    }));
    return AppView;
  });
  src__core__linker__app_view.AppView = src__core__linker__app_view.AppView$();
  dart.addTypeTests(src__core__linker__app_view.AppView, _is_AppView_default);
  src__core__linker__app_view._findLastRenderNode = function(node) {
    let lastNode = null;
    if (src__core__linker__view_container.ViewContainer.is(node)) {
      let appEl = node;
      lastNode = appEl.nativeElement;
      let nestedViews = appEl.nestedViews;
      if (nestedViews != null) {
        for (let i = dart.notNull(nestedViews[$length]) - 1; i >= 0; i--) {
          let nestedViewData = appEl.nestedViews[$_get](i).viewData;
          if (dart.test(nestedViewData.rootNodesOrViewContainers[$isNotEmpty])) {
            lastNode = src__core__linker__app_view._findLastRenderNode(nestedViewData.rootNodesOrViewContainers[$last]);
          }
        }
      }
    } else {
      lastNode = src__runtime__optimizations.unsafeCast(html.Node, node);
    }
    return lastNode;
  };
  src__core__linker__app_view._appendNestedViewRenderNodes = function(targetElement, appElement) {
    targetElement[$append](appElement.nativeElement);
    let nestedViews = appElement.nestedViews;
    if (nestedViews == null || dart.test(nestedViews[$isEmpty])) return;
    let nestedViewCount = nestedViews[$length];
    for (let viewIndex = 0; viewIndex < dart.notNull(nestedViewCount); viewIndex++) {
      let projectables = nestedViews[$_get](viewIndex).viewData.rootNodesOrViewContainers;
      let projectableCount = projectables[$length];
      for (let i = 0; i < dart.notNull(projectableCount); i++) {
        let projectable = projectables[$_get](i);
        if (src__core__linker__view_container.ViewContainer.is(projectable)) {
          src__core__linker__app_view._appendNestedViewRenderNodes(targetElement, projectable);
        } else {
          let child = html.Node._check(projectable);
          targetElement[$append](child);
        }
      }
    }
  };
  src__core__linker__app_view._flattenNestedViews = function(nodes) {
    return src__core__linker__app_view._flattenNestedViewRenderNodes(nodes, JSArrayOfNode().of([]));
  };
  src__core__linker__app_view._flattenNestedViewRenderNodes = function(nodes, renderNodes) {
    let nodeCount = nodes[$length];
    for (let i = 0; i < dart.notNull(nodeCount); i++) {
      let node = nodes[$_get](i);
      if (src__core__linker__view_container.ViewContainer.is(node)) {
        let appEl = node;
        renderNodes[$add](appEl.nativeElement);
        let nestedViews = appEl.nestedViews;
        if (nestedViews != null) {
          for (let k = 0, len = nestedViews[$length]; k < dart.notNull(len); k++) {
            src__core__linker__app_view._flattenNestedViewRenderNodes(nestedViews[$_get](k).viewData.rootNodesOrViewContainers, renderNodes);
          }
        }
      } else {
        renderNodes[$add](src__runtime__optimizations.unsafeCast(html.Node, node));
      }
    }
    return renderNodes;
  };
  src__core__linker__app_view.moveNodesAfterSibling = function(sibling, nodes) {
    let parent = sibling.parentNode;
    if (dart.test(nodes[$isNotEmpty]) && parent != null) {
      let nextSibling = sibling[$nextNode];
      let len = nodes[$length];
      if (nextSibling != null) {
        for (let i = 0; i < dart.notNull(len); i++) {
          parent.insertBefore(nodes[$_get](i), nextSibling);
        }
      } else {
        for (let i = 0; i < dart.notNull(len); i++) {
          parent[$append](nodes[$_get](i));
        }
      }
    }
  };
  src__core__linker__app_view.createAndAppend = function(doc, tagName, parent) {
    return html.Element._check(parent[$append](doc[$createElement](tagName)));
    return null;
    return null;
    return null;
  };
  src__core__linker__app_view.createDivAndAppend = function(doc, parent) {
    return html.DivElement._check(parent[$append](doc[$createElement]('div')));
    return null;
    return null;
    return null;
  };
  src__core__linker__app_view.createSpanAndAppend = function(doc, parent) {
    return html.SpanElement._check(parent[$append](doc[$createElement]('span')));
    return null;
    return null;
    return null;
  };
  src__core__linker__app_view.detachAll = function(viewRootNodes) {
    let len = viewRootNodes[$length];
    for (let i = 0; i < dart.notNull(len); i++) {
      let node = viewRootNodes[$_get](i);
      node[$remove]();
      src__core__linker__app_view.domRootRendererIsDirty = true;
    }
  };
  src__core__linker__view_ref.ViewRef = class ViewRef extends core.Object {};
  (src__core__linker__view_ref.ViewRef.new = function() {
  }).prototype = src__core__linker__view_ref.ViewRef.prototype;
  dart.addTypeTests(src__core__linker__view_ref.ViewRef);
  src__core__linker__view_ref.EmbeddedViewRef = class EmbeddedViewRef extends src__core__linker__view_ref.ViewRef {};
  (src__core__linker__view_ref.EmbeddedViewRef.new = function() {
  }).prototype = src__core__linker__view_ref.EmbeddedViewRef.prototype;
  dart.addTypeTests(src__core__linker__view_ref.EmbeddedViewRef);
  src__core__linker__view_ref.ViewRefImpl = class ViewRefImpl extends core.Object {
    get appView() {
      return this[appView$];
    }
    set appView(value) {
      super.appView = value;
    }
    get internalView() {
      return this.appView;
    }
    get rootNodes() {
      return this.appView.flatRootNodes;
    }
    get changeDetectorRef() {
      return this;
    }
    setLocal(variableName, value) {
      this.appView.setLocal(variableName, value);
    }
    hasLocal(variableName) {
      return this.appView.hasLocal(variableName);
    }
    get destroyed() {
      return this.appView.viewData.destroyed;
    }
    markForCheck() {
      this.appView.markPathToRootAsCheckOnce();
    }
    detach() {
      this.appView.cdMode = src__core__change_detection__constants.ChangeDetectionStrategy.Detached;
    }
    detectChanges() {
      this.appView.detectChanges();
    }
    checkNoChanges() {
      src__core__linker__app_view_utils.AppViewUtils.enterThrowOnChanges();
      this.appView.detectChanges();
      src__core__linker__app_view_utils.AppViewUtils.exitThrowOnChanges();
    }
    reattach() {
      this.appView.cdMode = src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways;
      this.markForCheck();
    }
    onDestroy(callback) {
      this.appView.addOnDestroyCallback(callback);
    }
    destroy() {
      this.appView.detachAndDestroy();
    }
  };
  (src__core__linker__view_ref.ViewRefImpl.new = function(appView) {
    this[appView$] = appView;
  }).prototype = src__core__linker__view_ref.ViewRefImpl.prototype;
  dart.addTypeTests(src__core__linker__view_ref.ViewRefImpl);
  const appView$ = Symbol("ViewRefImpl.appView");
  src__core__linker__view_ref.ViewRefImpl[dart.implements] = () => [src__core__linker__view_ref.EmbeddedViewRef, src__core__change_detection__change_detector_ref.ChangeDetectorRef];
  dart.setMethodSignature(src__core__linker__view_ref.ViewRefImpl, () => ({
    __proto__: dart.getMethods(src__core__linker__view_ref.ViewRefImpl.__proto__),
    setLocal: dart.fnType(dart.void, [core.String, dart.dynamic]),
    hasLocal: dart.fnType(core.bool, [core.String]),
    markForCheck: dart.fnType(dart.void, []),
    detach: dart.fnType(dart.void, []),
    detectChanges: dart.fnType(dart.void, []),
    checkNoChanges: dart.fnType(dart.void, []),
    reattach: dart.fnType(dart.void, []),
    onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__linker__view_ref.ViewRefImpl, () => ({
    __proto__: dart.getGetters(src__core__linker__view_ref.ViewRefImpl.__proto__),
    internalView: src__core__linker__app_view.AppView,
    rootNodes: core.List$(html.Node),
    changeDetectorRef: src__core__change_detection__change_detector_ref.ChangeDetectorRef,
    destroyed: core.bool
  }));
  dart.setFieldSignature(src__core__linker__view_ref.ViewRefImpl, () => ({
    __proto__: dart.getFields(src__core__linker__view_ref.ViewRefImpl.__proto__),
    appView: dart.finalFieldType(src__core__linker__app_view.AppView)
  }));
  const _nodeIndex$ = Symbol('_nodeIndex');
  const _parentView = Symbol('_parentView');
  const _nativeElement = Symbol('_nativeElement');
  const _component = Symbol('_component');
  const _is_ComponentRef_default = Symbol('_is_ComponentRef_default');
  src__core__linker__component_factory.ComponentRef$ = dart.generic(C => {
    class ComponentRef extends core.Object {
      get location() {
        return this[_nativeElement];
      }
      get injector() {
        return this[_parentView].injector(this[_nodeIndex$]);
      }
      get instance() {
        return this[_component];
      }
      get hostView() {
        return this[_parentView].viewData.ref;
      }
      get changeDetectorRef() {
        return this[_parentView].viewData.ref;
      }
      get componentType() {
        return src__di__reflector.runtimeTypeProvider(this[_component]);
      }
      destroy() {
        this[_parentView].detachAndDestroy();
      }
      onDestroy(callback) {
        this.hostView.onDestroy(callback);
      }
    }
    (ComponentRef.new = function(nodeIndex, parentView, nativeElement, component) {
      this[_nodeIndex$] = nodeIndex;
      this[_parentView] = parentView;
      this[_nativeElement] = nativeElement;
      this[_component] = component;
    }).prototype = ComponentRef.prototype;
    dart.addTypeTests(ComponentRef);
    ComponentRef.prototype[_is_ComponentRef_default] = true;
    dart.setMethodSignature(ComponentRef, () => ({
      __proto__: dart.getMethods(ComponentRef.__proto__),
      destroy: dart.fnType(dart.void, []),
      onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(ComponentRef, () => ({
      __proto__: dart.getGetters(ComponentRef.__proto__),
      location: html.Element,
      injector: src__di__injector__injector.Injector,
      instance: C,
      hostView: src__core__linker__view_ref.ViewRef,
      changeDetectorRef: src__core__change_detection__change_detector_ref.ChangeDetectorRef,
      componentType: core.Type
    }));
    dart.setFieldSignature(ComponentRef, () => ({
      __proto__: dart.getFields(ComponentRef.__proto__),
      [_parentView]: dart.finalFieldType(src__core__linker__app_view.AppView),
      [_nodeIndex$]: dart.finalFieldType(core.int),
      [_nativeElement]: dart.finalFieldType(html.Element),
      [_component]: dart.finalFieldType(C)
    }));
    return ComponentRef;
  });
  src__core__linker__component_factory.ComponentRef = src__core__linker__component_factory.ComponentRef$();
  dart.addTypeTests(src__core__linker__component_factory.ComponentRef, _is_ComponentRef_default);
  let const$0;
  const _viewFactory$ = Symbol('_viewFactory');
  let const$1;
  const _is_ComponentFactory_default = Symbol('_is_ComponentFactory_default');
  src__core__linker__component_factory.ComponentFactory$ = dart.generic(T => {
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(T)))();
    class ComponentFactory extends core.Object {
      get selector() {
        return this[selector$];
      }
      set selector(value) {
        super.selector = value;
      }
      get componentType() {
        return dart.wrapType(T);
      }
      get metadata() {
        return this[metadata$];
      }
      set metadata(value) {
        super.metadata = value;
      }
      create(injector, projectableNodes) {
        if (projectableNodes === void 0) projectableNodes = null;
        let hostView = this[_viewFactory$](null, null);
        return src__runtime__optimizations.unsafeCast(ComponentRefOfT(), hostView.createHostView(injector, projectableNodes != null ? projectableNodes : const$1 || (const$1 = dart.constList([], dart.dynamic))));
      }
    }
    (ComponentFactory.new = function(selector, viewFactory, metadata) {
      if (metadata === void 0) metadata = const$0 || (const$0 = dart.constList([], dart.dynamic));
      this[selector$] = selector;
      this[_viewFactory$] = viewFactory;
      this[metadata$] = metadata;
    }).prototype = ComponentFactory.prototype;
    dart.addTypeTests(ComponentFactory);
    ComponentFactory.prototype[_is_ComponentFactory_default] = true;
    const selector$ = Symbol("ComponentFactory.selector");
    const metadata$ = Symbol("ComponentFactory.metadata");
    dart.setMethodSignature(ComponentFactory, () => ({
      __proto__: dart.getMethods(ComponentFactory.__proto__),
      create: dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [src__di__injector__injector.Injector], [core.List$(core.List)])
    }));
    dart.setGetterSignature(ComponentFactory, () => ({
      __proto__: dart.getGetters(ComponentFactory.__proto__),
      componentType: core.Type
    }));
    dart.setFieldSignature(ComponentFactory, () => ({
      __proto__: dart.getFields(ComponentFactory.__proto__),
      selector: dart.finalFieldType(core.String),
      [_viewFactory$]: dart.finalFieldType(AppViewAndintToAppView()),
      metadata: dart.finalFieldType(core.List)
    }));
    return ComponentFactory;
  });
  src__core__linker__component_factory.ComponentFactory = src__core__linker__component_factory.ComponentFactory$();
  dart.addTypeTests(src__core__linker__component_factory.ComponentFactory, _is_ComponentFactory_default);
  src__core__linker__component_factory.NgViewFactory$ = dart.generic(T => {
    const NgViewFactory = dart.typedef('NgViewFactory', () => dart.fnType(src__core__linker__app_view.AppView$(T), [src__core__linker__app_view.AppView$(T), core.int]));
    return NgViewFactory;
  });
  src__core__linker__component_factory.NgViewFactory = src__core__linker__component_factory.NgViewFactory$();
  dart.trackLibraries("packages/angular/src/core/change_detection/host.ddc", {
    "package:angular/src/di/injector/element.dart": src__di__injector__element,
    "package:angular/src/core/change_detection/host.dart": src__core__change_detection__host,
    "package:angular/src/core/linker/view_container_ref.dart": src__core__linker__view_container_ref,
    "package:angular/src/core/linker/component_loader.dart": src__core__linker__component_loader,
    "package:angular/src/core/linker/view_container.dart": src__core__linker__view_container,
    "package:angular/src/core/linker/template_ref.dart": src__core__linker__template_ref,
    "package:angular/src/core/linker/app_view.dart": src__core__linker__app_view,
    "package:angular/src/core/linker/view_ref.dart": src__core__linker__view_ref,
    "package:angular/src/core/linker/component_factory.dart": src__core__linker__component_factory
  }, '{"version":3,"sourceRoot":"","sources":["../../di/injector/element.dart","host.dart","../linker/view_container_ref.dart","../linker/component_loader.dart","../linker/view_container.dart","../linker/template_ref.dart","../linker/app_view.dart","../linker/view_ref.dart","../linker/component_factory.dart"],"names":[],"mappings":"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","file":"host.ddc.js"}');
  // Exports:
  return {
    src__di__injector__element: src__di__injector__element,
    src__core__change_detection__host: src__core__change_detection__host,
    src__core__linker__view_container_ref: src__core__linker__view_container_ref,
    src__core__linker__component_loader: src__core__linker__component_loader,
    src__core__linker__view_container: src__core__linker__view_container,
    src__core__linker__template_ref: src__core__linker__template_ref,
    src__core__linker__app_view: src__core__linker__app_view,
    src__core__linker__view_ref: src__core__linker__view_ref,
    src__core__linker__component_factory: src__core__linker__component_factory
  };
});

//# sourceMappingURL=host.ddc.js.map
