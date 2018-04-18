define(['dart_sdk', 'packages/isowosi_homepage/src/components/game_component/game_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/isowosi_homepage/src/components/game_component/game_component', 'packages/angular/src/common/directives/ng_for', 'packages/isowosi_homepage/src/services/games_list_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/isowosi_homepage/src/services/games_list_service.template'], function(dart_sdk, game_component$46css, view_type, constants, view, app_view_utils, host, game_component, ng_for, games_list_service, reflector, angular, games_list_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__components__game_component__game_component$46css$46shim = game_component$46css.src__components__game_component__game_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__view_container = host.src__core__linker__view_container;
  const src__core__linker__template_ref = host.src__core__linker__template_ref;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__components__game_component__game_component = game_component.src__components__game_component__game_component;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__services__games_list_service = games_list_service.src__services__games_list_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__services__games_list_service$46template = games_list_service$.src__services__games_list_service$46template;
  const _root = Object.create(null);
  const src__components__game_component__game_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfGameComponent = () => (AppViewOfGameComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__game_component__game_component.GameComponent)))();
  let AppViewAndintToAppViewOfGameComponent = () => (AppViewAndintToAppViewOfGameComponent = dart.constFn(dart.fnType(AppViewOfGameComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfGameComponent = () => (ComponentRefOfGameComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__game_component__game_component.GameComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfGameComponent = () => (ComponentFactoryOfGameComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__game_component__game_component.GameComponent)))();
  dart.defineLazy(src__components__game_component__game_component$46template, {
    /*src__components__game_component__game_component$46template.styles$GameComponent*/get styles$GameComponent() {
      return dart.constList([src__components__game_component__game_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  src__components__game_component__game_component$46template.ViewGameComponent0 = class ViewGameComponent0 extends src__core__linker__app_view.AppView$(src__components__game_component__game_component.GameComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'img', parentRenderNode);
      this[_el_0].className = 'preview';
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_1].className = 'name';
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_3].className = 'description';
      this.addShimC(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__components__game_component__game_component$46template.viewFactory_GameComponent1, AppViewAndintToAppViewOfGameComponent()));
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_3 = _ctx.game.links;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_NgFor_5_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      this[_NgFor_5_9].ngDoCheck();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate1('previews/', _ctx.game.id, '.jpg');
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this[_el_0], 'src', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.game.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.game.description);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__components__game_component__game_component$46template.ViewGameComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__components__game_component__game_component$46template.ViewGameComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('game'));
    let t = src__components__game_component__game_component$46template.ViewGameComponent0._renderType;
    t == null ? src__components__game_component__game_component$46template.ViewGameComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__components__game_component__game_component$46template.styles$GameComponent) : t;
    this.setupComponentType(src__components__game_component__game_component$46template.ViewGameComponent0._renderType);
  }).prototype = src__components__game_component__game_component$46template.ViewGameComponent0.prototype;
  dart.addTypeTests(src__components__game_component__game_component$46template.ViewGameComponent0);
  dart.setMethodSignature(src__components__game_component__game_component$46template.ViewGameComponent0, () => ({
    __proto__: dart.getMethods(src__components__game_component__game_component$46template.ViewGameComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__game_component__game_component.GameComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__game_component__game_component$46template.ViewGameComponent0, () => ({
    __proto__: dart.getFields(src__components__game_component__game_component$46template.ViewGameComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__components__game_component__game_component$46template.ViewGameComponent0, {
    /*src__components__game_component__game_component$46template.ViewGameComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__game_component__game_component$46template.viewFactory_GameComponent0 = function(parentView, parentIndex) {
    return new src__components__game_component__game_component$46template.ViewGameComponent0.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  src__components__game_component__game_component$46template._ViewGameComponent1 = class _ViewGameComponent1 extends src__core__linker__app_view.AppView$(src__components__game_component__game_component.GameComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]('a'));
      this.createAttr(this[_el_0], 'target', '_blank');
      this.addShimC(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_i = core.int._check(this.locals[$_get]('index'));
      let local_link = src__services__games_list_service.Link._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate1('link link', local_i, '');
      if (!(this[_expr_0] == currVal_0)) {
        this.updateChildClass(this[_el_0], currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_link.href);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setProp(this[_el_0], 'href', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_link.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__components__game_component__game_component$46template._ViewGameComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__components__game_component__game_component$46template._ViewGameComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(['$implicit', null, 'index', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__game_component__game_component$46template.ViewGameComponent0._renderType;
  }).prototype = src__components__game_component__game_component$46template._ViewGameComponent1.prototype;
  dart.addTypeTests(src__components__game_component__game_component$46template._ViewGameComponent1);
  dart.setMethodSignature(src__components__game_component__game_component$46template._ViewGameComponent1, () => ({
    __proto__: dart.getMethods(src__components__game_component__game_component$46template._ViewGameComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__game_component__game_component.GameComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__game_component__game_component$46template._ViewGameComponent1, () => ({
    __proto__: dart.getFields(src__components__game_component__game_component$46template._ViewGameComponent1.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__components__game_component__game_component$46template.viewFactory_GameComponent1 = function(parentView, parentIndex) {
    return new src__components__game_component__game_component$46template._ViewGameComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__game_component__game_component$46template, {
    /*src__components__game_component__game_component$46template.styles$GameComponentHost*/get styles$GameComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _GameComponent_0_5 = Symbol('_GameComponent_0_5');
  src__components__game_component__game_component$46template._ViewGameComponentHost0 = class _ViewGameComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__game_component__game_component$46template.ViewGameComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GameComponent_0_5] = new src__components__game_component__game_component.GameComponent.new();
      this[_compView_0].create(this[_GameComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfGameComponent()).new(0, this, this.rootEl, this[_GameComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__game_component__game_component$46template._ViewGameComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GameComponent_0_5] = null;
    src__components__game_component__game_component$46template._ViewGameComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__game_component__game_component$46template._ViewGameComponentHost0.prototype;
  dart.addTypeTests(src__components__game_component__game_component$46template._ViewGameComponentHost0);
  dart.setMethodSignature(src__components__game_component__game_component$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__game_component__game_component$46template._ViewGameComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__game_component__game_component$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getFields(src__components__game_component__game_component$46template._ViewGameComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__game_component__game_component$46template.ViewGameComponent0),
    [_GameComponent_0_5]: dart.fieldType(src__components__game_component__game_component.GameComponent)
  }));
  src__components__game_component__game_component$46template.viewFactory_GameComponentHost0 = function(parentView, parentIndex) {
    return new src__components__game_component__game_component$46template._ViewGameComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__game_component__game_component$46template, {
    /*src__components__game_component__game_component$46template.GameComponentNgFactory*/get GameComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfGameComponent()).new('game', dart.fn(src__components__game_component__game_component$46template.viewFactory_GameComponentHost0, AppViewAndintToAppView()), src__components__game_component__game_component$46template._GameComponentMetadata));
    },
    /*src__components__game_component__game_component$46template._GameComponentMetadata*/get _GameComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__game_component__game_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__game_component__game_component$46template.initReflector = function() {
    if (dart.test(src__components__game_component__game_component$46template._visited)) {
      return;
    }
    src__components__game_component__game_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__game_component__game_component.GameComponent), src__components__game_component__game_component$46template.GameComponentNgFactory);
    angular$46template.initReflector();
    src__services__games_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_homepage/src/components/game_component/game_component.template.ddc", {
    "package:isowosi_homepage/src/components/game_component/game_component.template.dart": src__components__game_component__game_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["game_component.template.dart"],"names":[],"mappings":"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","file":"game_component.template.ddc.js"}');
  // Exports:
  return {
    src__components__game_component__game_component$46template: src__components__game_component__game_component$46template
  };
});

//# sourceMappingURL=game_component.template.ddc.js.map
