import { getSubCategoryById } from "@/actions/subcategories";
import SubCategoryForm from "@/components/Forms/subcategories-form";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const category = await getSubCategoryById(id);
  return (
    <div className="p-8">
      <SubCategoryForm initialData={category} editingId={id} />
    </div>
  );
}
