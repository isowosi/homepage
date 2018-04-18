define(['dart_sdk', 'packages/isowosi_homepage/src/routes', 'packages/isowosi_angular_components/src/routes', 'packages/isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum.template', 'packages/angular_router/src/route_definition', 'packages/isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy.template', 'packages/isowosi_homepage/src/components/games_list_components/games_list_component.template'], function(dart_sdk, routes, routes$, isowosi_impressum, route_definition, isowosi_privacy_policy, games_list_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__routes = routes.src__routes;
  const src__routes$ = routes$.src__routes;
  const src__components__isowosi_impressum__isowosi_impressum$46template = isowosi_impressum.src__components__isowosi_impressum__isowosi_impressum$46template;
  const src__route_definition = route_definition.src__route_definition;
  const src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template = isowosi_privacy_policy.src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template;
  const src__components__games_list_components__games_list_component$46template = games_list_component.src__components__games_list_components__games_list_component$46template;
  const _root = Object.create(null);
  const isowosi_homepage = Object.create(_root);
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  isowosi_homepage.IsowosiHomepageComponent = class IsowosiHomepageComponent extends core.Object {
    get gamesUrl() {
      return this[gamesUrl];
    }
    set gamesUrl(value) {
      super.gamesUrl = value;
    }
    get routes() {
      return this[routes$0];
    }
    set routes(value) {
      super.routes = value;
    }
  };
  (isowosi_homepage.IsowosiHomepageComponent.new = function() {
    this[gamesUrl] = src__routes.gamesRoute.toUrl();
    this[routes$0] = JSArrayOfRouteDefinition().of([src__route_definition.RouteDefinition.new({routePath: src__routes$.impressumRoute, component: src__components__isowosi_impressum__isowosi_impressum$46template.IsowosiImpressumComponentNgFactory}), src__route_definition.RouteDefinition.new({routePath: src__routes$.privacyPolicyRoute, component: src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.IsowosiPrivacyPolicyComponentNgFactory}), src__route_definition.RouteDefinition.new({routePath: src__routes.homeRoute, component: src__components__games_list_components__games_list_component$46template.GamesListComponentNgFactory}), src__route_definition.RouteDefinition.new({routePath: src__routes.gamesRoute, component: src__components__games_list_components__games_list_component$46template.GamesListComponentNgFactory}), src__route_definition.RouteDefinition.redirect({path: '.*', redirectTo: src__routes.homeRoute.toUrl()})]);
  }).prototype = isowosi_homepage.IsowosiHomepageComponent.prototype;
  dart.addTypeTests(isowosi_homepage.IsowosiHomepageComponent);
  const gamesUrl = Symbol("IsowosiHomepageComponent.gamesUrl");
  const routes$0 = Symbol("IsowosiHomepageComponent.routes");
  dart.setFieldSignature(isowosi_homepage.IsowosiHomepageComponent, () => ({
    __proto__: dart.getFields(isowosi_homepage.IsowosiHomepageComponent.__proto__),
    gamesUrl: dart.finalFieldType(core.String),
    routes: dart.finalFieldType(ListOfRouteDefinition())
  }));
  dart.trackLibraries("packages/isowosi_homepage/isowosi_homepage.ddc", {
    "package:isowosi_homepage/isowosi_homepage.dart": isowosi_homepage
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_homepage.dart"],"names":[],"mappings":";;;;;;;;QA4BiB,gEAAiB;;QAIjB,0EAAsB;QAQtB,uEAAU;;;;;;IAjBZ;;;;;;IAEe;;;;;;;;IAFf,cAAQ,GAAG,sBAAU,MAAM;IAEZ,cAAM,GAAG,+BACnC,AAAI,yCAAe,aACN,2BAAc,aACd,AAAkB,gEAAD,mCAAmC,IAEjE,AAAI,yCAAe,aACN,+BAAkB,aAClB,AAAuB,0EAAD,uCAAuC,IAE1E,AAAI,yCAAe,aACN,qBAAS,aACE,AAIX,uEAAU,4BAJ4B,IAEnD,AAAI,yCAAe,aACN,sBAAU,aACV,AAAW,uEAAD,4BAA4B,IAEnD,AAAI,8CAAwB,QACpB,kBACM,qBAAS,MAAM;EAGjC","file":"isowosi_homepage.ddc.js"}');
  // Exports:
  return {
    isowosi_homepage: isowosi_homepage
  };
});

//# sourceMappingURL=isowosi_homepage.ddc.js.map
