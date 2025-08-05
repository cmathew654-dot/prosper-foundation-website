"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Search, Star } from "lucide-react"
import Link from "next/link"

const examData = [
  {
    id: "series-7",
    name: "Series 7",
    fullName: "General Securities Representative",
    category: "Finance",
    difficulty: "Advanced",
    duration: "225 minutes",
    fee: "$300",
    description: "Qualifies individuals to sell a broad range of securities products.",
    tags: ["Securities", "Investment", "Sales"],
    rating: 4.8,
    popularity: 95,
  },
  {
    id: "mcat",
    name: "MCAT",
    fullName: "Medical College Admission Test",
    category: "Medical",
    difficulty: "Expert",
    duration: "7.5 hours",
    fee: "$320",
    description: "Standardized test for medical school admission.",
    tags: ["Medical", "Graduate School", "Healthcare"],
    rating: 4.7,
    popularity: 88,
  },
  {
    id: "cpa-far",
    name: "CPA FAR",
    fullName: "Financial Accounting and Reporting",
    category: "Accounting",
    difficulty: "Advanced",
    duration: "4 hours",
    fee: "$208",
    description: "Tests financial accounting and reporting standards.",
    tags: ["Accounting", "Finance", "CPA"],
    rating: 4.6,
    popularity: 82,
  },
  {
    id: "comptia-security",
    name: "Security+",
    fullName: "CompTIA Security+ Certification",
    category: "IT",
    difficulty: "Intermediate",
    duration: "90 minutes",
    fee: "$370",
    description: "Cybersecurity fundamentals certification.",
    tags: ["Cybersecurity", "IT", "Technology"],
    rating: 4.9,
    popularity: 91,
  },
]

const quizQuestions = [
  {
    id: 1,
    question: "What's your primary career goal?",
    options: [
      { value: "finance", label: "Financial Services", icon: "💰" },
      { value: "medical", label: "Healthcare/Medical", icon: "🏥" },
      { value: "accounting", label: "Accounting/CPA", icon: "📊" },
      { value: "technology", label: "IT/Technology", icon: "💻" },
    ],
  },
  {
    id: 2,
    question: "What's your experience level?",
    options: [
      { value: "beginner", label: "Just Starting Out", icon: "🌱" },
      { value: "intermediate", label: "Some Experience", icon: "📈" },
      { value: "advanced", label: "Experienced Professional", icon: "🎯" },
      { value: "expert", label: "Industry Expert", icon: "👑" },
    ],
  },
  {
    id: 3,
    question: "How much time can you dedicate to studying?",
    options: [
      { value: "minimal", label: "1-2 hours/week", icon: "⏰" },
      { value: "moderate", label: "5-10 hours/week", icon: "📚" },
      { value: "intensive", label: "15+ hours/week", icon: "🔥" },
      { value: "fulltime", label: "Full-time study", icon: "🎓" },
    ],
  },
]

export function ExamFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const getRecommendedExams = () => {
    const careerGoal = answers[1]
    const experience = answers[2]

    return examData
      .filter((exam) => {
        if (careerGoal === "finance" && exam.category === "Finance") return true
        if (careerGoal === "medical" && exam.category === "Medical") return true
        if (careerGoal === "accounting" && exam.category === "Accounting") return true
        if (careerGoal === "technology" && exam.category === "IT") return true
        return false
      })
      .sort((a, b) => b.popularity - a.popularity)
  }

  const filteredExams = examData.filter((exam) => {
    const matchesSearch =
      exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || exam.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const recommendedExams = getRecommendedExams()

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Perfect Matches Found! 🎯</h3>
          <p className="text-gray-600 dark:text-gray-300">Based on your answers, here are the best exams for you:</p>
        </div>

        <div className="grid gap-4">
          {recommendedExams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-400">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {exam.name}
                        <Badge variant="outline">{exam.difficulty}</Badge>
                      </CardTitle>
                      <CardDescription>{exam.fullName}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{exam.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{exam.fee}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exam.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exam.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href="/schedule" className="flex-1">
                      <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                        Schedule This Exam
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={resetQuiz} variant="outline">
            Take Quiz Again
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Quiz Mode */}
      {currentStep < quizQuestions.length && (
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index <= currentStep ? "bg-yellow-400" : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {quizQuestions[currentStep].question}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Step {currentStep + 1} of {quizQuestions.length}
            </p>
          </div>

          <div className="grid gap-3">
            {quizQuestions[currentStep].options.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => handleAnswer(quizQuestions[currentStep].id, option.value)}
                className="p-4 text-left border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{option.label}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Browse Mode */}
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">Or browse all available exams:</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-800"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-800"
          >
            <option value="all">All Categories</option>
            <option value="finance">Finance</option>
            <option value="medical">Medical</option>
            <option value="accounting">Accounting</option>
            <option value="it">IT</option>
          </select>
        </div>

        {/* Exam Results */}
        <div className="grid gap-4">
          <AnimatePresence>
            {filteredExams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {exam.name}
                          <Badge variant="outline">{exam.category}</Badge>
                        </CardTitle>
                        <CardDescription>{exam.fullName}</CardDescription>
                      </div>
                      <span className="text-lg font-bold text-green-600">{exam.fee}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exam.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{exam.duration}</span>
                        <span>•</span>
                        <span>{exam.difficulty}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{exam.rating}</span>
                        </div>
                      </div>
                      <Link href="/schedule">
                        <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                          Schedule
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
