"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// In a real application, you would fetch this data from your database
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate some random data
    const questions = Math.floor(Math.random() * 10) + 1
    const answers = Math.floor(Math.random() * 20) + questions

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      questions,
      answers,
    })
  }

  return data
}

const data = generateData()

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="font-medium">{label}</p>
        <p className="text-xs text-blue-500">{`Questions: ${payload[0].value}`}</p>
        <p className="text-xs text-green-500">{`Answers: ${payload[1].value}`}</p>
      </div>
    )
  }

  return null
}

export function ActivityChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.split(" ")[1]}
          />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="questions" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
          <Area type="monotone" dataKey="answers" stackId="2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

