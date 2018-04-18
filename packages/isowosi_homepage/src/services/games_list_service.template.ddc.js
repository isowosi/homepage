define(['dart_sdk', 'packages/isowosi_homepage/src/services/games_list_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, games_list_service, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__games_list_service = games_list_service.src__services__games_list_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__services__games_list_service$46template = Object.create(_root);
  let VoidToGamesListService = () => (VoidToGamesListService = dart.constFn(dart.fnType(src__services__games_list_service.GamesListService, [])))();
  dart.defineLazy(src__services__games_list_service$46template, {
    /*src__services__games_list_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__services__games_list_service$46template.initReflector = function() {
    if (dart.test(src__services__games_list_service$46template._visited)) {
      return;
    }
    src__services__games_list_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__services__games_list_service.GamesListService), dart.fn(() => new src__services__games_list_service.GamesListService.new(), VoidToGamesListService()));
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_homepage/src/services/games_list_service.template.ddc", {
    "package:isowosi_homepage/src/services/games_list_service.template.dart": src__services__games_list_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["games_list_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAO,kCAAe,CAAC,iEAAgB,EAAE,cAAM,IAAI,sDAAgB;AACnE,IAAM,gCAAa;EACrB","file":"games_list_service.template.ddc.js"}');
  // Exports:
  return {
    src__services__games_list_service$46template: src__services__games_list_service$46template
  };
});

//# sourceMappingURL=games_list_service.template.ddc.js.map
