import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>Navigation bar</div>
      <Outlet />
      <div>Footer</div>
    </React.Fragment>
  );
}
