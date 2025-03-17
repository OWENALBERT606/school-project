"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {TopicProps} from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import FormFooter from "./FormFooter";
import { createTopic, updateTopicById } from "@/actions/topics";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type TopicFormProps = {
  editingId?: string | undefined;
  initialData?: TopicProps | undefined | null;
  session?: any | undefined | null;
};
export default function TopicForm({
  editingId,
  initialData,
  session
}: TopicFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TopicProps>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function saveData(data: TopicProps) {
    try {
      setLoading(true);
      data.userId=session?.user.id

      if (editingId) {
        await updateTopicById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/topics");
      } else {
        await createTopic(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        router.push("/dashboard/topics");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  // async function handleDeleteAll() {
  // setLoading(true);
  // try {
  // await deleteManyCategories();
  // setLoading(false);
  // } catch (error) {
  // console.log(error);
  // }
  // }

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/topics"
        parent=""
        title="topic"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              {/* <CardTitle>Category Title</CardTitle> */}
              <CardDescription>
                
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Topic Title"
                    name="title"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Topic Description"
                    name="description"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <FormFooter
        href="/topics"
        editingId={editingId}
        loading={loading}
        title="topics"
        parent=""
      />
    </form>
  );
}
