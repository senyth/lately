// // import { Analytics } from '@vercel/analytics/react';
// // import Footer from './shared/theme/Footer';
// import Header from './shared/theme/Header';
// import './sass/theme.scss';
// import Dashboard from './components/Dashboard';
// import type { PaletteMode } from '@mui/material';
// import { useState } from 'react';
// import { LogInPage } from './pages/LogInPage';

// interface AppProps {
//   mode: PaletteMode;
//   onToggleMode: () => void;
// }

// function App({ mode, onToggleMode }: AppProps) {
//   const [isLoggedIn, setIsLoggedIn] = useState<true | false>(false);

//   if (!isLoggedIn) {
//     return <LogInPage />;
//   }

//   return (
//     <div id="container">
//       <Header mode={mode} onToggleMode={onToggleMode} />
//       <section id="main">
//         <Dashboard />
//         {/* <Footer /> */}
//       </section>
//       {/* <Analytics /> */}
//     </div>
//   );
// }

// export default App;
