import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const hasAuth = request.cookies.has("session");
  console.log("hasAuth:", hasAuth);

  if (hasAuth) {
    if ( request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register" ) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    
  }else{
    if (request.nextUrl.pathname !== "/login" && request.nextUrl.pathname !== "/register") {
      // alert("Please log in before using the website.");
       return NextResponse.redirect(new URL("/login", request.url));
    }

  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/home",
    "/register",
    "/cart",
    "/managebooks",
    "/updatebooks",
    "/addbook",
    "/profile",
    "/bookDetail"
  ],
};
