import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1800 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function createSession(userData: {
  email?: string;
  username?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
  user_img?: string;
}) {
  // Verify credentials && get the user

  const user = {
    email: userData.email,
    username: userData.username,
    user_id: userData.user_id,
    first_name: userData.first_name,
    last_name: userData.last_name,
    phone: userData.phone,
    role: userData.role,
    user_img: userData.user_img
  };

  // Create the session
  const expires = new Date(Date.now() + 1800 * 1000);
  const session = await encrypt({ user, expires });
  console.log("Create session", session);
  // Save the session in a cookie

  cookies().set("session", session, { expires, httpOnly: true });

  return { session, expires };
  // localStorage.setItem("session",session)
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 1800 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

