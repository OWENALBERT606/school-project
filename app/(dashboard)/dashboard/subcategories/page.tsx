import React from "react";
import { columns } from "./columns";
import {SubCategory } from "@prisma/client";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllSubCategories } from "@/actions/subcategories";

export default async function page() {
  const categories: SubCategory[] = (await getAllSubCategories()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Sub Categories"
        linkTitle="Add Sub Category"
        href="/dashboard/subcategories/new"
        data={categories}
        model="subcategory"
      />
      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
