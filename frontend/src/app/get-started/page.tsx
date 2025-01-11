import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Package, Truck } from 'lucide-react'

export default function Home() {
  const dashboards = [
    {
      title: "Hospital Food Manager",
      description: "Manage and oversee hospital food services",
      icon: Utensils,
      path: "/hospital-food-manager"
    },
    {
      title: "Inner Pantry Dashboard",
      description: "Control and monitor inner pantry inventory",
      icon: Package,
      path: "/inner-pantry"
    },
    {
      title: "Delivery Personnel",
      description: "Manage food delivery operations",
      icon: Truck,
      path: "/delivery-personnel"
    }
  ]

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Dashboard Access</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboards.map((dashboard) => (
          <Card key={dashboard.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <dashboard.icon className="h-6 w-6" />
                {dashboard.title}
              </CardTitle>
              <CardDescription>{dashboard.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Button asChild>
                  <Link href={`${dashboard.path}/login`}>Login</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`${dashboard.path}/signup`}>Sign Up</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

