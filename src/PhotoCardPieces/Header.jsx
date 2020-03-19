import React from "react";
import styled from "styled-components"

const Header = props => {

const HeadH1 = styled.h1`
    font-family: 'Lacquer', sans-serif;
    color: red;
`

const HeadH2 = styled.h2`
    font-family: 'Lacquer', sans-serif;
    color: black;
`

const HeadH3 = styled.h3`
    font-family: 'Lacquer', sans-serif;
    color: grey;
`

    return (
        <div className='header'>
            <HeadH1>NASA Photo of the day</HeadH1>
            <HeadH2>{props.title}</HeadH2>
            <HeadH3>{props.date}</HeadH3>
        </div>
    )

}

export default Header;