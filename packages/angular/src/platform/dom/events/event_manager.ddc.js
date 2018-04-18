define(['dart_sdk', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, opaque_token, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const src__platform__dom__events__event_manager = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let IdentityMapOfString$EventManagerPlugin = () => (IdentityMapOfString$EventManagerPlugin = dart.constFn(_js_helper.IdentityMap$(core.String, src__platform__dom__events__event_manager.EventManagerPlugin)))();
  let ListOfEventManagerPlugin = () => (ListOfEventManagerPlugin = dart.constFn(core.List$(src__platform__dom__events__event_manager.EventManagerPlugin)))();
  let MapOfString$EventManagerPlugin = () => (MapOfString$EventManagerPlugin = dart.constFn(core.Map$(core.String, src__platform__dom__events__event_manager.EventManagerPlugin)))();
  dart.defineLazy(src__platform__dom__events__event_manager, {
    /*src__platform__dom__events__event_manager.EVENT_MANAGER_PLUGINS*/get EVENT_MANAGER_PLUGINS() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('EventManagerPlugins'));
    }
  });
  const _zone = Symbol('_zone');
  const _plugins = Symbol('_plugins');
  const _eventToPlugin = Symbol('_eventToPlugin');
  const _findPluginFor = Symbol('_findPluginFor');
  src__platform__dom__events__event_manager.EventManager = class EventManager extends core.Object {
    addEventListener(element, eventName, callback) {
      let plugin = this[_findPluginFor](eventName);
      return plugin.addEventListener(element, eventName, callback);
    }
    getZone() {
      return this[_zone];
    }
    [_findPluginFor](eventName) {
      let plugin = this[_eventToPlugin][$_get](eventName);
      if (plugin != null) return plugin;
      let plugins = this[_plugins];
      for (let i = dart.notNull(plugins[$length]) - 1; i >= 0; i--) {
        plugin = plugins[$_get](i);
        if (dart.test(plugin.supports(eventName))) {
          this[_eventToPlugin][$_set](eventName, plugin);
          return plugin;
        }
      }
      dart.throw(new core.StateError.new(dart.str`No event manager plugin found for event ${eventName}`));
    }
  };
  (src__platform__dom__events__event_manager.EventManager.new = function(plugins, zone) {
    this[_plugins] = null;
    this[_eventToPlugin] = null;
    this[_zone] = zone;
    for (let i = 0, len = plugins[$length]; i < dart.notNull(len); i++) {
      plugins[$_get](i).manager = this;
    }
    this[_plugins] = plugins;
    this[_eventToPlugin] = new (IdentityMapOfString$EventManagerPlugin()).new();
  }).prototype = src__platform__dom__events__event_manager.EventManager.prototype;
  dart.addTypeTests(src__platform__dom__events__event_manager.EventManager);
  dart.setMethodSignature(src__platform__dom__events__event_manager.EventManager, () => ({
    __proto__: dart.getMethods(src__platform__dom__events__event_manager.EventManager.__proto__),
    addEventListener: dart.fnType(core.Function, [dart.dynamic, core.String, dart.fnType(dart.void, [dart.dynamic])]),
    getZone: dart.fnType(src__core__zone__ng_zone.NgZone, []),
    [_findPluginFor]: dart.fnType(src__platform__dom__events__event_manager.EventManagerPlugin, [core.String])
  }));
  dart.setFieldSignature(src__platform__dom__events__event_manager.EventManager, () => ({
    __proto__: dart.getFields(src__platform__dom__events__event_manager.EventManager.__proto__),
    [_zone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_plugins]: dart.fieldType(ListOfEventManagerPlugin()),
    [_eventToPlugin]: dart.fieldType(MapOfString$EventManagerPlugin())
  }));
  src__platform__dom__events__event_manager.EventManagerPlugin = class EventManagerPlugin extends core.Object {
    get manager() {
      return this[manager];
    }
    set manager(value) {
      this[manager] = value;
    }
    addEventListener(element, eventName, callback) {
      return dart.throw(new core.UnsupportedError.new('Not supported'));
    }
    addGlobalEventListener(element, eventName, callback) {
      return dart.throw(new core.UnsupportedError.new('Not supported'));
    }
  };
  (src__platform__dom__events__event_manager.EventManagerPlugin.new = function() {
    this[manager] = null;
  }).prototype = src__platform__dom__events__event_manager.EventManagerPlugin.prototype;
  dart.addTypeTests(src__platform__dom__events__event_manager.EventManagerPlugin);
  const manager = Symbol("EventManagerPlugin.manager");
  dart.setMethodSignature(src__platform__dom__events__event_manager.EventManagerPlugin, () => ({
    __proto__: dart.getMethods(src__platform__dom__events__event_manager.EventManagerPlugin.__proto__),
    addEventListener: dart.fnType(core.Function, [dart.dynamic, core.String, dart.fnType(dart.void, [dart.dynamic])]),
    addGlobalEventListener: dart.fnType(core.Function, [dart.dynamic, core.String, dart.fnType(dart.void, [dart.dynamic])])
  }));
  dart.setFieldSignature(src__platform__dom__events__event_manager.EventManagerPlugin, () => ({
    __proto__: dart.getFields(src__platform__dom__events__event_manager.EventManagerPlugin.__proto__),
    manager: dart.fieldType(src__platform__dom__events__event_manager.EventManager)
  }));
  dart.trackLibraries("packages/angular/src/platform/dom/events/event_manager.ddc", {
    "package:angular/src/platform/dom/events/event_manager.dart": src__platform__dom__events__event_manager
  }, '{"version":3,"sourceRoot":"","sources":["event_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAGkB,+DAAqB;YACnC,gBAAM,2CAAW,CAAC;;;;;;;;qBAgBlB,OAAe,EACf,SAAgB,EAChB,QAAoB;AAEpB,UAAI,SAAS,oBAAmB,CAAC,SAAS;AAC1C,YAAO,OAAM,iBAAiB,CAAC,OAAO,EAAE,SAAS,EAAE,QAAQ;IAC7D;;YAEoB,YAAK;;qBAES,SAAgB;AAChD,UAAmB,SAAS,oBAAc,QAAC,SAAS;AACpD,UAAI,MAAM,IAAI,MAAM,MAAO,OAAM;AACjC,UAAI,UAAU,cAAa;AAC3B,eAAS,IAAmB,aAAf,OAAO,SAAO,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AAC5C,cAAM,GAAG,OAAO,QAAC,CAAC;AAClB,sBAAI,MAAM,SAAS,CAAC,SAAS,IAAG;AAC9B,8BAAc,QAAC,SAAS,EAAI,MAAM;AAClC,gBAAO,OAAM;;;AAGjB,iBAAM,IAAI,mBAAU,CAAC,mDAA0C,SAAS;IAC1E;;yEA/Ba,OAA+D,EACnE,IAAK;IAHW,cAAQ;IACD,oBAAc;IAErC,WAAK,GAAL,IAAK;AACZ,aAAS,IAAI,GAAG,MAAM,OAAO,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAClD,aAAO,QAAC,CAAC,SAAS,GAAG;;AAEvB,kBAAa,GAAG,OAAO;AACvB,wBAAc,GAAG;EACnB;;;;;;;;;;;;;;;IA4Ba;;;;;;qBAWX,OAAe,EACf,SAAgB,EAChB,QAAoB;YAElB,YAAM,IAAI,yBAAgB,CAAC;IAAgB;2BAI7C,OAAe,EACf,SAAgB,EAChB,QAAoB;YAElB,YAAM,IAAI,yBAAgB,CAAC;IAAgB;;;IAvBlC,aAAO;EAwBtB","file":"event_manager.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__event_manager: src__platform__dom__events__event_manager
  };
});

//# sourceMappingURL=event_manager.ddc.js.map
