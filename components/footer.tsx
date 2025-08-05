import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 text-black font-bold text-sm">P</div>
              </div>
              <div>
                <h3 className="font-bold">The Prosper Foundation</h3>
                <p className="text-sm text-gray-400">For Professional Development</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering professionals through comprehensive testing and learning solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/exams" className="hover:text-yellow-400">
                  Professional Testing
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-yellow-400">
                  Learning Programs
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-yellow-400">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-yellow-400">
                  Continuing Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Exams</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/exams#finra" className="hover:text-yellow-400">
                  FINRA Series
                </Link>
              </li>
              <li>
                <Link href="/exams#mcat" className="hover:text-yellow-400">
                  MCAT
                </Link>
              </li>
              <li>
                <Link href="/exams#cpa" className="hover:text-yellow-400">
                  CPA
                </Link>
              </li>
              <li>
                <Link href="/exams#it" className="hover:text-yellow-400">
                  IT Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>www.theprospercenter.com</li>
              <li>
                <a href="tel:5551234exam" className="hover:text-yellow-400">
                  (555) 123-EXAM
                </a>
              </li>
              <li>
                <a href="mailto:info@theprospercenter.com" className="hover:text-yellow-400">
                  info@theprospercenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 The Prosper Foundation. All rights reserved. | Non-Profit Organization</p>
        </div>
      </div>
    </footer>
  )
}
