import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ flex: 1, p: 3 }}>
        <section id="main">{children}</section>
      </Box>

      <Footer />
    </Box>
  );
}
