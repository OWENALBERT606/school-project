"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

// In a real application, you would fetch this data from your database
const data = [
  { name: "Web Development", value: 120, color: "#8884d8" },
  { name: "Databases", value: 45, color: "#82ca9d" },
  { name: "DevOps", value: 28, color: "#ffc658" },
  { name: "Mobile", value: 35, color: "#ff8042" },
  { name: "AI/ML", value: 15, color: "#0088fe" },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="font-medium">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="text-xs text-muted-foreground">{`${Math.round(payload[0].percent * 100)}% of total`}</p>
      </div>
    )
  }

  return null
}

export function CategoryDistribution() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: entry.color }} />
            <span className="text-xs">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

