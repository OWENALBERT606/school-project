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
import { Category } from "@prisma/client";
import { QuestionProps} from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";
import { createCategory, updateCategoryById } from "@/actions/categories";
import FormSelectInput from "../FormInputs/FormSelectInput";
import { createSubCategory, updateSubCategoryById } from "@/actions/subcategories";
import { createQuestion, updateQuestionById } from "@/actions/questions";
import { Button } from "../ui/button";
import SubmitButton from "../FormInputs/SubmitButton";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type QuestionFormProps = {
  editingId?: string | undefined;
  initialData?: QuestionProps | undefined | null;
  categories?: any | undefined | null;
  subcategories?: any | undefined | null;
  session?: any | undefined | null;
};
export default function FrontQuestionForm({
  editingId,
  initialData,
  categories,
  subcategories,
  session
}: QuestionFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestionProps>({
    defaultValues: {
      title: initialData?.title,
    //   content: initialData?.content || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedCategory,setSelectedCategory]=useState<any>(categories[0]);
  const [selectedSubCategory,setSelectedSubCategory]=useState<any>(subcategories[0]);


  async function saveQuestion(data: QuestionProps) {
    try {
      setLoading(true);
      data.categoryId=selectedCategory.value
      data.userId=session?.user.id
      data.subcategoryId=selectedSubCategory.value
      console.log(data)

      if (editingId) {
        await updateQuestionById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.refresh();
      } else {
        await createQuestion(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Posted Question!");
        //reset
        reset();
        router.push("/qa");
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
    <form className="w-full" onSubmit={handleSubmit(saveQuestion)}>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-12 col-span-full space-y-1">
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
                    label="Question Title"
                    name="title"
                  />
                  <FormSelectInput
                label="Category"
                options={categories}
                option={selectedCategory}
                setOption={setSelectedCategory}
              />
                  <FormSelectInput
                label="Sub Category"
                options={categories}
                option={selectedSubCategory}
                setOption={setSelectedSubCategory}
              />
                </div>
                <div className="">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Question Description"
                    name="content"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <button 
  type="submit"
  disabled={loading} 
  className={`py-1 px-4 mt-4 bg-green-950 text-white hover:text-green-600 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
>
  {loading ? "Posting..." : "Submit"}
</button>
    </form>
  );
}
