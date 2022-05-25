import DashboardFilters from 'src/components/DashboardFilters';
import { Grid } from '@mui/material';

/* import { useTheme } from '@mui/material/styles'; */

function PageHeader() {

 /*  const theme = useTheme(); */

  return (
    <Grid container alignItems="left"  maxWidth="xl">
      <Grid item xs={12} md={12} display="flex" >
        <DashboardFilters/>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
