import Image from "next/image"
import { universityInfo } from "@/data/university-info"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About {universityInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">{universityInfo.description}</p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in {universityInfo.founded}, {universityInfo.name} has grown from a small college to a leading
                institution of higher education. Over the decades, we have expanded our academic offerings, built
                state-of-the-art facilities, and established a reputation for excellence in teaching and research.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a commitment to innovation, inclusivity, and academic rigor. Today, we
                stand as a beacon of knowledge and opportunity for students from around the world.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="University history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Mission</h3>
              <p className="text-gray-600">{universityInfo.mission}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Vision</h3>
              <p className="text-gray-600">{universityInfo.vision}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Values</h3>
              <ul className="text-gray-600 space-y-2">
                {universityInfo.values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Campus Facilities</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our modern campus provides everything you need for a fulfilling academic experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Campus facilities"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <ul className="space-y-4">
                {universityInfo.campusFacilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span className="text-gray-600">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Achievements</h2>
            <p className="mt-4 text-lg text-gray-600">Milestones that mark our journey of excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityInfo.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-4">{index + 1}</div>
                <p className="text-gray-600">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

