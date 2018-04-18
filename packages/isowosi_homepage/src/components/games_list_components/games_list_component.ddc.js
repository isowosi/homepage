define(['dart_sdk', 'packages/isowosi_homepage/src/services/games_list_service'], function(dart_sdk, games_list_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__games_list_service = games_list_service.src__services__games_list_service;
  const _root = Object.create(null);
  const src__components__games_list_components__games_list_component = Object.create(_root);
  const $addAll = dartx.addAll;
  let JSArrayOfGame = () => (JSArrayOfGame = dart.constFn(_interceptors.JSArray$(src__services__games_list_service.Game)))();
  let ListOfGame = () => (ListOfGame = dart.constFn(core.List$(src__services__games_list_service.Game)))();
  let ListOfGameToNull = () => (ListOfGameToNull = dart.constFn(dart.fnType(core.Null, [ListOfGame()])))();
  src__components__games_list_components__games_list_component.GamesListComponent = class GamesListComponent extends core.Object {
    get games() {
      return this[games];
    }
    set games(value) {
      this[games] = value;
    }
  };
  (src__components__games_list_components__games_list_component.GamesListComponent.new = function(gamesListService) {
    this[games] = JSArrayOfGame().of([]);
    gamesListService.getGames().then(core.Null, dart.fn(games => {
      this.games[$addAll](games);
    }, ListOfGameToNull()));
  }).prototype = src__components__games_list_components__games_list_component.GamesListComponent.prototype;
  dart.addTypeTests(src__components__games_list_components__games_list_component.GamesListComponent);
  const games = Symbol("GamesListComponent.games");
  dart.setFieldSignature(src__components__games_list_components__games_list_component.GamesListComponent, () => ({
    __proto__: dart.getFields(src__components__games_list_components__games_list_component.GamesListComponent.__proto__),
    games: dart.fieldType(ListOfGame())
  }));
  dart.trackLibraries("packages/isowosi_homepage/src/components/games_list_components/games_list_component.ddc", {
    "package:isowosi_homepage/src/components/games_list_components/games_list_component.dart": src__components__games_list_components__games_list_component
  }, '{"version":3,"sourceRoot":"","sources":["games_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAWa;;;;;;;kGACQ,gBAAiC;IADzC,WAAK,GAAG;AAEjB,oBAAgB,SAAS,OAAO,YAAC,QAAC,KAAK;AACrC,gBAAU,SAAO,CAAC,KAAK;;EAE3B","file":"games_list_component.ddc.js"}');
  // Exports:
  return {
    src__components__games_list_components__games_list_component: src__components__games_list_components__games_list_component
  };
});

//# sourceMappingURL=games_list_component.ddc.js.map
