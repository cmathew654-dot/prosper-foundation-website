"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { scheduleExam } from "@/lib/email"
import { CheckCircle, Loader2 } from "lucide-react"

export function ScheduleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; confirmationNumber?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      examType: formData.get("examType") as string,
      preferredDate: formData.get("preferredDate") as string,
      preferredTime: formData.get("preferredTime") as string,
      specialRequirements: formData.get("specialRequirements") as string,
    }

    try {
      const response = await scheduleExam(data)
      setResult(response)
      setSubmitted(true)
    } catch (error) {
      setResult({ success: false, message: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted && result?.success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Exam Scheduled Successfully!</h3>
            <p className="text-gray-600 mb-4">{result.message}</p>
            {result.confirmationNumber && (
              <Badge className="bg-green-100 text-green-800">Confirmation: {result.confirmationNumber}</Badge>
            )}
            <div className="mt-6">
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setResult(null)
                }}
                variant="outline"
              >
                Schedule Another Exam
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Exam</CardTitle>
        <CardDescription>
          Fill out the form below to schedule your professional certification exam. We'll contact you within 24 hours to
          confirm your appointment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Exam Type *</label>
            <select
              name="examType"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select an exam</option>
              <optgroup label="FINRA Series">
                <option value="Series 7">Series 7 - General Securities Representative</option>
                <option value="Series 63">Series 63 - Uniform Securities Agent State Law</option>
                <option value="Series 65">Series 65 - Investment Adviser Law</option>
                <option value="Series 66">Series 66 - Uniform Combined State Law</option>
              </optgroup>
              <optgroup label="Medical">
                <option value="MCAT">MCAT - Medical College Admission Test</option>
                <option value="USMLE Step 1">USMLE Step 1</option>
                <option value="USMLE Step 2">USMLE Step 2</option>
              </optgroup>
              <optgroup label="Accounting">
                <option value="CPA AUD">CPA - Auditing and Attestation</option>
                <option value="CPA BEC">CPA - Business Environment and Concepts</option>
                <option value="CPA FAR">CPA - Financial Accounting and Reporting</option>
                <option value="CPA REG">CPA - Regulation</option>
              </optgroup>
              <optgroup label="IT Certifications">
                <option value="CompTIA A+">CompTIA A+</option>
                <option value="CompTIA Security+">CompTIA Security+</option>
                <option value="CISSP">CISSP</option>
                <option value="AWS Solutions Architect">AWS Solutions Architect</option>
              </optgroup>
              <option value="Other">Other (specify in requirements)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
              <select
                name="preferredTime"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select time</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requirements or Accommodations
            </label>
            <textarea
              name="specialRequirements"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Please describe any special accommodations needed (extra time, separate room, etc.)"
            ></textarea>
          </div>

          {result && !result.success && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{result.message}</p>
            </div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scheduling Exam...
              </>
            ) : (
              "Schedule Exam"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
