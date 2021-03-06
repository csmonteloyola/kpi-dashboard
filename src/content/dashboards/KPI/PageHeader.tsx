import DashboardFilters from 'src/components/DashboardFilters';
import { Grid } from '@mui/material';

/* import { useTheme } from '@mui/material/styles'; */

function PageHeader() {

 /*  const theme = useTheme(); */

  return (
    <Grid container alignItems="left"  maxWidth="lg">
      <Grid item xs={12} md={12} display="flex" justifyContent='flex-end' >
        <DashboardFilters/>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
