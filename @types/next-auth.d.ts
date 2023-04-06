import { JWT } from 'next-auth/jwt'
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      token: string
    } & DefaultSession['user']
  }

  interface User {
    token: string & DefaultUser['token']
  }
}