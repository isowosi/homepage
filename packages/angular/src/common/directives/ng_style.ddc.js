define(['dart_sdk', 'packages/angular/src/core/change_detection/differs/default_keyvalue_differ', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, default_keyvalue_differ, optimizations, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__differs__default_keyvalue_differ = default_keyvalue_differ.src__core__change_detection__differs__default_keyvalue_differ;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__common__directives__ng_style = Object.create(_root);
  const $setProperty = dartx.setProperty;
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  const _ngElement = Symbol('_ngElement');
  const _rawStyle = Symbol('_rawStyle');
  const _differ = Symbol('_differ');
  const _setProperty = Symbol('_setProperty');
  src__common__directives__ng_style.NgStyle = class NgStyle extends core.Object {
    set rawStyle(v) {
      this[_rawStyle] = v;
      if (this[_differ] == null && v != null) {
        this[_differ] = new src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.new();
      }
    }
    ngDoCheck() {
      if (this[_differ] == null) return;
      let changes = this[_differ].diff(this[_rawStyle]);
      if (changes == null) return;
      changes.forEachAddedItem(dart.bind(this, _setProperty));
      changes.forEachChangedItem(dart.bind(this, _setProperty));
      changes.forEachRemovedItem(dart.bind(this, _setProperty));
    }
    [_setProperty](record) {
      this[_ngElement].style[$setProperty](src__runtime__optimizations.unsafeCast(core.String, record.key), src__runtime__optimizations.unsafeCast(core.String, record.currentValue));
    }
  };
  (src__common__directives__ng_style.NgStyle.new = function(ngElement) {
    this[_rawStyle] = null;
    this[_differ] = null;
    this[_ngElement] = ngElement;
  }).prototype = src__common__directives__ng_style.NgStyle.prototype;
  dart.addTypeTests(src__common__directives__ng_style.NgStyle);
  src__common__directives__ng_style.NgStyle[dart.implements] = () => [src__core__metadata__lifecycle_hooks.DoCheck];
  dart.setMethodSignature(src__common__directives__ng_style.NgStyle, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_style.NgStyle.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    [_setProperty]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])
  }));
  dart.setSetterSignature(src__common__directives__ng_style.NgStyle, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_style.NgStyle.__proto__),
    rawStyle: core.Map$(core.String, core.String)
  }));
  dart.setFieldSignature(src__common__directives__ng_style.NgStyle, () => ({
    __proto__: dart.getFields(src__common__directives__ng_style.NgStyle.__proto__),
    [_ngElement]: dart.finalFieldType(html.Element),
    [_rawStyle]: dart.fieldType(MapOfString$String()),
    [_differ]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer)
  }));
  dart.trackLibraries("packages/angular/src/common/directives/ng_style.ddc", {
    "package:angular/src/common/directives/ng_style.dart": src__common__directives__ng_style
  }, '{"version":3,"sourceRoot":"","sources":["ng_style.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;iBAoEe,CAAqB;AAChC,qBAAc,GAAG,CAAC;AAClB,UAAI,aAAO,IAAI,QAAQ,CAAC,IAAI,MAAM;AAChC,qBAAY,GAAG,IAAI,uFAAqB;;IAE5C;;AAIE,UAAI,aAAO,IAAI,MAAM;AACrB,UAAI,UAAU,aAAO,KAAK,CAAC,eAAS;AACpC,UAAI,OAAO,IAAI,MAAM;AACrB,MACE,AAAE,wBAAgB,CAAC,6BAAY;MAC/B,AAAE,0BAAkB,CAAC,6BAAY;MACjC,AAAE,0BAAkB,CAAC,6BAAY;IACrC;mBAEkB,MAA2B;AAC3C,sBAAU,MAAM,cAAY,CAC1B,sCAAU,cAAC,MAAM,IAAI,GACrB,sCAAU,cAAC,MAAM,aAAa;IAElC;;4DA1Ba,SAAU;IAHH,eAAS;IACP,aAAO;IAEhB,gBAAU,GAAV,SAAU;EAAC","file":"ng_style.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_style: src__common__directives__ng_style
  };
});

//# sourceMappingURL=ng_style.ddc.js.map
