import { Navbar } from "@/components/bookshop/navbar"
import { LoginForm } from "@/components/bookshop/login-form"
import { AuthFooter } from "@/components/bookshop/auth-footer"

export const metadata = {
  title: "Login - BookShop",
  description: "Access your digital library",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar variant="public" />
      <LoginForm />
      <AuthFooter />
    </div>
  )
}
