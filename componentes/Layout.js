import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
       <Header />
       <main>
             {children}
       </main>
    </>
  )
}

export default Layout;