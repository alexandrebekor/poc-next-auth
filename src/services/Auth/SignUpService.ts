import { Delay } from "@/utils/Delay"
import { v4 as UuidV4 } from 'uuid'

const SignUpService = async () => {
  await Delay()

  return {
    message: 'registered',
    user: {
      id: UuidV4(),
      name: 'Alexandre Bekor',
      email: 'staff@alexandrebekor.com',
      password: '123456'
    }
  }
}

export { SignUpService }