import { Typography, useTheme } from '@mui/material';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { styled } from '@mui/material/styles';

const Section = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.info.light,
  background: theme.general.background,
  display: "flex", 
  flexDirection: "column",
  marginBottom: '20px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: theme.colors.info.dark,
  marginBottom: '24px',
}));

const Count = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(40),
  color: theme.colors.alpha.trueWhite[100]
}));

const CountLabel = styled(Typography)(({ theme }) => ({
  color: theme.colors.alpha.trueWhite[70],
  textTransform: 'uppercase',
  fontWeight: 100
}));


function DashboardKPI() {
  
  return (
    <>
      <Helmet bodyAttributes={{style: 'background:linear-gradient(135deg, rgba(1,54,66,1) 14%, rgba(2,5,61,1) 89%)'}}>
        <title>CAM KPI Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={6} md={8}>
            <Section sx={{height: "100%"}}>
              <Grid container  alignItems="stretch">
                <Grid item xs={6} md={6} textAlign="left" padding={2}>
                  <SectionTitle
                    gutterBottom
                    variant="h2"
                    align="left"
                  >
                    Tickets
                  </SectionTitle>

                  <Grid container  alignItems="stretch">
                    <Grid item xs={12} md={6} textAlign="left">
                    <Count
                        gutterBottom
                        variant="h3"
                        align="center">
                        5
                      </Count>
                      <CountLabel
                        gutterBottom
                        variant="h4"
                        align="center">
                        Open
                      </CountLabel>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign="left">
                      <Count
                        gutterBottom
                        variant="h3"
                        align="center">
                          10
                      </Count>
                      <CountLabel
                        gutterBottom
                        variant="h4"
                        align="center">
                        Closed
                      </CountLabel>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={6} textAlign="left" padding={2}>
                  <SectionTitle
                    gutterBottom
                    variant="h2"
                    align="left"
                  >
                    TAT
                  </SectionTitle>

                  <Grid container  alignItems="stretch">
                    <Grid item xs={12} md={6} textAlign="left">
                    <Count
                        gutterBottom
                        variant="h3"
                        align="center">
                        15
                      </Count>
                      <CountLabel
                        gutterBottom
                        variant="h4"
                        align="center">
                        Avg.
                      </CountLabel>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign="left">
                      <Count
                        gutterBottom
                        variant="h3"
                        align="center">
                          20
                      </Count>
                      <CountLabel
                        gutterBottom
                        variant="h4"
                        align="center">
                        Avg. 6 Mo.
                      </CountLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Section>
          </Grid>
          <Grid item xs={6} md={4}>
            <Section>xs=6 md=4</Section>
            <Section sx={{marginBottom: 0}}>xs=6 md=4</Section>
          </Grid>
          <Grid item xs={6} md={4}>
            <Section>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/></Section>
            <Section sx={{marginBottom: 0}}>xs=6 md=4</Section>
          </Grid>
          <Grid item xs={6} md={8}>
            <Section sx={{height: "100%"}}>xs=6 md=8</Section>
          </Grid>
        </Grid>
      </Container>


      <Footer />
    </>
  );
}

export default DashboardKPI;
