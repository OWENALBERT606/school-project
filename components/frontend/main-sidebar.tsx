import { Home, BookOpen, Users, Award, HelpCircle, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { MdQuestionMark } from 'react-icons/md'

interface MainSidebarProps {
  className?: string
}

export default function MainSidebar({ className }: MainSidebarProps) {
  return (
    <aside className={`bg-green-900 text-white dark:bg-gray-800 rounded-lg shadow-md p-4 ${className}`}>
      <nav className="space-y-2">
        <Link href="/" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/kb" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <BookOpen size={20} />
          <span>Knowledge Base</span>
        </Link>
        <Link href="/community" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <Users size={20} />
          <span>Community</span>
        </Link>
        <Link href="/help" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <HelpCircle size={20} />
          <span>Help Center</span>
        </Link>
        <Link href="/weather" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <HelpCircle size={20} />
          <span>Weather updates</span>
        </Link>
        <Link href="/market" className="flex items-center space-x-2 text-white-700 hover:text-indigo-600 dark:text-white-300 dark:hover:text-indigo-400 p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
          <HelpCircle size={20} />
          <span>Market Insights</span>
        </Link>
      </nav>
    </aside>
  )
}

