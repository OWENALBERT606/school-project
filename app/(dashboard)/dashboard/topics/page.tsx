import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllTopics } from "@/actions/topics";
import { Topic } from "@prisma/client";

export default async function page() {
  const topics: Topic[] = (await getAllTopics()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Topics"
        linkTitle="Add topics"
        href="/dashboard/topics/new"
        data={topics}
        model="topic"
      />
      <div className="py-8">
        <DataTable data={topics} columns={columns}/>
      </div>
    </div>
  );
}
