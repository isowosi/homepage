define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__metadata__lifecycle_hooks = Object.create(_root);
  src__core__metadata__lifecycle_hooks.LifecycleHooks = class LifecycleHooks extends core.Object {
    toString() {
      return {
        0: "LifecycleHooks.onInit",
        1: "LifecycleHooks.onDestroy",
        2: "LifecycleHooks.doCheck",
        3: "LifecycleHooks.onChanges",
        4: "LifecycleHooks.afterChanges",
        5: "LifecycleHooks.afterContentInit",
        6: "LifecycleHooks.afterContentChecked",
        7: "LifecycleHooks.afterViewInit",
        8: "LifecycleHooks.afterViewChecked"
      }[this.index];
    }
  };
  (src__core__metadata__lifecycle_hooks.LifecycleHooks.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__lifecycle_hooks.LifecycleHooks.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.LifecycleHooks);
  dart.setFieldSignature(src__core__metadata__lifecycle_hooks.LifecycleHooks, () => ({
    __proto__: dart.getFields(src__core__metadata__lifecycle_hooks.LifecycleHooks.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__lifecycle_hooks.LifecycleHooks, ['toString']);
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(0));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onDestroy = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(1));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.doCheck = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(2));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.onChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(3));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(4));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(5));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(6));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(7));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(8));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.values = dart.constList([src__core__metadata__lifecycle_hooks.LifecycleHooks.onInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.onDestroy, src__core__metadata__lifecycle_hooks.LifecycleHooks.doCheck, src__core__metadata__lifecycle_hooks.LifecycleHooks.onChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterContentChecked, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.afterViewChecked], src__core__metadata__lifecycle_hooks.LifecycleHooks);
  src__core__metadata__lifecycle_hooks.OnChanges = class OnChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnChanges);
  src__core__metadata__lifecycle_hooks.AfterChanges = class AfterChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterChanges);
  src__core__metadata__lifecycle_hooks.OnInit = class OnInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnInit);
  src__core__metadata__lifecycle_hooks.OnDestroy = class OnDestroy extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnDestroy.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnDestroy.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnDestroy);
  src__core__metadata__lifecycle_hooks.DoCheck = class DoCheck extends core.Object {};
  (src__core__metadata__lifecycle_hooks.DoCheck.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.DoCheck.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.DoCheck);
  src__core__metadata__lifecycle_hooks.AfterContentInit = class AfterContentInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentInit);
  src__core__metadata__lifecycle_hooks.AfterContentChecked = class AfterContentChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentChecked);
  src__core__metadata__lifecycle_hooks.AfterViewInit = class AfterViewInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewInit);
  src__core__metadata__lifecycle_hooks.AfterViewChecked = class AfterViewChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewChecked);
  dart.trackLibraries("packages/angular/src/core/metadata/lifecycle_hooks.ddc", {
    "package:angular/src/core/metadata/lifecycle_hooks.dart": src__core__metadata__lifecycle_hooks
  }, '{"version":3,"sourceRoot":"","sources":["lifecycle_hooks.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAwDA;;;;EAWA;;;;EA4CA;;;;EA4CA;;;;EAoEA;;;;EAsDA;;;;EAsDA;;;;EAmDA;;;;EAmDA","file":"lifecycle_hooks.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__lifecycle_hooks: src__core__metadata__lifecycle_hooks
  };
});

//# sourceMappingURL=lifecycle_hooks.ddc.js.map
