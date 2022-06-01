import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        background:linear-gradient(135deg, rgba(1,54,66,1) 14%, rgba(2,5,61,1) 89%)
        
        /* @media (min-width: ${theme.breakpoints.values.xl}px) {
            padding-left: ${theme.sidebar.width};
        } */
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
     {/*  <Sidebar /> */}
      <MainWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainWrapper>
    </>
  );
};

export default SidebarLayout;
