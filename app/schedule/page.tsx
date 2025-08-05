import { ScheduleForm } from "./schedule-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Exam</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your professional certification exam at The Prosper Center. We offer flexible scheduling and a
            comfortable testing environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScheduleForm />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Testing Information</CardTitle>
                <CardDescription>Important details about your exam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Testing Hours</h4>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 8AM-8PM
                      <br />
                      Saturday: 9AM-5PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
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
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-sm text-gray-600">(555) 123-EXAM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Valid government-issued photo ID</li>
                  <li>• Confirmation number (sent after booking)</li>
                  <li>• Arrive 30 minutes early</li>
                  <li>• No personal items allowed in testing room</li>
                  <li>• Lockers provided for belongings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about scheduling or exam requirements? Our team is here to help.
                </p>
                <div className="space-y-2">
                  <a href="tel:5551234exam" className="block text-sm text-yellow-600 hover:underline">
                    Call: (555) 123-EXAM
                  </a>
                  <a href="mailto:info@theprospercenter.com" className="block text-sm text-yellow-600 hover:underline">
                    Email: info@theprospercenter.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
