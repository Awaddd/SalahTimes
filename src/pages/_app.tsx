import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/main.css';

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </RecoilRoot>
);

export default MyApp;
