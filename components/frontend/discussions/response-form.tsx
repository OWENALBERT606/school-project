"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { Category } from "@prisma/client";
import {ResponseProps} from "@/types/types";
import VEditor from "@/components/dashboard/text-editor";
import { Button } from "@/components/ui/button";
import { createResponse, updateResponseById } from "@/actions/responses";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type ResponseFormProps = {
  editingId?: string | undefined;
  initialData?: ResponseProps | undefined | null;
  session?: any | undefined | null;
  discussionId?:any| undefined | null;

};
export default function ResponseForm({
  editingId,
  initialData,
  session,
  discussionId
}: ResponseFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResponseProps>({
    defaultValues: {
    //   content: initialData?.content || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("<p>Initial content</p>");


  async function saveResponse(data: ResponseProps) {
    try {
      setLoading(true);
      data.content=content
      data.userId=session?.user.id
      data.discussionId=discussionId

      console.log(data);

      if (editingId) {
        await updateResponseById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        
        router.refresh();
        router.push(`/community/${discussionId}`);
      } else {
        await createResponse(data);
        setLoading(false);
        // Toast
        router.refresh();
        router.push(`/community/${discussionId}`);
        toast.success("Successfully Created!");
        //reset
        
        reset();
        
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveResponse)}>

      <div className="py-8">
        <div className=" space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                           <VEditor
                      variant="default"
                      content={content}
                      setContent={setContent}
                      isEditable={true}
                    />

              </CardDescription>
            </CardHeader>
           <CardFooter className="p-4 pt-0 flex justify-between">
                       <Button type="button" variant="ghost">
                         Cancel
                       </Button>
                       <Button type="submit" disabled={loading}>
               {loading ? "Commenting..." : "Post Comment"}
             </Button>
                     </CardFooter>
          </Card>
        </div>
      </div>
    </form>
  );
}
