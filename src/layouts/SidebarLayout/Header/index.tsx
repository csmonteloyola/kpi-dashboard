import { Box } from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
/* import HeaderButtons from './Buttons'; */
import HeaderMenu from './Menu';
/* import HeaderUserbox from './Userbox'; */
import Logo from 'src/components/Logo';
/* import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'; */
/* import { SidebarContext } from 'src/contexts/SidebarContext'; */
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        position: fixed;
        justify-content: space-between;
        width: 100%;
        /* @media (min-width: ${theme.breakpoints.values.xl}px) {
            left: ${theme.sidebar.width};
            width: auto;
        } */
`
);

const HeaderBox = styled(Box)(
  ({ theme }) => `
        display: flex;
        align-items:center;
        width: 100%;
`
);

function Header() {
  /* const { sidebarToggle,  toggleSidebar } = useContext(SidebarContext); */

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <HeaderBox>
        <Logo />
        <HeaderMenu/>
      </HeaderBox>
      <Box display="flex" alignItems="center">
        {/* <HeaderButtons />
        <HeaderUserbox /> */}
        {/* <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Hidden> */}
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
