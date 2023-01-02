import React from 'react';
import Link from 'next/link';
import Layout from '../componentes/Layout'
import styles from '../styles/Menu.module.css'

const menu = () => {
  return (

    <Layout>
           <nav>
          <ul className={styles.menu}>
              <li>
                   <Link href="/consulta">
                       Consultar Historial clinico
                    </Link>
              </li>
              <li>
                   <Link href="/registro_med">
                       Registrar personal de salud
                    </Link>
              </li>
              <li>
                   <Link href="/almacenar">
                       Almacenar registro medico
                    </Link>
              </li>
          </ul>
    </nav>
     
    </Layout>


    
  )
}

export default menu;