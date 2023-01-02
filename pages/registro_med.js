import React from 'react';
import Layout from '../componentes/Layout'

const registro_med = () => {
  return (
    <Layout>
         Registro de Personal de la Salud

         <br/><br/><br/><label for="hash">Hash unica  de cartera Ethereum: &nbsp;</label> 
         <input type="text" id="hash" hash="hash" required
          size="30"/>

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="name">Nombre Completo: &nbsp;</label> 
         <input type="text" id="name" name="name" required
          size="20"/>

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="clave">Clave de Empleado: &nbsp;</label> 
         <input type="text" id="vlave" clave="clave" required
        size="20"/>
          
    </Layout>

  )
}

export default registro_med;