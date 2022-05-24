import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.info.light,
  background: theme.general.background,
  display: "flex", 
  flexDirection: "column",
  marginBottom: '20px',
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
      
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={6} md={8}>
            <Item sx={{height: "100%"}}>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
            <Item sx={{marginBottom: 0}}>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/>xs=6 md=4<br/></Item>
            <Item sx={{marginBottom: 0}}>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item sx={{height: "100%"}}>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Container>


      <Footer />
    </>
  );
}

export default DashboardKPI;
