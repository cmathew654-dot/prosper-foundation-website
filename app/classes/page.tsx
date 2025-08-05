import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, Users, Calendar, Star } from "lucide-react"

const classCategories = [
  {
    title: "Test Preparation Courses",
    description: "Comprehensive preparation for professional certification exams",
    classes: [
      {
        name: "FINRA Series 7 Prep",
        instructor: "Sarah Johnson, CFA",
        duration: "6 weeks",
        schedule: "Tuesdays & Thursdays, 6:00-8:00 PM",
        price: "$899",
        capacity: "15 students",
        rating: 4.9,
        description: "Intensive preparation for the Series 7 exam with practice tests and expert guidance.",
        nextStart: "2024-02-15",
      },
      {
        name: "MCAT Preparation",
        instructor: "Dr. Michael Chen, MD",
        duration: "12 weeks",
        schedule: "Saturdays, 9:00 AM-1:00 PM",
        price: "$1,299",
        capacity: "20 students",
        rating: 4.8,
        description: "Complete MCAT preparation covering all sections with diagnostic tests.",
        nextStart: "2024-02-10",
      },
      {
        name: "CPA Exam Review",
        instructor: "Jennifer Martinez, CPA",
        duration: "8 weeks",
        schedule: "Mondays & Wednesdays, 7:00-9:00 PM",
        price: "$1,099",
        capacity: "12 students",
        rating: 4.7,
        description: "Comprehensive review for all four CPA exam sections.",
        nextStart: "2024-02-20",
      },
    ],
  },
  {
    title: "Professional Development",
    description: "Continuing education and skill enhancement programs",
    classes: [
      {
        name: "Financial Planning Fundamentals",
        instructor: "Robert Kim, CFP",
        duration: "4 weeks",
        schedule: "Wednesdays, 6:30-8:30 PM",
        price: "$599",
        capacity: "18 students",
        rating: 4.6,
        description: "Learn the basics of financial planning and wealth management.",
        nextStart: "2024-02-12",
      },
      {
        name: "Cybersecurity Essentials",
        instructor: "Lisa Thompson, CISSP",
        duration: "6 weeks",
        schedule: "Thursdays, 6:00-8:00 PM",
        price: "$799",
        capacity: "16 students",
        rating: 4.8,
        description: "Essential cybersecurity concepts for IT professionals.",
        nextStart: "2024-02-08",
      },
      {
        name: "Healthcare Administration",
        instructor: "Dr. Amanda Rodriguez, MHA",
        duration: "8 weeks",
        schedule: "Tuesdays, 7:00-9:00 PM",
        price: "$949",
        capacity: "14 students",
        rating: 4.5,
        description: "Healthcare management principles and best practices.",
        nextStart: "2024-02-13",
      },
    ],
  },
  {
    title: "Continuing Education",
    description: "Maintain your professional certifications with our CE programs",
    classes: [
      {
        name: "Ethics in Finance",
        instructor: "David Park, JD, CFA",
        duration: "1 day",
        schedule: "Saturday, 9:00 AM-5:00 PM",
        price: "$299",
        capacity: "25 students",
        rating: 4.7,
        description: "8 CE credits covering ethical standards in financial services.",
        nextStart: "2024-02-17",
      },
      {
        name: "Tax Law Updates",
        instructor: "Maria Gonzalez, CPA, JD",
        duration: "2 days",
        schedule: "Weekend intensive",
        price: "$449",
        capacity: "20 students",
        rating: 4.6,
        description: "16 CE credits on current tax law changes and implications.",
        nextStart: "2024-02-24",
      },
      {
        name: "Medical Ethics Seminar",
        instructor: "Dr. James Wilson, MD, PhD",
        duration: "1 day",
        schedule: "Sunday, 9:00 AM-5:00 PM",
        price: "$349",
        capacity: "30 students",
        rating: 4.8,
        description: "8 CE credits for healthcare professionals on medical ethics.",
        nextStart: "2024-02-18",
      },
    ],
  },
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Programs & Classes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-led classes and professional development programs designed to advance your career and maintain your
            certifications.
          </p>
        </div>

        {/* Featured Classroom Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <Image
              src="/images/classroom-1.jpg"
              alt="Modern Classroom Environment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Learning Environment</h3>
                <p className="text-lg">State-of-the-art classrooms with the latest technology</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/classroom-2.jpg"
              alt="Interactive Learning Space"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Interactive Learning</h3>
                <p className="text-lg">Small class sizes for personalized attention</p>
              </div>
            </div>
          </div>
        </div>

        {classCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {category.classes.map((classItem, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {new Date(classItem.nextStart).toLocaleDateString()}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{classItem.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{classItem.name}</CardTitle>
                    <CardDescription>Instructor: {classItem.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{classItem.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {classItem.duration} • {classItem.schedule}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        Max {classItem.capacity}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Next start: {new Date(classItem.nextStart).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-green-600">{classItem.price}</span>
                      <Badge variant="outline">Available</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Link href="/contact" className="flex-1">
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Enroll Now</Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" size="sm">
                          Info
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Custom Training Programs</CardTitle>
              <CardDescription className="text-lg">
                Need specialized training for your organization? We offer custom programs tailored to your specific
                needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Corporate Training</h4>
                  <p className="text-sm text-gray-600">On-site or virtual training for your team</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-600">Programs that fit your schedule</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Expert Instructors</h4>
                  <p className="text-sm text-gray-600">Industry professionals and subject matter experts</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Request Custom Training</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Schedule Consultation</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
