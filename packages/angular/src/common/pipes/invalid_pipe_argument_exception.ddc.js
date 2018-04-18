define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__common__pipes__invalid_pipe_argument_exception = Object.create(_root);
  src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException = class InvalidPipeArgumentException extends core.FormatException {};
  (src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new = function(type, value) {
    src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.__proto__.new.call(this, dart.str`Invalid argument '${value}' for pipe '${type}'`);
  }).prototype = src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.prototype;
  dart.addTypeTests(src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException);
  dart.trackLibraries("packages/angular/src/common/pipes/invalid_pipe_argument_exception.ddc", {
    "package:angular/src/common/pipes/invalid_pipe_argument_exception.dart": src__common__pipes__invalid_pipe_argument_exception
  }, '{"version":3,"sourceRoot":"","sources":["invalid_pipe_argument_exception.dart"],"names":[],"mappings":";;;;;;;;mGAC+B,IAAS,EAAE,KAAY;AAC9C,8GAAM,6BAAoB,KAAK,eAAa,IAAI;EAAG","file":"invalid_pipe_argument_exception.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__invalid_pipe_argument_exception: src__common__pipes__invalid_pipe_argument_exception
  };
});

//# sourceMappingURL=invalid_pipe_argument_exception.ddc.js.map
