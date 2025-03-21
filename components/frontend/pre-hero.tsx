import React from 'react';
import { TrendingUp, MessageCircle, BookOpen, Award, Leaf, Check, CheckCheck } from 'lucide-react';
import Link from 'next/link';

export default function PreHero({trendingQuestions,users,trendingArticles,trendingDiscussions}:{trendingQuestions:any,users:any,trendingArticles:any,trendingDiscussions:any}) {
  return (
    <div className="min-h-screen px-4 md:px-12 bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Background */}
      <div 
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <h1 className="text-4xl font-bold">AgroConnect</h1>
            </div>
            <p className="text-xl">Growing Knowledge, Harvesting Success</p>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Content</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trending Questions */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Trending Questions</h3>
            </div>
            <ul className="space-y-3">
              {trendingQuestions.slice(0,4).map((item:any,i:any)=>{
                return(
                  <li key={item.id} className="text-gray-600">
                    <Link className='flex hover:text-green-950' href={`/qa/${item.id}`}> <CheckCheck/>
                      {item.title.split(" ").slice(0, 10).join(" ") + (item.title.split(" ").length > 10 ? "..." : "")}
</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Top Discussions */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Top Discussions</h3>
            </div>
            <ul className="space-y-3">
            {trendingDiscussions.slice(0,4).map((item:any,i:any)=>{
                return(
                  <li key={item.id} className="text-gray-600">
                    <Link className='flex hover:text-green-950' href={`/community/${item.id}`}> <CheckCheck/>
                      {item.title.split(" ").slice(0, 10).join(" ") + (item.title.split(" ").length > 10 ? "..." : "")}
</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Featured Articles */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Featured Articles</h3>
            </div>
            <ul className="space-y-3">
            {trendingArticles.slice(0,4).map((item:any,i:any)=>{
                return(
                  <li key={item.id} className="text-gray-600">
                    <Link className='flex hover:text-green-950' href={`/kb/${item.id}`}> <CheckCheck/>
                      {item.title.split(" ").slice(0, 10).join(" ") + (item.title.split(" ").length > 10 ? "..." : "")}
</Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* User Spotlights */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">User Spotlights</h3>
            </div>
            <ul className="space-y-3">
              {
                users.slice(0,4).map((user:any,i:any)=>{
                  return(
                    <li key={user.id} className="flex items-center gap-2">
                <img src={user.image} 
                     className="w-8 h-8 rounded-full" 
                     alt="Farmer John" />
                <span className="text-gray-600">{user.name} - {user.jobTitle}</span>
              </li>
                  )
                })
              }
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

