export = function isBuiltin(moduleName: string): boolean {
  // @ts-ignore
  return builtinModules.includes(moduleName);
};
