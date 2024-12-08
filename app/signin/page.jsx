import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex px-8 justify-center min-h-screen">
      <section className="p-4 px-6 w-full">
        <div className="container justify-center mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">Sign In</h1>
        <p className="text-muted-foreground text-lg text-center pt-4">
          Please sign in to Continue.
        </p>
        </div>
        <LoginForm />
      </section>
    </div>
  )
}