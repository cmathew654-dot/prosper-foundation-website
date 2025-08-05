import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, BookOpen, Target, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We maintain the highest standards in testing security, educational quality, and professional service.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Accessibility",
    description:
      "Professional development opportunities should be available to everyone, regardless of background or circumstances.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Integrity",
    description: "We operate with complete transparency, fairness, and ethical standards in all our interactions.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "We continuously improve our methods and embrace new technologies to enhance the learning experience.",
  },
]

const stats = [
  { number: "10,000+", label: "Exams Administered" },
  { number: "2,500+", label: "Students Trained" },
  { number: "95%", label: "Pass Rate" },
  { number: "50+", label: "Certification Types" },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Executive Director",
    credentials: "PhD Education, MBA",
    bio: "15+ years in professional education and testing administration.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "Testing Center Director",
    credentials: "MS Information Systems, CISSP",
    bio: "Expert in secure testing protocols and technology systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jennifer Chen",
    role: "Learning Programs Director",
    credentials: "MEd, CPA, CFA",
    bio: "Curriculum development specialist with industry expertise.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800">Non-Profit Foundation</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering Professional <span className="text-yellow-600">Success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The Prosper Foundation is a non-profit organization dedicated to advancing professional development
                through comprehensive testing services and expert-led educational programs. We believe that everyone
                deserves access to quality professional development opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    Learn More About Us
                  </Button>
                </Link>
                <Link href="/facilities">
                  <Button size="lg" variant="outline">
                    Tour Our Facilities
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/foundation-branding.jpg"
                alt="The Prosper Foundation Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-yellow-400">
              <CardHeader>
                <Target className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide accessible, high-quality professional testing and educational services that empower
                  individuals to achieve their career goals and advance in their chosen fields. We are committed to
                  maintaining the highest standards of integrity, security, and educational excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-400">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the premier destination for professional development, recognized for our innovative approach to
                  education, commitment to accessibility, and the success of our students and exam candidates. We
                  envision a future where professional growth is within reach for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at The Prosper Foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-yellow-600 mb-4 flex justify-center">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Measuring our success through the achievements of our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-yellow-600 font-medium">{member.role}</CardDescription>
                  <Badge variant="outline" className="mt-2">
                    {member.credentials}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History & Accreditation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, The Prosper Foundation emerged from a simple belief: that professional development
                  should be accessible to everyone, regardless of their background or circumstances.
                </p>
                <p>
                  What started as a small testing center has grown into a comprehensive professional development hub,
                  serving thousands of individuals each year. Our commitment to excellence and accessibility has made us
                  a trusted partner for professionals across various industries.
                </p>
                <p>
                  Today, we continue to expand our services while maintaining our core mission of empowering
                  professional success through quality education and testing services.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Accreditations & Partnerships</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold">FINRA Authorized Testing Center</h4>
                        <p className="text-sm text-gray-600">Official testing location for all FINRA examinations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold">Prometric Testing Partner</h4>
                        <p className="text-sm text-gray-600">Certified location for professional certification exams</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold">NASBA Approved</h4>
                        <p className="text-sm text-gray-600">Continuing Professional Education provider</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have achieved their goals with The Prosper Foundation. Let us help you
            take the next step in your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Schedule Your Exam
              </Button>
            </Link>
            <Link href="/classes">
              <Button size="lg" variant="outline">
                Explore Our Classes
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
