import Activity from "./Activity";

export default function Dashboard() {
  return (
    <>
      <h1>When did I last...?</h1>
      <section>
        <Activity />
        <Activity />
        <Activity />
      </section>
    </>
  );
}