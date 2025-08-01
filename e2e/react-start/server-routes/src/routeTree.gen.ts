/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as MergeServerFnMiddlewareContextRouteImport } from './routes/merge-server-fn-middleware-context'
import { Route as IndexRouteImport } from './routes/index'
import { ServerRoute as ApiMiddlewareContextServerRouteImport } from './routes/api/middleware-context'

const rootServerRouteImport = createServerRootRoute()

const MergeServerFnMiddlewareContextRoute =
  MergeServerFnMiddlewareContextRouteImport.update({
    id: '/merge-server-fn-middleware-context',
    path: '/merge-server-fn-middleware-context',
    getParentRoute: () => rootRouteImport,
  } as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ApiMiddlewareContextServerRoute =
  ApiMiddlewareContextServerRouteImport.update({
    id: '/api/middleware-context',
    path: '/api/middleware-context',
    getParentRoute: () => rootServerRouteImport,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/merge-server-fn-middleware-context': typeof MergeServerFnMiddlewareContextRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/merge-server-fn-middleware-context': typeof MergeServerFnMiddlewareContextRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/merge-server-fn-middleware-context': typeof MergeServerFnMiddlewareContextRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/merge-server-fn-middleware-context'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/merge-server-fn-middleware-context'
  id: '__root__' | '/' | '/merge-server-fn-middleware-context'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MergeServerFnMiddlewareContextRoute: typeof MergeServerFnMiddlewareContextRoute
}
export interface FileServerRoutesByFullPath {
  '/api/middleware-context': typeof ApiMiddlewareContextServerRoute
}
export interface FileServerRoutesByTo {
  '/api/middleware-context': typeof ApiMiddlewareContextServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/middleware-context': typeof ApiMiddlewareContextServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/middleware-context'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/middleware-context'
  id: '__root__' | '/api/middleware-context'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiMiddlewareContextServerRoute: typeof ApiMiddlewareContextServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/merge-server-fn-middleware-context': {
      id: '/merge-server-fn-middleware-context'
      path: '/merge-server-fn-middleware-context'
      fullPath: '/merge-server-fn-middleware-context'
      preLoaderRoute: typeof MergeServerFnMiddlewareContextRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/api/middleware-context': {
      id: '/api/middleware-context'
      path: '/api/middleware-context'
      fullPath: '/api/middleware-context'
      preLoaderRoute: typeof ApiMiddlewareContextServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MergeServerFnMiddlewareContextRoute: MergeServerFnMiddlewareContextRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiMiddlewareContextServerRoute: ApiMiddlewareContextServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
