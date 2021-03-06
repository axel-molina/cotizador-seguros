import {useState} from 'react';
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Resumen } from "./components/Resumen";
import { Resultado } from "./components/Resultado";
import styled from '@emotion/styled';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year:'',
      plan:''
    }
  });

  

  // extraer datos_;
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
      <ContenedorFormulario>
        <Formulario
        guardarResumen={guardarResumen}
       
        ></Formulario>

    
        

        <Resumen
        datos={datos}
        ></Resumen>

         <Resultado
        cotizacion={cotizacion}
        ></Resultado> 
        
    </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
