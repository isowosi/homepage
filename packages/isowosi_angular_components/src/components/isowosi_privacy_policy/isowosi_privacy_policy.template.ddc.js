define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, host, isowosi_privacy_policy, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__components__isowosi_privacy_policy__isowosi_privacy_policy = isowosi_privacy_policy.src__components__isowosi_privacy_policy__isowosi_privacy_policy;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfIsowosiPrivacyPolicyComponent = () => (ComponentRefOfIsowosiPrivacyPolicyComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfIsowosiPrivacyPolicyComponent = () => (ComponentFactoryOfIsowosiPrivacyPolicyComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent)))();
  dart.defineLazy(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template, {
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.styles$IsowosiPrivacyPolicyComponent*/get styles$IsowosiPrivacyPolicyComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  let const$;
  src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0 = class ViewIsowosiPrivacyPolicyComponent0 extends src__core__linker__app_view.AppView$(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Datenschutz');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_3 = html.Text.new('Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre\r\n  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser\r\n  Datenschutzerklärung.');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_5 = html.Text.new('Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten\r\n  personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit\r\n  möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte\r\n  weitergegeben.');
      this[_el_4][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_7 = html.Text.new('Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)\r\n  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.');
      this[_el_6][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'br', parentRenderNode);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, 'em', this[_el_9]);
      let _text_11 = html.Text.new('Quelle:');
      this[_el_10][$append](_text_11);
      this[_el_12] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_10]));
      this.createAttr(this[_el_12], 'href', 'https://www.e-recht24.de');
      let _text_13 = html.Text.new('eRecht24');
      this[_el_12][$append](_text_13);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('isowosi-privacy-policy'));
    let t = src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0._renderType;
    t == null ? src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.styles$IsowosiPrivacyPolicyComponent) : t;
    this.setupComponentType(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0._renderType);
  }).prototype = src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.prototype;
  dart.addTypeTests(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0);
  dart.setMethodSignature(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent), [])
  }));
  dart.setFieldSignature(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0, () => ({
    __proto__: dart.getFields(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.AnchorElement)
  }));
  dart.defineLazy(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0, {
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.viewFactory_IsowosiPrivacyPolicyComponent0 = function(parentView, parentIndex) {
    return new src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template, {
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.styles$IsowosiPrivacyPolicyComponentHost*/get styles$IsowosiPrivacyPolicyComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _IsowosiPrivacyPolicyComponent_0_5 = Symbol('_IsowosiPrivacyPolicyComponent_0_5');
  src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0 = class _ViewIsowosiPrivacyPolicyComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_IsowosiPrivacyPolicyComponent_0_5] = new src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent.new();
      this[_compView_0].create(this[_IsowosiPrivacyPolicyComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfIsowosiPrivacyPolicyComponent()).new(0, this, this.rootEl, this[_IsowosiPrivacyPolicyComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_IsowosiPrivacyPolicyComponent_0_5] = null;
    src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.prototype;
  dart.addTypeTests(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0);
  dart.setMethodSignature(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0, () => ({
    __proto__: dart.getFields(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.ViewIsowosiPrivacyPolicyComponent0),
    [_IsowosiPrivacyPolicyComponent_0_5]: dart.fieldType(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent)
  }));
  src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.viewFactory_IsowosiPrivacyPolicyComponentHost0 = function(parentView, parentIndex) {
    return new src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._ViewIsowosiPrivacyPolicyComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template, {
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.IsowosiPrivacyPolicyComponentNgFactory*/get IsowosiPrivacyPolicyComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfIsowosiPrivacyPolicyComponent()).new('isowosi-privacy-policy', dart.fn(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.viewFactory_IsowosiPrivacyPolicyComponentHost0, AppViewAndintToAppView()), src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._IsowosiPrivacyPolicyComponentMetadata));
    },
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._IsowosiPrivacyPolicyComponentMetadata*/get _IsowosiPrivacyPolicyComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.initReflector = function() {
    if (dart.test(src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._visited)) {
      return;
    }
    src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__isowosi_privacy_policy__isowosi_privacy_policy.IsowosiPrivacyPolicyComponent), src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template.IsowosiPrivacyPolicyComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy.template.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_privacy_policy/isowosi_privacy_policy.template.dart": src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_privacy_policy.template.dart"],"names":[],"mappings":"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","file":"isowosi_privacy_policy.template.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template: src__components__isowosi_privacy_policy__isowosi_privacy_policy$46template
  };
});

//# sourceMappingURL=isowosi_privacy_policy.template.ddc.js.map
