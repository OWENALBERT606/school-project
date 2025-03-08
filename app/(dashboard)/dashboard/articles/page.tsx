import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { Article, Question } from "@prisma/client";
import { getAllArticles } from "@/actions/article";

export default async function page() {
  const articles: Article[] = (await getAllArticles()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Articles"
        linkTitle="Add article"
        href="/dashboard/articles/new"
        data={articles}
        model="article"
      />
      <div className="py-8">
        <DataTable data={articles} columns={columns}/>
      </div>
    </div>
  );
}
