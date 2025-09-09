import { hashPassword } from "@/lib/login/manafe-login";

(async () => {
  const myPassword = ''; 
  const hashPasswordInBase64 = await hashPassword(myPassword); 
   console.log({hashPasswordInBase64}); 
})(); 