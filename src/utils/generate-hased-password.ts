import { hashPassword } from "@/lib/login/manage-login";

(async () => {
  const myPassword = 'nova secret';
  const hashPasswordInBase64 = await hashPassword(myPassword);
  console.log({ hashPasswordInBase64 });
})(); 