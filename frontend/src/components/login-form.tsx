'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface LoginFormProps {
  fields: string[]
  additionalInfo: string
}

export function LoginForm({ fields, additionalInfo }: LoginFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login data:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>{additionalInfo}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field} className="mb-4">
              <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
              <Input
                id={field}
                type={field === 'password' ? 'password' : 'text'}
                value={formData[field] || ''}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                required
              />
            </div>
          ))}
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">Don't have an account? Sign up</p>
      </CardFooter>
    </Card>
  )
}

