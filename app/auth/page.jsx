import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-purple-500 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2">Welcome to VoiceRecruit AI</h2>
          <p className="text-purple-200 text-center mb-8">Sign in to access your recruitment dashboard</p>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-100 block">Email</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full px-3 py-2 bg-white/20 border border-purple-400/30 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-purple-100 block">Password</label>
                <a href="#" className="text-xs text-purple-300 hover:text-white">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-3 py-2 bg-white/20 border border-purple-400/30 rounded-md text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                className="h-4 w-4 bg-purple-700 border-purple-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-purple-200">
                Remember me
              </label>
            </div>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-colors">
              Sign in
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-purple-200">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-purple-300 hover:text-white">
                Sign up
              </a>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-purple-500/30">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="flex-1 border-purple-400/30 text-purple-100 hover:bg-purple-500/20">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
              <Button variant="outline" className="flex-1 border-purple-400/30 text-purple-100 hover:bg-purple-500/20">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}