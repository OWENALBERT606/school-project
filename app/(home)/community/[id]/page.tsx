import { getAllDiscussions, getDiscussionById } from "@/actions/discussions";
import { getAllResponses } from "@/actions/responses";
import { DiscussionDetail } from "@/components/frontend/discussions/discussion-details";
import RelatedDiscussions from "@/components/frontend/discussions/related-discussions";
import { authOptions } from "@/config/auth";
import { DiscussionProps, ResponseProps } from "@/types/types";
import { Discussion, Response } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function DiscussionPage({params}: {params: Promise<{ id: string }>}):Promise<any> {
  const {id}= await params;
  const discussion: any= await getDiscussionById(id);
  const discussions: Discussion[] = (await getAllDiscussions()) || [];
  const responses: Response[] = (await getAllResponses()) || [];
  const relatedDiscussions = discussions.filter(
    (q) => q.topicId === discussion?.topicId && q.id !== discussion.id
  );
          const session = await getServerSession(authOptions);
          const filteredResponses = responses.filter((item: any) => item.discussionId === discussion.id);
  console.log(filteredResponses);

  
      if (!discussion) {
        return <div className="p-4 text-center">Discussion not found</div>;
      }

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-slate-50">
     

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 overflow-y-scroll h-[600px]">
            <DiscussionDetail responses={filteredResponses} session={session} discussion={discussion}/>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">About the Author</h2>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={discussion.user.image}
                  alt={discussion.user.name}
                  className="rounded-full w-16 h-16 object-cover border"
                />
                <div>
                  <h3 className="font-medium">{discussion.user.name}</h3>
                  <p className="text-sm text-muted-foreground">Member since {discussion.user.createdAt.toLocaleDateString("en-GB")}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {discussion.user.bio}
              </p>
            </div>
            <RelatedDiscussions relatedDiscussion={relatedDiscussions}/>
          </div>
        </div>
      </main>
    </div>
  )
}

