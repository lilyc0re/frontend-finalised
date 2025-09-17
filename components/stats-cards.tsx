import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, TrendingUp, Users } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Total Comments",
      value: "2,847",
      change: "+12% from last week",
      icon: MessageSquare,
      trend: "up",
    },
    {
      title: "Active Drafts",
      value: "8",
      change: "3 pending review",
      icon: FileText,
      trend: "neutral",
    },
    {
      title: "Engagement Rate",
      value: "73%",
      change: "+5% from last month",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Unique Participants",
      value: "1,924",
      change: "+8% from last week",
      icon: Users,
      trend: "up",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
