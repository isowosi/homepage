define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__services__games_list_service = Object.create(_root);
  const $toList = dartx.toList;
  const $_get = dartx._get;
  const $map = dartx.map;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ListOfMapOfString$dynamic = () => (ListOfMapOfString$dynamic = dart.constFn(core.List$(MapOfString$dynamic())))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfMapOfString$String = () => (ListOfMapOfString$String = dart.constFn(core.List$(MapOfString$String())))();
  let MapOfString$StringToLink = () => (MapOfString$StringToLink = dart.constFn(dart.fnType(src__services__games_list_service.Link, [MapOfString$String()])))();
  let MapOfString$dynamicToGame = () => (MapOfString$dynamicToGame = dart.constFn(dart.fnType(src__services__games_list_service.Game, [MapOfString$dynamic()])))();
  let ListOfGame = () => (ListOfGame = dart.constFn(core.List$(src__services__games_list_service.Game)))();
  let ListOfLink = () => (ListOfLink = dart.constFn(core.List$(src__services__games_list_service.Link)))();
  src__services__games_list_service.GamesListService = class GamesListService extends core.Object {
    getGames() {
      return async.async(ListOfGame(), function* getGames() {
        let request = (yield html.HttpRequest.request('games.json'));
        let gamesJson = ListOfMapOfString$dynamic().as(convert.json.decode(request.responseText));
        return gamesJson[$map](src__services__games_list_service.Game, dart.fn(gameData => {
          let linkJson = ListOfMapOfString$String().as(gameData[$_get]('links'));
          let links = linkJson[$map](src__services__games_list_service.Link, dart.fn(linkData => new src__services__games_list_service.Link.new(linkData[$_get]('name'), linkData[$_get]('href')), MapOfString$StringToLink()))[$toList]();
          return new src__services__games_list_service.Game.new(core.String._check(gameData[$_get]('id')), core.String._check(gameData[$_get]('name')), core.String._check(gameData[$_get]('description')), links);
        }, MapOfString$dynamicToGame()))[$toList]();
      });
    }
  };
  (src__services__games_list_service.GamesListService.new = function() {
  }).prototype = src__services__games_list_service.GamesListService.prototype;
  dart.addTypeTests(src__services__games_list_service.GamesListService);
  dart.setMethodSignature(src__services__games_list_service.GamesListService, () => ({
    __proto__: dart.getMethods(src__services__games_list_service.GamesListService.__proto__),
    getGames: dart.fnType(async.Future$(core.List$(src__services__games_list_service.Game)), [])
  }));
  src__services__games_list_service.Game = class Game extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    get links() {
      return this[links$];
    }
    set links(value) {
      this[links$] = value;
    }
  };
  (src__services__games_list_service.Game.new = function(id, name, description, links) {
    this[id$] = id;
    this[name$] = name;
    this[description$] = description;
    this[links$] = links;
  }).prototype = src__services__games_list_service.Game.prototype;
  dart.addTypeTests(src__services__games_list_service.Game);
  const id$ = Symbol("Game.id");
  const name$ = Symbol("Game.name");
  const description$ = Symbol("Game.description");
  const links$ = Symbol("Game.links");
  dart.setFieldSignature(src__services__games_list_service.Game, () => ({
    __proto__: dart.getFields(src__services__games_list_service.Game.__proto__),
    id: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    description: dart.fieldType(core.String),
    links: dart.fieldType(ListOfLink())
  }));
  src__services__games_list_service.Link = class Link extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get href() {
      return this[href$];
    }
    set href(value) {
      this[href$] = value;
    }
  };
  (src__services__games_list_service.Link.new = function(name, href) {
    this[name$0] = name;
    this[href$] = href;
  }).prototype = src__services__games_list_service.Link.prototype;
  dart.addTypeTests(src__services__games_list_service.Link);
  const name$0 = Symbol("Link.name");
  const href$ = Symbol("Link.href");
  dart.setFieldSignature(src__services__games_list_service.Link, () => ({
    __proto__: dart.getFields(src__services__games_list_service.Link.__proto__),
    name: dart.fieldType(core.String),
    href: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/isowosi_homepage/src/services/games_list_service.ddc", {
    "package:isowosi_homepage/src/services/games_list_service.dart": src__services__games_list_service
  }, '{"version":3,"sourceRoot":"","sources":["games_list_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAOgC;AAC5B,YAAM,WAAU,MAAM,gBAAW,QAAQ,CAAC;AAC1C,YAAM,2CAAY,YAAI,OAAO,CAAC,OAAO,aAAa;AAClD,cAAO,UAAS,MAAI,yCAAO,QAAC,QAAQ;AAClC,cAAM,yCAAW,QAAQ,QAAC;AAC1B,cAAW,QAAQ,QAAQ,MAAI,yCAAO,QAAC,QAAQ,IACtC,IAAI,0CAAI,CAAC,QAAQ,QAAC,SAAS,QAAQ,QAAC,+CACpC;AACT,gBAAO,KAAI,0CAAI,oBACX,QAAQ,QAAC,2BAAO,QAAQ,QAAC,6BAAS,QAAQ,QAAC,iBAAgB,KAAK;iDAC7D;MACX;;;;EACF;;;;;;;IAGS;;;;;;IACA;;;;;;IACA;;;;;;IACI;;;;;;;yDAEN,EAAO,EAAE,IAAS,EAAE,WAAgB,EAAE,KAAU;IAA3C,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;IAAO,kBAAW,GAAX,WAAW;IAAO,YAAK,GAAL,KAAK;EAAC;;;;;;;;;;;;;;IAI/C;;;;;;IACA;;;;;;;yDAEF,IAAS,EAAE,IAAS;IAAf,YAAI,GAAJ,IAAI;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"games_list_service.ddc.js"}');
  // Exports:
  return {
    src__services__games_list_service: src__services__games_list_service
  };
});

//# sourceMappingURL=games_list_service.ddc.js.map
