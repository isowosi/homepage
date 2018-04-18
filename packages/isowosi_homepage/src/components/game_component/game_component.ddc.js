define(['dart_sdk', 'packages/isowosi_homepage/src/services/games_list_service'], function(dart_sdk, games_list_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__services__games_list_service = games_list_service.src__services__games_list_service;
  const _root = Object.create(null);
  const src__components__game_component__game_component = Object.create(_root);
  src__components__game_component__game_component.GameComponent = class GameComponent extends core.Object {
    get game() {
      return this[game];
    }
    set game(value) {
      this[game] = value;
    }
  };
  (src__components__game_component__game_component.GameComponent.new = function() {
    this[game] = null;
  }).prototype = src__components__game_component__game_component.GameComponent.prototype;
  dart.addTypeTests(src__components__game_component__game_component.GameComponent);
  const game = Symbol("GameComponent.game");
  dart.setFieldSignature(src__components__game_component__game_component.GameComponent, () => ({
    __proto__: dart.getFields(src__components__game_component__game_component.GameComponent.__proto__),
    game: dart.fieldType(src__services__games_list_service.Game)
  }));
  dart.trackLibraries("packages/isowosi_homepage/src/components/game_component/game_component.ddc", {
    "package:isowosi_homepage/src/components/game_component/game_component.dart": src__components__game_component__game_component
  }, '{"version":3,"sourceRoot":"","sources":["game_component.dart"],"names":[],"mappings":";;;;;;;;;IAUO;;;;;;;;cAAI;EACX","file":"game_component.ddc.js"}');
  // Exports:
  return {
    src__components__game_component__game_component: src__components__game_component__game_component
  };
});

//# sourceMappingURL=game_component.ddc.js.map
