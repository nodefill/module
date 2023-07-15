export = function createRequire(pathOrURL: string | URL): NodeRequire {
  const path = fileURLToPath(pathOrURL);
  const trailingSlash =
    path.endsWith("/") || (isWindows && path.endsWith("\\"));
  const proxyPath = trailingSlash ? join(path, "noop.js") : path;

  const m = new Module(proxyPath);
  m.filename = proxyPath;
  m.paths = Module._nodeModulePaths(m.path);

  return (path) => m.require(path);
};
