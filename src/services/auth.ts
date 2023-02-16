import { v4 as uuidV4 } from 'uuid'

const delay = (amount = 750) => new Promise((resolve) => setTimeout(resolve, amount))

const signIn = async () => {
  await delay()

  return {
    token: uuidV4(),
    user: {
      name: 'Alexandre Bekor',
      email: 'staff@alexandrebekor.com',
      avatar: 'https://github.com/alexandrebekor.png'
    }
  }
}

export { signIn }