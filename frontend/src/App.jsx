import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

// Lazy load the dashboard for better performance
const GlassDashboard = React.lazy(() => import('./pages/GlassDashboard'))
// Import the fast-loading landing page
import LandingPage from './pages/LandingPage'

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading Dashboard...</p>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GlassDashboard />
            </Suspense>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
