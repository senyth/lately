import type { Activity } from "../types/Activity";
import ActivityCard from "./ActivityCard";

export default function Dashboard() {
  const activities: Activity[] = [
    {
      id: '1',
      name: 'Laundry',
      date: '2026-10-10'
    },
    {
      id: '2',
      name: 'Bought bathroom tissue',
      date: '2026-10-11'
    }
  ];
  return (
    <>
      <h1>When did I last...?</h1>
      <section>
        {
          activities.map(activity => (
            <ActivityCard activity={activity} />
          ))
        }
      </section>
    </>
  );
}