define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/constants.template', 'packages/angular/src/runtime.template', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/core/linker/element_ref.template', 'packages/angular/src/core/linker/view_type.template', 'packages/angular/src/core/change_detection/change_detector_ref.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/change_detection/component_state.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/di/errors.template', 'packages/angular/src/core/di.template', 'packages/angular/src/di/reflector.template', 'packages/angular/src/core/change_detection/host', 'packages/angular/src/di/reflector', 'packages/angular/src/core/di/decorators.template'], function(dart_sdk, change_detection, constants, runtime, empty, element_ref, view_type, change_detector_ref, app_view_utils, component_state, api, errors, di, reflector, host, reflector$, decorators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__change_detection__constants$46template = constants.src__core__change_detection__constants$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__di__injector__hierarchical$46template = empty.src__di__injector__hierarchical$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const src__core__linker__element_ref$46template = element_ref.src__core__linker__element_ref$46template;
  const src__core__linker__view_type$46template = view_type.src__core__linker__view_type$46template;
  const src__core__change_detection__change_detector_ref$46template = change_detector_ref.src__core__change_detection__change_detector_ref$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__core__change_detection__component_state$46template = component_state.src__core__change_detection__component_state$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__di__errors$46template = errors.src__di__errors$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__di__reflector$46template = reflector.src__di__reflector$46template;
  const src__core__linker__component_loader = host.src__core__linker__component_loader;
  const src__di__reflector = reflector$.src__di__reflector;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const _root = Object.create(null);
  const src__core__change_detection__host$46template = Object.create(_root);
  const src__di__injector__element$46template = Object.create(_root);
  const src__core__linker__view_container_ref$46template = Object.create(_root);
  const src__core__linker__view_container$46template = Object.create(_root);
  const src__core__linker__view_ref$46template = Object.create(_root);
  const src__core__linker__template_ref$46template = Object.create(_root);
  const src__core__linker__app_view$46template = Object.create(_root);
  const src__core__linker__component_factory$46template = Object.create(_root);
  const src__core__linker__component_loader$46template = Object.create(_root);
  let VoidToComponentLoader = () => (VoidToComponentLoader = dart.constFn(dart.fnType(src__core__linker__component_loader.ComponentLoader, [])))();
  dart.defineLazy(src__core__change_detection__host$46template, {
    /*src__core__change_detection__host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection__host$46template.initReflector = function() {
    if (dart.test(src__core__change_detection__host$46template._visited)) {
      return;
    }
    src__core__change_detection__host$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.defineLazy(src__di__injector__element$46template, {
    /*src__di__injector__element$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__element$46template.initReflector = function() {
    if (dart.test(src__di__injector__element$46template._visited)) {
      return;
    }
    src__di__injector__element$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__view_container_ref$46template, {
    /*src__core__linker__view_container_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_container_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_container_ref$46template._visited)) {
      return;
    }
    src__core__linker__view_container_ref$46template._visited = true;
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__view_container$46template, {
    /*src__core__linker__view_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_container$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_container$46template._visited)) {
      return;
    }
    src__core__linker__view_container$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__core__linker__view_type$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__view_ref$46template, {
    /*src__core__linker__view_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_ref$46template._visited)) {
      return;
    }
    src__core__linker__view_ref$46template._visited = true;
    src__core__change_detection__change_detector_ref$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__template_ref$46template, {
    /*src__core__linker__template_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__template_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__template_ref$46template._visited)) {
      return;
    }
    src__core__linker__template_ref$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__core__linker__view_container$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__app_view$46template, {
    /*src__core__linker__app_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__app_view$46template.initReflector = function() {
    if (dart.test(src__core__linker__app_view$46template._visited)) {
      return;
    }
    src__core__linker__app_view$46template._visited = true;
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__change_detection__component_state$46template.initReflector();
    src__core__change_detection__host$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__di__errors$46template.initReflector();
    src__di__injector__element$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__core__linker__view_type$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__component_factory$46template, {
    /*src__core__linker__component_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_factory$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_factory$46template._visited)) {
      return;
    }
    src__core__linker__component_factory$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__di$46template.initReflector();
    src__di__reflector$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.defineLazy(src__core__linker__component_loader$46template, {
    /*src__core__linker__component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_loader$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_loader$46template._visited)) {
      return;
    }
    src__core__linker__component_loader$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__linker__component_loader.ComponentLoader), dart.fn(() => new src__core__linker__component_loader.ComponentLoader.new(), VoidToComponentLoader()));
    src__di__injector__injector$46template.initReflector();
    src__core__di__decorators$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
  };
  dart.trackLibraries("packages/angular/src/core/change_detection/host.template.ddc", {
    "package:angular/src/core/change_detection/host.template.dart": src__core__change_detection__host$46template,
    "package:angular/src/di/injector/element.template.dart": src__di__injector__element$46template,
    "package:angular/src/core/linker/view_container_ref.template.dart": src__core__linker__view_container_ref$46template,
    "package:angular/src/core/linker/view_container.template.dart": src__core__linker__view_container$46template,
    "package:angular/src/core/linker/view_ref.template.dart": src__core__linker__view_ref$46template,
    "package:angular/src/core/linker/template_ref.template.dart": src__core__linker__template_ref$46template,
    "package:angular/src/core/linker/app_view.template.dart": src__core__linker__app_view$46template,
    "package:angular/src/core/linker/component_factory.template.dart": src__core__linker__component_factory$46template,
    "package:angular/src/core/linker/component_loader.template.dart": src__core__linker__component_loader$46template
  }, '{"version":3,"sourceRoot":"","sources":["host.template.dart","../../di/injector/element.template.dart","../linker/view_container_ref.template.dart","../linker/view_container.template.dart","../linker/view_ref.template.dart","../linker/template_ref.template.dart","../linker/app_view.template.dart","../linker/component_factory.template.dart","../linker/component_loader.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAqBI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB;;MClBI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;MCLI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;MCJI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qDAAa;EACrB;;MC7BI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,yEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,+DAAa;EACrB;;MCZI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,oDAAa;EACrB;;MCYI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,0DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,qEAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;AACnB,IAAO,wDAAa;AACpB,IAAO,0DAAa;AACpB,IAAO,oDAAa;AACpB,IAAO,qDAAa;EACtB;;MCrCI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,oDAAa;EACrB;;MCnBI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,kCAAe,CAAC,kEAAe,EAAE,cAAM,IAAI,uDAAe;AACjE,IAAM,oDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,8DAAa;EACrB","file":"host.template.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__host$46template: src__core__change_detection__host$46template,
    src__di__injector__element$46template: src__di__injector__element$46template,
    src__core__linker__view_container_ref$46template: src__core__linker__view_container_ref$46template,
    src__core__linker__view_container$46template: src__core__linker__view_container$46template,
    src__core__linker__view_ref$46template: src__core__linker__view_ref$46template,
    src__core__linker__template_ref$46template: src__core__linker__template_ref$46template,
    src__core__linker__app_view$46template: src__core__linker__app_view$46template,
    src__core__linker__component_factory$46template: src__core__linker__component_factory$46template,
    src__core__linker__component_loader$46template: src__core__linker__component_loader$46template
  };
});

//# sourceMappingURL=host.template.ddc.js.map
