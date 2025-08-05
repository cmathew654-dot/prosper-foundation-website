"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import Link from "next/link"

const examPrices = {
  "series-7": 300,
  "series-63": 147,
  mcat: 320,
  "cpa-far": 208,
  "security-plus": 370,
}

const classPrices = {
  "finra-prep": 899,
  "mcat-prep": 1299,
  "cpa-review": 1099,
  "security-training": 799,
}

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    description: "Perfect for individual exam takers",
    basePrice: 0,
    features: ["Exam scheduling", "Basic study materials", "Email support", "Secure testing environment"],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Most popular choice for serious students",
    basePrice: 299,
    features: [
      "Everything in Basic",
      "Prep course included",
      "Practice exams",
      "Priority scheduling",
      "Phone support",
      "Study progress tracking",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    description: "For organizations and bulk bookings",
    basePrice: 999,
    features: [
      "Everything in Premium",
      "Bulk exam scheduling",
      "Custom training programs",
      "Dedicated account manager",
      "On-site testing options",
      "Advanced reporting",
    ],
    popular: false,
  },
]

export function PricingCalculator() {
  const [selectedExams, setSelectedExams] = useState<string[]>([])
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedPackage, setSelectedPackage] = useState("premium")
  const [quantity, setQuantity] = useState(1)

  const calculateTotal = () => {
    const examTotal = selectedExams.reduce((sum, exam) => sum + examPrices[exam as keyof typeof examPrices], 0)
    const classTotal = selectedClasses.reduce((sum, cls) => sum + classPrices[cls as keyof typeof classPrices], 0)
    const packagePrice = packages.find((p) => p.id === selectedPackage)?.basePrice || 0

    const subtotal = (examTotal + classTotal + packagePrice) * quantity
    const discount = selectedPackage === "premium" ? 0.1 : selectedPackage === "enterprise" ? 0.15 : 0

    return {
      subtotal,
      discount: subtotal * discount,
      total: subtotal * (1 - discount),
    }
  }

  const { subtotal, discount, total } = calculateTotal()

  const toggleExam = (exam: string) => {
    setSelectedExams((prev) => (prev.includes(exam) ? prev.filter((e) => e !== exam) : [...prev, exam]))
  }

  const toggleClass = (cls: string) => {
    setSelectedClasses((prev) => (prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Calculate Your Investment</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">Customize your package and see real-time pricing</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Package Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Package</CardTitle>
              <CardDescription>Select the package that best fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-yellow-300"
                    }`}
                    onClick={() => setSelectedPackage(pkg.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.popular && (
                      <Badge className="absolute -top-2 left-4 bg-yellow-400 text-black">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{pkg.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{pkg.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-green-600">${pkg.basePrice}</span>
                    </div>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exam Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Exams</CardTitle>
              <CardDescription>Choose the exams you want to take</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(examPrices).map(([exam, price]) => (
                  <motion.div
                    key={exam}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedExams.includes(exam)
                        ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-yellow-300"
                    }`}
                    onClick={() => toggleExam(exam)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{exam.replace("-", " ").toUpperCase()}</span>
                      <span className="text-green-600 font-semibold">${price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Class Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Add Prep Classes</CardTitle>
              <CardDescription>Boost your success with expert-led preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(classPrices).map(([cls, price]) => (
                  <motion.div
                    key={cls}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedClasses.includes(cls)
                        ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-yellow-300"
                    }`}
                    onClick={() => toggleClass(cls)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{cls.replace("-", " ")} Course</span>
                      <span className="text-green-600 font-semibold">${price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quantity */}
          <Card>
            <CardHeader>
              <CardTitle>Quantity</CardTitle>
              <CardDescription>How many people will be taking exams?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
                {quantity > 5 && (
                  <Badge variant="secondary">
                    <Zap className="h-3 w-3 mr-1" />
                    Bulk Discount Applied!
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Price Summary</CardTitle>
              <CardDescription>Your customized package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Package ({selectedPackage})</span>
                  <span>${packages.find((p) => p.id === selectedPackage)?.basePrice || 0}</span>
                </div>

                {selectedExams.length > 0 && (
                  <div className="flex justify-between">
                    <span>Exams ({selectedExams.length})</span>
                    <span>
                      ${selectedExams.reduce((sum, exam) => sum + examPrices[exam as keyof typeof examPrices], 0)}
                    </span>
                  </div>
                )}

                {selectedClasses.length > 0 && (
                  <div className="flex justify-between">
                    <span>Classes ({selectedClasses.length})</span>
                    <span>
                      ${selectedClasses.reduce((sum, cls) => sum + classPrices[cls as keyof typeof classPrices], 0)}
                    </span>
                  </div>
                )}

                {quantity > 1 && (
                  <div className="flex justify-between">
                    <span>Quantity</span>
                    <span>×{quantity}</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-green-600">${total.toFixed(2)}</span>
              </div>

              <div className="space-y-2 pt-4">
                <Link href="/schedule">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Get Started Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact for Custom Quote
                  </Button>
                </Link>
              </div>

              {total > 1000 && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    💰 You qualify for our enterprise discount! Contact us for additional savings.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
