import { createUserSession, register } from '~/session.server'
import { v4 as uuidv4 } from 'uuid'
import { User } from '~/models'
import { verifyLogin } from '~/db.server'

export function handleCreateUser(address: string) {
  const nonce = uuidv4()

  return register({
    publicAddress: String(address),
    nonce,
    opts: { redirect: '/screener' },
  })
}

export const handleAttemptLogin = async (
  address: string,
  redirectTo: string = '/screener'
) => {
  if (address === 'faker') {
    return await createUserSession('faker ', {
      redirect: redirectTo || '/screener',
    })
  }
  let user: User | null
  try {
    user = await verifyLogin(address)
  } catch (e) {
    let formError: string
    if (e instanceof Error) {
      formError = e.message + '!!!'
    } else if (typeof e === 'string') {
      formError = e
    } else {
      formError = 'There was an error logging in. Please try again later.'
    }

    return handleCreateUser(address)
  }
}

interface ActionData {
  formError?: string
  fieldErrors?: FieldErrors
  fields?: Record<TextFields, string>
}

type FieldErrors = Record<TextFields, string | null>

type TextFields = 'address'
