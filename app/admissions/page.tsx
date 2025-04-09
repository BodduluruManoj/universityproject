import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { universityInfo } from "@/data/university-info"
import { CheckCircle } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take the first step towards your future. Learn about our admission process and requirements.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Admission Process</h2>
            <p className="mt-4 text-lg text-gray-600">Follow these steps to apply to {universityInfo.name}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Admission process"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <ol className="space-y-6">
                {universityInfo.admissionProcess.map((step, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900">{step}</p>
                      <p className="text-gray-600">
                        {index === 0 && "Complete the online application form with your personal and academic details."}
                        {index === 1 && "Upload all required documents as specified for your program."}
                        {index === 2 && "Pay the application fee through our secure payment gateway."}
                        {index === 3 && "Prepare for and take the entrance examination if required for your program."}
                        {index === 4 && "If shortlisted, attend the interview process either in-person or online."}
                        {index === 5 &&
                          "Receive your admission decision via email and follow instructions to confirm your place."}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Required Documents</h2>
            <p className="mt-4 text-lg text-gray-600">Prepare these documents for your application</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityInfo.requiredDocuments.map((document, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{document}</h3>
                      <p className="text-gray-600 mt-1">
                        {index === 0 && "Ensure all fields are filled accurately."}
                        {index === 1 && "Include all academic records from previous institutions."}
                        {index === 2 && "Government-issued photo ID or passport."}
                        {index === 3 && "Recent photographs meeting our specifications."}
                        {index === 4 && "A well-crafted statement explaining your goals and aspirations."}
                        {index === 5 && "Letters from academic or professional references."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Application Deadlines</h2>
            <p className="mt-4 text-lg text-gray-600">
              Mark these important dates on your calendar to ensure timely submission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Undergraduate Programs</h3>
                <p className="text-gray-600">{universityInfo.applicationDeadlines.undergraduate}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Fall Semester</h4>
                  <p className="text-gray-600">Application Opens: January 15</p>
                  <p className="text-gray-600">Application Closes: May 31</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Spring Semester</h4>
                  <p className="text-gray-600">Application Opens: August 15</p>
                  <p className="text-gray-600">Application Closes: November 30</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Postgraduate Programs</h3>
                <p className="text-gray-600">{universityInfo.applicationDeadlines.postgraduate}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Fall Semester</h4>
                  <p className="text-gray-600">Application Opens: January 1</p>
                  <p className="text-gray-600">Application Closes: April 30</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Spring Semester</h4>
                  <p className="text-gray-600">Application Opens: July 1</p>
                  <p className="text-gray-600">Application Closes: October 31</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">International Students</h3>
                <p className="text-gray-600">{universityInfo.applicationDeadlines.international}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Fall Semester</h4>
                  <p className="text-gray-600">Application Opens: December 1</p>
                  <p className="text-gray-600">Application Closes: February 28</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Spring Semester</h4>
                  <p className="text-gray-600">Application Opens: May 1</p>
                  <p className="text-gray-600">Application Closes: July 31</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our admission process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What are the minimum eligibility requirements?</h3>
                <p className="text-gray-600">
                  Eligibility requirements vary by program. Generally, undergraduate programs require 10+2 completion,
                  postgraduate programs require a relevant bachelor's degree, and diplomas require 10+2 or equivalent.
                  Check specific program details for more information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is there an entrance examination?</h3>
                <p className="text-gray-600">
                  Some programs require entrance examinations to assess your aptitude and knowledge in relevant
                  subjects. Details about the examination, including syllabus and format, will be provided after your
                  application is received.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Are scholarships available?</h3>
                <p className="text-gray-600">
                  Yes, we offer various merit-based and need-based scholarships. Scholarship applications are typically
                  considered alongside your admission application. Additional documentation may be required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I apply for multiple programs?</h3>
                <p className="text-gray-600">
                  Yes, you can apply for up to three programs in a single application cycle. You will need to indicate
                  your preferences in order of priority on your application form.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What is the application fee?</h3>
                <p className="text-gray-600">
                  The application fee is $50 for domestic students and $100 for international students. This fee is
                  non-refundable and must be paid at the time of application submission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How can I check my application status?</h3>
                <p className="text-gray-600">
                  After submitting your application, you will receive a confirmation email with login credentials for
                  our applicant portal. You can check your application status, upload additional documents, and receive
                  updates through this portal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step towards a bright future at {universityInfo.name}.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Admissions Office</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

