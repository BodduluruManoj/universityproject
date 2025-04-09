export interface ChatbotResponse {
  id: string
  question: string
  answer: string
  keywords: string[]
  category?: string
}

export const chatbotResponses: ChatbotResponse[] = [
  // Basic responses
  {
    id: "welcome",
    question: "Welcome",
    answer: "Hello! Welcome to University College. How can I help you today?",
    keywords: ["hello", "hi", "hey", "start", "begin"],
    category: "General",
  },
  {
    id: "courses",
    question: "What courses do you offer?",
    answer:
      "We offer a variety of undergraduate, postgraduate, and diploma programs including Computer Science, Business Administration, Arts, and more. You can check our Courses page for the complete list.",
    keywords: ["courses", "programs", "degrees", "study", "offer"],
    category: "Courses",
  },
  {
    id: "admission",
    question: "How can I apply for admission?",
    answer:
      "To apply for admission, you need to fill out our online application form, submit required documents, and pay the application fee. Visit our Admissions page for detailed instructions and deadlines.",
    keywords: ["apply", "admission", "application", "enroll", "register"],
    category: "Admissions",
  },
  {
    id: "fees",
    question: "What are the tuition fees?",
    answer:
      "Tuition fees vary by program. Undergraduate programs range from $15,000 to $20,000 per year, postgraduate programs from $22,000 to $25,000 per year, and diploma programs around $10,000 for the full course.",
    keywords: ["fees", "tuition", "cost", "price", "payment"],
    category: "Fees",
  },
  {
    id: "eligibility",
    question: "What are the eligibility requirements?",
    answer:
      "Eligibility requirements vary by program. Generally, undergraduate programs require 10+2 completion, postgraduate programs require a relevant bachelor's degree, and diplomas require 10+2 or equivalent. Check specific program details for more information.",
    keywords: ["eligibility", "requirements", "qualify", "criteria"],
    category: "Admissions",
  },
  {
    id: "duration",
    question: "How long are the courses?",
    answer:
      "Course durations vary: undergraduate programs typically last 3-4 years, postgraduate programs 1-2 years, and diploma programs 6 months to 1 year.",
    keywords: ["duration", "length", "time", "years", "long"],
    category: "Courses",
  },
  {
    id: "campus",
    question: "Tell me about your campus",
    answer:
      "Our campus spans 100 acres with modern facilities including state-of-the-art classrooms, laboratories, a comprehensive library, sports facilities, student housing, and dining options. We pride ourselves on providing a conducive environment for learning and personal growth.",
    keywords: ["campus", "facilities", "accommodation", "hostel", "library"],
    category: "Campus Life",
  },
  {
    id: "contact",
    question: "How can I contact the university?",
    answer:
      "You can reach us by phone at (123) 456-7890, by email at info@universitycollege.edu, or by visiting our campus at 123 University Avenue. You can also fill out the contact form on our Contact Us page.",
    keywords: ["contact", "reach", "phone", "email", "address"],
    category: "General",
  },

  // General University Information (10 questions)
  {
    id: "university-history",
    question: "What is the history of the university?",
    answer:
      "University College was founded in 1970 and has grown from a small institution to a leading university. Over the past 50+ years, we've expanded our academic offerings, built state-of-the-art facilities, and established a reputation for excellence in teaching and research.",
    keywords: ["history", "founded", "background", "origin", "establish"],
    category: "General",
  },
  {
    id: "accreditation",
    question: "Is the university accredited?",
    answer:
      "Yes, University College is fully accredited by the Higher Education Accreditation Commission and various program-specific accrediting bodies. Our accreditations ensure that our degrees are recognized nationally and internationally.",
    keywords: ["accredited", "accreditation", "recognized", "certified"],
    category: "General",
  },
  {
    id: "ranking",
    question: "What is the university's ranking?",
    answer:
      "University College is ranked among the top 100 universities globally. We're particularly recognized for our programs in Computer Science, Business, and Engineering. Our commitment to academic excellence and research has consistently earned us high rankings.",
    keywords: ["ranking", "rank", "position", "rating", "top"],
    category: "General",
  },
  {
    id: "faculty",
    question: "Tell me about your faculty",
    answer:
      "Our faculty comprises over 200 distinguished professors and instructors, many of whom are leading experts in their fields. Over 80% of our faculty members hold doctoral degrees from prestigious universities worldwide, and many are actively engaged in cutting-edge research.",
    keywords: ["faculty", "professors", "teachers", "instructors", "staff"],
    category: "General",
  },
  {
    id: "student-population",
    question: "How many students attend the university?",
    answer:
      "University College has approximately 15,000 students, including 12,000 undergraduates and 3,000 postgraduate students. Our student body is diverse, with students from over 80 countries, creating a rich multicultural learning environment.",
    keywords: ["students", "population", "attend", "enrollment", "many"],
    category: "General",
  },
  {
    id: "academic-calendar",
    question: "What is the academic calendar?",
    answer:
      "Our academic year consists of two main semesters: Fall (September to December) and Spring (January to May). We also offer a Summer term (June to August) for selected courses. Each semester is approximately 15 weeks long, followed by an examination period.",
    keywords: ["calendar", "schedule", "semester", "term", "academic year"],
    category: "General",
  },
  {
    id: "mission-vision",
    question: "What is the university's mission and vision?",
    answer:
      "Our mission is to provide accessible, high-quality education that empowers students to become innovative leaders and responsible global citizens. Our vision is to be a globally recognized institution known for academic excellence, innovative research, and societal impact.",
    keywords: ["mission", "vision", "values", "goals", "purpose"],
    category: "General",
  },
  {
    id: "alumni",
    question: "Tell me about your alumni network",
    answer:
      "University College has over 50,000 alumni worldwide, working in various sectors and making significant contributions to their fields. Our alumni network provides mentoring, career opportunities, and networking events for current students and graduates.",
    keywords: ["alumni", "graduates", "network", "former students"],
    category: "General",
  },
  {
    id: "location",
    question: "Where is the university located?",
    answer:
      "University College is located at 123 University Avenue, Academic City, AC 12345. Our campus is conveniently situated near the city center, with excellent public transportation connections. The nearest airport is approximately 30 minutes away by car.",
    keywords: ["location", "situated", "where", "address", "place"],
    category: "General",
  },
  {
    id: "virtual-tour",
    question: "Can I take a virtual tour of the campus?",
    answer:
      "Yes, we offer a comprehensive virtual tour of our campus on our website. The tour includes 360-degree views of classrooms, laboratories, libraries, dormitories, and recreational facilities. You can access the virtual tour from the 'About Us' section of our website.",
    keywords: ["virtual tour", "online tour", "see campus", "visit online"],
    category: "General",
  },

  // Admissions & Application (10 questions)
  {
    id: "application-process",
    question: "What is the application process?",
    answer:
      "The application process involves: 1) Completing the online application form, 2) Submitting required documents (transcripts, ID, etc.), 3) Paying the application fee, 4) Taking entrance exams if required, 5) Attending an interview if shortlisted, and 6) Receiving an admission decision.",
    keywords: ["application process", "how to apply", "steps", "procedure"],
    category: "Admissions",
  },
  {
    id: "application-deadline",
    question: "What are the application deadlines?",
    answer:
      "For undergraduate programs, the deadline is May 31 for Fall semester and November 30 for Spring semester. For postgraduate programs, it's April 30 for Fall and October 31 for Spring. International students should apply three months prior to these deadlines.",
    keywords: ["deadline", "due date", "last date", "when to apply"],
    category: "Admissions",
  },
  {
    id: "required-documents",
    question: "What documents are required for application?",
    answer:
      "Required documents include: completed application form, academic transcripts, identification proof, passport-sized photographs, statement of purpose (for postgraduate programs), and letters of recommendation (for postgraduate programs).",
    keywords: ["documents", "paperwork", "certificates", "transcripts", "requirements"],
    category: "Admissions",
  },
  {
    id: "entrance-exams",
    question: "Do you require entrance exams?",
    answer:
      "Some programs require entrance examinations to assess aptitude and knowledge in relevant subjects. The requirement varies by program. Engineering and science programs typically require math and science tests, while business programs may require aptitude tests.",
    keywords: ["entrance exam", "test", "assessment", "examination"],
    category: "Admissions",
  },
  {
    id: "interview",
    question: "Is there an interview as part of the admission process?",
    answer:
      "Yes, shortlisted candidates for certain programs are required to attend an interview. The interview assesses communication skills, motivation, and suitability for the chosen program. Interviews can be conducted in-person or online for international applicants.",
    keywords: ["interview", "meeting", "face to face", "selection"],
    category: "Admissions",
  },
  {
    id: "transfer-students",
    question: "Do you accept transfer students?",
    answer:
      "Yes, we accept transfer students from accredited institutions. Transfer applicants must submit transcripts from their previous institution, and credits may be transferred based on course equivalency. A minimum GPA of 2.5 is typically required for transfer consideration.",
    keywords: ["transfer", "switch", "change university", "credits"],
    category: "Admissions",
  },
  {
    id: "admission-criteria",
    question: "What criteria do you use for admission decisions?",
    answer:
      "Admission decisions are based on academic performance, entrance exam scores (if applicable), interview performance (if applicable), statement of purpose, letters of recommendation, and extracurricular achievements. We take a holistic approach to evaluate each applicant.",
    keywords: ["criteria", "factors", "consideration", "decision", "selection"],
    category: "Admissions",
  },
  {
    id: "acceptance-rate",
    question: "What is your acceptance rate?",
    answer:
      "Our overall acceptance rate is approximately 65%, though this varies by program. More competitive programs like Medicine and Computer Science have lower acceptance rates of around 30-40%, while other programs may have higher acceptance rates.",
    keywords: ["acceptance rate", "admission rate", "how many accepted", "chances"],
    category: "Admissions",
  },
  {
    id: "waitlist",
    question: "What happens if I'm placed on the waitlist?",
    answer:
      "If you're placed on the waitlist, it means you meet our qualifications but we cannot offer immediate admission due to capacity. Waitlisted applicants are considered if spots become available. We typically notify waitlisted applicants of their final status by July for Fall admission.",
    keywords: ["waitlist", "waiting list", "on hold", "pending"],
    category: "Admissions",
  },
  {
    id: "defer-admission",
    question: "Can I defer my admission?",
    answer:
      "Yes, admitted students may request to defer their admission for up to one academic year. Deferral requests must be submitted in writing before the enrollment deadline and are considered on a case-by-case basis. If approved, you'll need to pay a deposit to secure your spot.",
    keywords: ["defer", "postpone", "delay", "later", "next year"],
    category: "Admissions",
  },

  // Courses & Programs (10 questions)
  {
    id: "popular-programs",
    question: "What are your most popular programs?",
    answer:
      "Our most popular undergraduate programs are Computer Science, Business Administration, and Engineering. At the postgraduate level, MBA, Data Science, and Public Health are highly sought after. These programs are known for their rigorous curriculum and excellent job placement rates.",
    keywords: ["popular", "best", "top", "most sought", "favorite"],
    category: "Courses",
  },
  {
    id: "program-structure",
    question: "How are the programs structured?",
    answer:
      "Our programs typically consist of core courses, electives, and a capstone project or thesis. Undergraduate programs include general education requirements in the first year, followed by specialization courses. Postgraduate programs focus on advanced coursework and research or practical applications.",
    keywords: ["structure", "format", "organization", "curriculum", "design"],
    category: "Courses",
  },
  {
    id: "online-programs",
    question: "Do you offer online programs?",
    answer:
      "Yes, we offer several fully online and hybrid programs at both undergraduate and postgraduate levels. Our online programs maintain the same quality standards as on-campus programs and are taught by the same faculty. They offer flexibility for working professionals and distant learners.",
    keywords: ["online", "distance", "remote", "virtual", "e-learning"],
    category: "Courses",
  },
  {
    id: "part-time-programs",
    question: "Are there part-time study options?",
    answer:
      "Yes, many of our programs offer part-time study options, particularly at the postgraduate level. Part-time students typically take 50-60% of the full course load each semester, extending the program duration. This option is popular among working professionals.",
    keywords: ["part-time", "part time", "evening", "weekend", "flexible"],
    category: "Courses",
  },
  {
    id: "double-major",
    question: "Can I pursue a double major?",
    answer:
      "Yes, students can pursue a double major in related fields. This typically requires completing all requirements for both majors and may extend the time to graduation. Students interested in double majors should consult with academic advisors to plan their course schedule effectively.",
    keywords: ["double major", "dual degree", "two majors", "multiple"],
    category: "Courses",
  },
  {
    id: "minors",
    question: "Do you offer minors?",
    answer:
      "Yes, we offer minors in various disciplines. A minor typically requires 5-6 courses (15-18 credit hours) in a secondary field of study. Popular minors include Business, Psychology, Computer Science, and Foreign Languages. Minors complement your major and enhance your versatility.",
    keywords: ["minor", "secondary", "additional subject", "specialization"],
    category: "Courses",
  },
  {
    id: "internships",
    question: "Are internships part of the curriculum?",
    answer:
      "Yes, many of our programs include mandatory or optional internships. These provide valuable hands-on experience and industry exposure. Our Career Services office helps students secure internships with our 200+ industry partners. Some internships may also offer academic credit.",
    keywords: ["internship", "practical training", "work experience", "industry"],
    category: "Courses",
  },
  {
    id: "research-opportunities",
    question: "What research opportunities are available for students?",
    answer:
      "Students have numerous research opportunities through faculty-led projects, research assistantships, independent studies, and our Undergraduate Research Program. We have 50+ research centers across disciplines, and many students co-author publications with faculty mentors.",
    keywords: ["research", "investigation", "study", "project", "laboratory"],
    category: "Courses",
  },
  {
    id: "study-abroad",
    question: "Do you have study abroad programs?",
    answer:
      "Yes, we have exchange partnerships with over 100 universities worldwide. Students can study abroad for a semester or academic year while paying regular tuition. We also offer faculty-led short-term study abroad programs during summer and winter breaks.",
    keywords: ["study abroad", "exchange", "overseas", "international", "foreign"],
    category: "Courses",
  },
  {
    id: "course-registration",
    question: "How does course registration work?",
    answer:
      "Course registration occurs before each semester through our online student portal. Registration dates are assigned based on academic standing and credits completed. Students meet with academic advisors to plan their schedule, then register for courses during their designated time slot.",
    keywords: ["registration", "enroll", "sign up", "select courses", "schedule"],
    category: "Courses",
  },

  // Fees & Financial Aid (10 questions)
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, bank transfers, checks, and online payment platforms. Payments can be made through our student portal, by mail, or in person at the Bursar's Office. International students can use services like Flywire for currency conversion.",
    keywords: ["payment", "pay", "method", "credit card", "bank transfer"],
    category: "Fees",
  },
  {
    id: "payment-plans",
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer semester-based payment plans that allow students to pay tuition in 3-5 installments rather than one lump sum. There's a small enrollment fee for payment plans. To enroll, students must complete the payment plan agreement form before the tuition deadline.",
    keywords: ["payment plan", "installment", "pay monthly", "divide", "split"],
    category: "Fees",
  },
  {
    id: "scholarships",
    question: "What scholarships are available?",
    answer:
      "We offer merit-based scholarships (based on academic achievement), need-based scholarships (based on financial need), athletic scholarships, and program-specific scholarships. Awards range from $2,000 to full tuition. The scholarship application deadline is typically March 1 for the following academic year.",
    keywords: ["scholarship", "financial aid", "grant", "award", "merit"],
    category: "Fees",
  },
  {
    id: "financial-aid",
    question: "How do I apply for financial aid?",
    answer:
      "To apply for financial aid, complete the Financial Aid Application on our website and submit supporting documents like income statements and tax returns. For government aid, complete the FAFSA (for US students) or equivalent national forms. The priority deadline is February 15.",
    keywords: ["financial aid", "assistance", "help paying", "support", "aid"],
    category: "Fees",
  },
  {
    id: "work-study",
    question: "Do you have work-study programs?",
    answer:
      "Yes, we offer work-study programs that allow students to work part-time on campus while studying. Positions include library assistants, research assistants, administrative support, and campus tour guides. Work-study students typically work 10-15 hours per week and earn competitive hourly wages.",
    keywords: ["work study", "campus job", "student employment", "part-time work"],
    category: "Fees",
  },
  {
    id: "international-student-fees",
    question: "Are there different fees for international students?",
    answer:
      "International students pay the same tuition as out-of-state students, plus an international student fee of $500 per semester. This fee covers specialized services like immigration advising, orientation programs, and international student support services.",
    keywords: ["international fees", "foreign student", "non-resident", "overseas"],
    category: "Fees",
  },
  {
    id: "fee-breakdown",
    question: "Can you provide a breakdown of all fees?",
    answer:
      "Tuition varies by program, but additional fees include: Student Activity Fee ($250/semester), Technology Fee ($200/semester), Health Services Fee ($150/semester), and Course-Specific Fees (varies by course). Housing and meal plans are separate and optional for most students.",
    keywords: ["breakdown", "itemized", "detailed", "all fees", "costs"],
    category: "Fees",
  },
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer:
      "If you withdraw within the first week of classes, you receive a 100% tuition refund; within the second week, 75%; third week, 50%; fourth week, 25%. After the fourth week, no refund is provided. Certain fees like application and enrollment deposits are non-refundable.",
    keywords: ["refund", "money back", "withdraw", "drop", "cancel"],
    category: "Fees",
  },
  {
    id: "tuition-increase",
    question: "How often does tuition increase?",
    answer:
      "Tuition typically increases by 3-5% annually, reflecting rising educational costs and inflation. We strive to keep increases minimal and provide advance notice to students. Once enrolled, some scholarship packages adjust to cover tuition increases.",
    keywords: ["increase", "rise", "higher", "change", "more expensive"],
    category: "Fees",
  },
  {
    id: "estimated-total-cost",
    question: "What is the estimated total cost of attendance?",
    answer:
      "The estimated annual cost of attendance, including tuition, fees, housing, meals, books, and personal expenses, is approximately $35,000-$45,000 for undergraduate students and $40,000-$50,000 for graduate students. This varies based on program, housing choice, and lifestyle.",
    keywords: ["total cost", "overall", "complete", "full", "entire"],
    category: "Fees",
  },

  // Campus Life & Facilities (10 questions)
  {
    id: "housing-options",
    question: "What housing options are available?",
    answer:
      "We offer various on-campus housing options including traditional dormitories, suite-style residences, and apartment-style housing. First-year students typically live in traditional dorms, while upperclassmen have more options. All residences have Wi-Fi, laundry facilities, and common areas.",
    keywords: ["housing", "accommodation", "dorm", "residence", "live"],
    category: "Campus Life",
  },
  {
    id: "meal-plans",
    question: "Tell me about your dining and meal plans",
    answer:
      "Our campus has 5 dining halls, 10+ cafes, and several food courts featuring diverse cuisine options. Meal plans range from 7 to 21 meals per week, with flex dollars for campus cafes and restaurants. We accommodate various dietary needs including vegetarian, vegan, and allergen-free options.",
    keywords: ["meal", "food", "dining", "eat", "cafeteria"],
    category: "Campus Life",
  },
  {
    id: "sports-recreation",
    question: "What sports and recreational facilities do you have?",
    answer:
      "Our campus features a comprehensive sports complex with a gymnasium, Olympic-sized swimming pool, fitness center, tennis courts, and athletic fields. We offer 20+ varsity sports teams, numerous intramural leagues, and fitness classes. Facilities are available to all students with a valid ID.",
    keywords: ["sports", "recreation", "gym", "fitness", "athletic"],
    category: "Campus Life",
  },
  {
    id: "student-clubs",
    question: "What student clubs and organizations are there?",
    answer:
      "We have over 150 student clubs and organizations covering academic interests, cultural groups, performing arts, community service, and special interests. Popular clubs include the Debate Society, International Students Association, Robotics Club, and various cultural and religious groups.",
    keywords: ["clubs", "organizations", "societies", "groups", "extracurricular"],
    category: "Campus Life",
  },
  {
    id: "campus-events",
    question: "What events happen on campus?",
    answer:
      "Our campus hosts numerous events throughout the year including academic lectures, cultural festivals, concerts, theatrical performances, art exhibitions, and sporting events. Major annual events include Homecoming, International Festival, Spring Carnival, and the Distinguished Lecture Series.",
    keywords: ["events", "activities", "happening", "programs", "calendar"],
    category: "Campus Life",
  },
  {
    id: "safety-security",
    question: "How safe is the campus?",
    answer:
      "Campus safety is a top priority. We have a 24/7 campus police department, emergency blue light phones throughout campus, security cameras, card access systems for buildings, and a campus alert system. Our crime rates are consistently below national averages for university campuses.",
    keywords: ["safety", "security", "safe", "crime", "police"],
    category: "Campus Life",
  },
  {
    id: "transportation",
    question: "What transportation options are available?",
    answer:
      "We offer free campus shuttle services that run on regular schedules connecting all parts of campus and nearby residential areas. Public bus routes also serve the campus with discounted student passes available. Bike sharing and car sharing programs are available for students.",
    keywords: ["transportation", "shuttle", "bus", "travel", "commute"],
    category: "Campus Life",
  },
  {
    id: "health-services",
    question: "What health services are provided?",
    answer:
      "Our Student Health Center provides comprehensive healthcare services including primary care, mental health counseling, preventive services, and health education. Services are covered by the student health fee, with minimal additional costs for certain procedures or medications.",
    keywords: ["health", "medical", "doctor", "clinic", "wellness"],
    category: "Campus Life",
  },
  {
    id: "technology-resources",
    question: "What technology resources are available?",
    answer:
      "Students have access to computer labs, high-speed Wi-Fi across campus, printing services, specialized software, and technology lending programs (laptops, tablets, cameras). Our IT Help Desk provides technical support, and students receive cloud storage and free or discounted software.",
    keywords: ["technology", "computers", "wifi", "internet", "digital"],
    category: "Campus Life",
  },
  {
    id: "sustainability",
    question: "What sustainability initiatives do you have?",
    answer:
      "Our sustainability initiatives include LEED-certified buildings, solar panels, water conservation systems, recycling and composting programs, and a campus farm. We've committed to carbon neutrality by 2030 and have received national recognition for our green campus efforts.",
    keywords: ["sustainability", "green", "eco-friendly", "environment", "recycling"],
    category: "Campus Life",
  },

  // International Students (10 questions)
  {
    id: "international-admissions",
    question: "What is the application process for international students?",
    answer:
      "International students follow the same application process with additional requirements: English proficiency test scores (TOEFL/IELTS), credential evaluation for non-US academic documents, financial documentation for visa purposes, and a copy of your passport. Apply at least 6 months before your intended start date.",
    keywords: ["international application", "foreign student apply", "overseas admission"],
    category: "International",
  },
  {
    id: "english-requirements",
    question: "What are the English language requirements?",
    answer:
      "International students must demonstrate English proficiency through TOEFL (minimum 80 iBT), IELTS (minimum 6.5), Duolingo English Test (minimum 110), or completion of an accredited English language program. Some programs may have higher requirements. Waivers are available for students from English-speaking countries.",
    keywords: ["english", "language", "toefl", "ielts", "proficiency"],
    category: "International",
  },
  {
    id: "visa-information",
    question: "How do I get a student visa?",
    answer:
      "After acceptance, we'll issue an I-20 form for F-1 visa applicants. You'll need to pay the SEVIS fee, complete the visa application, and schedule an interview at your local U.S. embassy or consulate. Our International Student Office provides guidance throughout this process.",
    keywords: ["visa", "f1", "immigration", "i20", "sevis"],
    category: "International",
  },
  {
    id: "international-orientation",
    question: "Is there a special orientation for international students?",
    answer:
      "Yes, we offer a comprehensive International Student Orientation one week before general orientation. This program covers immigration regulations, cultural adjustment, academic expectations, campus resources, banking, healthcare, and social activities to help you connect with other international students.",
    keywords: ["international orientation", "foreign student welcome", "orientation"],
    category: "International",
  },
  {
    id: "international-student-support",
    question: "What support services are available for international students?",
    answer:
      "Our International Student Services office provides immigration advising, cultural adjustment support, employment workshops, tax assistance, and social programming. We also offer peer mentors, conversation partners for language practice, and international student clubs.",
    keywords: ["international support", "help", "services", "assistance", "foreign"],
    category: "International",
  },
  {
    id: "working-as-international-student",
    question: "Can international students work while studying?",
    answer:
      "F-1 students can work on-campus up to 20 hours per week during semesters and full-time during breaks. After completing one academic year, you may be eligible for off-campus work through Curricular Practical Training (CPT) or Optional Practical Training (OPT) related to your field of study.",
    keywords: ["work", "job", "employment", "opt", "cpt"],
    category: "International",
  },
  {
    id: "international-scholarships",
    question: "Are there scholarships for international students?",
    answer:
      "Yes, we offer merit-based scholarships for international students ranging from $5,000 to $20,000 per year. These are awarded based on academic achievement. We also have a limited number of Global Ambassador Scholarships and country-specific scholarships through partnerships with various governments.",
    keywords: ["international scholarship", "financial aid", "foreign student money"],
    category: "International",
  },
  {
    id: "health-insurance",
    question: "Is health insurance required for international students?",
    answer:
      "Yes, all international students are required to have health insurance. You can purchase the university-sponsored health insurance plan or provide proof of comparable coverage. The university plan costs approximately $2,500 per year and covers most medical services, emergency care, and prescriptions.",
    keywords: ["health insurance", "medical coverage", "healthcare", "insurance"],
    category: "International",
  },
  {
    id: "international-housing",
    question: "Is housing guaranteed for international students?",
    answer:
      "Housing is guaranteed for first-year international students who apply by the priority deadline. We also keep residence halls open during breaks for international students who cannot return home. Some residence halls have Global Living Communities where international and domestic students live together.",
    keywords: ["international housing", "accommodation", "foreign student live"],
    category: "International",
  },
  {
    id: "airport-pickup",
    question: "Do you provide airport pickup for new international students?",
    answer:
      "Yes, we offer complimentary airport pickup for new international students during designated arrival days before orientation. You must sign up at least two weeks in advance through the International Student Portal. For arrivals outside these dates, we can provide information about transportation options.",
    keywords: ["airport", "pickup", "arrival", "transportation", "pick up"],
    category: "International",
  },

  // Career Services (10 questions)
  {
    id: "career-services",
    question: "What career services do you offer?",
    answer:
      "Our Career Center offers resume and cover letter reviews, mock interviews, career counseling, job and internship databases, career fairs, networking events, and employer information sessions. Services are available to current students and alumni, with both in-person and virtual options.",
    keywords: ["career", "job", "employment", "placement", "professional"],
    category: "Career",
  },
  {
    id: "job-placement-rate",
    question: "What is your job placement rate?",
    answer:
      "Our overall job placement rate is 95% within six months of graduation. This varies by program, with some fields like Computer Science, Nursing, and Engineering having nearly 100% placement rates. Our graduates work at Fortune 500  Nursing, and Engineering having nearly 100% placement rates. Our graduates work at Fortune 500 companies, startups, non-profits, government agencies, and pursue advanced degrees at top institutions.",
    keywords: ["job placement", "employment rate", "hiring", "graduates", "success"],
    category: "Career",
  },
  {
    id: "career-fairs",
    question: "When are career fairs held?",
    answer:
      "We host major career fairs each semester: the Fall Career Fair in October and the Spring Career Fair in March. We also hold specialized fairs for industries like Technology, Healthcare, Business, and Education throughout the year. These events bring 200+ employers to campus.",
    keywords: ["career fair", "job fair", "recruitment", "employers", "hiring event"],
    category: "Career",
  },
  {
    id: "internship-opportunities",
    question: "How can I find internship opportunities?",
    answer:
      "You can find internship opportunities through our online job portal, career fairs, department-specific internship programs, and networking events. Our Career Center also maintains relationships with 500+ employers who regularly offer internships to our students.",
    keywords: ["internship", "work experience", "practical training", "summer job"],
    category: "Career",
  },
  {
    id: "resume-help",
    question: "Can I get help with my resume?",
    answer:
      "Yes, our Career Center offers resume reviews through drop-in hours, scheduled appointments, and online submissions. Career counselors provide personalized feedback to help you create a strong resume that highlights your skills and experiences effectively.",
    keywords: ["resume", "cv", "curriculum vitae", "help", "review"],
    category: "Career",
  },
  {
    id: "interview-preparation",
    question: "How can I prepare for interviews?",
    answer:
      "We offer mock interviews with career counselors, industry-specific interview preparation workshops, and access to BigInterview (an online interview practice platform). We also provide guidance on professional attire, common interview questions, and follow-up etiquette.",
    keywords: ["interview", "preparation", "practice", "mock", "questions"],
    category: "Career",
  },
  {
    id: "alumni-network-career",
    question: "How can I connect with alumni for career advice?",
    answer:
      "You can connect with alumni through our Alumni Mentorship Program, networking events, industry panels, and our online alumni directory. Many alumni volunteer as mentors, participate in career panels, and share job opportunities from their organizations.",
    keywords: ["alumni", "network", "mentorship", "connections", "graduates"],
    category: "Career",
  },
  {
    id: "graduate-school-preparation",
    question: "Do you help with graduate school applications?",
    answer:
      "Yes, we provide guidance on selecting graduate programs, preparing application materials, writing personal statements, securing letters of recommendation, and preparing for entrance exams. We also host graduate school fairs and workshops on the application process.",
    keywords: ["graduate school", "further study", "masters", "phd", "application"],
    category: "Career",
  },
  {
    id: "career-counseling",
    question: "Can I get career counseling if I'm undecided about my career path?",
    answer:
      "Absolutely. Our career counselors offer personalized guidance to help undecided students explore career options. We use interest assessments, skills inventories, and one-on-one discussions to help you identify potential career paths aligned with your interests, values, and strengths.",
    keywords: ["career counseling", "guidance", "undecided", "explore", "direction"],
    category: "Career",
  },
  {
    id: "employer-connections",
    question: "Which companies recruit from your university?",
    answer:
      "We have strong relationships with diverse employers including Google, Microsoft, Amazon, Goldman Sachs, Deloitte, Mayo Clinic, NASA, and many others. Local and regional employers also actively recruit our students, and we maintain connections with organizations across various industries and sectors.",
    keywords: ["companies", "employers", "recruit", "hiring", "organizations"],
    category: "Career",
  },

  // Academic Policies (10 questions)
  {
    id: "grading-system",
    question: "What is your grading system?",
    answer:
      "We use a 4.0 scale: A (4.0), A- (3.7), B+ (3.3), B (3.0), B- (2.7), C+ (2.3), C (2.0), C- (1.7), D+ (1.3), D (1.0), F (0.0). Some courses offer Pass/Fail options. A minimum GPA of 2.0 is required to remain in good academic standing and to graduate.",
    keywords: ["grading", "grades", "gpa", "scale", "points"],
    category: "Academic",
  },
  {
    id: "academic-probation",
    question: "What is academic probation?",
    answer:
      "Students whose cumulative GPA falls below 2.0 are placed on academic probation. While on probation, students must meet regularly with academic advisors and may have restrictions on course load and extracurricular activities. Students have one semester to raise their GPA above 2.0 or face possible dismissal.",
    keywords: ["probation", "academic warning", "low grades", "dismissal", "standing"],
    category: "Academic",
  },
  {
    id: "attendance-policy",
    question: "What is the attendance policy?",
    answer:
      "Attendance policies vary by instructor and are outlined in course syllabi. Generally, regular attendance is expected, and excessive absences may affect your grade. Some courses have strict attendance requirements where missing more than a specified number of classes results in automatic failure.",
    keywords: ["attendance", "absent", "miss class", "present", "show up"],
    category: "Academic",
  },
  {
    id: "course-withdrawal",
    question: "How do I withdraw from a course?",
    answer:
      "You can withdraw from a course through the student portal before the withdrawal deadline (typically 10 weeks into the semester). A 'W' appears on your transcript but doesn't affect your GPA. After the deadline, withdrawals are only approved for extenuating circumstances through a petition process.",
    keywords: ["withdraw", "drop", "course withdrawal", "cancel", "quit"],
    category: "Academic",
  },
  {
    id: "academic-integrity",
    question: "What is your academic integrity policy?",
    answer:
      "We maintain high standards of academic integrity. Violations include plagiarism, cheating, unauthorized collaboration, fabrication, and facilitating academic dishonesty. Penalties range from failing the assignment to course failure, academic probation, suspension, or expulsion, depending on the severity and prior violations.",
    keywords: ["academic integrity", "plagiarism", "cheating", "dishonesty", "honor code"],
    category: "Academic",
  },
  {
    id: "credit-transfer",
    question: "How do I transfer credits from another institution?",
    answer:
      "To transfer credits, submit official transcripts from your previous institution to our Registrar's Office. Credits from accredited institutions with a grade of C or better are evaluated for transfer. Course equivalency is determined by academic departments, and there's a maximum limit on transferable credits.",
    keywords: ["transfer credits", "credit evaluation", "previous courses", "equivalency"],
    category: "Academic",
  },
  {
    id: "graduation-requirements",
    question: "What are the graduation requirements?",
    answer:
      "Graduation requirements include: completing all program-specific course requirements, earning the minimum required credits (typically 120 for bachelor's degrees), maintaining a cumulative GPA of at least 2.0, fulfilling residency requirements (usually 30 credits at our institution), and resolving any financial obligations.",
    keywords: ["graduation", "requirements", "degree", "complete", "finish"],
    category: "Academic",
  },
  {
    id: "honors-program",
    question: "Tell me about your honors program",
    answer:
      "Our Honors Program offers enriched academic experiences for high-achieving students. Benefits include smaller classes, specialized seminars, research opportunities, priority registration, dedicated housing, and special recognition at graduation. Admission is based on academic achievement, and students must maintain a 3.5 GPA.",
    keywords: ["honors", "high achieving", "gifted", "advanced", "excellence"],
    category: "Academic",
  },
  {
    id: "academic-advising",
    question: "How does academic advising work?",
    answer:
      "Each student is assigned an academic advisor within their department who provides guidance on course selection, degree requirements, academic policies, and career planning. Students meet with advisors at least once per semester before registration. Additional advising resources are available through the Academic Success Center.",
    keywords: ["advising", "advisor", "guidance", "mentor", "academic planning"],
    category: "Academic",
  },
  {
    id: "disability-accommodations",
    question: "What accommodations are available for students with disabilities?",
    answer:
      "Our Disability Services Office provides accommodations for students with documented disabilities. These may include extended test time, note-taking assistance, alternative format materials, sign language interpreters, and accessible housing. Students should register with Disability Services and provide documentation to request accommodations.",
    keywords: ["disability", "accommodations", "accessibility", "special needs", "ada"],
    category: "Academic",
  },

  // Housing & Accommodation (10 questions)
  {
    id: "housing-application",
    question: "How do I apply for on-campus housing?",
    answer:
      "Apply for housing through the Housing Portal on our website after you've been admitted. The priority deadline is May 1 for fall semester. You'll rank your preferred residence halls and roommate preferences. Housing assignments are typically announced in July for the fall semester.",
    keywords: ["housing application", "apply dorm", "residence hall", "live on campus"],
    category: "Housing",
  },
  {
    id: "housing-guarantee",
    question: "Is housing guaranteed?",
    answer:
      "Housing is guaranteed for first-year students who apply by the priority deadline. Returning students participate in a housing selection process based on seniority. Due to high demand, we cannot guarantee housing for all upperclassmen, though we prioritize those from distant locations.",
    keywords: ["guaranteed housing", "housing availability", "space", "guaranteed"],
    category: "Housing",
  },
  {
    id: "residence-hall-types",
    question: "What types of residence halls do you have?",
    answer:
      "We offer traditional dormitories with shared rooms and community bathrooms (primarily for first-year students), suite-style halls with shared living areas and bathrooms (for sophomores and juniors), and apartment-style housing with kitchens (for upperclassmen). All include furniture, utilities, and Wi-Fi.",
    keywords: ["residence halls", "dorms", "housing types", "living options"],
    category: "Housing",
  },
  {
    id: "roommate-selection",
    question: "How are roommates assigned?",
    answer:
      "First-year students are matched based on a lifestyle questionnaire covering study habits, sleep schedules, and personal preferences. You can also request a specific roommate if both parties agree. Returning students can choose their roommates during the housing selection process.",
    keywords: ["roommate", "roommate matching", "live with", "suitemate", "assignment"],
    category: "Housing",
  },
  {
    id: "housing-costs",
    question: "How much does on-campus housing cost?",
    answer:
      "Housing costs range from $8,000 to $12,000 per academic year, depending on the residence hall and room type. Traditional dorms are the most affordable, while apartment-style housing costs more. Housing fees are billed by semester and can be covered by financial aid.",
    keywords: ["housing cost", "dorm price", "residence hall fee", "expense"],
    category: "Housing",
  },
  {
    id: "what-to-bring",
    question: "What should I bring to my residence hall?",
    answer:
      "Bring bedding (twin XL), toiletries, towels, laundry supplies, school supplies, clothing, personal electronics, and room decorations. Don't bring candles, halogen lamps, cooking appliances with exposed heating elements, pets (except fish in small tanks), or weapons. A complete packing list is available on our housing website.",
    keywords: ["bring", "packing", "items", "supplies", "move in"],
    category: "Housing",
  },
  {
    id: "off-campus-housing",
    question: "Can you help me find off-campus housing?",
    answer:
      "Our Off-Campus Housing Office maintains listings of available apartments, houses, and rooms for rent near campus. They also offer resources on leases, roommate matching, transportation options, and tenant rights. We host Off-Campus Housing Fairs each semester where local property managers showcase available units.",
    keywords: ["off-campus", "apartment", "rent", "live off campus", "commute"],
    category: "Housing",
  },
  {
    id: "housing-during-breaks",
    question: "Can I stay in my residence hall during breaks?",
    answer:
      "Most residence halls close during winter and spring breaks, though some remain open for international students and those with special circumstances (additional fees apply). All halls remain open during shorter breaks like Thanksgiving. Summer housing is available in designated buildings for students taking summer courses.",
    keywords: ["breaks", "holiday", "vacation", "winter break", "summer"],
    category: "Housing",
  },
  {
    id: "residence-hall-staff",
    question: "Who works in the residence halls?",
    answer:
      "Each residence hall has a professional Residence Director (RD) and student Resident Assistants (RAs) who live in the building. They provide community building, educational programming, policy enforcement, conflict resolution, and emergency response. Front desk staff, maintenance personnel, and custodians also support residential communities.",
    keywords: ["residence staff", "ra", "resident assistant", "hall director", "support"],
    category: "Housing",
  },
  {
    id: "special-housing",
    question: "Do you have special interest housing?",
    answer:
      "Yes, we offer Living-Learning Communities where students with shared academic interests or identities live together. Options include Honors Housing, Global Village (international focus), STEM Community, Arts House, Wellness Community, and First-Generation Student Community. These communities offer specialized programming and faculty involvement.",
    keywords: ["special housing", "living learning", "themed", "community", "interest"],
    category: "Housing",
  },

  // Student Support Services (10 questions)
  {
    id: "tutoring",
    question: "What tutoring services are available?",
    answer:
      "We offer free tutoring through our Academic Success Center for most undergraduate courses. Services include one-on-one tutoring, group study sessions, and online tutoring. Tutors are trained peer educators who have excelled in the courses they tutor. Appointments can be scheduled online or during drop-in hours.",
    keywords: ["tutoring", "tutor", "academic help", "study assistance", "learning"],
    category: "Support",
  },
  {
    id: "counseling-services",
    question: "Do you offer mental health counseling?",
    answer:
      "Yes, our Counseling Center provides confidential mental health services including individual counseling, group therapy, crisis intervention, and psychiatric services. Students receive a number of free sessions per academic year. The center also offers workshops on stress management, mindfulness, and other wellness topics.",
    keywords: ["counseling", "mental health", "therapy", "psychological", "wellness"],
    category: "Support",
  },
  {
    id: "accessibility-services",
    question: "What accessibility services do you provide?",
    answer:
      "Our Accessibility Services Office ensures equal access for students with disabilities through accommodations like extended test time, note-taking assistance, sign language interpreters, accessible formats, and assistive technology. We also provide guidance on self-advocacy and transition to college for students with disabilities.",
    keywords: ["accessibility", "disability", "accommodations", "ada", "special needs"],
    category: "Support",
  },
  {
    id: "writing-center",
    question: "Is there a writing center?",
    answer:
      "Yes, our Writing Center offers one-on-one consultations at any stage of the writing process, from brainstorming to final revisions. Writing consultants provide feedback on essays, research papers, personal statements, and other written assignments. The center also offers workshops on various writing topics.",
    keywords: ["writing center", "writing help", "essays", "papers", "editing"],
    category: "Support",
  },
  {
    id: "first-generation-support",
    question: "What support is available for first-generation college students?",
    answer:
      "We offer a First-Generation Student Success Program that provides mentoring, workshops, social events, and resources specifically for students who are the first in their families to attend college. The program includes summer bridge options, peer mentors, specialized academic advising, and scholarship opportunities.",
    keywords: ["first generation", "first in family", "first gen", "new to college"],
    category: "Support",
  },
  {
    id: "lgbtq-support",
    question: "What LGBTQ+ resources do you offer?",
    answer:
      "Our LGBTQ+ Resource Center provides support services, educational programs, advocacy, and community building. Resources include a mentor program, support groups, gender-inclusive housing options, preferred name policies, LGBTQ+ scholarships, and ally training programs for the campus community.",
    keywords: ["lgbtq", "gay", "lesbian", "transgender", "queer", "pride"],
    category: "Support",
  },
  {
    id: "veterans-services",
    question: "What services do you offer for veteran students?",
    answer:
      "Our Veterans Resource Center assists with GI Bill benefits, provides academic support, and offers a community space for veteran students. Services include priority registration, specialized orientation, credit for military training, veteran-specific scholarships, and connections to community resources.",
    keywords: ["veteran", "military", "gi bill", "service member", "armed forces"],
    category: "Support",
  },
  {
    id: "childcare",
    question: "Do you provide childcare services?",
    answer:
      "Yes, we have an on-campus Child Development Center that provides childcare for children ages 6 weeks to 5 years. Priority is given to students, followed by faculty and staff. The center offers subsidized rates for students and operates on the academic calendar with some holiday and summer options.",
    keywords: ["childcare", "daycare", "children", "kids", "parenting"],
    category: "Support",
  },
  {
    id: "religious-services",
    question: "What religious and spiritual resources are available?",
    answer:
      "Our campus has a Multifaith Center that serves students of all religious and spiritual backgrounds. The center houses chaplains from various traditions, meditation spaces, and meeting rooms for religious student organizations. We respect all faith traditions and accommodate religious observances and dietary requirements.",
    keywords: ["religious", "spiritual", "faith", "worship", "prayer", "chaplain"],
    category: "Support",
  },
  {
    id: "legal-services",
    question: "Do you offer legal services for students?",
    answer:
      "Yes, our Student Legal Services office provides free or low-cost legal consultations for enrolled students. Services include advice on landlord-tenant issues, consumer problems, traffic violations, and minor criminal matters. The office also offers notary services and educational workshops on legal topics relevant to students.",
    keywords: ["legal", "lawyer", "attorney", "law", "rights", "advice"],
    category: "Support",
  },
]

export const quickReplies = [
  "What courses do you offer?",
  "How can I apply for admission?",
  "What are the tuition fees?",
  "What are the eligibility requirements?",
  "How long are the courses?",
  "Tell me about your campus",
  "How can I contact the university?",
]

export const categories = [
  "General",
  "Admissions",
  "Courses",
  "Fees",
  "Campus Life",
  "International",
  "Career",
  "Academic",
  "Housing",
  "Support",
]

