import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import AskQuestionForm from "../frontend/askQuestionForm"
  
  export function QuestionAlertForm({session}:{session:any}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="bg-green-900 hover:bg-green-600 text-white">Post Question</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="!w-[800px]">
        <AskQuestionForm session={session}/>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogHeader>
            <AlertDialogTitle>Fill in question details to post</AlertDialogTitle>
            <AlertDialogDescription>
              
            </AlertDialogDescription>
          </AlertDialogHeader> */}
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  