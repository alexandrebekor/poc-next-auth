import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'poc-next-auth',
      credentials: {
        identifier: { label: 'identifier', type: 'email'},
        password: {label: 'password', type: 'password'}
      },
      async authorize(credentials, req) {
          const response = await fetch(`${process.env.HOST_API}/api/auth/local`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          })
          
          const data = await response.json()
  
          if(!response.ok) {
            throw new Error(data.error.message)
          }

          if(response.ok && data) {
            return {
              id: data.user.id,
              email: data.user.email,
              name: 'Alexandre Bekor',
              image: 'https://github.com/alexandrebekor.png',
              token: data.jwt
            }
          }
  
          return null
      },
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if(user && account) {
        return {
          ...token,
          accessToken: user.token
        }
      }


      return token
    },
    async session({ session, token }) {
      session.user.token = token.accessToken
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/'
  }
}

export default NextAuth(authOptions)
