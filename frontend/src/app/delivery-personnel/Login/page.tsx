import { LoginForm } from '@/components/login-form'

export default function DeliveryPersonnelLogin() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Delivery Personnel Login</h1>
      <LoginForm 
        fields={['email', 'password']}
        additionalInfo="Access the delivery personnel system to manage routes, track deliveries, and update order statuses."
      />
    </div>
  )
}

