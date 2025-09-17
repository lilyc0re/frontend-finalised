"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, MessageSquare } from "lucide-react"

interface SuccessPageProps {
  onBackToDashboard: () => void
  onUploadAnother: () => void
}

export function SuccessPage({ onBackToDashboard, onUploadAnother }: SuccessPageProps) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-blue-900 mb-2">Comment Successfully Submitted!</CardTitle>
              <p className="text-gray-600">
                Thank you for your valuable feedback. Your comment has been received and will be reviewed by our policy
                analysis team.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Your comment will be analyzed for sentiment and key themes</li>
                  <li>• It may be featured in the highlighted comments section</li>
                  <li>• You'll receive updates on the legislation's progress</li>
                  <li>• Your feedback helps shape better policy decisions</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button onClick={onBackToDashboard} className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>

                <Button
                  onClick={onUploadAnother}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 w-full bg-transparent"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Submit Another Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Card */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">Stay Engaged</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Track Your Impact</h5>
                <p className="text-gray-600">
                  Visit the Analytics section to see how your comments contribute to the overall sentiment analysis.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Get Notified</h5>
                <p className="text-gray-600">
                  Enable notifications in your profile settings to stay updated on new legislation and policy changes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
