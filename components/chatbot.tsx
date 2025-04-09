"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { chatbotResponses, quickReplies, categories } from "@/data/chatbot-data"
import { courses } from "@/data/courses"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const welcomeResponse = chatbotResponses.find((r) => r.id === "welcome")
      if (welcomeResponse) {
        setMessages([
          {
            id: Date.now().toString(),
            text: welcomeResponse.answer,
            sender: "bot",
          },
        ])
      }
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = (text: string = input) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setSelectedCategory(null)

    // Find response based on keywords
    setTimeout(() => {
      const lowerText = text.toLowerCase()

      // Check for course specific questions
      if (lowerText.includes("course") || lowerText.includes("program")) {
        // Check if asking about a specific course
        const courseMatch = courses.find(
          (course) =>
            lowerText.includes(course.courseName.toLowerCase()) || lowerText.includes(course.id.toLowerCase()),
        )

        if (courseMatch) {
          // Check what aspect of the course they're asking about
          let responseText = ""

          if (lowerText.includes("duration") || lowerText.includes("how long")) {
            responseText = `The ${courseMatch.courseName} program is ${courseMatch.duration} in duration.`
          } else if (lowerText.includes("eligibility") || lowerText.includes("requirements")) {
            responseText = `To be eligible for the ${courseMatch.courseName} program, you need: ${courseMatch.eligibility}.`
          } else if (lowerText.includes("fee") || lowerText.includes("cost") || lowerText.includes("tuition")) {
            responseText = `The tuition fee for ${courseMatch.courseName} is ${courseMatch.fees}.`
          } else if (
            lowerText.includes("syllabus") ||
            lowerText.includes("subjects") ||
            lowerText.includes("curriculum")
          ) {
            responseText = `The ${courseMatch.courseName} program includes these key subjects: ${courseMatch.syllabus.join(", ")}.`
          } else {
            responseText = `${courseMatch.courseName}: ${courseMatch.description} It's a ${courseMatch.duration} program with tuition of ${courseMatch.fees}. Eligibility: ${courseMatch.eligibility}.`
          }

          const botResponse: Message = {
            id: Date.now().toString(),
            text: responseText,
            sender: "bot",
          }

          setMessages((prev) => [...prev, botResponse])
          return
        }
      }

      // General responses
      const matchedResponse = chatbotResponses.find((response) =>
        response.keywords.some((keyword) => lowerText.includes(keyword)),
      )

      const botResponse: Message = {
        id: Date.now().toString(),
        text: matchedResponse
          ? matchedResponse.answer
          : "I'm sorry, I don't have information on that topic. Would you like to know about our courses, admission process, or campus facilities?",
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setShowCategories(false)

    // Get questions for this category
    const categoryQuestions = chatbotResponses.filter((response) => response.category === category).slice(0, 5) // Limit to 5 questions per category
  }

  const getQuestionsForCategory = (category: string) => {
    return chatbotResponses
      .filter((response) => response.category === category)
      .slice(0, 5) // Limit to 5 questions per category
      .map((response) => response.question)
  }

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-xl flex flex-col max-h-[70vh] border border-gray-200">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">University Assistant</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.sender === "user" ? "ml-auto bg-primary text-white" : "mr-auto bg-gray-100 text-gray-800"
                } rounded-lg p-3 max-w-[80%]`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Categories */}
          <div className="px-4 pb-2">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-gray-900 py-2"
            >
              <span>Browse by category</span>
              {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showCategories && (
              <div className="grid grid-cols-2 gap-2 mb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 text-gray-700 transition-colors text-left"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {selectedCategory && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold text-gray-500 mb-1">{selectedCategory} Questions:</h4>
                <div className="flex flex-col gap-1">
                  {getQuestionsForCategory(selectedCategory).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSendMessage(question)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 text-gray-700 transition-colors text-left"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {messages.length > 0 && messages.length < 3 && !selectedCategory && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" aria-label="Send message">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

