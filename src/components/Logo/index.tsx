import { Box, Hidden, Tooltip } from '@mui/material';

import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.grey[200]};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);


const LogoText = styled(Box)(
  ({ theme }) => `
        font-size: ${theme.typography.pxToRem(22)};
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
`
);

function Logo() {


  return (
    <LogoWrapper to="/kpi">
      <LogoTextWrapper>
        <LogoText>CAM KPI Dashboard</LogoText>
      </LogoTextWrapper>
    </LogoWrapper>
  );
}

export default Logo;
