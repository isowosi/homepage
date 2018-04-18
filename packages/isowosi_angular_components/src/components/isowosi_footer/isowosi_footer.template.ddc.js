define(['dart_sdk', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/location/location', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/isowosi_angular_components/src/components/isowosi_logo/isowosi_logo.template', 'packages/isowosi_angular_components/src/components/isowosi_logo/isowosi_logo', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/isowosi_angular_components/src/routes.template'], function(dart_sdk, isowosi_footer$46css, view_type, constants, view, app_view_utils, host, router_outlet_directive, location, router_link_directive, router_link_directive$, isowosi_logo, isowosi_logo$, isowosi_footer, ng_if, reflector, angular, angular_router, routes) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__components__isowosi_footer__isowosi_footer$46css$46shim = isowosi_footer$46css.src__components__isowosi_footer__isowosi_footer$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__view_container = host.src__core__linker__view_container;
  const src__core__linker__template_ref = host.src__core__linker__template_ref;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = location.src__location__location;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__directives__router_link_directive$46template = router_link_directive$.src__directives__router_link_directive$46template;
  const src__components__isowosi_logo__isowosi_logo$46template = isowosi_logo.src__components__isowosi_logo__isowosi_logo$46template;
  const src__components__isowosi_logo__isowosi_logo = isowosi_logo$.src__components__isowosi_logo__isowosi_logo;
  const src__components__isowosi_footer__isowosi_footer = isowosi_footer.src__components__isowosi_footer__isowosi_footer;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__routes$46template = routes.src__routes$46template;
  const _root = Object.create(null);
  const src__components__isowosi_footer__isowosi_footer$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfIsowosiFooterComponent = () => (AppViewOfIsowosiFooterComponent = dart.constFn(src__core__linker__app_view.AppView$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent)))();
  let AppViewAndintToAppViewOfIsowosiFooterComponent = () => (AppViewAndintToAppViewOfIsowosiFooterComponent = dart.constFn(dart.fnType(AppViewOfIsowosiFooterComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfIsowosiFooterComponent = () => (ComponentRefOfIsowosiFooterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfIsowosiFooterComponent = () => (ComponentFactoryOfIsowosiFooterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent)))();
  dart.defineLazy(src__components__isowosi_footer__isowosi_footer$46template, {
    /*src__components__isowosi_footer__isowosi_footer$46template.styles$IsowosiFooterComponent*/get styles$IsowosiFooterComponent() {
      return dart.constList([src__components__isowosi_footer__isowosi_footer$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _RouterLink_0_5 = Symbol('_RouterLink_0_5');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _IsowosiLogoComponent_1_5 = Symbol('_IsowosiLogoComponent_1_5');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _el_3 = Symbol('_el_3');
  const _RouterLink_3_5 = Symbol('_RouterLink_3_5');
  let const$;
  src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0 = class ViewIsowosiFooterComponent0 extends src__core__linker__app_view.AppView$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this[_el_0].className = 'logo';
      this.addShimC(this[_el_0]);
      this[_RouterLink_0_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_0]));
      this[_compView_1] = new src__components__isowosi_logo__isowosi_logo$46template.ViewIsowosiLogoComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_IsowosiLogoComponent_1_5] = new src__components__isowosi_logo__isowosi_logo.IsowosiLogoComponent.new();
      this[_compView_1].create(this[_IsowosiLogoComponent_1_5], []);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__components__isowosi_footer__isowosi_footer$46template.viewFactory_IsowosiFooterComponent1, AppViewAndintToAppViewOfIsowosiFooterComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this[_el_3].className = 'impressum';
      this.addShimC(this[_el_3]);
      this[_RouterLink_3_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_3]));
      let _text_4 = html.Text.new('Impressum');
      this[_el_3][$append](_text_4);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this[_el_3][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_RouterLink_0_5].instance.routerLink = '';
      }
      this[_NgIf_2_9].ngIf = _ctx.privacyPolicy;
      if (firstCheck) {
        if (!(_ctx.impressumUrl == null)) {
          this[_RouterLink_3_5].instance.routerLink = _ctx.impressumUrl;
        }
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0]);
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3]);
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      this[_RouterLink_0_5].instance.ngOnDestroy();
      this[_RouterLink_3_5].instance.ngOnDestroy();
    }
  };
  (src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_RouterLink_0_5] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_IsowosiLogoComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_el_3] = null;
    this[_RouterLink_3_5] = null;
    src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('isowosi-footer'));
    let t = src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0._renderType;
    t == null ? src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__components__isowosi_footer__isowosi_footer$46template.styles$IsowosiFooterComponent) : t;
    this.setupComponentType(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0._renderType);
  }).prototype = src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.prototype;
  dart.addTypeTests(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0);
  dart.setMethodSignature(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0, () => ({
    __proto__: dart.getFields(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_RouterLink_0_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__components__isowosi_logo__isowosi_logo$46template.ViewIsowosiLogoComponent0),
    [_IsowosiLogoComponent_1_5]: dart.fieldType(src__components__isowosi_logo__isowosi_logo.IsowosiLogoComponent),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_RouterLink_3_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd)
  }));
  dart.defineLazy(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0, {
    /*src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__isowosi_footer__isowosi_footer$46template.viewFactory_IsowosiFooterComponent0 = function(parentView, parentIndex) {
    return new src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.new(parentView, parentIndex);
  };
  src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1 = class _ViewIsowosiFooterComponent1 extends src__core__linker__app_view.AppView$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]('a'));
      this[_el_0].className = 'privacyPolicy';
      this.addShimC(this[_el_0]);
      this[_RouterLink_0_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_0]));
      let _text_1 = html.Text.new('Privacy Policy');
      this[_el_0][$append](_text_1);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.privacyPolicyUrl == null)) {
          this[_RouterLink_0_5].instance.routerLink = _ctx.privacyPolicyUrl;
        }
      }
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      this[_RouterLink_0_5].instance.ngOnDestroy();
    }
  };
  (src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_RouterLink_0_5] = null;
    src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0._renderType;
  }).prototype = src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.prototype;
  dart.addTypeTests(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1);
  dart.setMethodSignature(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1, () => ({
    __proto__: dart.getMethods(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1, () => ({
    __proto__: dart.getFields(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_RouterLink_0_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd)
  }));
  src__components__isowosi_footer__isowosi_footer$46template.viewFactory_IsowosiFooterComponent1 = function(parentView, parentIndex) {
    return new src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_footer__isowosi_footer$46template, {
    /*src__components__isowosi_footer__isowosi_footer$46template.styles$IsowosiFooterComponentHost*/get styles$IsowosiFooterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _IsowosiFooterComponent_0_5 = Symbol('_IsowosiFooterComponent_0_5');
  src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0 = class _ViewIsowosiFooterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_IsowosiFooterComponent_0_5] = new src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent.new();
      this[_compView_0].create(this[_IsowosiFooterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfIsowosiFooterComponent()).new(0, this, this.rootEl, this[_IsowosiFooterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_IsowosiFooterComponent_0_5] = null;
    src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.prototype;
  dart.addTypeTests(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0);
  dart.setMethodSignature(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0, () => ({
    __proto__: dart.getFields(src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__isowosi_footer__isowosi_footer$46template.ViewIsowosiFooterComponent0),
    [_IsowosiFooterComponent_0_5]: dart.fieldType(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent)
  }));
  src__components__isowosi_footer__isowosi_footer$46template.viewFactory_IsowosiFooterComponentHost0 = function(parentView, parentIndex) {
    return new src__components__isowosi_footer__isowosi_footer$46template._ViewIsowosiFooterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_footer__isowosi_footer$46template, {
    /*src__components__isowosi_footer__isowosi_footer$46template.IsowosiFooterComponentNgFactory*/get IsowosiFooterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfIsowosiFooterComponent()).new('isowosi-footer', dart.fn(src__components__isowosi_footer__isowosi_footer$46template.viewFactory_IsowosiFooterComponentHost0, AppViewAndintToAppView()), src__components__isowosi_footer__isowosi_footer$46template._IsowosiFooterComponentMetadata));
    },
    /*src__components__isowosi_footer__isowosi_footer$46template._IsowosiFooterComponentMetadata*/get _IsowosiFooterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__isowosi_footer__isowosi_footer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__isowosi_footer__isowosi_footer$46template.initReflector = function() {
    if (dart.test(src__components__isowosi_footer__isowosi_footer$46template._visited)) {
      return;
    }
    src__components__isowosi_footer__isowosi_footer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__isowosi_footer__isowosi_footer.IsowosiFooterComponent), src__components__isowosi_footer__isowosi_footer$46template.IsowosiFooterComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__components__isowosi_logo__isowosi_logo$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.template.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.template.dart": src__components__isowosi_footer__isowosi_footer$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_footer.template.dart"],"names":[],"mappings":"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","file":"isowosi_footer.template.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_footer__isowosi_footer$46template: src__components__isowosi_footer__isowosi_footer$46template
  };
});

//# sourceMappingURL=isowosi_footer.template.ddc.js.map
