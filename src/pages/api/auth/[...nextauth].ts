import { signInRequest } from "@/services/auth"
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'poc-next-auth',
      credentials: {
        email: { label: 'email', type: 'email'},
        password: {label: 'password', type: 'password'}
      },
      async authorize(credentials, req) {
          const token = await signInRequest()
          console.log(token)
  
          if(token) {
            return token
          }
  
          return null
      },
    })
  ],

  secret: process.env.NEXT_AUTH_TOKEN,
  pages: {
    signIn: '/login'
  }
})
