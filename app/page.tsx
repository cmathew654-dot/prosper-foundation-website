"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, Users, Award, MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "./contact/contact-form"
import { FloatingParticles } from "@/components/floating-particles"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import { GlassCard } from "@/components/glass-card"
import { InteractiveButton } from "@/components/interactive-button"
import { ExamFinder } from "@/components/exam-finder"
import { PricingCalculator } from "@/components/pricing-calculator"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 animate-pulse">
                  Professional Testing & Learning Center
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Advance Your Career at{" "}
                <span className="text-yellow-600 animate-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  <TypingAnimation text="The Prosper Center" speed={100} />
                </span>
              </motion.h1>

              <motion.p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" variants={fadeInUp}>
                Your premier destination for professional certification testing and expert-led learning programs. From
                FINRA and MCAT to specialized industry certifications, we provide the environment and support you need
                to succeed.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <Link href="/schedule">
                  <InteractiveButton size="lg" className="group">
                    <GraduationCap className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Schedule Your Exam
                  </InteractiveButton>
                </Link>
                <Link href="/classes">
                  <InteractiveButton variant="outline" size="lg" className="group">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Explore Classes
                  </InteractiveButton>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div className="animate-float" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/foundation-branding.jpg"
                  alt="The Prosper Foundation - Professional Development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: 10000, suffix: "+", label: "Exams Administered" },
              { number: 2500, suffix: "+", label: "Students Trained" },
              { number: 95, suffix: "%", label: "Pass Rate" },
              { number: 50, suffix: "+", label: "Certification Types" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About The Prosper Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A non-profit organization dedicated to advancing professional development through comprehensive testing
              services and expert-led educational programs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Award,
                title: "Professional Testing",
                description:
                  "Authorized testing center for major professional certifications including FINRA, MCAT, CPA, and many industry-specific exams.",
                link: "/exams",
              },
              {
                icon: Users,
                title: "Expert Instruction",
                description:
                  "Learn from industry professionals and subject matter experts in our state-of-the-art classrooms and learning environments.",
                link: "/classes",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Programs",
                description:
                  "From test preparation to continuing education, we offer programs designed to advance your career and professional development.",
                link: "/about",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="text-center p-6 h-full group">
                  <CardHeader>
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                      <item.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    </motion.div>
                    <CardTitle className="group-hover:text-yellow-600 transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <Link href={item.link}>
                      <InteractiveButton variant="outline" size="sm">
                        Learn More
                      </InteractiveButton>
                    </Link>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Exam Finder */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Your Perfect Exam 🎯
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Not sure which exam is right for you? Take our interactive quiz or browse our comprehensive catalog.
            </p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <GlassCard className="max-w-4xl mx-auto p-8">
              <ExamFinder />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive testing and learning solutions for your professional development
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testing Center */}
            <motion.div variants={fadeInLeft}>
              <GlassCard className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <Image
                      src="/images/reception-area.jpg"
                      alt="Professional Testing Center Reception"
                      fill
                      className="object-cover group-hover:brightness-110 transition-all duration-500"
                    />
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-yellow-600 transition-colors">
                    Professional Testing Center
                  </CardTitle>
                  <CardDescription>
                    Secure, comfortable testing environment for professional certifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    <li>• FINRA Series Exams (7, 63, 65, 66, etc.)</li>
                    <li>• MCAT and Medical Certification Exams</li>
                    <li>• CPA and Accounting Certifications</li>
                    <li>• IT and Technology Certifications</li>
                    <li>• Professional Licensing Exams</li>
                    <li>• Secure testing environment with proctoring</li>
                  </ul>
                  <div className="flex gap-2">
                    <Link href="/schedule" className="flex-1">
                      <InteractiveButton className="w-full">Schedule Exam</InteractiveButton>
                    </Link>
                    <Link href="/exams">
                      <InteractiveButton variant="outline">View All Exams</InteractiveButton>
                    </Link>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>

            {/* Learning Center */}
            <motion.div variants={fadeInRight}>
              <GlassCard className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                    <Image
                      src="/images/classroom-1.jpg"
                      alt="Learning Center Classroom"
                      fill
                      className="object-cover group-hover:brightness-110 transition-all duration-500"
                    />
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-yellow-600 transition-colors">
                    Learning Center
                  </CardTitle>
                  <CardDescription>Expert-led classes and educational programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    <li>• Test Preparation Courses</li>
                    <li>• Continuing Education Programs</li>
                    <li>• Professional Development Workshops</li>
                    <li>• Industry-Specific Training</li>
                    <li>• Small Group and Individual Tutoring</li>
                    <li>• Flexible Scheduling Options</li>
                  </ul>
                  <div className="flex gap-2">
                    <Link href="/classes" className="flex-1">
                      <InteractiveButton variant="outline" className="w-full">
                        View Classes
                      </InteractiveButton>
                    </Link>
                    <Link href="/contact">
                      <InteractiveButton variant="outline">Request Info</InteractiveButton>
                    </Link>
                  </div>
                </CardContent>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <PricingCalculator />
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to advance your career? Contact us or schedule your exam.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: MapPin, text: "123 Professional Drive, Education City, EC 12345" },
                    { icon: Phone, text: "(555) 123-EXAM", href: "tel:5551234exam" },
                    { icon: Mail, text: "info@theprospercenter.com", href: "mailto:info@theprospercenter.com" },
                    { icon: Clock, text: "Mon-Fri: 8AM-8PM, Sat: 9AM-5PM" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-5 w-5 text-yellow-600 group-hover:scale-110 transition-transform" />
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    { href: "/schedule", text: "Schedule an Exam", primary: true },
                    { href: "/contact", text: "Request Information" },
                    { href: "/facilities", text: "Tour Our Facilities" },
                  ].map((button, index) => (
                    <Link key={index} href={button.href} className="block">
                      <InteractiveButton variant={button.primary ? "primary" : "outline"} className="w-full">
                        {button.text}
                      </InteractiveButton>
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
