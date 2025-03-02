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

import { generateSlug } from "@/lib/generateSlug";
import toast from "react-hot-toast";
import { Category } from "@prisma/client";
import { CategoryProps, SubCategoryProps } from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";
import { createCategory, updateCategoryById } from "@/actions/categories";
import FormSelectInput from "../FormInputs/FormSelectInput";
import { createSubCategory, updateSubCategoryById } from "@/actions/subcategories";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type CategoryFormProps = {
  editingId?: string | undefined;
  initialData?: Category | undefined | null;
  categories?: any | undefined | null;
};
export default function SubCategoryForm({
  editingId,
  initialData,
  categories
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubCategoryProps>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const [selectedCategory,setSelectedCategory]=useState<any>(categories[0]);


  console.log(imageUrl);

  async function saveSubCategory(data: SubCategoryProps) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);
      data.imageUrl = imageUrl;
      data.categoryId=selectedCategory.value
      console.log(data)

      if (editingId) {
        await updateSubCategoryById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/subcategories");
        setImageUrl("/placeholder.svg");
      } else {
        await createSubCategory(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        setImageUrl("/placeholder.svg");
        //route
        router.push("/dashboard/subcategories");
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
    <form className="" onSubmit={handleSubmit(saveSubCategory)}>
      <FormHeader
        href="/subcategories"
        parent=""
        title="Sub Category"
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
                    label="Sub Category Title"
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
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            <ImageInput
              title="Sub Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="subcategoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/subcategories"
        editingId={editingId}
        loading={loading}
        title="Sub Category"
        parent=""
      />
    </form>
  );
}
