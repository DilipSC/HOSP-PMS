import { SignupForm } from '@/components/signup-form'

export default function HospitalFoodManagerSignup() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Hospital Food Manager Sign Up</h1>
      <SignupForm 
        fields={['name', 'email', 'password', 'hospitalName', 'position']}
        additionalInfo="Join the hospital food management system to streamline meal services and ensure patient satisfaction."
      />
    </div>
  )
}

