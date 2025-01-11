import { LoginForm } from '@/components/login-form'

export default function HospitalFoodManagerLogin() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Hospital Food Manager Login</h1>
      <LoginForm 
        fields={['email', 'password']}
        additionalInfo="Access the hospital food management system to oversee meal planning, dietary requirements, and kitchen operations."
      />
    </div>
  )
}

