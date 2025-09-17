"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const sentimentData = [
  { name: "Positive", value: 1247, color: "hsl(var(--chart-1))" },
  { name: "Neutral", value: 892, color: "hsl(var(--chart-5))" },
  { name: "Negative", value: 708, color: "hsl(var(--chart-4))" },
]

export function SentimentChart() {
  const total = sentimentData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sentimentData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {sentimentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value} comments (${((value / total) * 100).toFixed(1)}%)`, "Count"]}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>
                {value}: {sentimentData.find((item) => item.name === value)?.value} comments
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
