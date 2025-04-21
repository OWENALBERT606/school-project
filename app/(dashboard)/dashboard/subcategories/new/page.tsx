import { getAllCategories } from "@/actions/categories";
import SubCategoryForm from "@/components/Forms/subcategories-form";
import { Category} from "@prisma/client";
import React from "react";

export default async function page() {
  const categoriesData: Category[] = (await getAllCategories()) || [];


  const categories= categoriesData.map((item:any,i:any)=>{
    return(
      {
        label:item.title,
        value:item.id
      }
    )
  })


  return (
    <div className="p-8">
      <SubCategoryForm categories={categories} />
    </div>
  );
}
