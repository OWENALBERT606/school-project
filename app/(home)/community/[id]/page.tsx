import { getAllDiscussions, getDiscussionById } from "@/actions/discussions";
import { getAllResponses } from "@/actions/responses";
import { DiscussionDetail } from "@/components/frontend/discussions/discussion-details";
import { authOptions } from "@/config/auth";
import { DiscussionProps, ResponseProps } from "@/types/types";
import { Discussion, Response } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function DiscussionPage({params}: {params: Promise<{ id: string }>}):Promise<any> {
  const {id}= await params;
  const discussion: any= await getDiscussionById(id);
  const discussions: Discussion[] = (await getAllDiscussions()) || [];
  const responses: Response[] = (await getAllResponses()) || [];
  console.log(responses);


  //  try {
  //     const discussion: any= await getDiscussionById(id);
  //     const discussions: Discussion[] = (await getAllDiscussions()) || [];
  //       const responses: Response[] = (await getAllResponses()) || [];
  
  
  //       const relatedDiscussions = discussions.filter(
  //   (q) => q.topicId === discussion?.topic.id);
  //         const session = await getServerSession(authOptions);
        
    
  //       console.log(discussion);
    
  //       const filteredResponses = responses.filter((item: any) => item.discussionId === discussion.id);
    
  
  //     if (!discussion) {
  //       return <div className="p-4 text-center">Discussion not found</div>;
  //     }
  
      
  
  // console.log(filteredResponses);
  
  //     console.log(responses);
  
  //     // const filteredQuestions = (questions).filter((item) => 
  //     //   item.course.title.toLowerCase() === question.course.title.toLowerCase() &&
  //     //   item.id !== id
  //     // );
  
  //     return (
  //           <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-slate-50">
  //    <h2>hello</h2>

  //     {/* <main className="container mx-auto px-4 py-8">
  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  //         <div className="lg:col-span-2">
  //           <DiscussionDetail discussion={discussion}/>
  //         </div>
  //         <div className="hidden lg:block">
  //           <div className="bg-white rounded-lg shadow p-6">
  //             <h2 className="text-xl font-semibold mb-4">About the Author</h2>
  //             <div className="flex items-center gap-3 mb-4">
  //               <img
  //                 src="/placeholder.svg?height=60&width=60"
  //                 alt="Sarah Johnson"
  //                 className="rounded-full w-16 h-16 object-cover border"
  //               />
  //               <div>
  //                 <h3 className="font-medium">Sarah Johnson</h3>
  //                 <p className="text-sm text-muted-foreground">Member since 2023</p>
  //               </div>
  //             </div>
  //             <p className="text-muted-foreground text-sm">
  //               Small-scale organic farmer with 10 years of experience in sustainable agriculture. Specializes in
  //               vegetable production and soil health management.
  //             </p>
  //           </div>

  //           <div className="bg-white rounded-lg shadow p-6 mt-6">
  //             <h2 className="text-xl font-semibold mb-4">Related Discussions</h2>
  //             <ul className="space-y-3">
  //               <li>
  //                 <a href="#" className="text-green-700 hover:underline">
  //                   Cover crops for improving soil structure
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="#" className="text-green-700 hover:underline">
  //                   Companion planting strategies for small farms
  //                 </a>
  //               </li>
  //               <li>
  //                 <a href="#" className="text-green-700 hover:underline">
  //                   Managing crop rotation with limited space
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </main> */}
  //   </div>
  //     );
  //   } catch (error) {
  //     console.error('Error loading question:', error);
  
      
  //     return (
  //       <div className="p-4 text-center text-red-600">
  //         Error loading question. Please try again later.
  //       </div>
  //     );
  //   }
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-slate-50">
     

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DiscussionDetail discussion="jjjjj"/>
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
    </div>
  )
}

