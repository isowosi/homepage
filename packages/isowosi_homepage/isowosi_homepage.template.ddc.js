define(['dart_sdk', 'packages/isowosi_homepage/isowosi_homepage.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/location/location', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/directives/router_link_active_directive', 'packages/angular_router/src/router_hook', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.template', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer', 'packages/isowosi_homepage/isowosi_homepage', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/isowosi_angular_components/isowosi_angular_components.template', 'packages/isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum.template', 'packages/isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy.template', 'packages/isowosi_homepage/src/components/games_list_components/games_list_component.template', 'packages/isowosi_homepage/src/routes.template'], function(dart_sdk, isowosi_homepage$46css, view_type, constants, view, app_view_utils, host, router_outlet_directive, location, router_link_directive, router_link_directive$, router_link_active_directive, router_hook, isowosi_footer, isowosi_footer$, isowosi_homepage, reflector, angular, angular_router, isowosi_angular_components, isowosi_impressum, isowosi_privacy_policy, games_list_component, routes) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const isowosi_homepage$46css$46shim = isowosi_homepage$46css.isowosi_homepage$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__view_container = host.src__core__linker__view_container;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = host.src__core__linker__view_container_ref;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__location__location = location.src__location__location;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__directives__router_link_directive$46template = router_link_directive$.src__directives__router_link_directive$46template;
  const src__directives__router_link_active_directive = router_link_active_directive.src__directives__router_link_active_directive;
  const src__router_hook = router_hook.src__router_hook;
  const src__components__isowosi_footer__isowosi_footer$46template = isowosi_footer.src__components__isowosi_footer__isowosi_footer$46template;
  const src__components__isowosi_footer__isowosi_footer = isowosi_footer$.src__components__isowosi_footer__isowosi_footer;
  const isowosi_homepage$ = isowosi_homepage.isowosi_homepage;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const isowosi_angular_components$46template = isowosi_angular_components.isowosi_angular_components$46template;
  const src__components__isowosi_impressum__isowosi_impressum$46template = isowosi_impressum.src__components__isowosi_impressum__isowosi_impressum$46template;
  const src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template = isowosi_privacy_policy.src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template;
  const src__components__games_list_components__games_list_component$46template = games_list_component.src__components__games_list_components__games_list_component$46template;
  const src__routes$46template = routes.src__routes$46template;
  const _root = Object.create(null);
  const isowosi_homepage$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let ComponentRefOfIsowosiHomepageComponent = () => (ComponentRefOfIsowosiHomepageComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(isowosi_homepage$.IsowosiHomepageComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfIsowosiHomepageComponent = () => (ComponentFactoryOfIsowosiHomepageComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(isowosi_homepage$.IsowosiHomepageComponent)))();
  dart.defineLazy(isowosi_homepage$46template, {
    /*isowosi_homepage$46template.styles$IsowosiHomepageComponent*/get styles$IsowosiHomepageComponent() {
      return dart.constList([isowosi_homepage$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _RouterLink_1_5 = Symbol('_RouterLink_1_5');
  const _RouterLinkActive_1_6 = Symbol('_RouterLinkActive_1_6');
  const _query_RouterLink_1_0_isDirty = Symbol('_query_RouterLink_1_0_isDirty');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _appEl_4 = Symbol('_appEl_4');
  const _RouterOutlet_4_8 = Symbol('_RouterOutlet_4_8');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _IsowosiFooterComponent_5_5 = Symbol('_IsowosiFooterComponent_5_5');
  let const$;
  isowosi_homepage$46template.ViewIsowosiHomepageComponent0 = class ViewIsowosiHomepageComponent0 extends src__core__linker__app_view.AppView$(isowosi_homepage$.IsowosiHomepageComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'nav', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_el_1] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_0]));
      this.createAttr(this[_el_1], 'routerLinkActive', 'active');
      this.addShimC(this[_el_1]);
      this[_RouterLink_1_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_1]));
      this[_RouterLinkActive_1_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_1], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _text_2 = html.Text.new('Games');
      this[_el_1][$append](_text_2);
      this[_RouterLinkActive_1_6].links = JSArrayOfRouterLink().of([this[_RouterLink_1_5].instance]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_3].className = 'content';
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'router-outlet', this[_el_3]);
      this.addShimE(this[_el_4]);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, 3, this, this[_el_4]);
      this[_RouterOutlet_4_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_4], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this[_compView_5] = new src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      parentRenderNode[$append](this[_el_5]);
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_IsowosiFooterComponent_5_5] = new src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent.new();
      this[_compView_5].create(this[_IsowosiFooterComponent_5_5], []);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_1_5].instance, 'onClick')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.gamesUrl == null)) {
          this[_RouterLink_1_5].instance.routerLink = _ctx.gamesUrl;
        }
      }
      if (firstCheck) {
        this[_RouterLinkActive_1_6].routerLinkActive = 'active';
      }
      if (firstCheck) {
        if (!(_ctx.routes == null)) {
          this[_RouterOutlet_4_8].routes = _ctx.routes;
        }
      }
      if (firstCheck) {
        this[_RouterOutlet_4_8].ngOnInit();
      }
      this[_appEl_4].detectChangesInNestedViews();
      this[_RouterLink_1_5].detectHostChanges(this, this[_el_1]);
      this[_compView_5].detectChanges();
      if (firstCheck) {
        this[_RouterLinkActive_1_6].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_4];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_5];
      t$ == null ? null : t$.destroy();
      this[_RouterLink_1_5].instance.ngOnDestroy();
      this[_RouterLinkActive_1_6].ngOnDestroy();
      this[_RouterOutlet_4_8].ngOnDestroy();
    }
  };
  (isowosi_homepage$46template.ViewIsowosiHomepageComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_RouterLink_1_5] = null;
    this[_RouterLinkActive_1_6] = null;
    this[_query_RouterLink_1_0_isDirty] = true;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_appEl_4] = null;
    this[_RouterOutlet_4_8] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_IsowosiFooterComponent_5_5] = null;
    isowosi_homepage$46template.ViewIsowosiHomepageComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('isowosi-homepage'));
    let t = isowosi_homepage$46template.ViewIsowosiHomepageComponent0._renderType;
    t == null ? isowosi_homepage$46template.ViewIsowosiHomepageComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, isowosi_homepage$46template.styles$IsowosiHomepageComponent) : t;
    this.setupComponentType(isowosi_homepage$46template.ViewIsowosiHomepageComponent0._renderType);
  }).prototype = isowosi_homepage$46template.ViewIsowosiHomepageComponent0.prototype;
  dart.addTypeTests(isowosi_homepage$46template.ViewIsowosiHomepageComponent0);
  dart.setMethodSignature(isowosi_homepage$46template.ViewIsowosiHomepageComponent0, () => ({
    __proto__: dart.getMethods(isowosi_homepage$46template.ViewIsowosiHomepageComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(isowosi_homepage$.IsowosiHomepageComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(isowosi_homepage$46template.ViewIsowosiHomepageComponent0, () => ({
    __proto__: dart.getFields(isowosi_homepage$46template.ViewIsowosiHomepageComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.AnchorElement),
    [_RouterLink_1_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_1_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_query_RouterLink_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_4_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0),
    [_IsowosiFooterComponent_5_5]: dart.fieldType(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent)
  }));
  dart.defineLazy(isowosi_homepage$46template.ViewIsowosiHomepageComponent0, {
    /*isowosi_homepage$46template.ViewIsowosiHomepageComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  isowosi_homepage$46template.viewFactory_IsowosiHomepageComponent0 = function(parentView, parentIndex) {
    return new isowosi_homepage$46template.ViewIsowosiHomepageComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(isowosi_homepage$46template, {
    /*isowosi_homepage$46template.styles$IsowosiHomepageComponentHost*/get styles$IsowosiHomepageComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _IsowosiHomepageComponent_0_5 = Symbol('_IsowosiHomepageComponent_0_5');
  const __RouterOutlet_0_6 = Symbol('__RouterOutlet_0_6');
  const __RouterLink_0_7 = Symbol('__RouterLink_0_7');
  const __RouterLinkActive_0_8 = Symbol('__RouterLinkActive_0_8');
  const _RouterOutlet_0_6 = Symbol('_RouterOutlet_0_6');
  const _RouterLink_0_7 = Symbol('_RouterLink_0_7');
  const _RouterLinkActive_0_8 = Symbol('_RouterLinkActive_0_8');
  isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0 = class _ViewIsowosiHomepageComponentHost0 extends src__core__linker__app_view.AppView {
    get [_RouterOutlet_0_6]() {
      if (this[__RouterOutlet_0_6] == null) {
        this[__RouterOutlet_0_6] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), src__core__linker__view_container_ref.ViewContainerRef._check(this.injectorGet(dart.wrapType(src__core__linker__view_container_ref.ViewContainerRef), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      }
      return this[__RouterOutlet_0_6];
    }
    get [_RouterLink_0_7]() {
      if (this[__RouterLink_0_7] == null) {
        this[__RouterLink_0_7] = new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this.rootEl);
      }
      return this[__RouterLink_0_7];
    }
    get [_RouterLinkActive_0_8]() {
      if (this[__RouterLinkActive_0_8] == null) {
        this[__RouterLinkActive_0_8] = new src__directives__router_link_active_directive.RouterLinkActive.new(this.rootEl, src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      }
      return this[__RouterLinkActive_0_8];
    }
    build() {
      this[_compView_0] = new isowosi_homepage$46template.ViewIsowosiHomepageComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_IsowosiHomepageComponent_0_5] = new isowosi_homepage$.IsowosiHomepageComponent.new();
      this[_compView_0].create(this[_IsowosiHomepageComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfIsowosiHomepageComponent()).new(0, this, this.rootEl, this[_IsowosiHomepageComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__router_outlet_directive.RouterOutlet) && 0 === nodeIndex) {
        return this[_RouterOutlet_0_6];
      }
      if (token === dart.wrapType(src__directives__router_link_directive.RouterLink) && 0 === nodeIndex) {
        return this[_RouterLink_0_7];
      }
      if (token === dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive) && 0 === nodeIndex) {
        return this[_RouterLinkActive_0_8];
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
  (isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_IsowosiHomepageComponent_0_5] = null;
    this[__RouterOutlet_0_6] = null;
    this[__RouterLink_0_7] = null;
    this[__RouterLinkActive_0_8] = null;
    isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.prototype;
  dart.addTypeTests(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0);
  dart.setMethodSignature(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0, () => ({
    __proto__: dart.getMethods(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0, () => ({
    __proto__: dart.getGetters(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.__proto__),
    [_RouterOutlet_0_6]: src__directives__router_outlet_directive.RouterOutlet,
    [_RouterLink_0_7]: src__directives__router_link_directive.RouterLink,
    [_RouterLinkActive_0_8]: src__directives__router_link_active_directive.RouterLinkActive
  }));
  dart.setFieldSignature(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0, () => ({
    __proto__: dart.getFields(isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(isowosi_homepage$46template.ViewIsowosiHomepageComponent0),
    [_IsowosiHomepageComponent_0_5]: dart.fieldType(isowosi_homepage$.IsowosiHomepageComponent),
    [__RouterOutlet_0_6]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [__RouterLink_0_7]: dart.fieldType(src__directives__router_link_directive.RouterLink),
    [__RouterLinkActive_0_8]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive)
  }));
  isowosi_homepage$46template.viewFactory_IsowosiHomepageComponentHost0 = function(parentView, parentIndex) {
    return new isowosi_homepage$46template._ViewIsowosiHomepageComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(isowosi_homepage$46template, {
    /*isowosi_homepage$46template.IsowosiHomepageComponentNgFactory*/get IsowosiHomepageComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfIsowosiHomepageComponent()).new('isowosi-homepage', dart.fn(isowosi_homepage$46template.viewFactory_IsowosiHomepageComponentHost0, AppViewAndintToAppView()), isowosi_homepage$46template._IsowosiHomepageComponentMetadata));
    },
    /*isowosi_homepage$46template._IsowosiHomepageComponentMetadata*/get _IsowosiHomepageComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*isowosi_homepage$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  isowosi_homepage$46template.initReflector = function() {
    if (dart.test(isowosi_homepage$46template._visited)) {
      return;
    }
    isowosi_homepage$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(isowosi_homepage$.IsowosiHomepageComponent), isowosi_homepage$46template.IsowosiHomepageComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    isowosi_angular_components$46template.initReflector();
    src__components__isowosi_impressum__isowosi_impressum$46template.initReflector();
    src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.initReflector();
    src__components__games_list_components__games_list_component$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_homepage/isowosi_homepage.template.ddc", {
    "package:isowosi_homepage/isowosi_homepage.template.dart": isowosi_homepage$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_homepage.template.dart"],"names":[],"mappings":"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","file":"isowosi_homepage.template.ddc.js"}');
  // Exports:
  return {
    isowosi_homepage$46template: isowosi_homepage$46template
  };
});

//# sourceMappingURL=isowosi_homepage.template.ddc.js.map
