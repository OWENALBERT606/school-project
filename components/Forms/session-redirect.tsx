"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AskQuestionForm from "../frontend/askQuestionForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SessionRedirectForm({ session }: { session: any }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleTriggerClick = () => {
    if (!session) {
      toast.error("Please login first to post a question.");
      router.push("/login");
    } else {
      setOpen(true); // open the dialog if session is valid
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="outline"
        className="bg-green-900 hover:bg-green-600 text-white"
        onClick={handleTriggerClick}
      >
        Post Question
      </Button>

      {/* Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="!w-[800px]">
          <AskQuestionForm session={session}/>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
