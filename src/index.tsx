import 'src/utils/chart';
import 'nprogress/nprogress.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import { SidebarProvider } from './contexts/SidebarContext';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
