import { Grid, Typography } from '@mui/material';

/* import { useTheme } from '@mui/material/styles'; */

function PageHeader() {

 /*  const theme = useTheme(); */

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Page Header
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
