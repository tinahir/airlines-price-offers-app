/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw, { GlobalStyles } from 'twin.macro';
import { Layout } from '@components/Layout';
import { Home } from '@pages/Home';
import { PriceOffers } from '@pages/PriceOffers/PriceOffers';
import { QueryErrorResetBoundary } from 'react-query';
import MessageBox from '@components/MessageBox';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <BrowserRouter>
          <GlobalStyles />
          <Layout>
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <MessageBox>
                  <div css={tw`mb-8`}>There was an error!</div>
                  <button
                    onClick={() => resetErrorBoundary()}
                    css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-700 bg-pink-100 hover:text-pink-600 hover:bg-pink-100 focus:outline-none focus:border-pink-300 transition duration-150 ease-in-out`}
                  >
                    Try again
                  </button>
                </MessageBox>
              )}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PriceOffers" element={<PriceOffers />} />
              </Routes>
            </ErrorBoundary>
          </Layout>
        </BrowserRouter>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
