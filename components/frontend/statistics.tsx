"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, MessageSquare, CheckSquare, BookOpen, Sprout } from "lucide-react"

interface StatItemProps {
  icon: React.ElementType
  value: number
  label: string
}

const StatItem = ({ icon: Icon, value, label }: StatItemProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
    >
      <Icon className="w-8 h-8 mb-2 text-green-600" />
      <motion.span
        className="text-3xl font-bold text-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {value.toLocaleString()}
      </motion.span>
      <span className="text-sm text-slate-600">{label}</span>
    </motion.div>
  )
}

export default function AnimatedStatistics({users,articles,discussions,answers,questions}:{users:any,answers:any,questions:any,articles:any,discussions:any}) {
  const stats = [
    { icon: Users, value: users.length, label: "Registered Users" },
    { icon: MessageSquare, value: questions.length, label: "Questions Asked" },
    { icon: CheckSquare, value:answers.length, label: "Answers Provided" },
    { icon: Sprout, value:discussions.length, label: "Active Discussions" },
    { icon: BookOpen, value:articles.length, label: "Knowledge Base Articles" },
  ]

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-4 md:py-6 bg-slate-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-slate-900">
          Our Growing Community
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

