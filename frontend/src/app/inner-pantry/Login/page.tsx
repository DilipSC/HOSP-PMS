import { LoginForm } from '@/components/login-form'

export default function InnerPantryLogin() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Inner Pantry Dashboard Login</h1>
      <LoginForm 
        fields={['email', 'password']}
        additionalInfo="Access the inner pantry dashboard to manage inventory, track stock levels, and optimize supply chain."
      />
    </div>
  )
}

