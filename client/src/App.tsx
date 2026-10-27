// import { Analytics } from '@vercel/analytics/react';
import Footer from './shared/theme/Footer';
import Header from './shared/theme/Header';
import './sass/theme.scss';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div id="container">
      <Header />
      <section id="main">
        <Dashboard />
        <Footer />
      </section>
      {/* <Analytics /> */}
    </div>
  )
}

export default App
