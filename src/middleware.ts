import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      return !!token
    },
  },
  pages: {
    signIn: '/'
  }
})

export const config = { matcher: ['/admin/:path*'] }