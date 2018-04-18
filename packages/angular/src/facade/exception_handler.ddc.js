define(['dart_sdk', 'packages/logging/logging'], function(dart_sdk, logging) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging$ = logging.logging;
  const _root = Object.create(null);
  const src__facade__exception_handler = Object.create(_root);
  const $join = dartx.join;
  const $toString = dartx.toString;
  const _logger = Symbol('_logger');
  src__facade__exception_handler.ExceptionHandler = class ExceptionHandler extends core.Object {
    static _longStackTrace(stackTrace) {
      return core.Iterable.is(stackTrace) ? stackTrace[$join]('\n\n-----async gap-----\n') : dart.toString(stackTrace);
    }
    static exceptionToString(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      let buffer = new core.StringBuffer.new();
      buffer.writeln(dart.str`EXCEPTION: ${exception}`);
      if (stackTrace != null) {
        buffer.writeln('STACKTRACE: ');
        buffer.writeln(src__facade__exception_handler.ExceptionHandler._longStackTrace(stackTrace));
      }
      if (reason != null) {
        buffer.writeln(dart.str`REASON: ${reason}`);
      }
      return buffer.toString();
    }
    call(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      this[_logger].severe(src__facade__exception_handler.ExceptionHandler.exceptionToString(exception, stackTrace, reason));
    }
  };
  (src__facade__exception_handler.ExceptionHandler.new = function(logger) {
    this[_logger] = logger;
  }).prototype = src__facade__exception_handler.ExceptionHandler.prototype;
  dart.addTypeTests(src__facade__exception_handler.ExceptionHandler);
  dart.setMethodSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getMethods(src__facade__exception_handler.ExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.setFieldSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getFields(src__facade__exception_handler.ExceptionHandler.__proto__),
    [_logger]: dart.finalFieldType(logging$.Logger)
  }));
  dart.trackLibraries("packages/angular/src/facade/exception_handler.ddc", {
    "package:angular/src/facade/exception_handler.dart": src__facade__exception_handler
  }, '{"version":3,"sourceRoot":"","sources":["exception_handler.dart"],"names":[],"mappings":";;;;;;;;;;;;2BA2BgC,UAAU;8BAAK,UAAU,IACjD,UAAU,OAAK,CAAC,6CAChB,UAAU;IAAW;6BAIzB,SAAS,EACT,UAAU,EACV,MAAa;iCADb;6BACO;AAEP,UAAM,SAAS,IAAI,qBAAY;AAC/B,YAAM,QAAQ,CAAC,sBAAa,SAAS;AACrC,UAAI,UAAU,IAAI,MAAM;AACtB,cAAM,QAAQ,CAAC;AACf,cAAM,QAAQ,CAAC,+DAAe,CAAC,UAAU;;AAE3C,UAAI,MAAM,IAAI,MAAM;AAClB,cAAM,QAAQ,CAAC,mBAAU,MAAM;;AAEjC,YAAO,OAAM,SAAS;IACxB;SAUU,SAAS,EAAG,UAAU,EAAE,MAAa;iCAAzB;6BAAmB;AACvC,mBAAO,OAAO,CAAC,iEAAiB,CAAC,SAAS,EAAE,UAAU,EAAE,MAAM;IAChE;;kEAR4B,MAAO;IAAP,aAAO,GAAP,MAAO;EAAC","file":"exception_handler.ddc.js"}');
  // Exports:
  return {
    src__facade__exception_handler: src__facade__exception_handler
  };
});

//# sourceMappingURL=exception_handler.ddc.js.map
