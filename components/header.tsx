"use client"

import type React from "react"

import { Search, HelpCircle, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  username?: string
}

export function Header({ username = "John Doe" }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Add your search logic here
      setShowSearch(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      <header className="bg-blue-100 border-b border-blue-200 px-6 py-4 relative z-40">
        <div className="flex items-center justify-between">
          {/* Left side - Empty for spacing */}
          <div className="w-32"></div>

          {/* Center - Title */}
          <h1 className="text-xl font-semibold text-blue-900 absolute left-1/2 transform -translate-x-1/2">
            Lexalytics - Sentiment Analysis
          </h1>

          {/* Right side - Icons and Username */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {showSearch ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, comments..."
                    className="w-64 px-3 py-2 text-sm border border-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSearch(false)
                      setSearchQuery("")
                    }}
                    className="ml-2 p-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-blue-200 rounded-md transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowHelp(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-blue-200 rounded-md transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
            </button>

            <div className="text-sm font-medium text-blue-900 ml-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
              {username}
            </div>
          </div>
        </div>
      </header>

      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-900">About Lexalytics</h3>
              <button onClick={() => setShowHelp(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong>Lexalytics</strong> is an advanced sentiment analysis platform designed for public consultation
                and legislative feedback.
              </p>
              <p>
                Our platform helps government agencies and organizations analyze public sentiment on proposed
                legislation, policies, and regulations through:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Real-time sentiment analysis of public comments</li>
                <li>Comprehensive article analysis and feedback tracking</li>
                <li>Community engagement metrics and insights</li>
                <li>Streamlined comment submission and moderation</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Use the search function to find specific articles or comments, and navigate through the sidebar to
                access different features.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
