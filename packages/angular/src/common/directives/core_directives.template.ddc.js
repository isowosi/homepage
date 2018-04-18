define(['dart_sdk', 'packages/angular/src/common/directives/ng_class.template', 'packages/angular/src/common/directives/ng_for.template', 'packages/angular/src/common/directives/ng_if.template', 'packages/angular/src/common/directives/ng_style.template', 'packages/angular/src/common/directives/ng_switch.template', 'packages/angular/src/common/directives/ng_template_outlet.template'], function(dart_sdk, ng_class, ng_for, ng_if, ng_style, ng_switch, ng_template_outlet) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__directives__ng_class$46template = ng_class.src__common__directives__ng_class$46template;
  const src__common__directives__ng_for$46template = ng_for.src__common__directives__ng_for$46template;
  const src__common__directives__ng_if$46template = ng_if.src__common__directives__ng_if$46template;
  const src__common__directives__ng_style$46template = ng_style.src__common__directives__ng_style$46template;
  const src__common__directives__ng_switch$46template = ng_switch.src__common__directives__ng_switch$46template;
  const src__common__directives__ng_template_outlet$46template = ng_template_outlet.src__common__directives__ng_template_outlet$46template;
  const _root = Object.create(null);
  const src__common__directives__core_directives$46template = Object.create(_root);
  dart.defineLazy(src__common__directives__core_directives$46template, {
    /*src__common__directives__core_directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__core_directives$46template.initReflector = function() {
    if (dart.test(src__common__directives__core_directives$46template._visited)) {
      return;
    }
    src__common__directives__core_directives$46template._visited = true;
    src__common__directives__ng_class$46template.initReflector();
    src__common__directives__ng_for$46template.initReflector();
    src__common__directives__ng_if$46template.initReflector();
    src__common__directives__ng_style$46template.initReflector();
    src__common__directives__ng_switch$46template.initReflector();
    src__common__directives__ng_template_outlet$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/common/directives/core_directives.template.ddc", {
    "package:angular/src/common/directives/core_directives.template.dart": src__common__directives__core_directives$46template
  }, '{"version":3,"sourceRoot":"","sources":["core_directives.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAoBI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAM,0DAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,oEAAa;EACrB","file":"core_directives.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__core_directives$46template: src__common__directives__core_directives$46template
  };
});

//# sourceMappingURL=core_directives.template.ddc.js.map
