import type { Activity } from '../types/Activity';
import ActivityCard from '../components/ActivityCard';

export default function DashboardPage() {
  const activities: Activity[] = [
    {
      id: '1',
      name: 'Laundry',
      date: '2026-10-10',
    },
    {
      id: '2',
      name: 'Buy bathroom tissue',
      date: '2026-10-11',
    },
  ];
  return (
    <>
      <h2>When did I last...?</h2>
      <section>
        {activities.map((activity) => (
          <ActivityCard activity={activity} />
        ))}
      </section>
    </>
  );
}
