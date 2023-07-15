import builtinModules from "./builtinModules-browser.js";
import _load from "./_load-browser.js";
import createRequire from "./createRequire-browser.js";
import isBuiltin from "./isBuiltin-browser.js";
import syncBuiltinESMImports from "./syncBuiltinESMImports-browser.js";

let requireDepth = 0;

class Module {
  static builtinModules = builtinModules;
  static createRequire = createRequire;
  static isBuiltin = isBuiltin;
  static syncBuiltinESMImports = syncBuiltinESMImports;
  static _load = _load;

  // static findSourceMap = findSourceMap;
  // static register = register;
  // static SourceMap = SourceMap;

  get isPreloading(): boolean {
    return false;
  }
  require(path: string): any {
    if (path === "") {
      throw new TypeError();
    }
    requireDepth++;
    try {
      return Module._load(path, this, false);
    } finally {
      requireDepth--;
    }
  }
}

export = Module;
