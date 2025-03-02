
import DashboardMain from "@/components/dashboard/DashboardMain";
import DashboardOverview from "@/components/overview";
import { getAuthenticatedUser } from "@/config/useAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const analytics = (await getDashboardOverview()) || [];
  const user = await getAuthenticatedUser();
  return (
    <main>

<DashboardOverview/>
      {/* <DashboardMain /> */}
    </main>
  );
}
