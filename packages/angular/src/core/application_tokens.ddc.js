define(['dart_sdk', 'packages/angular/src/core/di/opaque_token'], function(dart_sdk, opaque_token) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const _root = Object.create(null);
  const src__core__application_tokens = Object.create(_root);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  dart.defineLazy(src__core__application_tokens, {
    /*src__core__application_tokens.APP_ID*/get APP_ID() {
      return dart.const(new (OpaqueTokenOfString()).new('APP_ID'));
    }
  });
  dart.trackLibraries("packages/angular/src/core/application_tokens.ddc", {
    "package:angular/src/core/application_tokens.dart": src__core__application_tokens
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.dart"],"names":[],"mappings":";;;;;;;;;;MAeM,oCAAM;YAAG,gBAAM,2BAAmB,CAAC","file":"application_tokens.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens: src__core__application_tokens
  };
});

//# sourceMappingURL=application_tokens.ddc.js.map
