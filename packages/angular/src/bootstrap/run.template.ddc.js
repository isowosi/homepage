define(['dart_sdk', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/linker.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/linker/component_resolver.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/core/zone.template', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/platform/browser_common.template', 'packages/angular/src/platform/dom/events/event_manager.template', 'packages/angular/src/platform/dom/shared_styles_host.template', 'packages/angular/src/runtime.template', 'packages/angular/src/security/dom_sanitization_service.template', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, application_ref, application_tokens, di, linker, app_view_utils, component_resolver, api, testability, zone, empty, browser_common, event_manager, shared_styles_host, runtime, dom_sanitization_service, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__core__linker__component_resolver$46template = component_resolver.src__core__linker__component_resolver$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__core__zone$46template = zone.src__core__zone$46template;
  const src__di__injector__empty$46template = empty.src__di__injector__empty$46template;
  const src__di__injector__hierarchical$46template = empty.src__di__injector__hierarchical$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const src__platform__browser_common$46template = browser_common.src__platform__browser_common$46template;
  const src__platform__dom__events__event_manager$46template = event_manager.src__platform__dom__events__event_manager$46template;
  const src__platform__dom__shared_styles_host$46template = shared_styles_host.src__platform__dom__shared_styles_host$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__security__dom_sanitization_service$46template = dom_sanitization_service.src__security__dom_sanitization_service$46template;
  const src__bootstrap__modules$46template = modules.src__bootstrap__modules$46template;
  const _root = Object.create(null);
  const src__bootstrap__run$46template = Object.create(_root);
  dart.defineLazy(src__bootstrap__run$46template, {
    /*src__bootstrap__run$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__bootstrap__run$46template.initReflector = function() {
    if (dart.test(src__bootstrap__run$46template._visited)) {
      return;
    }
    src__bootstrap__run$46template._visited = true;
    src__core__application_ref$46template.initReflector();
    src__core__application_tokens$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__linker$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__core__zone$46template.initReflector();
    src__di__injector__empty$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__platform__browser_common$46template.initReflector();
    src__platform__dom__events__event_manager$46template.initReflector();
    src__platform__dom__shared_styles_host$46template.initReflector();
    src__runtime$46template.initReflector();
    src__security__dom_sanitization_service$46template.initReflector();
    src__bootstrap__modules$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/bootstrap/run.template.ddc", {
    "package:angular/src/bootstrap/run.template.dart": src__bootstrap__run$46template
  }, '{"version":3,"sourceRoot":"","sources":["run.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;MA+CI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,iDAAa;AACnB,IAAO,wDAAa;AACpB,IAAO,oDAAa;AACpB,IAAO,sDAAa;AACpB,IAAO,kEAAa;AACpB,IAAO,+DAAa;AACpB,IAAO,qCAAa;AACpB,IAAO,gEAAa;AACpB,IAAO,gDAAa;EACtB","file":"run.template.ddc.js"}');
  // Exports:
  return {
    src__bootstrap__run$46template: src__bootstrap__run$46template
  };
});

//# sourceMappingURL=run.template.ddc.js.map
