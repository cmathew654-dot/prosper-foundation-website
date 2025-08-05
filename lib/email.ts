"use server"

export async function sendEmail(formData: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  // Simulate email sending - in production, you'd use a service like Resend, SendGrid, etc.
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Email sent:", {
    to: "info@theprospercenter.com",
    from: formData.email,
    subject: `Contact Form: ${formData.subject}`,
    body: `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `,
  })

  return { success: true, message: "Your message has been sent successfully!" }
}

export async function scheduleExam(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  examType: string
  preferredDate: string
  preferredTime: string
  specialRequirements: string
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Exam scheduled:", formData)

  return {
    success: true,
    message: "Your exam has been scheduled! We will contact you within 24 hours to confirm your appointment.",
    confirmationNumber: `EXAM-${Date.now()}`,
  }
}

export async function requestInfo(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  interest: string
  message: string
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Information request:", formData)

  return {
    success: true,
    message: "Thank you for your interest! We will send you detailed information within 24 hours.",
  }
}
