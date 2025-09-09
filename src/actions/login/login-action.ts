'use server'

import { asyncDelay } from "@/utils/async-delay"
import { error } from "console";
import { toast } from "react-toastify";

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

  const username = formData.get('username')?.toString || ''; 
  const password = formData.get('password')?.toString || ''; 

  const isUsernameValid = username === process.env.LOGIN_USER; 

}

  return {
    username: '', 
    error: ''
  }
