import React from 'react';
import styled from '@emotion/styled'; 
import PropTypes from 'prop-types';


// constatnte > nombre = styled.nombre de la etiqueta`css`; Esto crea un componente con estilo
const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 50px;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

export const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}