import React from 'react';
import Link from 'next/link';
import Layout from '../componentes/Layout'
import styles from '../styles/Boton.module.css'
import {useState} from 'react'

const index = () => {
    const [buttonText, setButtonText] = useState('Conexion a Metamask')
    const [cuenta, setCuenta] = useState(null)
    const conectar = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method: 'eth_requestAccounts'}).then(result  => {
            setCuenta(result[0])
            setButtonText (null)
            location.href ="/menu";
        })
            .catch(error  =>{
                setButtonText (error.message)
            })
        } else{
        setButtonText ('Necesitas tener Metamask instalado')
    }
}


  return (

    <Layout>
        <hr1> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bienvenido</hr1>
         &nbsp;
         <br/>
        <hr2>Inicia sesion en Meteamask</hr2>
         <div>
            <button className={styles.btn} onClick={conectar}>{buttonText}{cuenta}</button>
        </div>
    </Layout>


    
  )
}

export default index;