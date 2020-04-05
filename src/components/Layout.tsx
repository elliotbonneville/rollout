/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'bluegray050',
    }}
  >
    {children}
  </Box>
);

export default Layout;
