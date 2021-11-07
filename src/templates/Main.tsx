import React, { ReactNode } from 'react';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  classes?: string;
};

const base = "flex flex-col w-full h-screen mx-auto antialiased bg-dark"

const Main = ({ meta, children, classes }: IMainProps) => {

  const classNames = `${base} ${classes}`
  return (
    <div className={classNames}>
      {meta}
      <Nav />
      {children}
      <Footer />
    </div>
  )
};

export { Main };
