import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { universityInfo } from "@/data/university-info"
import { courses } from "@/data/courses"

export default function Home() {
  // Featured courses (first 3)
  const featuredCourses = courses.slice(0, 3)

  // Function to get course-specific images based on course ID or name
  const getCourseImage = (courseId: string, courseName: string) => {
    // Map course IDs or keywords in names to specific images
    if (courseId.includes("cs") || courseName.toLowerCase().includes("computer")) {
      return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    } else if (
      courseId.includes("arts") ||
      courseName.toLowerCase().includes("english") ||
      courseName.toLowerCase().includes("art")
    ) {
      return "https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?q=80&w=2070&auto=format&fit=crop"
    } else if (courseId.includes("bba") || courseId.includes("mba") || courseName.toLowerCase().includes("business")) {
      return "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070&auto=format&fit=crop"
    } else if (courseName.toLowerCase().includes("web") || courseName.toLowerCase().includes("development")) {
      return "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
    } else {
      // Default image if no match
      return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-foreground py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">{universityInfo.tagline}</h1>
              <p className="text-lg">{universityInfo.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1000&auto=format&fit=crop"
                alt="University campus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
            <p className="mt-4 text-lg text-gray-600">Discover our most popular academic programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept Image 1 */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                  alt="Computer science concept"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Computer Science</h3>
                <p className="text-gray-600 mb-4">Explore cutting-edge technology and programming</p>
                <Button asChild className="w-full">
                  <Link href="/courses?type=Computer">View Programs</Link>
                </Button>
              </div>
            </div>

            {/* Concept Image 2 */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
                  alt="Business concept"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Business Administration</h3>
                <p className="text-gray-600 mb-4">Develop leadership and management skills</p>
                <Button asChild className="w-full">
                  <Link href="/courses?type=Business">View Programs</Link>
                </Button>
              </div>
            </div>

            {/* Concept Image 3 */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop"
                  alt="Arts concept"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Arts & Humanities</h3>
                <p className="text-gray-600 mb-4">Express creativity and critical thinking</p>
                <Button asChild className="w-full">
                  <Link href="/courses?type=Arts">View Programs</Link>
                </Button>
              </div>
            </div>

            {/* Original Featured Courses */}
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={getCourseImage(course.id, course.courseName) || "/placeholder.svg"}
                    alt={course.courseName}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.courseName}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                    <span>{course.programType}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/courses">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Employment Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Student Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600">Hear from our graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {universityInfo.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.program}, {testimonial.year}
                    </p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of learners and innovators. Apply now for the upcoming semester.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

