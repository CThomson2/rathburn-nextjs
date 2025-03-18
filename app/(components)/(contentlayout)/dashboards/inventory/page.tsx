import { getDrumStatusData } from "@/features/dashboard/api/get-drum-status";
import DrumStatusWidget from "@/features/dashboard/components/drum-status";

export default async function CrmDashboard() {
  // Fetch initial data server-side
  const initialDrumStatusData = await getDrumStatusData();

  return (
    <div>
      {/* Other dashboard components */}
      <DrumStatusWidget initialData={initialDrumStatusData} />
      {/* Other dashboard components */}
    </div>
  );
}
