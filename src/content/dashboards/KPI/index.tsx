import * as React from 'react';

import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Legend,
  LineSeries,
  Tooltip,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker, HoverState, } from '@devexpress/dx-react-chart';

import { Animation } from '@devexpress/dx-react-chart';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from 'src/components/Footer';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Palette } from '@devexpress/dx-react-chart';
import SectionCount from 'src/components/SectionCount';
import SectionTitle from 'src/components/SectionTitle';
import { ValueScale } from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';

const Section = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.info.light,
  background: theme.general.background,
  display: "flex", 
  flexDirection: "column",
}));


const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
  chartBar: `${PREFIX}-chartBar`,
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

const StyledBarChart = styled(Chart)(() => ({
  [`&.${classes.chartBar}`]: {
    height: '300px'
  },
}));



const dataLine = [
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

const dataBar = [
  { date: 'May 1', commits: 2 },
  { date: 'May 2', commits: 6 },
  { date: 'May 3', commits: 1 },
  { date: 'May 4', commits: 4 },
  { date: 'May 5', commits: 0 },
  { date: 'May 6', commits: 0 },
  { date: 'May 7', commits: 5 },
];

const modifyCounts = () => [0, 12];




export default class DashboardKPI extends React.PureComponent <any, any> {
  constructor(props) {
    super(props);

    this.state = {
      dataLine,
      dataBar
    };
  }

  render() {
    const { dataLine: chartData,  dataBar: chartDataBar } = this.state;

    return (
      <>
        <Helmet>
          <title>CAM KPI Dashboard</title>
        </Helmet>
        <PageTitleWrapper>
          <PageHeader />
        </PageTitleWrapper>
        
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch" sx={{height: "100%"}}>
            <Grid item xs={6} md={8}>
              <Section>
                <Grid container alignItems="stretch">
                  <Grid item xs={6} md={6} textAlign="left" padding={2}>
                    <SectionTitle title='Tickets'/>

                    <Grid container  alignItems="stretch">
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='5' name='Open'/>
                      </Grid>
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='10' name='Closed'/>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={6} textAlign="left" padding={2}>
                    <SectionTitle title='TAT'/>

                    <Grid container alignItems="stretch">
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='15' name='AVG.'/>
                      </Grid>
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='20' name='AVG 6 Mo.'/>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={12} textAlign="left" padding={2}>

                    <Grid container  alignItems="stretch">
                      <Grid item xs={12} md={12} textAlign="left">
                      
                        <StyledChart
                          data={chartData}
                          height={285}
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
                          <EventTracker />
                          <Tooltip />
                        </StyledChart>
                        
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
            <Grid item xs={6} md={4}>
              <Section sx={{marginBottom: '20px'}}>
                <Grid container  alignItems="stretch">
                  <Grid item xs={12} md={12} textAlign="left" padding={2}>
                    <SectionTitle title='Pull Requests'/>

                    <Grid container alignItems="stretch">
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='5' name='Open'/>
                      </Grid>
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='10' name='Closed'/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
              <Section alignItems="stretch">
                <Grid container  alignItems="stretch">
                  <Grid item xs={12} md={12} textAlign="left" padding={2}>
                    <SectionTitle title='Lines of Code'/>

                    <Grid container  alignItems="stretch">
                    <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='5' name='Additions'/>
                      </Grid>
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='10' name='Deletions'/>
                      </Grid>
                      <Grid item xs={12} md={12} textAlign="center">
                        <SectionCount number='10' name='Changed'/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </Section>
            </Grid>
            <Grid item xs={6} md={4}>
              <Section>
                <Grid container  alignItems="stretch">
                  <Grid item xs={12} md={12} textAlign="left" padding={2}>
                    <SectionTitle title='Builds'/>

                    <Grid container  alignItems="stretch">
                    <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='5' name='Success'/>
                      </Grid>
                      <Grid item xs={12} md={6} textAlign="left">
                        <SectionCount number='10' name='Failed'/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
            <Grid item xs={6} md={8}>
              <Section sx={{height: "100%"}}>
                <Grid container  alignItems="stretch">
                  <Grid item xs={12} md={12} textAlign="left" padding={2}>
                    <SectionTitle title='Commits'/>

                    <Grid container  alignItems="stretch">
                      <Grid item xs={12} md={2} textAlign="left">
                        <SectionCount number='5' name='Total'/>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <StyledBarChart
                          data={chartDataBar}
                          height={240}
                        >
                          <Palette scheme={['#FFA319']}/>
                          <ArgumentAxis labelComponent={ArgumentLabel}/>
                          <ValueAxis
                            labelComponent={ValueLabel}
                            gridComponent={ValueGrid}
                          />

                          <BarSeries
                            valueField="commits"
                            argumentField="date"
                          />
                          <Animation />
                          <EventTracker />
                          <Tooltip />
                          <HoverState />
                        </StyledBarChart>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
            </Grid>
          </Grid>
        </Container>


        <Footer />
      </>
    );
  }
}