import path from 'node:path'
import { existsSync, readFileSync } from 'node:fs'
import { z } from 'zod'
import { virtualRootRouteSchema } from './filesystem/virtual/config'
import type { GeneratorPlugin } from './plugin/types'

export const baseConfigSchema = z.object({
  target: z.enum(['react', 'solid']).optional().default('react'),
  virtualRouteConfig: virtualRootRouteSchema.or(z.string()).optional(),
  routeFilePrefix: z.string().optional(),
  routeFileIgnorePrefix: z.string().optional().default('-'),
  routeFileIgnorePattern: z.string().optional(),
  routesDirectory: z.string().optional().default('./src/routes'),
  quoteStyle: z.enum(['single', 'double']).optional().default('single'),
  semicolons: z.boolean().optional().default(false),
  disableLogging: z.boolean().optional().default(false),
  routeTreeFileHeader: z
    .array(z.string())
    .optional()
    .default([
      '/* eslint-disable */',
      '// @ts-nocheck',
      '// noinspection JSUnusedGlobalSymbols',
    ]),
  indexToken: z.string().optional().default('index'),
  routeToken: z.string().optional().default('route'),
  pathParamsAllowedCharacters: z
    .array(z.enum([';', ':', '@', '&', '=', '+', '$', ',']))
    .optional(),
})

export type BaseConfig = z.infer<typeof baseConfigSchema>

export const configSchema = baseConfigSchema.extend({
  generatedRouteTree: z.string().optional().default('./src/routeTree.gen.ts'),
  disableTypes: z.boolean().optional().default(false),
  verboseFileRoutes: z.boolean().optional(),
  addExtensions: z.boolean().optional().default(false),
  enableRouteTreeFormatting: z.boolean().optional().default(true),
  routeTreeFileFooter: z.array(z.string()).optional().default([]),
  autoCodeSplitting: z.boolean().optional(),
  customScaffolding: z
    .object({
      routeTemplate: z.string().optional(),
      lazyRouteTemplate: z.string().optional(),
    })
    .optional(),
  experimental: z
    .object({
      // TODO: This has been made stable and is now "autoCodeSplitting". Remove in next major version.
      enableCodeSplitting: z.boolean().optional(),
    })
    .optional(),
  plugins: z.array(z.custom<GeneratorPlugin>()).optional(),
  tmpDir: z.string().optional().default(''),
})

export type Config = z.infer<typeof configSchema>

type ResolveParams = {
  configDirectory: string
}

export function resolveConfigPath({ configDirectory }: ResolveParams) {
  return path.resolve(configDirectory, 'tsr.config.json')
}

export function getConfig(
  inlineConfig: Partial<Config> = {},
  configDirectory?: string,
): Config {
  if (configDirectory === undefined) {
    configDirectory = process.cwd()
  }
  const configFilePathJson = resolveConfigPath({ configDirectory })
  const exists = existsSync(configFilePathJson)

  let config: Config

  if (exists) {
    config = configSchema.parse({
      ...JSON.parse(readFileSync(configFilePathJson, 'utf-8')),
      ...inlineConfig,
    })
  } else {
    config = configSchema.parse(inlineConfig)
  }

  // If typescript is disabled, make sure the generated route tree is a .js file
  if (config.disableTypes) {
    config.generatedRouteTree = config.generatedRouteTree.replace(
      /\.(ts|tsx)$/,
      '.js',
    )
  }

  // if a configDirectory is used, paths should be relative to that directory
  if (configDirectory) {
    // if absolute configDirectory is provided, use it as the root
    if (path.isAbsolute(configDirectory)) {
      config.routesDirectory = path.resolve(
        configDirectory,
        config.routesDirectory,
      )
      config.generatedRouteTree = path.resolve(
        configDirectory,
        config.generatedRouteTree,
      )
    } else {
      config.routesDirectory = path.resolve(
        process.cwd(),
        configDirectory,
        config.routesDirectory,
      )
      config.generatedRouteTree = path.resolve(
        process.cwd(),
        configDirectory,
        config.generatedRouteTree,
      )
    }
  }

  const resolveTmpDir = (dir: string | Array<string>) => {
    if (Array.isArray(dir)) {
      dir = path.join(...dir)
    }
    if (!path.isAbsolute(dir)) {
      dir = path.resolve(process.cwd(), dir)
    }
    return dir
  }

  if (config.tmpDir) {
    config.tmpDir = resolveTmpDir(config.tmpDir)
  } else if (process.env.TSR_TMP_DIR) {
    config.tmpDir = resolveTmpDir(process.env.TSR_TMP_DIR)
  } else {
    config.tmpDir = resolveTmpDir(['.tanstack', 'tmp'])
  }

  validateConfig(config)
  return config
}

function validateConfig(config: Config) {
  if (typeof config.experimental?.enableCodeSplitting !== 'undefined') {
    const message = `
------
⚠️ ⚠️ ⚠️
ERROR: The "experimental.enableCodeSplitting" flag has been made stable and is now "autoCodeSplitting". Please update your configuration file to use "autoCodeSplitting" instead of "experimental.enableCodeSplitting".
------
`
    console.error(message)
    throw new Error(message)
  }

  if (config.indexToken === config.routeToken) {
    throw new Error(
      `The "indexToken" and "routeToken" options must be different.`,
    )
  }

  if (
    config.routeFileIgnorePrefix &&
    config.routeFileIgnorePrefix.trim() === '_'
  ) {
    throw new Error(
      `The "routeFileIgnorePrefix" cannot be an underscore ("_"). This is a reserved character used to denote a pathless route. Please use a different prefix.`,
    )
  }

  return config
}
