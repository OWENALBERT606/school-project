"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DiscussionProps } from "@/types/types"
import { useForm } from "react-hook-form"
import { Switch } from "@/components/ui/switch"
import Pdfinput from "@/components/FormInputs/PdfInput"
import VEditor from "@/components/dashboard/text-editor"
import FormSelectInput from "@/components/FormInputs/FormSelectInput"
import TextInput from "@/components/FormInputs/TextInput"
import { createDiscussion, updateDiscussionById } from "@/actions/discussions"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export type SelectOptionProps = {
  label: string;
  value: string;
};
type DiscussionFormProps = {
  editingId?: string | undefined;
  initialData?: DiscussionProps | undefined | null;
  topics?: any | undefined | null;
  session?: any | undefined | null;
};

export function NewDiscussionForm({
  editingId,
  initialData,
  topics,
  session
}: DiscussionFormProps) {

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<DiscussionProps>({
      defaultValues: {
      //   topicId: initialData?.topic.id,
        content: initialData?.content || "",
      },
    });

  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [loading, setLoading] = useState(false);
    const [selectedTopic,setSelectedTopic]=useState<any>(topics[0]);
    const [content, setContent] = useState("<p>Initial content</p>");
    const [isActive, setIsActive] = useState<boolean>(initialData?.isActive || true);
    const [documentUrl, setDocumentUrl] = useState<string>("");
      const router = useRouter();

    
  const handleIsActiveChange = (checked: boolean) => {
    setIsActive(checked);
  };

  // const handleSubmit = (e: React.FormEvent) => {

  //   // Reset form
  //   setTitle("")
  //   setContent("")
  //   setTags("")
  //   setIsExpanded(false)
  // }

async function saveData(data: DiscussionProps) {
    try {
      setLoading(true);
      data.userId=session?.user.id
      data.topicId=selectedTopic.value
      data.content=content
      data.isActive=isActive
      data.attachment=documentUrl

      console.log(data);

      if (editingId) {
        await updateDiscussionById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/discussions");
      } else {
        await createDiscussion(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        router.push("/dashboard/discussions");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Start a New Discussion</CardTitle>
      </CardHeader>
      <form  onSubmit={handleSubmit(saveData)}>
        <CardContent className="p-4 pt-0">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
              <AvatarFallback>{session.user.image}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              {!isExpanded ? (
                <Input placeholder="What's on your mind about farming today?" onFocus={() => setIsExpanded(true)} />
              ) : (
                <>
                    <Card>
            <CardHeader>
              {/* <CardTitle>Category Title</CardTitle> */}
              {/* <CardDescription>
                
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Question Title"
                    name="title"
                  />
                  <FormSelectInput
                label="Topic"
                options={topics}
                option={selectedTopic}
                setOption={setSelectedTopic}
                toolTipText="Add New Topic"
                href="/dashboard/topics/new"
              />
                </div>
                <VEditor
      variant="default"
      content={content}
      setContent={setContent}
      isEditable={true}
    />
              </div>
              <Pdfinput
                  label="Upload Document"
                  pdfUrl={documentUrl}
                  setPdfUrl={setDocumentUrl}
                  endpoint="discussionDocument"
                />
                  {/* <div className="flex items-center mt-4 space-x-2">
                <Switch 
                    id="isActive" 
                    checked={isActive} 
                    onCheckedChange={handleIsActiveChange} 
                  />
                  <Label htmlFor="isActive" className="cursor-pointer">
                    {isActive ? "Active" : "Inactive"}
                  </Label>
                </div> */}
                
            </CardContent>
          </Card>
                </>
              )}
            </div>
          </div>
        </CardContent>
        {isExpanded && (
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setIsExpanded(false)}>
              Cancel
            </Button>
            <button type="submit">
              Post Discussion
            </button>
          </CardFooter>
        )}
      </form>
    </Card>
  )
}

