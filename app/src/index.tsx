import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '@palette/GlobalStyles';


if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@mocks/browser');
  worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: 60 * 1000,
      retry: false,
    },
  },
});
const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
  key: `OfflineCache`,
  throttleTime: 0,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles></GlobalStyles>
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
