import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Amplify from 'aws-amplify';
import { CssBaseline } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import awsconfig from './aws-exports';
import routes from './router';
import { useRoutes } from 'react-router-dom';

Amplify.configure(awsconfig);
const App = () => {

  const content = useRoutes(routes);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
