import { SignupForm } from '@/components/signup-form'

export default function DeliveryPersonnelSignup() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Delivery Personnel Sign Up</h1>
      <SignupForm 
        fields={['name', 'email', 'password', 'phoneNumber', 'vehicleType']}
        additionalInfo="Join our delivery team to ensure timely and efficient food delivery to patients and staff."
      />
    </div>
  )
}

