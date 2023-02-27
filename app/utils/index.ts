import { RemoveIndex } from './types'

export function getServerSafeEnvVariable<
  K extends keyof RemoveIndex<NodeJS.ProcessEnv>
>(key: K): Exclude<NodeJS.ProcessEnv[K], undefined> {
  try {
    const val: any = process.env[key]
    if (!val) {
      throw Error(`Missing env variable: ${key}`)
    }
    return val
  } catch (_) {
    throw Error(
      'You tried to access a server-side environment variable on the client!'
    )
  }
}
