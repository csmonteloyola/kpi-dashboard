import { Box, Container, Link, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
       
`
);
const TypographyFooter = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.secondary.dark};
    font-size: ${theme.typography.pxToRem(10)};
`);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <Box
          py={3}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <TypographyFooter variant="subtitle1">
              &copy; 2021 - Tokyo Free White React Admin Dashboard
            </TypographyFooter>
          </Box>
          <TypographyFooter sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
            Crafted by <Link href="https://bloomui.com" target="_blank" rel="noopener noreferrer">BloomUI.com</Link>
          </TypographyFooter>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
