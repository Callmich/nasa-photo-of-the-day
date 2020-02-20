import React from "react";

const Header = props => {
    return (
        <div className='header'>
            <h1>NASA Photo of the day</h1>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
        </div>
    )

}

export default Header;