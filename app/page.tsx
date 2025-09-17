"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DashboardContent } from "@/components/dashboard-content"
import { SignUpForm } from "@/components/sign-up-form"
import { LoginForm } from "@/components/login-form"
import { ArticleAnalysis } from "@/components/article-analysis"
import { UploadComment } from "@/components/upload-comment"
import { SuccessPage } from "@/components/success-page"
import { MyComments } from "@/components/my-comments"
import { Settings } from "@/components/settings"

type ViewType =
  | "dashboard"
  | "signup"
  | "login"
  | "article-analysis"
  | "upload-comment"
  | "success"
  | "my-comments"
  | "settings"

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("login")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  })

  const handleNavigation = (view: ViewType) => {
    setCurrentView(view)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentView("dashboard")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentView("login")
  }

  const handleUploadSuccess = () => {
    setCurrentView("success")
  }

  const handleBackToDashboard = () => {
    setCurrentView("dashboard")
  }

  const handleUploadAnother = () => {
    setCurrentView("upload-comment")
  }

  const handleUserUpdate = (updatedUser: typeof currentUser) => {
    setCurrentUser(updatedUser)
  }

  if (currentView === "signup") {
    return <SignUpForm onNavigateToLogin={() => handleNavigation("login")} />
  }

  if (currentView === "login") {
    return <LoginForm onNavigateToSignup={() => handleNavigation("signup")} onLogin={handleLogin} />
  }

  // Dashboard view with sidebar and header
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onLogout={handleLogout} onNavigate={handleNavigation} />
      <div className="flex-1 flex flex-col w-full">
        <Header username={currentUser.name} />
        {currentView === "article-analysis" ? (
          <ArticleAnalysis />
        ) : currentView === "upload-comment" ? (
          <UploadComment onSuccess={handleUploadSuccess} />
        ) : currentView === "success" ? (
          <SuccessPage onBackToDashboard={handleBackToDashboard} onUploadAnother={handleUploadAnother} />
        ) : currentView === "my-comments" ? (
          <MyComments />
        ) : currentView === "settings" ? (
          <Settings user={currentUser} onUserUpdate={handleUserUpdate} />
        ) : (
          <DashboardContent />
        )}
      </div>
    </div>
  )
}
