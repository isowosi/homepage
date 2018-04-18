define(['dart_sdk', 'packages/isowosi_homepage/src/components/games_list_components/games_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/isowosi_homepage/src/components/games_list_components/games_list_component', 'packages/angular/src/common/directives/ng_for', 'packages/isowosi_homepage/src/components/game_component/game_component.template', 'packages/isowosi_homepage/src/components/game_component/game_component', 'packages/isowosi_homepage/src/services/games_list_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/isowosi_homepage/src/services/games_list_service.template'], function(dart_sdk, games_list_component$46css, view_type, constants, view, app_view_utils, host, games_list_component, ng_for, game_component, game_component$, games_list_service, reflector, angular, games_list_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__components__games_list_components__games_list_component$46css$46shim = games_list_component$46css.src__components__games_list_components__games_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__view_container = host.src__core__linker__view_container;
  const src__core__linker__template_ref = host.src__core__linker__template_ref;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__components__games_list_components__games_list_component = games_list_component.src__components__games_list_components__games_list_component;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__components__game_component__game_component$46template = game_component.src__components__game_component__game_component$46template;
  const src__components__game_component__game_component = game_component$.src__components__game_component__game_component;
  const src__services__games_list_service = games_list_service.src__services__games_list_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__services__games_list_service$46template = games_list_service$.src__services__games_list_service$46template;
  const _root = Object.create(null);
  const src__components__games_list_components__games_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfGamesListComponent = () => (AppViewOfGamesListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__games_list_components__games_list_component.GamesListComponent)))();
  let AppViewAndintToAppViewOfGamesListComponent = () => (AppViewAndintToAppViewOfGamesListComponent = dart.constFn(dart.fnType(AppViewOfGamesListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfGamesListComponent = () => (ComponentRefOfGamesListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__games_list_components__games_list_component.GamesListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfGamesListComponent = () => (ComponentFactoryOfGamesListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__games_list_components__games_list_component.GamesListComponent)))();
  dart.defineLazy(src__components__games_list_components__games_list_component$46template, {
    /*src__components__games_list_components__games_list_component$46template.styles$GamesListComponent*/get styles$GamesListComponent() {
      return dart.constList([src__components__games_list_components__games_list_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0 = class ViewGamesListComponent0 extends src__core__linker__app_view.AppView$(src__components__games_list_components__games_list_component.GamesListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(src__components__games_list_components__games_list_component$46template.viewFactory_GamesListComponent1, AppViewAndintToAppViewOfGamesListComponent()));
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.games;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_0_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    this[_expr_0] = null;
    src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('games-list'));
    let t = src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0._renderType;
    t == null ? src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__components__games_list_components__games_list_component$46template.styles$GamesListComponent) : t;
    this.setupComponentType(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0._renderType);
  }).prototype = src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.prototype;
  dart.addTypeTests(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0);
  dart.setMethodSignature(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0, () => ({
    __proto__: dart.getMethods(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__games_list_components__games_list_component.GamesListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0, () => ({
    __proto__: dart.getFields(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0, {
    /*src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__games_list_components__games_list_component$46template.viewFactory_GamesListComponent0 = function(parentView, parentIndex) {
    return new src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _GameComponent_0_5 = Symbol('_GameComponent_0_5');
  src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1 = class _ViewGamesListComponent1 extends src__core__linker__app_view.AppView$(src__components__games_list_components__games_list_component.GamesListComponent) {
    build() {
      this[_compView_0] = new src__components__game_component__game_component$46template.ViewGameComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_GameComponent_0_5] = new src__components__game_component__game_component.GameComponent.new();
      this[_compView_0].create(this[_GameComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_game = src__services__games_list_service.Game._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_game;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_GameComponent_0_5].game = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_GameComponent_0_5] = null;
    this[_expr_0] = null;
    src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0._renderType;
  }).prototype = src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.prototype;
  dart.addTypeTests(src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1);
  dart.setMethodSignature(src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1, () => ({
    __proto__: dart.getMethods(src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__games_list_components__games_list_component.GamesListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1, () => ({
    __proto__: dart.getFields(src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__components__game_component__game_component$46template.ViewGameComponent0),
    [_GameComponent_0_5]: dart.fieldType(src__components__game_component__game_component.GameComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__components__games_list_components__games_list_component$46template.viewFactory_GamesListComponent1 = function(parentView, parentIndex) {
    return new src__components__games_list_components__games_list_component$46template._ViewGamesListComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__games_list_components__games_list_component$46template, {
    /*src__components__games_list_components__games_list_component$46template.styles$GamesListComponentHost*/get styles$GamesListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _GamesListService_0_5 = Symbol('_GamesListService_0_5');
  const _GamesListComponent_0_6 = Symbol('_GamesListComponent_0_6');
  src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0 = class _ViewGamesListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GamesListService_0_5] = new src__services__games_list_service.GamesListService.new();
      this[_GamesListComponent_0_6] = new src__components__games_list_components__games_list_component.GamesListComponent.new(this[_GamesListService_0_5]);
      this[_compView_0].create(this[_GamesListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfGamesListComponent()).new(0, this, this.rootEl, this[_GamesListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__services__games_list_service.GamesListService) && 0 === nodeIndex) {
        return this[_GamesListService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GamesListService_0_5] = null;
    this[_GamesListComponent_0_6] = null;
    src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.prototype;
  dart.addTypeTests(src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0);
  dart.setMethodSignature(src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0, () => ({
    __proto__: dart.getFields(src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__games_list_components__games_list_component$46template.ViewGamesListComponent0),
    [_GamesListService_0_5]: dart.fieldType(src__services__games_list_service.GamesListService),
    [_GamesListComponent_0_6]: dart.fieldType(src__components__games_list_components__games_list_component.GamesListComponent)
  }));
  src__components__games_list_components__games_list_component$46template.viewFactory_GamesListComponentHost0 = function(parentView, parentIndex) {
    return new src__components__games_list_components__games_list_component$46template._ViewGamesListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__games_list_components__games_list_component$46template, {
    /*src__components__games_list_components__games_list_component$46template.GamesListComponentNgFactory*/get GamesListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGamesListComponent()).new('games-list', dart.fn(src__components__games_list_components__games_list_component$46template.viewFactory_GamesListComponentHost0, AppViewAndintToAppView()), src__components__games_list_components__games_list_component$46template._GamesListComponentMetadata));
    },
    /*src__components__games_list_components__games_list_component$46template._GamesListComponentMetadata*/get _GamesListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__games_list_components__games_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__games_list_components__games_list_component$46template.initReflector = function() {
    if (dart.test(src__components__games_list_components__games_list_component$46template._visited)) {
      return;
    }
    src__components__games_list_components__games_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__games_list_components__games_list_component.GamesListComponent), src__components__games_list_components__games_list_component$46template.GamesListComponentNgFactory);
    angular$46template.initReflector();
    src__components__game_component__game_component$46template.initReflector();
    src__services__games_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_homepage/src/components/games_list_components/games_list_component.template.ddc", {
    "package:isowosi_homepage/src/components/games_list_components/games_list_component.template.dart": src__components__games_list_components__games_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["games_list_component.template.dart"],"names":[],"mappings":"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","file":"games_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__components__games_list_components__games_list_component$46template: src__components__games_list_components__games_list_component$46template
  };
});

//# sourceMappingURL=games_list_component.template.ddc.js.map
