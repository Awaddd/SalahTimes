import React, { ReactNode } from 'react';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="w-full antialiased">
    <div className="max-w-screen-md mx-auto">
      {meta}
      <Nav />
      {children}
      {/* <Footer /> */}
    </div>
  </div>
);

export { Main };
