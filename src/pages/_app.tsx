import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [queryClient] = useState(() => new QueryClient())

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp;
