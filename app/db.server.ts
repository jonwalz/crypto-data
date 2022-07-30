import { PrismaClient } from '@prisma/client'
import { User } from './models'

const __DEV__ = process.env.NODE_ENV === 'development'

let prisma: PrismaClient

declare global {
  var db: PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.db) {
    global.db = new PrismaClient()
  }
  prisma = global.db
}

interface CREATE_USER {}

export async function createUser({ publicAddress, nonce }) {
  return await prisma.user.create({
    data: {
      publicAddress,
      nonce,
    },
  })
}

export async function getUser(
  key: 'id' | 'email',
  value: string,
): Promise<User | null>
export async function getUser(id: User['id']): Promise<User | null>

export async function getUser(
  id: string,
  value?: string,
): Promise<User | null> {
  if (value != null) {
    if (!['nonce'].includes(id)) {
      throw Error('Invalid key provided to getUser.')
    }
    return await prisma.user.findUnique({
      where: { [id as 'id']: value },
    })
  }
  return await prisma.user.findUnique({
    where: { id },
  })
}

export async function verifyLogin(publicAddress: string): Promise<User> {
  const user = await prisma.user.findUnique({ where: { publicAddress } })
  if (!user) {
    throw Error('User not found')
  }

  return user
}

export async function checkDoesUserExist(
  publicAddress: string,
): Promise<User | []> {
  const user = await prisma.user.findUnique({ where: { publicAddress } })

  if (!user) {
    return []
  }

  return user
}
