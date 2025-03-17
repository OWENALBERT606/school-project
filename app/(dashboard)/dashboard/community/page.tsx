import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { QuestionProps } from "@/types/types";
import { getAllQuestions } from "@/actions/questions";
import { Question } from "@prisma/client";

export default async function page() {
  const questions: Question[] = (await getAllQuestions()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Questions"
        linkTitle="Add question"
        href="/dashboard/questions/new"
        data={questions}
        model="question"
      />
      <div className="py-8">
        <DataTable data={questions} columns={columns}/>
      </div>
    </div>
  );
}
