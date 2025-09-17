"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, ThumbsDown, MessageCircle, User } from "lucide-react"

export function ArticleAnalysis() {
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")

  const handleSubmitComment = () => {
    // Handle comment submission
    console.log("Comment submitted:", { name, comment })
    setComment("")
    setName("")
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article Header */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  Draft Legislation: Digital Privacy Protection Act 2024
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Published: March 15, 2024</span>
                  <span>Category: Privacy & Technology</span>
                  <Badge variant="outline" className="text-blue-700 border-blue-300">
                    Open for Comments
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Executive Summary</h3>
                  <p className="mb-4">
                    The Digital Privacy Protection Act 2024 aims to strengthen individual privacy rights in the digital
                    age. This comprehensive legislation addresses data collection, storage, and usage by both private
                    companies and government entities.
                  </p>

                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Provisions</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Mandatory consent for all data collection activities</li>
                    <li>Right to data portability and deletion</li>
                    <li>Enhanced penalties for data breaches</li>
                    <li>Establishment of a Digital Privacy Commission</li>
                    <li>Regular privacy impact assessments for government agencies</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Implementation Timeline</h3>
                  <p className="mb-4">
                    The Act will be implemented in phases over 18 months, beginning with large corporations and
                    government agencies, followed by medium-sized businesses and finally small enterprises.
                  </p>

                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Public Consultation</h3>
                  <p>
                    We invite public comments on all aspects of this legislation. Your feedback will help shape the
                    final version of this important privacy protection framework.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Write Comment Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Write a Comment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Comment</label>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts on this legislation..."
                    className="w-full min-h-[120px]"
                  />
                </div>
                <Button onClick={handleSubmitComment} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Comment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Highlighted Comments Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Highlighted Comments</CardTitle>
                <p className="text-sm text-gray-600">Key feedback from the community</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Positive Comment */}
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-sm">Sarah Johnson</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Positive
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "This legislation is a crucial step forward in protecting citizen privacy. The phased implementation
                    approach is particularly well thought out."
                  </p>
                </div>

                {/* Negative Comment */}
                <div className="border-l-4 border-red-400 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-sm">Michael Chen</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      <ThumbsDown className="h-3 w-3 mr-1" />
                      Negative
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "The compliance costs for small businesses seem excessive. More support and resources should be
                    provided during the transition period."
                  </p>
                </div>

                {/* Neutral Comment */}
                <div className="border-l-4 border-gray-400 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-sm">Dr. Emily Rodriguez</span>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      Neutral
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "The Act addresses important issues but needs clearer definitions of 'sensitive data' and
                    'legitimate business interests'."
                  </p>
                </div>

                {/* Positive Comment */}
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-sm">Tech Industry Coalition</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Positive
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "We support the establishment of the Digital Privacy Commission. Clear regulatory guidance will
                    benefit both businesses and consumers."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comment Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Comment Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Comments</span>
                    <span className="font-semibold text-blue-900">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600">Positive</span>
                    <span className="font-semibold text-green-600">156 (63%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-600">Negative</span>
                    <span className="font-semibold text-red-600">67 (27%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Neutral</span>
                    <span className="font-semibold text-gray-600">24 (10%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
