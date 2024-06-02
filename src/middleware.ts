
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from "jsonwebtoken";
import { getDataFromToken } from './helpers/getDataFromToken';





export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log(path)

  const isPublicPath = path == '/login' || path == '/signup' || path == "/verifyemail" || path == "/"

  const test = path.includes('/login')
  console.log("In the test the value is" + test)
  console.log("The path value is" + isPublicPath)

  let token: any = request.cookies.get('token')?.value || ''

  if (token == "") {
    token = false
  } else {
    token = true
  }



  console.log(token)





  // if (isPublicPath && checkToken) {
  //   console.log("In the test the value is" + test)
  //   console.log("The token value is" + checkToken)
  //   console.log("The path value is" + isPublicPath)
  //   return NextResponse.redirect(new URL('/login', request.nextUrl))
  // }


  if (!isPublicPath && !token) {
    console.log("In the test the value is" + test)
    console.log("The token value is" + token)
    console.log("The path value is" + isPublicPath)
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profilePost',
    '/SearchPage',
    '/profile',
    '/profile/[id]',
    '/login',
    '/signup',
    '/verifyemail',
    '/ProfileRatingPage',
    '/verifySpecificComponent/[specificFieldToChange]'
  ], unstable_allowDynamic: [
    "/node_modules/lodash/**",
    "/node_modules/jsonwebtoken/**",
    "/node_modules/**"



  ]
}