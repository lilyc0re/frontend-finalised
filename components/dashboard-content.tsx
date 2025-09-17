import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, ThumbsUp, ThumbsDown } from "lucide-react"

export function DashboardContent() {
  // Sample data for articles and drafts
  const articles = [
    {
      id: 1,
      title: "Healthcare Reform Bill 2024",
      description:
        "Comprehensive healthcare reform proposal focusing on accessibility and affordability for all citizens.",
      comments: 156,
    },
    {
      id: 2,
      title: "Environmental Protection Act",
      description: "New legislation aimed at reducing carbon emissions and promoting sustainable energy practices.",
      comments: 89,
    },
    {
      id: 3,
      title: "Education Funding Initiative",
      description: "Proposal to increase funding for public schools and improve educational infrastructure.",
      comments: 234,
    },
  ]

  // Sample analytics data
  const stats = [
    { title: "Drafts", value: "12", icon: FileText, color: "text-blue-600" },
    { title: "Comments", value: "1,247", icon: MessageSquare, color: "text-gray-600" },
    { title: "Positive", value: "856", icon: ThumbsUp, color: "text-green-600" },
    { title: "Negative", value: "391", icon: ThumbsDown, color: "text-red-600" },
  ]

  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Articles and Drafts Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Articles and Drafts</h2>
          <div className="grid gap-4">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                      <div className="text-sm text-gray-500">{article.comments} comments</div>
                    </div>
                    <Button className="ml-4 bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Overall Analysis Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Overall Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Word Cloud Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Word Cloud</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center items-center gap-4 min-h-[300px]">
                {/* Sample word cloud words with different sizes */}
                <span className="text-4xl font-bold text-blue-600">healthcare</span>
                <span className="text-2xl font-semibold text-green-500">reform</span>
                <span className="text-3xl font-bold text-purple-500">education</span>
                <span className="text-xl font-medium text-orange-500">funding</span>
                <span className="text-2xl font-semibold text-red-500">environment</span>
                <span className="text-lg font-medium text-teal-500">sustainable</span>
                <span className="text-3xl font-bold text-indigo-500">policy</span>
                <span className="text-xl font-medium text-pink-500">citizens</span>
                <span className="text-2xl font-semibold text-yellow-600">accessibility</span>
                <span className="text-lg font-medium text-gray-600">infrastructure</span>
                <span className="text-2xl font-semibold text-cyan-500">protection</span>
                <span className="text-xl font-medium text-lime-500">initiative</span>
                <span className="text-lg font-medium text-rose-500">proposal</span>
                <span className="text-2xl font-semibold text-violet-500">legislation</span>
                <span className="text-xl font-medium text-amber-500">comprehensive</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
