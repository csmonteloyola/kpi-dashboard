import * as React from 'react';

import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>CAM KPI Dashboard</title>
        <meta name="description" content="CAM KPI Dashboard" />
      </Helmet>
      CAM KPI Dashboard
    </>
  );
}
