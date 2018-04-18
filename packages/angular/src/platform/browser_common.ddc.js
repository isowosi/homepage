define(['dart_sdk', 'packages/angular/src/platform/browser/testability'], function(dart_sdk, testability) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__browser__testability = testability.src__platform__browser__testability;
  const _root = Object.create(null);
  const src__platform__browser_common = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  src__platform__browser_common.createInitDomAdapter = function(testabilityRegistry) {
    return dart.fn(() => {
      testabilityRegistry.setTestabilityGetter(new src__platform__browser__testability.BrowserGetTestability.new());
    }, VoidToNull());
  };
  dart.trackLibraries("packages/angular/src/platform/browser_common.ddc", {
    "package:angular/src/platform/browser_common.dart": src__platform__browser_common
  }, '{"version":3,"sourceRoot":"","sources":["browser_common.dart"],"names":[],"mappings":";;;;;;;;;gEAG8B,mBAAuC;AACnE,UAAO;AACL,yBAAmB,qBAAqB,CAAC,IAAI,6DAAqB;;EAEtE","file":"browser_common.ddc.js"}');
  // Exports:
  return {
    src__platform__browser_common: src__platform__browser_common
  };
});

//# sourceMappingURL=browser_common.ddc.js.map
