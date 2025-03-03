// "use client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search } from 'lucide-react'

// export default function QaHero() {
//   return (
//     <div className="bg-gradient-to-r from-green-800 to-green-950 text-white py-4 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <p className="mt-6 text-xl max-w-2xl mx-auto">
//           Your platform for collaborative learning. Ask questions, share knowledge, and grow together.
//         </p>
//         <div className="mt-10 max-w-xl mx-auto">
//           <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center space-x-2 mx-auto">
//             <Input
//               type="text"
//               placeholder="Search similar questions..."
//               className="flex-grow bg-white text-gray-900 placeholder-gray-500"
//             />
//             <Button type="submit" className="bg-green-500 hover:bg-green-400 text-white">
//               <Search className="h-4 w-4 mr-2" />
//               Search
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function QaHero() {
  return (
    <div
      className="relative text-white py-4 md:py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Farmstar - Empowering Farmers with satellite-based precision agriculture banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Agricultural Knowledge Hub</h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto">
          Your platform for collaborative learning. Ask questions, share knowledge, and grow together.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center space-x-2 mx-auto">
            <Input
              type="text"
              placeholder="Search similar questions..."
              className="flex-grow bg-white text-gray-900 placeholder-gray-500"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-400 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

