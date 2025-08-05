import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Award } from "lucide-react"

const examCategories = [
  {
    id: "finra",
    title: "FINRA Series Exams",
    description: "Securities industry professional examinations",
    icon: "📈",
    exams: [
      {
        name: "Series 7",
        fullName: "General Securities Representative Examination",
        duration: "225 minutes",
        questions: "125 questions",
        passingScore: "72%",
        fee: "$300",
        description: "Qualifies individuals to sell a broad range of securities products.",
      },
      {
        name: "Series 63",
        fullName: "Uniform Securities Agent State Law Examination",
        duration: "75 minutes",
        questions: "60 questions",
        passingScore: "72%",
        fee: "$147",
        description: "Tests knowledge of state securities regulations.",
      },
      {
        name: "Series 65",
        fullName: "Investment Adviser Law Examination",
        duration: "180 minutes",
        questions: "130 questions",
        passingScore: "72%",
        fee: "$175",
        description: "For investment adviser representatives.",
      },
      {
        name: "Series 66",
        fullName: "Uniform Combined State Law Examination",
        duration: "150 minutes",
        questions: "100 questions",
        passingScore: "73%",
        fee: "$165",
        description: "Combined Series 63 and Series 65 content.",
      },
    ],
  },
  {
    id: "medical",
    title: "Medical Examinations",
    description: "Medical school and healthcare professional exams",
    icon: "🏥",
    exams: [
      {
        name: "MCAT",
        fullName: "Medical College Admission Test",
        duration: "7 hours 30 minutes",
        questions: "230 questions",
        passingScore: "Scaled scoring",
        fee: "$320",
        description: "Standardized test for medical school admission.",
      },
      {
        name: "USMLE Step 1",
        fullName: "United States Medical Licensing Examination Step 1",
        duration: "8 hours",
        questions: "280 questions",
        passingScore: "Pass/Fail",
        fee: "$965",
        description: "Tests basic science knowledge for medical licensing.",
      },
      {
        name: "USMLE Step 2 CK",
        fullName: "USMLE Step 2 Clinical Knowledge",
        duration: "9 hours",
        questions: "318 questions",
        passingScore: "209",
        fee: "$965",
        description: "Tests clinical knowledge and skills.",
      },
    ],
  },
  {
    id: "accounting",
    title: "CPA Examinations",
    description: "Certified Public Accountant licensing exams",
    icon: "📊",
    exams: [
      {
        name: "AUD",
        fullName: "Auditing and Attestation",
        duration: "4 hours",
        questions: "72 MCQ + 8 TBS",
        passingScore: "75",
        fee: "$208.40",
        description: "Tests auditing procedures and standards.",
      },
      {
        name: "BEC",
        fullName: "Business Environment and Concepts",
        duration: "4 hours",
        questions: "62 MCQ + 4 TBS + 3 WC",
        passingScore: "75",
        fee: "$208.40",
        description: "Covers business concepts and financial management.",
      },
      {
        name: "FAR",
        fullName: "Financial Accounting and Reporting",
        duration: "4 hours",
        questions: "66 MCQ + 8 TBS",
        passingScore: "75",
        fee: "$208.40",
        description: "Tests financial accounting and reporting standards.",
      },
      {
        name: "REG",
        fullName: "Regulation",
        duration: "4 hours",
        questions: "76 MCQ + 8 TBS",
        passingScore: "75",
        fee: "$208.40",
        description: "Covers federal taxation and business law.",
      },
    ],
  },
  {
    id: "it",
    title: "IT Certifications",
    description: "Information Technology professional certifications",
    icon: "💻",
    exams: [
      {
        name: "CompTIA A+",
        fullName: "CompTIA A+ Certification",
        duration: "90 minutes each (2 exams)",
        questions: "90 questions each",
        passingScore: "675/900",
        fee: "$370 each",
        description: "Entry-level IT certification covering hardware and software.",
      },
      {
        name: "CompTIA Security+",
        fullName: "CompTIA Security+ Certification",
        duration: "90 minutes",
        questions: "90 questions",
        passingScore: "750/900",
        fee: "$370",
        description: "Cybersecurity fundamentals certification.",
      },
      {
        name: "CISSP",
        fullName: "Certified Information Systems Security Professional",
        duration: "6 hours",
        questions: "100-150 questions",
        passingScore: "700/1000",
        fee: "$749",
        description: "Advanced cybersecurity professional certification.",
      },
      {
        name: "AWS Solutions Architect",
        fullName: "AWS Certified Solutions Architect - Associate",
        duration: "130 minutes",
        questions: "65 questions",
        passingScore: "720/1000",
        fee: "$150",
        description: "Cloud architecture certification for AWS.",
      },
    ],
  },
]

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Examinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional certification exams in a secure, comfortable testing
            environment.
          </p>
        </div>

        <div className="grid gap-12">
          {examCategories.map((category) => (
            <section key={category.id} id={category.id}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.exams.map((exam) => (
                  <Card key={exam.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-yellow-100 text-yellow-800">{exam.name}</Badge>
                        <span className="text-lg font-bold text-green-600">{exam.fee}</span>
                      </div>
                      <CardTitle className="text-lg">{exam.fullName}</CardTitle>
                      <CardDescription>{exam.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {exam.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {exam.questions}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="h-4 w-4 mr-2" />
                          Passing Score: {exam.passingScore}
                        </div>
                      </div>
                      <Link href="/schedule">
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                          Schedule This Exam
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Don't See Your Exam?</CardTitle>
              <CardDescription>
                We offer many additional professional certification exams. Contact us to inquire about specific exams or
                special arrangements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
                <Link href="/schedule">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Schedule Consultation</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
