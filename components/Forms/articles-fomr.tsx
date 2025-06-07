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
import { ArticleProps} from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";
import Pdfinput from "../FormInputs/PdfInput";
import { createArticle, updateArticleById } from "@/actions/article";
import FormSelectInput from "../FormInputs/FormSelectInput";
import VEditor from "../dashboard/text-editor";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type QuestionFormProps = {
  editingId?: string | undefined;
  initialData?: ArticleProps | undefined | null;
  categories?: any | undefined | null;
  subcategories?: any | undefined | null;
  session?: any | undefined | null;
};
export default function ArticleForm({
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
  } = useForm<ArticleProps>({
    defaultValues: {
      title: initialData?.title,
    //   content: initialData?.content || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedCategory,setSelectedCategory]=useState<any>(categories[0]);
  const [selectedSubCategory,setSelectedSubCategory]=useState<any>(subcategories[0]);
//   const initialAttachment = initialData?.attachment || "";
    const [attachment, setAttachment] = useState();
    const [content, setContent] = useState("<p>write here</p>");



  async function saveArticle(data: ArticleProps) {
    try {
      setLoading(true);
      data.categoryId=selectedCategory.value
      data.userId=session?.user.id
      data.subcategoryId=selectedSubCategory.value
      data.content=content

      if (editingId) {
        await updateArticleById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/articles");
      } else {
        await createArticle(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        console.log(data)
        //reset
        reset();
        router.push("/dashboard/articles");
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
    <form className="" onSubmit={handleSubmit(saveArticle)}>
      <FormHeader
        href="/articles"
        parent=""
        title="article"
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
                    label="Article Title"
                    name="title"
                  />
                  <FormSelectInput
                label="Category"
                options={categories}
                option={selectedCategory}
                setOption={setSelectedCategory}
                toolTipText="Add New Category"
                href="/dashboard/categories/new"
              />
                  <FormSelectInput
                label="Sub Category"
                options={subcategories}
                option={selectedSubCategory}
                setOption={setSelectedSubCategory}
                toolTipText="Add New Sub Category"
                href="/dashboard/subcategories/new"
              />
                </div>
                 <div className="grid auto-rows-max items-start gap-4 ">
                            <Pdfinput
                              label="resource /pdf/docx/xls"
                              pdfUrl={attachment}
                              setPdfUrl={setAttachment}
                              endpoint="documentUploader"
                            />
                          </div>
              </div>
            </CardContent>
          </Card>
        </div>
      
      </div>
      <VEditor
      variant="default"
      content={content}
      setContent={setContent}
      isEditable={true}
    />
      <FormFooter
        href="/articles"
        editingId={editingId}
        loading={loading}
        title="article"
        parent=""
      />
    </form>
  );
}
