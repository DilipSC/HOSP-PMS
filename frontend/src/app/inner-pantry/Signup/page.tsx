import { SignupForm } from '@/components/signup-form'

export default function InnerPantrySignup() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Inner Pantry Dashboard Sign Up</h1>
      <SignupForm 
        fields={['name', 'email', 'password', 'department', 'role']}
        additionalInfo="Join the inner pantry management system to contribute to efficient inventory control and supply management."
      />
    </div>
  )
}

