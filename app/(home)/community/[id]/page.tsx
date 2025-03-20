import { DiscussionDetail } from "@/components/frontend/discussions/discussion-details";

export default function DiscussionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">AgriTalk</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:underline font-medium">
                Home
              </a>
              <a href="#" className="hover:underline font-medium">
                Topics
              </a>
              <a href="#" className="hover:underline font-medium">
                Resources
              </a>
              <a href="#" className="hover:underline font-medium">
                Events
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DiscussionDetail/>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">About the Author</h2>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Sarah Johnson"
                  className="rounded-full w-16 h-16 object-cover border"
                />
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Member since 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Small-scale organic farmer with 10 years of experience in sustainable agriculture. Specializes in
                vegetable production and soil health management.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Related Discussions</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-700 hover:underline">
                    Cover crops for improving soil structure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-700 hover:underline">
                    Companion planting strategies for small farms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-700 hover:underline">
                    Managing crop rotation with limited space
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AgriTalk</h3>
              <p className="text-green-100">
                A community platform for farmers and agricultural enthusiasts to share knowledge and experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-100 hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-green-100 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-green-100 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-600 mt-8 pt-6 text-center text-green-100">
            <p>&copy; 2025 AgriTalk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

