import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { universityInfo } from "@/data/university-info"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{universityInfo.name}</h2>
            <p className="text-gray-300">{universityInfo.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={universityInfo.socialMedia.facebook}
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={universityInfo.socialMedia.twitter}
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={universityInfo.socialMedia.instagram}
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={universityInfo.socialMedia.linkedin}
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses?type=Undergraduate" className="text-gray-300 hover:text-white">
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link href="/courses?type=Postgraduate" className="text-gray-300 hover:text-white">
                  Postgraduate
                </Link>
              </li>
              <li>
                <Link href="/courses?type=Diploma" className="text-gray-300 hover:text-white">
                  Diploma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">{universityInfo.location}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">{universityInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">{universityInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {universityInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

