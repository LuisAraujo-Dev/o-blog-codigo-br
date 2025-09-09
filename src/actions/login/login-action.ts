'use server'

import { asyncDelay } from "@/utils/async-delay"
import { error } from "console";

type LoginActionState = {
  username: string, 
  error: string, 
}

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(3000); 

  return {
    username: '', 
    error: ''
  }
}