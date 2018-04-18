define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception.template', 'packages/angular/core.template', 'packages/angular/src/runtime.template'], function(dart_sdk, invalid_pipe_argument_exception, core, runtime) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception$46template = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception$46template;
  const core$46template = core.core$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__common__pipes__date_pipe$46template = Object.create(_root);
  dart.defineLazy(src__common__pipes__date_pipe$46template, {
    /*src__common__pipes__date_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__pipes__date_pipe$46template.initReflector = function() {
    if (dart.test(src__common__pipes__date_pipe$46template._visited)) {
      return;
    }
    src__common__pipes__date_pipe$46template._visited = true;
    src__common__pipes__invalid_pipe_argument_exception$46template.initReflector();
    core$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/common/pipes/date_pipe.template.ddc", {
    "package:angular/src/common/pipes/date_pipe.template.dart": src__common__pipes__date_pipe$46template
  }, '{"version":3,"sourceRoot":"","sources":["date_pipe.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAeI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,4EAAa;AACnB,IAAM,6BAAa;AACnB,IAAM,qCAAa;EACrB","file":"date_pipe.template.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__date_pipe$46template: src__common__pipes__date_pipe$46template
  };
});

//# sourceMappingURL=date_pipe.template.ddc.js.map
