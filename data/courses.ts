export interface Course {
  id: string
  courseName: string
  description: string
  duration: string
  eligibility: string
  fees: string
  syllabus: string[]
  programType: "Undergraduate" | "Postgraduate" | "Diploma"
  image: string
}

export const courses: Course[] = [
  {
    id: "cs-bachelor",
    courseName: "Bachelor of Computer Science",
    description: "A 4-year program focusing on programming, algorithms, software development, and data structures.",
    duration: "4 years",
    eligibility: "10+2 with Mathematics and Science",
    fees: "$20,000 per annum",
    syllabus: [
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Software Engineering",
    ],
    programType: "Undergraduate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "arts-english",
    courseName: "Bachelor of Arts in English",
    description: "A 3-year program dedicated to literature, linguistics, and communication skills.",
    duration: "3 years",
    eligibility: "10+2 in any stream",
    fees: "$15,000 per annum",
    syllabus: ["English Literature", "Creative Writing", "Linguistics", "Communication Studies"],
    programType: "Undergraduate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "bba",
    courseName: "Bachelor of Business Administration",
    description: "A comprehensive 3-year program in business management, marketing, and entrepreneurship.",
    duration: "3 years",
    eligibility: "10+2 in any stream with a minimum aggregate score of 60%",
    fees: "$18,000 per annum",
    syllabus: ["Business Management", "Marketing", "Finance", "Human Resources", "Entrepreneurship"],
    programType: "Undergraduate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "mba",
    courseName: "Master of Business Administration",
    description: "A 2-year advanced program covering business strategy, leadership, and specialized management skills.",
    duration: "2 years",
    eligibility: "Bachelor's degree with a minimum of 60% marks",
    fees: "$25,000 per annum",
    syllabus: [
      "Strategic Management",
      "Leadership",
      "Advanced Marketing",
      "Financial Analysis",
      "Operations Management",
    ],
    programType: "Postgraduate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "msc-cs",
    courseName: "Master of Science in Computer Science",
    description: "A 2-year advanced program focusing on specialized areas of computer science and research.",
    duration: "2 years",
    eligibility: "Bachelor's degree in Computer Science or related field with 65% marks",
    fees: "$22,000 per annum",
    syllabus: ["Advanced Algorithms", "Machine Learning", "Cloud Computing", "Research Methodology", "Thesis Project"],
    programType: "Postgraduate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "web-dev-diploma",
    courseName: "Diploma in Web Development",
    description: "A 1-year intensive program covering modern web development technologies and practices.",
    duration: "1 year",
    eligibility: "10+2 or equivalent",
    fees: "$10,000 for the program",
    syllabus: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design"],
    programType: "Diploma",
    image: "/placeholder.svg?height=200&width=300",
  },
]

