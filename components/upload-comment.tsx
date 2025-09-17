"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

interface UploadCommentProps {
  onSuccess: () => void
}

export function UploadComment({ onSuccess }: UploadCommentProps) {
  const [formData, setFormData] = useState({
    articleName: "",
    name: "",
    category: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Comment submitted:", formData)
    onSuccess()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Write a Comment</h1>
          <p className="text-gray-600">Share your feedback on draft legislation and policy proposals.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Submit Your Comment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Article Name Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Article Name *</label>
                <Select onValueChange={(value) => handleInputChange("articleName", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an article to comment on" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-privacy-act">Digital Privacy Protection Act 2024</SelectItem>
                    <SelectItem value="ai-regulation-framework">AI Regulation Framework 2024</SelectItem>
                    <SelectItem value="cybersecurity-standards">National Cybersecurity Standards</SelectItem>
                    <SelectItem value="data-governance-policy">Data Governance Policy Update</SelectItem>
                    <SelectItem value="tech-innovation-bill">Technology Innovation Bill</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Your Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                  required
                />
              </div>

              {/* Category/Tag */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category/Tag</label>
                <Input
                  type="text"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  placeholder="e.g., Privacy, Security, Implementation"
                  className="w-full"
                />
              </div>

              {/* Your Comment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Comment *</label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => handleInputChange("comment", e.target.value)}
                  placeholder="Share your thoughts, concerns, or suggestions about this legislation..."
                  className="w-full min-h-[150px]"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Please be constructive and specific in your feedback. Your comment will be reviewed and may be
                  featured in the analysis.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                  Submit Comment
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Guidelines Card */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">Comment Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Be respectful and constructive in your feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Focus on specific aspects of the legislation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Provide evidence or examples to support your points</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Avoid personal attacks or inflammatory language</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Comments are subject to moderation and public disclosure</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
