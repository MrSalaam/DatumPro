import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Calendar,
  Plus,
  LayoutDashboard,
  Users,
  Mail,
  CalendarDays,
  BarChart3,
  Settings,
  HelpCircle,
  MoreHorizontal,
  LogOut,
  ClipboardList,
  GitPullRequest,
  Eclipse,
  QrCode,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
  Target,
  
  
  FileText,
  Zap,
  ChevronDown,
  CreditCard,
  Filter,
  History,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  AlertTriangle,
  Menu,
  X,
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const currentDate = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Mock data
    const data = [
      { name: "Development", value: 35 },
      { name: "Testing", value: 25 },
      { name: "Design", value: 20 },
      { name: "Meetings", value: 15 },
      { name: "Documentation", value: 5 },
    ];

    

  // Loading animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
   
    }, 1500);


    const timer = setTimeout(() => setLoading(false), 2000); // simulate fetch
    return () => clearTimeout(timer);
  }, []);

  const mainMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'employees', name: 'Team', icon: Users },
    { id: 'projects', name: 'Projects', icon: Target },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'mail', name: 'Messages', icon: Mail, badge: 12 },
    { id: 'tasks', name: 'Tasks', icon: ClipboardList },  // NEW
    { id: 'Requests', name: 'Requests', icon: GitPullRequest  },  // NEW
    { id: 'history', name: 'Order History', icon: History  },  // NEW
  ];

  const preferenceItems = [
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'help', name: 'Help Center', icon: HelpCircle },
    { id: 'billing', name: 'Billing', icon: CreditCard }, // NEW
    { id: 'support', name: 'Support', icon: HelpCircle }, // NEW
  ];

  const stats = [
    { 
      id: 1, 
      title: 'Total Revenue', 
      value: '$84,420', 
      change: '+12.5%', 
      trend: 'up', 
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    { 
      id: 2, 
      title: 'Active Users', 
      value: '12,847', 
      change: '+8.2%', 
      trend: 'up', 
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    { 
      id: 3, 
      title: 'Conversion Rate', 
      value: '3.24%', 
      change: '-2.1%', 
      trend: 'down', 
      icon: TrendingUp,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    { 
      id: 4, 
      title: 'Response Time', 
      value: '1.2s', 
      change: '+0.3s', 
      trend: 'down', 
      icon: Zap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'Sarah Chen', action: 'completed project', project: 'Mobile App Redesign', time: '2 min ago', avatar: 'SC' },
    { id: 2, user: 'Marcus Johnson', action: 'submitted report', project: 'Q4 Analysis', time: '15 min ago', avatar: 'MJ' },
    { id: 3, user: 'Elena Rodriguez', action: 'started task', project: 'Database Migration', time: '1 hour ago', avatar: 'ER' },
    { id: 4, user: 'David Kim', action: 'commented on', project: 'API Documentation', time: '3 hours ago', avatar: 'DK' }
  ];

 

  const teamMembers = [
    { id: 1, name: 'Alice', role: 'UI Designer', online: true, tasks: 49, avatar: "/images/alice.jpg"},
    { id: 2, name: 'John', role: 'Frontend Dev', online: true, tasks: 76, avatar: "/images/john.jpg" },
    { id: 3, name: 'Sophia', role: 'QA Engineer', online: false, tasks: 6, avatar: "/images/sophia.jpg" },
    { id: 4, name: 'Malik', role: 'Backend Dev', online: true, tasks: 100, avatar: "/images/malik.jpg" },
    { id: 5, name: 'James', role: 'Brand Designer', online: true, tasks: 0, avatar: "/images/james.jpg"},
    { id: 6, name: 'Bayo', role: 'Network Engineer', online: true, tasks: 25, avatar: "/images/bayo.jpg"},
    { id: 7, name: 'Grace', role: 'Manger', online: false, tasks: 47, avatar: "/images/grace.jpg" },
  ];

  const notifications = [
    { id: 1, message: "Your payment was successful!", time: "2 min ago", type: "success" },
    { id: 2, message: "Server maintenance scheduled for tonight.", time: "15 min ago", type: "info" },
    { id: 3, message: "Your subscription will expire soon.", time: "1 hr ago", type: "warning" },
    { id: 4, message: "New feature: Dark Mode is now available!", time: "3 hrs ago", type: "info" },
    { id: 5, message: "Password changed successfully.", time: "5 hrs ago", type: "success" },
  ];

  const recentProjects = [
    { id: 1, name: 'E-commerce Website', client: 'Nike', status: 'In Progress', progress: 75, deadline: 'Sep 30' },
    { id: 2, name: 'Mobile App', client: 'Tesla', status: 'Review', progress: 50, deadline: 'Oct 10' },
    { id: 3, name: 'Landing Page', client: 'Airbnb', status: 'Planning', progress: 20, deadline: 'Nov 15' },
    { id: 4, name: 'Dashboard', client: 'Moniepoint', status: 'Review', progress: 55, deadline: 'Oct 5'},
    { id: 5, name: 'Quiz App', client: 'Frest Tutor', status: 'Almost done', progress: 98, deadline: 'Oct 1'},
  ];


  const fullText = "Welcome back, Olayinka"; 
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(5); 

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === fullText.length) {
        setIsDeleting(true);
        setSpeed(50); // Faster deleting
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setSpeed(80);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, speed, fullText]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-menu-btn')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-600 rounded-full animate-spin border-t-[#F6FF80]"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-[#F6FF80]/50"></div>
          </div>
          <div className="text-[#F6FF80] font-semibold animate-pulse">Loading Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white font-sans overflow-hidden relative">
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        sidebar fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1E1E1E] border-r border-gray-800 
        flex flex-col flex-shrink-0 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>


      <div className="flex-1 overflow-y-auto"> 

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 mb-8 ml-4 pt-10 animate-fade-in">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F6FF80] to-yellow-300 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <Eclipse size={20}  className="text-black animate-pulse" />
              </div>
              <span className="text-xl font-bold text-[#F6FF80] transition-colors group-hover:text-yellow-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Datum Pro
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Menu */}
        <div className="px-6 flex-1 space-y-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 ml-4 font-medium">
            Main Menu
          </h3>
          <nav className="space-y-1">
            {mainMenuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="relative transform transition-all duration-300 ease-out"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: `slideInLeft 0.6s ease-out forwards ${index * 100}ms`
                  }}
                >
                  {activeMenu === item.id && (
                    <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-[#F6FF80] to-yellow-300 rounded-r-full transition-all duration-300"></div>
                  )}
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:translate-x-2 group ${
                      activeMenu === item.id
                        ? 'bg-gradient-to-r from-[#F6FF80]/20 to-[#F6FF80]/10 text-[#F6FF80] shadow-lg shadow-[#F6FF80]/10'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        size={20} 
                        className={`transition-all duration-300 group-hover:scale-110 ${
                          activeMenu === item.id ? 'animate-pulse' : ''
                        }`} 
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>

                    {item.badge && (
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white animate-bounce">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        <div className='border-t border-gray-800 my-6 mx-6'></div>

      

        {/* Preferences */}
        <div className="px-6 mb-8">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 ml-4 font-medium">
            Preferences
          </h3>
          <nav className="space-y-1">
            {preferenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative">
                  {activeMenu === item.id && (
                    <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-[#F6FF80] to-yellow-300 rounded-r-full"></div>
                  )}
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:translate-x-1 group ${
                      activeMenu === item.id
                        ? 'bg-gradient-to-r from-[#F6FF80]/20 to-[#F6FF80]/10 text-[#F6FF80]'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    <Icon size={20} className="transition-all duration-300 group-hover:scale-110" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

      </div>

        {/* User Section */}
        <div className="p-6 border-t border-gray-800 sticky bottom-0 bg-[#1E1E1E]">
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img className='w-full h-full object-cover' src='/images/yinka.jpg' alt="User"/>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white truncate">Yinka Salaam</p>
        <p className="text-xs text-gray-400 truncate">Project Manager</p>
      </div>
      <button className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110">
        <LogOut size={18} />
      </button>
    </div>
  </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
        {/* Header */}
        <header className="bg-[#1E1E1E] px-4 sm:px-6 py-4 pt-8 flex-shrink-0 border-b border-gray-800">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="mobile-menu-btn lg:hidden p-2 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <Menu size={20} />
            </button>

            {/* Search Bar */}
            {/* Search Bar */}
<div className="relative flex-1 max-w-[180px] sm:max-w-md lg:max-w-2xl group mx-2 sm:mx-4 lg:mr-6">
  <Search
    className="absolute left-3 z-1 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#F6FF80] animate-pulse"
    size={20}
  />
  <input
    type="text"
    placeholder="Search"
    className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#F6FF80] focus:ring-2 focus:ring-[#F6FF80]/20 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
  />
</div>




            {/* Header Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Notification */}
              <div className="relative group">
                <button className="p-2  sm:p-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <Bell size={18} sm:size={20} />
                </button>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
              </div>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 sm:p-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {isDarkMode ? <Sun size={18} sm:size={20} className="animate-spin-slow" /> : <Moon size={18} sm:size={20}/>}
              </button>

              {/* Calendar - Hidden on small screens */}
              <div className="hidden md:flex items-center space-x-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
                <Calendar size={20} />
                <span className="text-sm font-medium">
                  {monthNames[currentDate.getMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()}
                </span>
              </div>

              {/* Create Button */}
              <button className="flex items-center  px-4 lg: gap-2   sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#F6FF80] to-yellow-300 text-black rounded-xl hover:shadow-lg hover:shadow-[#F6FF80]/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-semibold text-sm">
                <Plus size={16} sm:size={20} className='animate-pulse' />
                <span className="hidden  sm:inline">Create</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-[#1E1E1E] via-[#1A1A1A] to-[#1E1E1E] overflow-auto min-w-0">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {displayText}
              <span className="inline-block w-1 bg-yellow-300 animate-pulse ml-1"></span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Here's what's happening with your projects today</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.id} 
                  className={`bg-[#1E1E1E] backdrop-blur-sm border ${stat.borderColor} rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group cursor-pointer animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 sm:p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} sm:size={24} className={stat.color} />
                    </div>
                    <div className={`flex items-center text-xs sm:text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.trend === 'up' ? <ArrowUpRight size={14} sm:size={16} /> : <ArrowDownRight size={14} sm:size={16} />}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-xs sm:text-sm mb-1">{stat.title}</h3>
                  <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 min-w-0">
            {/* Left Section */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6 min-w-0">
           {/* Productivity Chart */}

<div className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300 animate-fade-in-up">
  {/* Header */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-3 sm:space-y-0">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#F6FF80]/20 rounded-lg">
        <BarChart3 size={20} className="text-[#F6FF80]" />
      </div>
      <h4 className="text-lg sm:text-xl font-semibold">Productivity Analytics</h4>
    </div>
    <div className="flex items-center space-x-2">
      <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700/50 rounded-lg text-sm hover:bg-gray-700 transition-colors">
        <Filter size={14} />
        <span className="hidden sm:inline">Filter</span>
        <ChevronDown size={14} />
      </button>
      <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
        <Download size={14} />
      </button>
    </div>
  </div>

  {/* Content */}
  <div className="relative">
    {loading ? (
      <div className="h-48 sm:h-64 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg flex flex-col items-center justify-center space-y-4">
        <div className="w-8 h-8 border-2 border-[#F6FF80] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-400 font-medium text-sm">Loading Analytics...</span>
      </div>
    ) : (
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Chart Container */}
        <div className="w-full lg:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={1}
                animationBegin={0}
                animationDuration={50}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#F6FF80", "#60a5fa", "#4ade80", "#f87171", "#a78bfa"][index % 5]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#f9fafb"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/2 space-y-2">
          {data.map((item, index) => {
            const colors = ["#F6FF80", "#60a5fa", "#4ade80", "#f87171", "#a78bfa"];
            return (
              <div key={item.name} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors[index % 5] }}
                  ></div>
                  <span className="text-sm text-gray-200">{item.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-white">{item.value}%</span>
                  <div className="w-12 bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full"
                      style={{ 
                        backgroundColor: colors[index % 5],
                        width: `${item.value}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
</div>


              {/* Recent Activity */}
              <div className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Activity size={20} sm:size={24} className="text-blue-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold">Recent Activity</h4>
                  </div>
                  <button className="text-[#F6FF80] hover:text-yellow-300 transition-colors text-sm font-medium">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={activity.id} 
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-102 cursor-pointer animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold text-white">{activity.user}</span>{' '}
                          <span className="text-gray-400">{activity.action}</span>{' '}
                          <span className="font-medium text-[#F6FF80]">{activity.project}</span>
                        </p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock size={12} className="mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

              {/* ✅ NEW: Recent Projects */}
            <div className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Recent Projects</h4>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                      <div key={project.id} className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/40 transition">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-white text-sm sm:text-base">{project.name}</h5>
                          <span className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-700 text-gray-300">{project.status}</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">Client: {project.client}</p>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div className="bg-[#F6FF80] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <p className="text-xs text-gray-500">Deadline: {project.deadline}</p>
                      </div>
                    ))}
              </div>
            </div>


                        {/* Team Status */}
            <div className="bg-[#1E1E1E] border border-gray-700 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-semibold text-white">Team Status</h4>
                <span className="text-xs text-gray-400">Active: {teamMembers.filter(m => m.online).length}/{teamMembers.length}</span>
              </div>

              {/* Members List */}
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-[#2A2A2A] hover:bg-[#333333] transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-600"
                  >
                    {/* Left Section: Avatar + Info */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      {/* Avatar */}
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {member.online && (
                          <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 border-2 border-[#2A2A2A] rounded-full"></span>
                        )}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-100">{member.name}</p>
                        <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 bg-gray-700 rounded-full text-gray-300">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Right Section: Progress + Actions */}
                    <div className="flex flex-col items-end gap-1">
                      {/* Progress Bar */}
                      <div className="w-16 sm:w-20 bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        {(() => {
                          const maxTasks = Math.max(...teamMembers.map(m => m.tasks));
                          const progress = (member.tasks / maxTasks) * 100;
                          const color = progress > 75 ? "bg-green-500" : progress > 40 ? "bg-yellow-400" : "bg-red-500";
                          return (
                            <div
                              className={`h-1.5 ${color}`}
                              style={{ width: `${progress}%` }}
                            ></div>
                          );
                        })()}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[9px] sm:text-[10px] text-gray-400">{member.tasks} tasks completed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


              {/* Notifications */}
              <div className="bg-[#1E1E1E] border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-semibold tracking-wide text-white">Notifications</h4>
                    {/* Unread Badge */}
                    <span className="bg-[#F6FF80] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                      {notifications.filter((n) => !n.read).length}
                    </span>
                  </div>
                  <button className="text-sm text-[#F6FF80] hover:text-yellow-300 transition-colors">
                    Clear All
                  </button>
                </div>

                {/* Notifications List */}
                <div className="space-y-3">
                  {notifications.map((note) => (
                    <div
                      key={note.id}
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#2A2A2A] hover:bg-[#333333] transition-all duration-300 border border-transparent hover:border-gray-600"
                    >
                      {/* Icon for type */}
                      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700">
                        {note.type === 'success' && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />}
                        {note.type === 'warning' && <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />}
                        {note.type === 'info' && <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />}
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm text-gray-200 mb-1">{note.message}</p>
                        <span className="text-xs text-gray-500">{note.time}</span>
                      </div>

                      {/* Optional Action Button */}
                      <button className="text-gray-500 hover:text-gray-300 transition-colors text-xs">
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            {/* Right Section */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              {/* My Projects Card */}
              <div className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Target size={18} sm:size={20} className="text-green-400" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold">Active Projects</h4>
                  </div>
                  <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-white transition-colors" size={18} sm:size={20} />
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Website Redesign', progress: 85, color: 'bg-[#F6FF80]', textColor: 'text-[#F6FF80]' },
                    { name: 'Mobile App', progress: 62, color: 'bg-blue-400', textColor: 'text-blue-400' },
                    { name: 'API Integration', progress: 40, color: 'bg-purple-400', textColor: 'text-purple-400' },
                    { name: 'Database Migration', progress: 15, color: 'bg-red-400', textColor: 'text-red-400' }
                  ].map((project, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white text-sm">{project.name}</span>
                        <span className={`text-sm font-bold ${project.textColor}`}>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${project.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${project.progress}%`,
                            animation: `fillBar 2s ease-out ${index * 300}ms forwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-[#2E2E2E] transition-all duration-300 animate-fade-in-up">
                <h4 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
                  <Zap size={18} sm:size={20} className="text-yellow-400 mr-2" />
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'New Task', icon: Plus, color: 'bg-green-500/20 text-green-400' },
                    { label: 'Schedule', icon: Calendar, color: 'bg-blue-500/20 text-blue-400' },
                    { label: 'Message', icon: Mail, color: 'bg-purple-500/20 text-purple-400' },
                    { label: 'Report', icon: FileText, color: 'bg-orange-500/20 text-orange-400' },
                    { label: 'Analytics', icon: BarChart3, color: 'bg-red-500/20 text-red-400'},
                    { label: 'Team', icon: Users, color: 'bg-blue-300/20 text-blue-200'}

                  ].map((action, index) => (
                    <button
                      key={index}
                      className={`p-3 ${action.color} rounded-lg hover:scale-105 transition-all duration-300 flex flex-col items-center space-y-2 animate-fade-in-up`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <action.icon size={16} sm:size={20} />
                      <span className="text-xs font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes growUp {
          from { height: 0%; }
          to { height: var(--target-height); }
        }
        
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;