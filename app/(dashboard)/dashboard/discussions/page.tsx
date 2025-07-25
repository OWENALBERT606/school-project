import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllQuestions } from "@/actions/questions";
import { Discussion, Question } from "@prisma/client";
import { getAllDiscussions } from "@/actions/discussions";

export default async function page() {
  const discussions: Discussion[] = (await getAllDiscussions()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Discussions"
        linkTitle="Add discussion"
        href="/dashboard/discussions/new"
        data={discussions}
        model="discussion"
      />
      <div className="py-8">
        <DataTable data={discussions} columns={columns}/>
      </div>
    </div>
  );
}
