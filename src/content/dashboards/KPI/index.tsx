import * as React from 'react';

import {
  ArgumentAxis,
  Chart,
  Legend,
  LineSeries,
  Title,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import { Typography, useTheme } from '@mui/material';

import { Animation } from '@devexpress/dx-react-chart';
import { BorderAll } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Palette } from '@devexpress/dx-react-chart';
import { ValueScale } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { themeCreator } from 'src/theme/base';

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
  color: theme.colors.info.light,
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




const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
};


const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap', }} {...props}/>
);
const Item = props => (
  <Legend.Item sx={{ flexDirection: 'column' }} {...props} />
);

const ValueLabel = (props) => {
  const { text } = props;
  const scale: number = +text;
  return (
    <ValueAxis.Label
      {...props}
      text={`${scale}`}
      style={{stroke: '#53626c', strokeWidth: '1px'}}
    />
  );
};

const ArgumentLabel = (props) => {
  return (
    <ArgumentAxis.Label
      {...props}
      style={{stroke: '#53626c', strokeWidth: '1px'}}
    />
  );
};

const ValueGrid = (props) => {
  return (
    <ValueAxis.Grid
      {...props}
      style={{stroke: '#3f4a51', strokeWidth: '1px',}}
    />
  );
};



const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px',
  },
}));


const data = [
  {
    date: 'May 1', open: 9, closed: 4,
  },{
    date: 'May 2', open: 11, closed: 5,
  },{
    date: 'May 3', open: 7, closed: 6,
  },{
    date: 'May 4', open: 6, closed: 1,
  },{
    date: 'May 5', open: 5, closed: 2,
  },{
    date: 'May 6', open: 3, closed: 2,
  },{
    date: 'May 7', open: 1, closed: 0,
  },
];

const modifyCounts = () => [0, 12];




export default class DashboardKPI extends React.PureComponent <any, any> {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

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

                  <Grid item xs={12} md={12} textAlign="left" padding={2}>
                    {/* <SectionTitle
                      gutterBottom
                      variant="h2"
                      align="left"
                    >
                      Status
                    </SectionTitle> */}

                    <Grid container  alignItems="stretch">
                      <Grid item xs={12} md={12} textAlign="left">
                      
                        <StyledChart
                          data={chartData}
                          height={300}
                        >
                          <Palette scheme={['#000C57', '#FFA319']}/>
                          <ArgumentAxis labelComponent={ArgumentLabel}/>
                          <ValueScale name="counts" modifyDomain={modifyCounts} />
                          <ValueAxis
                            labelComponent={ValueLabel}
                            scaleName="counts"
                            gridComponent={ValueGrid}
                          />

                          <LineSeries
                            name="Open"
                            valueField="open"
                            argumentField="date"
                            scaleName="counts"
                          />
                          <LineSeries
                            name="Closed"
                            valueField="closed"
                            argumentField="date"
                            scaleName="counts"
                          />
                          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                          <Animation />
                        </StyledChart>
                        
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
}