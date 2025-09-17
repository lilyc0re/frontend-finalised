"use client"

import { ThumbsUp, ThumbsDown, Calendar, Tag, MessageSquare } from "lucide-react"

interface Comment {
  id: number
  articleTitle: string
  commentText: string
  category: string
  datePosted: string
  upvotes: number
  downvotes: number
  status: "approved" | "pending" | "rejected"
}

const mockComments: Comment[] = [
  {
    id: 1,
    articleTitle: "Healthcare Reform Bill 2024",
    commentText:
      "This bill addresses critical healthcare accessibility issues. I believe the proposed changes to insurance coverage will significantly benefit low-income families. However, more consideration should be given to rural healthcare providers.",
    category: "Healthcare",
    datePosted: "2024-01-15",
    upvotes: 24,
    downvotes: 3,
    status: "approved",
  },
  {
    id: 2,
    articleTitle: "Environmental Protection Act Amendment",
    commentText:
      "The environmental protections outlined in this amendment are essential for our future. The carbon emission targets are ambitious but necessary. I support the implementation timeline proposed.",
    category: "Environment",
    datePosted: "2024-01-12",
    upvotes: 18,
    downvotes: 7,
    status: "approved",
  },
  {
    id: 3,
    articleTitle: "Education Funding Initiative",
    commentText:
      "While I appreciate the increased funding for education, I'm concerned about the distribution methodology. Rural schools may not receive adequate support under the current proposal.",
    category: "Education",
    datePosted: "2024-01-10",
    upvotes: 12,
    downvotes: 2,
    status: "pending",
  },
  {
    id: 4,
    articleTitle: "Transportation Infrastructure Bill",
    commentText:
      "The focus on public transportation is commendable. However, the timeline for implementation seems unrealistic given current budget constraints. More phased approach would be beneficial.",
    category: "Transportation",
    datePosted: "2024-01-08",
    upvotes: 9,
    downvotes: 5,
    status: "approved",
  },
]

export function MyComments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-blue mb-2">My Comments</h1>
          <p className="text-gray-600">View and manage all your submitted comments</p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-navy-blue">{mockComments.length}</div>
            <div className="text-sm text-gray-600">Total Comments</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-green-600">
              {mockComments.filter((c) => c.status === "approved").length}
            </div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-yellow-600">
              {mockComments.filter((c) => c.status === "pending").length}
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">
              {mockComments.reduce((sum, c) => sum + c.upvotes, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Upvotes</div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {mockComments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg shadow-sm border p-6">
              {/* Comment Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy-blue mb-1">{comment.articleTitle}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(comment.datePosted).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{comment.category}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(comment.status)}`}>
                  {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                </span>
              </div>

              {/* Comment Text */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{comment.commentText}</p>
              </div>

              {/* Voting Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-medium">{comment.upvotes}</span>
                  </div>
                  <span className="text-gray-400">upvotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-red-500">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="font-medium">{comment.downvotes}</span>
                  </div>
                  <span className="text-gray-400">downvotes</span>
                </div>
                <div className="ml-auto">
                  <span className="text-sm text-gray-500">Net Score: +{comment.upvotes - comment.downvotes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no comments) */}
        {mockComments.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No comments yet</h3>
            <p className="text-gray-500 mb-4">You haven't submitted any comments yet.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Write Your First Comment
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
