import { LoginForm } from "@/components/Admin/LoginForm";
import ErrorMessage from "@/components/ErrorMessage";

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN))

  if(!allowLogin) {
    return (
      <ErrorMessage 
      contentTitle={"403"} content={"Libere o sistema de login usando o ALLOW_LOGIN"} />
    )
  }
  return <LoginForm/>
}
