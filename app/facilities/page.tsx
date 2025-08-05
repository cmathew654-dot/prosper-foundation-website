import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Wifi, Car, Coffee, Shield, Users, Monitor } from "lucide-react"

const facilities = [
  {
    name: "Reception & Waiting Area",
    image: "/images/reception-area.jpg",
    description:
      "Professional reception area with comfortable seating, secure lockers, and a welcoming atmosphere for exam candidates.",
    features: [
      "Comfortable seating",
      "Secure lockers",
      "Reception desk",
      "Climate controlled",
      "Professional atmosphere",
    ],
  },
  {
    name: "Modern Classrooms",
    image: "/images/classroom-1.jpg",
    description:
      "State-of-the-art classrooms equipped with modern technology and flexible seating arrangements for optimal learning.",
    features: [
      "Interactive whiteboards",
      "Flexible seating",
      "Audio/visual equipment",
      "Natural lighting",
      "Small class sizes",
    ],
  },
  {
    name: "Advanced Learning Spaces",
    image: "/images/classroom-2.jpg",
    description:
      "Specialized learning environments with mathematical tools and resources for technical and analytical subjects.",
    features: [
      "Mathematical tools",
      "Reference materials",
      "Collaborative spaces",
      "Technical resources",
      "Study areas",
    ],
  },
  {
    name: "Building Exterior",
    image: "/images/building-exterior.jpg",
    description: "Accessible, professional building with convenient parking and clear signage for easy navigation.",
    features: ["ADA compliant", "Professional signage", "Landscaped entrance", "Convenient location", "Easy access"],
  },
]

const amenities = [
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the facility",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Free Parking",
    description: "Ample free parking spaces for all visitors and students",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Refreshment Area",
    description: "Coffee, water, and light refreshments available",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Environment",
    description: "Monitored facility with secure testing protocols",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Accessibility",
    description: "Fully ADA compliant with accommodations available",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Modern Technology",
    description: "Latest testing equipment and learning technology",
  },
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, professional spaces designed for learning and testing success. Our facilities provide a comfortable,
            secure environment that supports your professional development goals.
          </p>
        </div>

        {/* Facility Showcase */}
        <div className="grid gap-12 mb-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800">{facility.name}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facility Amenities</h2>
            <p className="text-lg text-gray-600">
              Everything you need for a successful testing and learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-yellow-600 mb-2 flex justify-center">{amenity.icon}</div>
                  <CardTitle className="text-lg">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Location & Access */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location & Access</h2>
            <p className="text-lg text-gray-600">Conveniently located with easy access and ample parking</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-600" />
                  Address & Directions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">The Prosper Foundation</h4>
                    <p className="text-gray-600">
                      123 Professional Drive
                      <br />
                      Education City, EC 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Public Transportation</h4>
                    <p className="text-gray-600">Bus routes 15, 22, and 45 stop within 2 blocks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-gray-600">Free parking available in our dedicated lot</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    ADA compliant entrances and facilities
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Elevator access to all floors
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Accessible restrooms and water fountains
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Reserved parking spaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Testing accommodations available
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Assistive technology support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tour CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule a Facility Tour</CardTitle>
              <CardDescription className="text-lg">
                See our facilities in person and learn more about our programs and services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Schedule Tour</Button>
                </Link>
                <Link href="/schedule">
                  <Button variant="outline">Schedule Exam</Button>
                </Link>
                <Link href="/classes">
                  <Button variant="outline">View Classes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
