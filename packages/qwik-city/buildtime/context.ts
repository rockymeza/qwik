import type { NormalizedPluginOptions, BuildContext, PluginOptions } from './types';
import { isAbsolute, resolve } from 'node:path';
import { normalizePath } from '../utils/fs';

export function createBuildContext(
  rootDir: string,
  viteBasePath: string,
  userOpts?: PluginOptions,
  target?: 'ssr' | 'client'
) {
  const ctx: BuildContext = {
    rootDir: normalizePath(rootDir),
    opts: normalizeOptions(rootDir, viteBasePath, userOpts),
    routes: [],
    serverPlugins: [],
    layouts: [],
    entries: [],
    serviceWorkers: [],
    menus: [],
    diagnostics: [],
    frontmatter: new Map(),
    target: target || 'ssr',
    isDevServer: false,
    isDevServerClientOnly: false,
    isDirty: true,
    activeBuild: null,
  };
  return ctx;
}

export function resetBuildContext(ctx: BuildContext | null) {
  if (ctx) {
    ctx.routes.length = 0;
    ctx.layouts.length = 0;
    ctx.entries.length = 0;
    ctx.menus.length = 0;
    ctx.diagnostics.length = 0;
    ctx.frontmatter.clear();
    ctx.isDirty = true;
  }
}

function normalizeOptions(
  rootDir: string,
  viteBasePath: string,
  userOpts: PluginOptions | undefined
) {
  const opts: NormalizedPluginOptions = { ...userOpts } as any;

  if (typeof opts.routesDir !== 'string') {
    opts.routesDir = resolve(rootDir, 'src', 'routes');
  } else if (!isAbsolute(opts.routesDir)) {
    opts.routesDir = resolve(rootDir, opts.routesDir);
  }
  opts.routesDir = normalizePath(opts.routesDir);

  if (typeof opts.serverPluginsDir !== 'string') {
    opts.serverPluginsDir = opts.routesDir;
  } else if (!isAbsolute(opts.serverPluginsDir)) {
    opts.serverPluginsDir = resolve(rootDir, opts.serverPluginsDir);
  }
  opts.serverPluginsDir = normalizePath(opts.serverPluginsDir);

  if (typeof (opts as any).baseUrl === 'string') {
    // baseUrl deprecated
    opts.basePathname = (opts as any).baseUrl;
  }

  if (typeof opts.basePathname !== 'string') {
    // opts.basePathname is used internally
    // but in most cases should be passed in by the vite config "base" property
    opts.basePathname = viteBasePath;
  }

  // cleanup basePathname
  const url = new URL(opts.basePathname, 'https://qwik.builer.io/');
  opts.basePathname = url.pathname;
  if (!opts.basePathname.endsWith('/')) {
    // basePathname should always start and end with a slash
    opts.basePathname += '/';
  }

  if (typeof opts.trailingSlash !== 'boolean') {
    opts.trailingSlash = true;
  }

  opts.mdx = opts.mdx || {};

  return opts;
}
