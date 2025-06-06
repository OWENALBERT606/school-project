import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscussionList({discussions}:{discussions:any}) {
 function stripHtmlAndTruncate(html: string, maxLength: number = 100): string {
  const plainText = html.replace(/<[^>]+>/g, ''); // remove HTML tags
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + '...'
    : plainText;
}
  return (
    <div className="space-y-4 h-[900px] overflow-y-scroll md:px-2">
      {discussions.map((discussion:any) => (
        <Card key={discussion.id} className="overflow-hidden">
          <CardHeader className="p-4 pb-0">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={discussion.user.image} alt={discussion.user.name} />
                <AvatarFallback>{discussion.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="font-medium">{discussion.user.name}</span>
                  <span className="text-muted-foreground text-xs ml-2">• {discussion.createdAt.toLocaleDateString("en-GB")}</span>
                </div>
                <h3 className="font-semibold text-lg">{discussion.title}</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
           <p className="text-muted-foreground">
  {stripHtmlAndTruncate(discussion.content, 200)}
</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{discussion.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsDown className="h-4 w-4" />
                <span>{discussion.dislikes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{discussion.responses.length}</span>
              </Button>
            </div>
            <Link
              href={`/community/${discussion.id}`}
              className="text-green-700 hover:text-green-800 text-sm font-medium"
            >
              View Discussion
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

