import { RegisterForm } from "@/components/auth/register-from"

export default function LoginPage() {
  return (
    <div className="flex px-8 justify-center min-h-screen">
      <section className="py-4 ">
        <div className="container justify-center mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        <p className="text-muted-foreground text-lg text-center py-4">
          Please Create a Account to continue.
        </p>
        </div>
        <RegisterForm />
      </section>
    </div>
  )
}