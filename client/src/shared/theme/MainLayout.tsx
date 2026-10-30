import Dashboard from '../../components/Dashboard';
import Header from './Header';

export default function MainLayout() {
  return (
    <div id="container">
      <Header />
      <section id="main">
        <Dashboard />
        {/* <Footer /> */}
      </section>
      {/* <Analytics /> */}
    </div>
  );
}
