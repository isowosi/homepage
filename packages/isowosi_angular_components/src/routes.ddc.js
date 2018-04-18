define(['dart_sdk', 'packages/angular_router/src/route_definition'], function(dart_sdk, route_definition) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_path = route_definition.src__route_path;
  const _root = Object.create(null);
  const src__routes = Object.create(_root);
  dart.defineLazy(src__routes, {
    /*src__routes.impressumRoute*/get impressumRoute() {
      return new src__route_path.RoutePath.new({path: "impressum"});
    },
    /*src__routes.privacyPolicyRoute*/get privacyPolicyRoute() {
      return new src__route_path.RoutePath.new({path: "privacypolicy"});
    }
  });
  dart.trackLibraries("packages/isowosi_angular_components/src/routes.ddc", {
    "package:isowosi_angular_components/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["routes.dart"],"names":[],"mappings":";;;;;;;;;MAEM,0BAAc;YAAG,KAAI,6BAAS,QAC5B;;MAEF,8BAAkB;YAAG,KAAI,6BAAS,QAChC","file":"routes.ddc.js"}');
  // Exports:
  return {
    src__routes: src__routes
  };
});

//# sourceMappingURL=routes.ddc.js.map
