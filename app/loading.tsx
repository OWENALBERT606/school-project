// "use client";

import { LeafLoader } from "@/components/frontend/leaf-loader";

// import Logo from "@/components/global/Logo";

// export default function Loading() {
//   return <div className="loader">
//     <Logo/>
//   </div>;
// }


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <LeafLoader size={64} />
          </div>
        </div>

      </div>
    </div>
  )
}

