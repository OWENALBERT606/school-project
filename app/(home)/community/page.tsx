// import { DiscussionList } from "@/components/discussion-list"
// import { NewDiscussionForm } from "@/components/new-discussion-form"
// import { CategoryFilters } from "@/components/category-filters"
import { getAllCategories } from "@/actions/categories";
import { getAllDiscussions } from "@/actions/discussions";
import { getAllSubCategories } from "@/actions/subcategories";
import { getAllTopics } from "@/actions/topics";
import CommunityCategoryFilters from "@/components/frontend/discussions/categories-filters";
import { CategoryFilters } from "@/components/frontend/discussions/category-filters"
import { DiscussionList } from "@/components/frontend/discussions/discussion-list"
import { NewDiscussionForm } from "@/components/frontend/discussions/new-discussion-form"
import PopularTopics from "@/components/frontend/discussions/popular-topics";
import RecentDiscussion from "@/components/frontend/discussions/recent-discussions";
import { authOptions } from "@/config/auth";
import { SubCategoryProps, TopicProps } from "@/types/types";
import { Category, Discussion, SubCategory, Topic } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link"

export default async function Page() {
    const discussions: Discussion[] = (await getAllDiscussions()) || [];
     const topicsData: TopicProps[] = (await getAllTopics()) || [];

     const categories: Category[] = (await getAllCategories()) || [];

     const subcategories: SubCategory[] = (await getAllSubCategories()) || [];
    //  const sortedTopics = topicsData.sort((a, b) => 
    //   (b.discussions?.length || 0) - (a.discussions?.length || 0)
    // );
    
    // const topTopics = sortedTopics.slice(0, 5);
    
      const topics= topicsData.map((item:any,i:any)=>{
        return(
          {
            label:item.title,
            value:item.id
          }
        )
      })
    
      const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen mx-auto px-4 md:px-12 lg:px-24 bg-slate-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewDiscussionForm session={session} topics={topics}/>
            <div className="mt-8">
              <RecentDiscussion discussions={discussions}/>
              <CategoryFilters categories={categories} subcategories={subcategories} />
              <DiscussionList discussions={discussions}  />
            </div>
          </div>
          <div className="hidden lg:block">
           <PopularTopics sortedTopics={topicsData}/>

            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
              <p className="text-gray-600">
                Please keep discussions respectful and on-topic. Share your knowledge and experiences to help fellow
                farmers and agricultural enthusiasts.
              </p>
            </div>

            <CommunityCategoryFilters subcategories={subcategories}/>
          </div>
        </div>
      </main>
    </div>
  )
}

