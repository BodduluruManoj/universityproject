import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { courses } from "@/data/courses"
import { Clock, GraduationCap, DollarSign, BookOpen } from "lucide-react"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    notFound()
  }

  // Get related courses (same program type, excluding current course)
  const relatedCourses = courses.filter((c) => c.programType === course.programType && c.id !== course.id).slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {course.programType}
              </span>
              <h1 className="text-4xl font-bold mb-4">{course.courseName}</h1>
              <p className="text-xl mb-6">{course.description}</p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image src={course.image || "/placeholder.svg"} alt={course.courseName} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Course Overview</h2>
              <p className="text-gray-600 mb-8">
                {course.description} This program is designed to provide students with a comprehensive understanding of
                the field, combining theoretical knowledge with practical skills that are highly valued in the industry.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Syllabus Highlights</h3>
              <ul className="space-y-4 mb-8">
                {course.syllabus.map((subject, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">{subject}</span>
                      <p className="text-gray-600">
                        Students will gain in-depth knowledge and practical skills in this essential area.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Graduates of this program have excellent career prospects in various sectors. The skills and knowledge
                gained during this course prepare students for roles such as:
              </p>
              <ul className="space-y-2 mb-8 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Entry-level and advanced positions in the field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Research and development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Entrepreneurship and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Further academic pursuits</span>
                </li>
              </ul>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Course Details</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Duration</h4>
                        <p className="text-gray-600">{course.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Eligibility</h4>
                        <p className="text-gray-600">{course.eligibility}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Fees</h4>
                        <p className="text-gray-600">{course.fees}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Program Type</h4>
                        <p className="text-gray-600">{course.programType}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/admissions">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Programs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <Card key={relatedCourse.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.courseName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedCourse.courseName}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                    <Button asChild className="w-full">
                      <Link href={`/courses/${relatedCourse.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

