import { ContactForm } from "./contact-form"
import { RequestInfoForm } from "./request-info-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to advance your career? Get in touch with us today. We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <ContactForm />
            <RequestInfoForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sm text-gray-600">
                      123 Professional Drive
                      <br />
                      Education City, EC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:5551234exam" className="text-sm text-gray-600 hover:text-yellow-600">
                      (555) 123-EXAM
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:info@theprospercenter.com" className="text-sm text-gray-600 hover:text-yellow-600">
                      info@theprospercenter.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 8AM-8PM
                      <br />
                      Saturday: 9AM-5PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/schedule">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Schedule an Exam</Button>
                </Link>
                <Link href="/exams">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Available Exams
                  </Button>
                </Link>
                <Link href="/classes">
                  <Button variant="outline" className="w-full bg-transparent">
                    Browse Classes
                  </Button>
                </Link>
                <Link href="/facilities">
                  <Button variant="outline" className="w-full bg-transparent">
                    Tour Our Facilities
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">For urgent matters on exam day or emergencies:</p>
                <a href="tel:5551234911" className="text-sm font-semibold text-yellow-600 hover:underline">
                  (555) 123-4911
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
