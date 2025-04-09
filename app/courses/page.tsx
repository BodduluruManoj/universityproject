"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/courses"

type ProgramType = "Undergraduate" | "Postgraduate" | "Diploma" | "All"

export default function CoursesPage() {
  const [filter, setFilter] = useState<ProgramType>("All")

  const filteredCourses = filter === "All" ? courses : courses.filter((course) => course.programType === filter)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Academic Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover a wide range of programs designed to help you achieve your academic and career goals
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {(["All", "Undergraduate", "Postgraduate", "Diploma"] as const).map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                onClick={() => setFilter(type)}
                className="min-w-[120px]"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No courses found for the selected filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.courseName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                        {course.programType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{course.courseName}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>Duration: {course.duration}</span>
                      <span>Fees: {course.fees}</span>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/courses/${course.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

