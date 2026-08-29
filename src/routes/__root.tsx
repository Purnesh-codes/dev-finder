import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
// import SearchBar from '../components/SearchBar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="mx-auto md:max-w-[650px] ">
        <header className="p-6">
          <div className="text-white text-3xl font-bold ">devfinder</div>
        </header>
        <main className=" h-screen p-4 space-y-5 text-white">
          {/* <SearchBar /> */}
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
