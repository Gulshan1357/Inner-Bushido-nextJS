import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/new-user(.*)'])

export default clerkMiddleware(
    (auth, req) => {
        if (isProtectedRoute(req)) auth().protect()
    },
    { debug: true },
)

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
