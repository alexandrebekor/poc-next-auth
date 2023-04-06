import { Delay } from '@/utils/Delay'
import { v4 as uuidV4 } from 'uuid'

const SignInService = async () => {
  await Delay()

  return {
    id: uuidV4(),
    token: uuidV4(),
    user: {
      name: 'Alexandre Bekor',
      email: 'staff@alexandrebekor.com',
      avatar: 'https://github.com/alexandrebekor.png'
    }
  }
}

export { SignInService }