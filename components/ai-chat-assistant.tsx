"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm here to help you with exam scheduling and questions about The Prosper Center. How can I assist you today?",
    "Hi there! Welcome to The Prosper Center. I can help you schedule exams, learn about our classes, or answer any questions you have.",
    "Greetings! I'm your virtual assistant. I'm here to help with exam bookings, class information, and general inquiries.",
  ],
  exams: [
    "We offer a wide range of professional certification exams including FINRA Series, MCAT, CPA, and IT certifications. Which exam are you interested in?",
    "Our testing center is authorized for major professional exams. Popular choices include Series 7, MCAT, CPA sections, and CompTIA certifications. What field are you looking to get certified in?",
  ],
  schedule: [
    "I'd be happy to help you schedule an exam! We're open Monday-Friday 8AM-8PM and Saturday 9AM-5PM. What exam would you like to schedule?",
    "To schedule your exam, I'll need to know which certification you're taking and your preferred date/time. Our calendar is quite flexible!",
  ],
  classes: [
    "We offer expert-led preparation courses for most of our exams. Our classes have small sizes and high success rates. Which exam are you preparing for?",
    "Our learning programs include test prep courses, continuing education, and professional development workshops. What type of training interests you?",
  ],
  pricing: [
    "Exam fees vary by certification type. For example, Series 7 is $300, MCAT is $320, and CPA sections are $208 each. Would you like specific pricing for any exam?",
    "Our pricing is competitive and transparent. We also offer package deals that include prep courses. What exams are you considering?",
  ],
  location: [
    "We're located at 123 Professional Drive, Education City, EC 12345. We have free parking and are fully accessible. Need directions?",
    "Our facility is conveniently located with easy access and ample parking. We're also accessible by public transportation with bus routes 15, 22, and 45.",
  ],
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat opens
      setTimeout(() => {
        addBotMessage(predefinedResponses.greeting[0])
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "bot",
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }

    if (message.includes("exam") || message.includes("test") || message.includes("certification")) {
      return predefinedResponses.exams[Math.floor(Math.random() * predefinedResponses.exams.length)]
    }

    if (message.includes("schedule") || message.includes("book") || message.includes("appointment")) {
      return predefinedResponses.schedule[Math.floor(Math.random() * predefinedResponses.schedule.length)]
    }

    if (message.includes("class") || message.includes("course") || message.includes("training")) {
      return predefinedResponses.classes[Math.floor(Math.random() * predefinedResponses.classes.length)]
    }

    if (message.includes("price") || message.includes("cost") || message.includes("fee")) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
    }

    if (message.includes("location") || message.includes("address") || message.includes("where")) {
      return predefinedResponses.location[Math.floor(Math.random() * predefinedResponses.location.length)]
    }

    if (message.includes("hours") || message.includes("open") || message.includes("time")) {
      return "We're open Monday-Friday 8AM-8PM and Saturday 9AM-5PM. Sunday we're closed. You can schedule exams during any of these hours!"
    }

    if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return "You can reach us at (555) 123-EXAM or email info@theprospercenter.com. We typically respond within a few hours during business hours."
    }

    // Default responses
    const defaultResponses = [
      "I'd be happy to help! Could you tell me more about what you're looking for? I can assist with exam scheduling, class information, pricing, or general questions.",
      "That's a great question! For detailed information, I recommend contacting our team at (555) 123-EXAM or visiting our contact page. Is there anything specific I can help you with right now?",
      "I want to make sure I give you the most accurate information. Could you clarify what you're looking for? I'm here to help with exams, classes, scheduling, and more!",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")
    addUserMessage(userMessage)
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const response = getBotResponse(userMessage)
        setIsTyping(false)
        addBotMessage(response)
      },
      1000 + Math.random() * 1000,
    ) // 1-2 seconds delay
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Prosper Assistant</h3>
                  <p className="text-xs opacity-80">Here to help with your questions</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${message.type === "user" ? "bg-yellow-400" : "bg-gray-200 dark:bg-gray-600"}`}
                    >
                      {message.type === "user" ? (
                        <User className="h-3 w-3 text-black" />
                      ) : (
                        <Bot className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${message.type === "user" ? "bg-yellow-400 text-black" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
