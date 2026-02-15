import { Navbar } from "@/components/bookshop/navbar"
import { SignupForm } from "@/components/bookshop/signup-form"
import { SignupFooter } from "@/components/bookshop/signup-footer"

export const metadata = {
  title: "Sign Up - BookShop",
  description: "Create your account to start managing your library",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar variant="public" />
      <SignupForm />
      <SignupFooter />
    </div>
  )
}
