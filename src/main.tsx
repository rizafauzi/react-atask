import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from '@pages/home';

import './index.css';

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/:keyword',
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
