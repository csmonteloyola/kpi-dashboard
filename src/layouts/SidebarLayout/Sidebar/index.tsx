import { Box, Drawer, Hidden } from '@mui/material';

import Logo from 'src/components/Logo';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';
import SidebarMenu from './SidebarMenu';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        height: 100%;
        
        /* @media (min-width: ${theme.breakpoints.values.xl}px) {
            position: fixed;
            z-index: 10;
        } */
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 55px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Logo />
            </TopSection>
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <Logo />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
