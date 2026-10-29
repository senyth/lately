// import { Analytics } from '@vercel/analytics/react';
// import Footer from './shared/theme/Footer';
import Header from './shared/theme/Header';
import './sass/theme.scss';
import Dashboard from './components/Dashboard';
import type { PaletteMode } from '@mui/material';

interface AppProps {
  mode: PaletteMode;
  onToggleMode: () => void;
}

function App({ mode, onToggleMode }: AppProps) {

  return (
    <div id="container">
      <Header mode={mode} onToggleMode={onToggleMode} />
      <section id="main">
        <Dashboard />
        {/* <Footer /> */}
      </section>
      {/* <Analytics /> */}
    </div>
  )
}

export default App
