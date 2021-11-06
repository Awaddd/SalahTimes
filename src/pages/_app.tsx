import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp;
