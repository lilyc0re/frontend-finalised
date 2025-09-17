"use client"

import { useState, useEffect } from "react"
import { Home, BarChart3, Upload, MessageSquare, Settings, LogOut } from "lucide-react"
import Image from "next/image"

interface SidebarProps {
  onLogout: () => void
  onNavigate: (view: string) => void
}

export function Sidebar({ onLogout, onNavigate }: SidebarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show sidebar when mouse is within 50px of left edge
      if (e.clientX <= 50) {
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="fixed left-0 top-0 w-12 h-full z-40" onMouseEnter={() => setIsVisible(true)} />

      <div
        className={`fixed left-0 top-0 w-64 h-screen bg-blue-50 border-r border-blue-200 flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseLeave={() => setIsVisible(false)}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-blue-200">
          <div className="flex items-center justify-center">
            <Image
              src="/images/lexalytics-logo.png"
              alt="Lexalytics Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => onNavigate("dashboard")}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            <button
              onClick={() => onNavigate("article-analysis")}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </button>

            <button
              onClick={() => onNavigate("upload-comment")}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
            >
              <Upload className="w-5 h-5" />
              <span className="font-medium">Upload a Comment</span>
            </button>
          </div>

          {/* My Profile Section */}
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-blue-800 uppercase tracking-wider mb-3">My Profile</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate("my-comments")}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">My Comments</span>
              </button>

              <button
                onClick={() => onNavigate("settings")}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </button>

              <button
                onClick={onLogout}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-100 transition-colors w-full text-left"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
