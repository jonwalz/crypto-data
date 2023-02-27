import { createUserSession, login, register } from '~/session.server'
import { v4 as uuidv4 } from 'uuid'
import { User } from '~/models'
import { json } from '@remix-run/server-runtime'

export function handleCreateUser(address: string) {
  const nonce = uuidv4()

  return register({ publicAddress: String(address), nonce })
}

export const handleAttemptLogin = async (
  address: string,
  redirectTo: string
) => {
  let user: User | null
  try {
    user = await login(address)
  } catch (e) {
    let formError: string
    if (e instanceof Error) {
      formError = e.message
    } else if (typeof e === 'string') {
      formError = e
    } else {
      formError = 'There was an error logging in. Please try again later.'
    }

    return json<ActionData>({ formError }, 401)
  }

  return await createUserSession(user.id, {
    redirect: redirectTo || '/screener',
  })
}

interface ActionData {
  formError?: string
  fieldErrors?: FieldErrors
  fields?: Record<TextFields, string>
}

type FieldErrors = Record<TextFields, string | null>

type TextFields = 'address'
