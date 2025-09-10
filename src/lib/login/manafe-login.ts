import bcrypt from "bcryptjs";
import { User } from "lucide-react";
import { cookies } from "next/headers";

const jwtSecretKey = process.env.JWT_SECRET_KEY; 
const jwtEncodeKey = new TextEncoder().encode(jwtSecretKey)

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || '1d'; 
const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginSession';

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString('base64')
  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, 'base64').toString('utf-8')
  const isValid = await bcrypt.compare(password, hash);
  return isValid; 
}

export async function createLoginSession(username:string) {
  const exportAt = new Date(Date.now() + loginExpSeconds * 1000); 
  const loginSession = username + "JWT"; 
  const cookiesStore = await cookies(); 

  cookiesStore.set(loginCookieName, loginSession, {
    httpOnly: true, 
    secure: true, 
    sameSite: 'strict',
    expires: exportAt,  
  })
}