'use server'

import { createLoginSession, verifyPassword } from "@/lib/login/manafe-login";
import { asyncDelay } from "@/utils/async-delay"
import { redirect } from "next/navigation";

type LoginActionState = {
  username: string, 
  error: string, 
}

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(3000); 

  if (!(formData instanceof FormData)) {
    return {
    username: '', 
    error: 'Dados inválidos'
  }
  } 

  const username = formData.get('username')?.toString().trim() || ''; 
  const password = formData.get('password')?.toString().trim() || ''; 

  if (!username || !password) {
    return {
      username, 
      error: 'Digite usuário e a senha'
    }
  }

  const isUsernameValid = username === process.env.LOGIN_USER; 
  const isPasswordValid = await verifyPassword(password, process.env.LOGIN_PASS || '')

  if (!isUsernameValid && !isPasswordValid) {
    return {
      username, 
      error: 'Dados inválidos',
    }
  }

  await createLoginSession(username);
  redirect('/admin/post'); 
}