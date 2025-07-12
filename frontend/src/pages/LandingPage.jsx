import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { 
  SunIcon, 
  MoonIcon, 
  ChartBarIcon, 
  UserIcon, 
  AcademicCapIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <AcademicCapIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">SynapMentor</h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-300" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                SynapMentor
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Your comprehensive mentoring and learning platform with advanced analytics, 
              session management, and glassmorphic design.
            </p>
            
            {/* CTA Button */}
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ChartBarIcon className="w-5 h-5 mr-2" />
              Launch Dashboard
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: ChartBarIcon,
                title: 'Advanced Analytics',
                description: 'Track your progress with detailed analytics and insights'
              },
              {
                icon: UserIcon,
                title: 'Profile Management',
                description: 'Comprehensive profile and verification system'
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Wallet & Payments',
                description: 'Integrated payment system and earnings tracking'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">System Online</span>
            </div>
            <p className="text-slate-300 text-sm">All systems operational and ready to use</p>
          </div>
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default React.memo(LandingPage)
