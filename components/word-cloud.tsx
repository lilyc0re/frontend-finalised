"use client"

import { useState } from "react"

const wordData = [
  { text: "healthcare", size: 48, frequency: 234 },
  { text: "policy", size: 42, frequency: 198 },
  { text: "budget", size: 38, frequency: 167 },
  { text: "education", size: 36, frequency: 156 },
  { text: "infrastructure", size: 34, frequency: 143 },
  { text: "environment", size: 32, frequency: 132 },
  { text: "taxation", size: 30, frequency: 121 },
  { text: "employment", size: 28, frequency: 109 },
  { text: "housing", size: 26, frequency: 98 },
  { text: "transport", size: 24, frequency: 87 },
  { text: "digital", size: 22, frequency: 76 },
  { text: "innovation", size: 20, frequency: 65 },
  { text: "sustainability", size: 18, frequency: 54 },
  { text: "accessibility", size: 16, frequency: 43 },
  { text: "transparency", size: 14, frequency: 32 },
]

export function WordCloudComponent() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  return (
    <div className="w-full h-80 relative flex items-center justify-center bg-card rounded-lg p-4">
      <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-2">
        {wordData.map((word, index) => (
          <span
            key={index}
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              fontSize: `${word.size}px`,
              color: hoveredWord === word.text ? "hsl(var(--primary))" : `hsl(var(--chart-${(index % 3) + 1}))`,
              fontWeight: word.size > 30 ? "bold" : word.size > 20 ? "600" : "normal",
              opacity: hoveredWord && hoveredWord !== word.text ? 0.6 : 1,
            }}
            onMouseEnter={() => setHoveredWord(word.text)}
            onMouseLeave={() => setHoveredWord(null)}
            title={`${word.text}: mentioned ${word.frequency} times`}
          >
            {word.text}
          </span>
        ))}
      </div>

      {hoveredWord && (
        <div className="absolute bottom-2 left-2 bg-popover border border-border rounded px-2 py-1 text-xs text-popover-foreground">
          {hoveredWord}: {wordData.find((w) => w.text === hoveredWord)?.frequency} mentions
        </div>
      )}
    </div>
  )
}
