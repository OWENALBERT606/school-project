
import { getAllArticles } from "@/actions/article";
import { getAllQuestions } from "@/actions/questions";
import { getAllUsers } from "@/actions/users";
import DashboardMain from "@/components/dashboard/DashboardMain";
import DashboardOverview from "@/components/overview";
import { getAuthenticatedUser } from "@/config/useAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const analytics = (await getDashboardOverview()) || [];
  const user = await getAuthenticatedUser();
  const users = (await getAllUsers()) || [];
  const questions = (await getAllQuestions()) || [];
  const articles = (await getAllArticles()) || [];
  return (
    <main>

<DashboardOverview users={users} articles={articles} questions={questions}/>
      {/* <DashboardMain /> */}
    </main>
  );
}
