define(['dart_sdk', 'packages/isowosi_angular_components/src/components/isowosi_footer/isowosi_footer.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/isowosi_angular_components/src/components/isowosi_logo/isowosi_logo.template', 'packages/isowosi_angular_components/src/components/isowosi_logo/isowosi_logo', 'packages/isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, isowosi_footer$46css, view_type, constants, view, app_view_utils, host, isowosi_logo, isowosi_logo$, isowosi_external_footer, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__components__isowosi_footer__isowosi_footer$46css$46shim = isowosi_footer$46css.src__components__isowosi_footer__isowosi_footer$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__components__isowosi_logo__isowosi_logo$46template = isowosi_logo.src__components__isowosi_logo__isowosi_logo$46template;
  const src__components__isowosi_logo__isowosi_logo = isowosi_logo$.src__components__isowosi_logo__isowosi_logo;
  const src__components__isowosi_external_footer__isowosi_external_footer = isowosi_external_footer.src__components__isowosi_external_footer__isowosi_external_footer;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__components__isowosi_external_footer__isowosi_external_footer$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfIsowosiExternalFooterComponent = () => (ComponentRefOfIsowosiExternalFooterComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfIsowosiExternalFooterComponent = () => (ComponentFactoryOfIsowosiExternalFooterComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent)))();
  dart.defineLazy(src__components__isowosi_external_footer__isowosi_external_footer$46template, {
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template.styles$IsowosiExternalFooterComponent*/get styles$IsowosiExternalFooterComponent() {
      return dart.constList([src__components__isowosi_footer__isowosi_footer$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _IsowosiLogoComponent_1_5 = Symbol('_IsowosiLogoComponent_1_5');
  const _anchor_2 = Symbol('_anchor_2');
  const _el_2_0 = Symbol('_el_2_0');
  const _text_2_1 = Symbol('_text_2_1');
  const _el_3 = Symbol('_el_3');
  const _expr_0 = Symbol('_expr_0');
  src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0 = class ViewIsowosiExternalFooterComponent0 extends src__core__linker__app_view.AppView$(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this[_el_0].className = 'logo';
      this.createAttr(this[_el_0], 'href', 'https://isowosi.com/');
      this.createAttr(this[_el_0], 'target', '_blank');
      this.addShimC(this[_el_0]);
      this[_compView_1] = new src__components__isowosi_logo__isowosi_logo$46template.ViewIsowosiLogoComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_IsowosiLogoComponent_1_5] = new src__components__isowosi_logo__isowosi_logo.IsowosiLogoComponent.new();
      this[_compView_1].create(this[_IsowosiLogoComponent_1_5], []);
      this[_anchor_2] = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](this[_anchor_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', parentRenderNode));
      this[_el_3].className = 'impressum';
      this.createAttr(this[_el_3], 'href', 'https://isowosi.com/impressum');
      this.createAttr(this[_el_3], 'target', '_blank');
      this.addShimC(this[_el_3]);
      let _text_4 = html.Text.new('Impressum');
      this[_el_3][$append](_text_4);
      this.init([], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.privacyPolicy === true;
      if (!(this[_expr_0] === currVal_0)) {
        if (currVal_0) {
          let doc = html.document;
          this[_el_2_0] = html.AnchorElement._check(doc[$createElement]('a'));
          this[_el_2_0].className = 'privacyPolicy';
          this.createAttr(this[_el_2_0], 'href', 'https://isowosi.com/privacypolicy');
          this.createAttr(this[_el_2_0], 'target', '_blank');
          this.addShimC(this[_el_2_0]);
          this[_text_2_1] = html.Text.new('Privacy\r\n  Policy');
          this[_el_2_0][$append](this[_text_2_1]);
          this.addInlinedNodes(this[_anchor_2], JSArrayOfNode().of([this[_el_2_0]]), true);
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_2_0]]), true);
        }
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_1];
      t == null ? null : t.destroy();
    }
  };
  (src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_IsowosiLogoComponent_1_5] = null;
    this[_anchor_2] = null;
    this[_el_2_0] = null;
    this[_text_2_1] = null;
    this[_el_3] = null;
    this[_expr_0] = false;
    src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('isowosi-external-footer'));
    let t = src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0._renderType;
    t == null ? src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__components__isowosi_external_footer__isowosi_external_footer$46template.styles$IsowosiExternalFooterComponent) : t;
    this.setupComponentType(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0._renderType);
  }).prototype = src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.prototype;
  dart.addTypeTests(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0);
  dart.setMethodSignature(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0, () => ({
    __proto__: dart.getFields(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__components__isowosi_logo__isowosi_logo$46template.ViewIsowosiLogoComponent0),
    [_IsowosiLogoComponent_1_5]: dart.fieldType(src__components__isowosi_logo__isowosi_logo.IsowosiLogoComponent),
    [_anchor_2]: dart.fieldType(html.Comment),
    [_el_2_0]: dart.fieldType(html.AnchorElement),
    [_text_2_1]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_expr_0]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0, {
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__isowosi_external_footer__isowosi_external_footer$46template.viewFactory_IsowosiExternalFooterComponent0 = function(parentView, parentIndex) {
    return new src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_external_footer__isowosi_external_footer$46template, {
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template.styles$IsowosiExternalFooterComponentHost*/get styles$IsowosiExternalFooterComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _IsowosiExternalFooterComponent_0_5 = Symbol('_IsowosiExternalFooterComponent_0_5');
  src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0 = class _ViewIsowosiExternalFooterComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_IsowosiExternalFooterComponent_0_5] = new src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent.new();
      this[_compView_0].create(this[_IsowosiExternalFooterComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfIsowosiExternalFooterComponent()).new(0, this, this.rootEl, this[_IsowosiExternalFooterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_IsowosiExternalFooterComponent_0_5] = null;
    src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.prototype;
  dart.addTypeTests(src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0);
  dart.setMethodSignature(src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0, () => ({
    __proto__: dart.getFields(src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__isowosi_external_footer__isowosi_external_footer$46template.ViewIsowosiExternalFooterComponent0),
    [_IsowosiExternalFooterComponent_0_5]: dart.fieldType(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent)
  }));
  src__components__isowosi_external_footer__isowosi_external_footer$46template.viewFactory_IsowosiExternalFooterComponentHost0 = function(parentView, parentIndex) {
    return new src__components__isowosi_external_footer__isowosi_external_footer$46template._ViewIsowosiExternalFooterComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_external_footer__isowosi_external_footer$46template, {
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template.IsowosiExternalFooterComponentNgFactory*/get IsowosiExternalFooterComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfIsowosiExternalFooterComponent()).new('isowosi-external-footer', dart.fn(src__components__isowosi_external_footer__isowosi_external_footer$46template.viewFactory_IsowosiExternalFooterComponentHost0, AppViewAndintToAppView()), src__components__isowosi_external_footer__isowosi_external_footer$46template._IsowosiExternalFooterComponentMetadata));
    },
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template._IsowosiExternalFooterComponentMetadata*/get _IsowosiExternalFooterComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__isowosi_external_footer__isowosi_external_footer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__isowosi_external_footer__isowosi_external_footer$46template.initReflector = function() {
    if (dart.test(src__components__isowosi_external_footer__isowosi_external_footer$46template._visited)) {
      return;
    }
    src__components__isowosi_external_footer__isowosi_external_footer$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__isowosi_external_footer__isowosi_external_footer.IsowosiExternalFooterComponent), src__components__isowosi_external_footer__isowosi_external_footer$46template.IsowosiExternalFooterComponentNgFactory);
    angular$46template.initReflector();
    src__components__isowosi_logo__isowosi_logo$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer.template.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_external_footer/isowosi_external_footer.template.dart": src__components__isowosi_external_footer__isowosi_external_footer$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_external_footer.template.dart"],"names":[],"mappings":";;;;QA6EkB,IAAO;;;;QArD0C,4DAAO;;;;QAetD,iCAAO;;;;;;;;;;;;;iFAsCT,IAAO;;;;;MArDL,kHAAqC;YAAG,iBAAO,AAAQ,4DAAD,OAAO;;;;;;;;;;;;;;AAoB7E,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AA+BJ,IAAO,SA/BK;AAC1B,iBAAK,GAAG,AA8BM,IAAO,sBA9Bb,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,qBAAU,CAAC,WAAK,EAAE,UAAU;AAC5B,mBAAQ,CAAC,WAAK;AACd,uBAAW,GAAG,IAAI,oFAAiC,CAAC,MAAM;AAC1D,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,SAAO,CAAC,WAAK;AAClB,mBAAQ,CAAC,AAsBK,IAAO,oBAtBZ,WAAK;AACd,qCAAyB,GAAG,IAAI,oEAA4B;AAC5D,uBAAW,OAAO,CAAC,+BAAyB,EAAE;AAC9C,qBAAS,GAAG,qDAAyB;AACrC,sBAAgB,SAAO,CAAC,eAAS;AACjC,iBAAK,GAAG,AAiBM,IAAO,sBAjBb,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,iBAAK,UAAU,GAAG;AAClB,qBAAU,CAAC,WAAK,EAAE,QAAQ;AAC1B,qBAAU,CAAC,WAAK,EAAE,UAAU;AAC5B,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AAYb,IAAO,SAZkB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,eAAI,CAAC,IAAI;AACT,YAAO;IACT;;AAIE,UAA6C,OAAO,QAAG;AACvD,UAAM,YAAa,IAAI,cAAc,KAAI;AACzC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,YAAI,SAAS,EAAE;AACb,cAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,uBAAO,GADG,AACA,IADO,sBACP,GAAG,gBAAc,CAAC;AAC5B,uBAAO,UAAU,GAAG;AACpB,yBAAU,CAAC,aAAO,EAAE,QAAQ;AAC5B,yBAAU,CAAC,aAAO,EAAE,UAAU;AAC9B,uBAAQ,CAAC,aAAO;AAChB,yBAAS,GANC,AAME,AAAI,IANC,SAMW,CAAC;AAC7B,uBAAO,SAAO,CAAC,eAAS;AACxB,8BAAe,CAAC,eAAS,EAAE,oBAAC,aAAO,IAAG;eACjC;AACL,iCAAkB,CAAC,oBAAC,aAAO,IAAG;;AAEhC,qBAAO,GAAG,SAAS;;AAErB,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;mIA5DoC,UAA2B,EAAE,WAAe;IAV1D,WAAK;IACX,WAAK;IACa,iBAAW;IAChB,+BAAyB;IACtC,eAAS;IACH,aAAO;IAChB,eAAS;IACA,WAAK;IACtB,aAAO,GAAG;AAEqE,8IAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpL,eAAM,GAAG,AAuCK,IAAO,oBAvCZ,AAAQ,AAuCH,IAAO,SAvCI,gBAAc,CAAC;AACxC,wIAAW;gBAAX,4HAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,kHAAqC;AAC3H,2BAAkB,CAAC,4HAAW;EAChC;;;;;;;;;;4BAoCgB,IAAO;4BAAP,IAAO;;;gCAAP,IAAO;8BAAP,IAAO;gCAAP,IAAO;4BAAP,IAAO;;;;MAzCI,4HAAW;;;;;sIAgEoD,UAA2B,EAAE,WAAe;AACtI,UAAO,KAAI,oHAAmC,CAAC,UAAU,EAAE,WAAW;EACxE;;MAEoB,sHAAyC;YAAG;;;;;;;AAQ5D,uBAAW,GAAG,IAAI,oHAAmC,CAAC,MAAM;AAC5D,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+CAAmC,GAAG,IAAI,oGAAsC;AAChF,uBAAW,OAAO,CAAC,yCAAmC,EAAE,qBAAgB;AACxE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,oDAAoD,CAAC,GAAG,MAAM,WAAM,EAAE,yCAAmC;IACtH;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;wIAnByC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yCAAmC;AACe,mJAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;0IAsBjI,UAA2B,EAAE,WAAe;AAClG,UAAO,KAAI,yHAAwC,CAAC,UAAU,EAAE,WAAW;EAC7E;;MAE+D,oHAAuC;YAAG,gBAAM,wDAAwD,CAAC,2BAA2B,+JAA+C,EAAE,oHAAuC;;MACrR,oHAAuC;YAAG;;MAC5C,qFAAQ;YAAG;;;;;AAEb,kBAAI,qFAAQ,GAAE;AACZ;;AAEF,4FAAW;AAEX,IAAO,oCAAiB,CAAC,+GAA8B,EAAE,oHAAuC;AAChG,IAAM,gCAAa;AACnB,IAAM,oEAAa;EACrB","file":"isowosi_external_footer.template.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_external_footer__isowosi_external_footer$46template: src__components__isowosi_external_footer__isowosi_external_footer$46template
  };
});

//# sourceMappingURL=isowosi_external_footer.template.ddc.js.map
