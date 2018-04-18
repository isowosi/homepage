define(['dart_sdk', 'packages/angular_router/src/route_definition'], function(dart_sdk, route_definition) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_path = route_definition.src__route_path;
  const _root = Object.create(null);
  const src__routes = Object.create(_root);
  dart.defineLazy(src__routes, {
    /*src__routes.homeRoute*/get homeRoute() {
      return new src__route_path.RoutePath.new({path: "", useAsDefault: true});
    },
    /*src__routes.gamesRoute*/get gamesRoute() {
      return new src__route_path.RoutePath.new({path: 'games'});
    }
  });
  dart.trackLibraries("packages/isowosi_homepage/src/routes.ddc", {
    "package:isowosi_homepage/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["routes.dart"],"names":[],"mappings":";;;;;;;;;MAEM,qBAAS;YAAG,KAAI,6BAAS,QACvB,kBACQ;;MAEV,sBAAU;YAAG,KAAI,6BAAS,QACxB","file":"routes.ddc.js"}');
  // Exports:
  return {
    src__routes: src__routes
  };
});

//# sourceMappingURL=routes.ddc.js.map
