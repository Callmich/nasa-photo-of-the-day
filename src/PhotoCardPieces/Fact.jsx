import React from "react";
import { Container, Col } from 'reactstrap';
import styled from "styled-components";


const Fact = props => {

    const FunFact = styled.p`
        font-weight: bold;
        font-size: 1rem;
        font-family: 'Lacquer', sans-serif;
    `

    return (
        <Container>
            <Col md={{ size: 6, offset: 3 }}>
                <FunFact>{props.fact}</FunFact>
            </Col> 
        </Container> 
    )

}

export default Fact;