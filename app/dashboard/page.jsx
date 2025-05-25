import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-700 text-white">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-purple-500 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
          </div>
          <span className="font-bold text-xl">VoiceRecruit AI</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-md px-4 py-2 text-black">
            Search...
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
            New Campaign
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Interview Dashboard</h1>
          <p className="text-purple-200">Manage your AI-powered interviews and screening calls</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              ),
              value: "12",
              label: "Active Campaigns",
              change: "+2 from last month",
              color: "bg-purple-500"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              ),
              value: "1,247",
              label: "Total Candidates",
              change: "+18% this month",
              color: "bg-green-500"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              ),
              value: "342",
              label: "Interviews Conducted",
              change: "+25% this month",
              color: "bg-orange-500"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              ),
              value: "78%",
              label: "Success Rate",
              change: "+5% improvement",
              color: "bg-blue-500"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.color} p-3 rounded-md`}>
                  {stat.icon}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-purple-200">{stat.label}</div>
              <div className="text-xs text-green-300 mt-2">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600">
              Schedule Interview
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              Review Candidates
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              Create Campaign
            </Button>
          </div>
        </div>

        {/* Recent Candidates and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Interviews</h2>
              <Button variant="outline" className="text-xs border-purple-400 text-purple-200 hover:bg-purple-700/50">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {/* Alex Johnson */}
              <div className="flex items-center justify-between p-4 bg-purple-700/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-medium">Alex Johnson</div>
                    <div className="text-sm text-purple-300">Senior Developer</div>
                    <div className="text-xs text-purple-300 mt-1">Full Interview</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-purple-300">Score</div>
                    <div className="font-bold">92%</div>
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                    Completed
                  </div>
                  <div className="text-sm text-purple-300">2 hours ago</div>
                </div>
              </div>
              
              {/* Sarah Wilson */}
              <div className="flex items-center justify-between p-4 bg-purple-700/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-medium">Sarah Wilson</div>
                    <div className="text-sm text-purple-300">Product Manager</div>
                    <div className="text-xs text-purple-300 mt-1">Phone Screening</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-purple-300">Score</div>
                    <div className="font-bold">85%</div>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                    In Progress
                  </div>
                  <div className="text-sm text-purple-300">4 hours ago</div>
                </div>
              </div>
              
              {/* Mike Chen */}
              <div className="flex items-center justify-between p-4 bg-purple-700/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-medium">Mike Chen</div>
                    <div className="text-sm text-purple-300">Data Scientist</div>
                    <div className="text-xs text-purple-300 mt-1">Full Interview</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                    Scheduled
                  </div>
                  <div className="text-sm text-purple-300">Tomorrow 2PM</div>
                </div>
              </div>
              
              {/* Emma Davis */}
              <div className="flex items-center justify-between p-4 bg-purple-700/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    E
                  </div>
                  <div>
                    <div className="font-medium">Emma Davis</div>
                    <div className="text-sm text-purple-300">UX Designer</div>
                    <div className="text-xs text-purple-300 mt-1">Phone Screening</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-purple-300">Score</div>
                    <div className="font-bold">88%</div>
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                    Completed
                  </div>
                  <div className="text-sm text-purple-300">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Scheduled Interviews</h2>
              <div className="space-y-4">
                <div className="p-3 bg-purple-700/30 rounded-lg">
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-purple-300">Frontend Developer</div>
                  <div className="text-xs text-purple-300 mt-1">Full Interview</div>
                  <div className="text-sm font-medium text-purple-200 mt-2">Today 3:00 PM</div>
                </div>
                
                <div className="p-3 bg-purple-700/30 rounded-lg">
                  <div className="font-medium">Lisa Brown</div>
                  <div className="text-sm text-purple-300">Marketing Manager</div>
                  <div className="text-xs text-purple-300 mt-1">Phone Screening</div>
                  <div className="text-sm font-medium text-purple-200 mt-2">Tomorrow 10:00 AM</div>
                </div>
                
                <div className="p-3 bg-purple-700/30 rounded-lg">
                  <div className="font-medium">Robert Taylor</div>
                  <div className="text-sm text-purple-300">DevOps Engineer</div>
                  <div className="text-xs text-purple-300 mt-1">Full Interview</div>
                  <div className="text-sm font-medium text-purple-200 mt-2">Dec 28, 2:00 PM</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold mb-6">Performance Overview</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Interview Success Rate</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-purple-700/50 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Candidate Satisfaction</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-purple-700/50 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Time Reduction</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="w-full bg-purple-700/50 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}