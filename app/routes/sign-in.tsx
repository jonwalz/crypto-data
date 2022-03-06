import { ActionFunction, json, Outlet } from 'remix'
import { handleAttemptLogin, handleCreateUser } from './sign-in/utils'

export const action: ActionFunction = async ({ request }) => {
  console.log('HIT')
  const form = await request.formData()
  const address = form.get('publicAddress').toString()

  try {
    return await handleAttemptLogin(address, '/screener')
  } catch (e) {
    const user = handleCreateUser(address)

    return json(user)
  }
}

export default () => <Outlet />
