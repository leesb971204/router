/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as testInitiallyLazyRouteImport } from './routes/(test)/initiallyLazy'
import { Route as testInitiallyEmptyRouteImport } from './routes/(test)/initiallyEmpty'
import { Route as testFooRouteImport } from './routes/(test)/foo'
import { Route as testFooBarRouteImport } from './routes/(test)/foo.bar'

const testBarLazyRouteImport = createFileRoute('/(test)/bar')()

const testBarLazyRoute = testBarLazyRouteImport
  .update({
    id: '/(test)/bar',
    path: '/bar',
    getParentRoute: () => rootRouteImport,
  } as any)
  .lazy(() => import('./routes/(test)/bar.lazy').then((d) => d.Route))
const testInitiallyLazyRoute = testInitiallyLazyRouteImport.update({
  id: '/(test)/initiallyLazy',
  path: '/initiallyLazy',
  getParentRoute: () => rootRouteImport,
} as any)
const testInitiallyEmptyRoute = testInitiallyEmptyRouteImport
  .update({
    id: '/(test)/initiallyEmpty',
    path: '/initiallyEmpty',
    getParentRoute: () => rootRouteImport,
  } as any)
  .lazy(() =>
    import('./routes/(test)/initiallyEmpty.lazy').then((d) => d.Route),
  )
const testFooRoute = testFooRouteImport.update({
  id: '/(test)/foo',
  path: '/foo',
  getParentRoute: () => rootRouteImport,
} as any)
const testFooBarRoute = testFooBarRouteImport.update({
  id: '/bar',
  path: '/bar',
  getParentRoute: () => testFooRoute,
} as any)

export interface FileRoutesByFullPath {
  '/foo': typeof testFooRouteWithChildren
  '/initiallyEmpty': typeof testInitiallyEmptyRoute
  '/initiallyLazy': typeof testInitiallyLazyRoute
  '/bar': typeof testBarLazyRoute
  '/foo/bar': typeof testFooBarRoute
}
export interface FileRoutesByTo {
  '/foo': typeof testFooRouteWithChildren
  '/initiallyEmpty': typeof testInitiallyEmptyRoute
  '/initiallyLazy': typeof testInitiallyLazyRoute
  '/bar': typeof testBarLazyRoute
  '/foo/bar': typeof testFooBarRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/(test)/foo': typeof testFooRouteWithChildren
  '/(test)/initiallyEmpty': typeof testInitiallyEmptyRoute
  '/(test)/initiallyLazy': typeof testInitiallyLazyRoute
  '/(test)/bar': typeof testBarLazyRoute
  '/(test)/foo/bar': typeof testFooBarRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/foo' | '/initiallyEmpty' | '/initiallyLazy' | '/bar' | '/foo/bar'
  fileRoutesByTo: FileRoutesByTo
  to: '/foo' | '/initiallyEmpty' | '/initiallyLazy' | '/bar' | '/foo/bar'
  id:
    | '__root__'
    | '/(test)/foo'
    | '/(test)/initiallyEmpty'
    | '/(test)/initiallyLazy'
    | '/(test)/bar'
    | '/(test)/foo/bar'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  testFooRoute: typeof testFooRouteWithChildren
  testInitiallyEmptyRoute: typeof testInitiallyEmptyRoute
  testInitiallyLazyRoute: typeof testInitiallyLazyRoute
  testBarLazyRoute: typeof testBarLazyRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(test)/bar': {
      id: '/(test)/bar'
      path: '/bar'
      fullPath: '/bar'
      preLoaderRoute: typeof testBarLazyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(test)/initiallyLazy': {
      id: '/(test)/initiallyLazy'
      path: '/initiallyLazy'
      fullPath: '/initiallyLazy'
      preLoaderRoute: typeof testInitiallyLazyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(test)/initiallyEmpty': {
      id: '/(test)/initiallyEmpty'
      path: '/initiallyEmpty'
      fullPath: '/initiallyEmpty'
      preLoaderRoute: typeof testInitiallyEmptyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(test)/foo': {
      id: '/(test)/foo'
      path: '/foo'
      fullPath: '/foo'
      preLoaderRoute: typeof testFooRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(test)/foo/bar': {
      id: '/(test)/foo/bar'
      path: '/bar'
      fullPath: '/foo/bar'
      preLoaderRoute: typeof testFooBarRouteImport
      parentRoute: typeof testFooRoute
    }
  }
}

interface testFooRouteChildren {
  testFooBarRoute: typeof testFooBarRoute
}

const testFooRouteChildren: testFooRouteChildren = {
  testFooBarRoute: testFooBarRoute,
}

const testFooRouteWithChildren =
  testFooRoute._addFileChildren(testFooRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  testFooRoute: testFooRouteWithChildren,
  testInitiallyEmptyRoute: testInitiallyEmptyRoute,
  testInitiallyLazyRoute: testInitiallyLazyRoute,
  testBarLazyRoute: testBarLazyRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
