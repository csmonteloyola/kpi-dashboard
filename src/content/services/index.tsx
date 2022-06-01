import * as React from 'react';

import Container from '@mui/material/Container';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import Logo from 'src/components/Logo';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

export default class PageServices extends React.PureComponent <any, any> {
 

  render() {

    return (
      <>
        <Helmet>
          <title>CAM KPI Dashboard</title>
        </Helmet>
        <PageTitleWrapper>

        </PageTitleWrapper>
        
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch" sx={{height: "100%"}}>
            
          </Grid>
        </Container>


        <Footer />
      </>
    );
  }
}