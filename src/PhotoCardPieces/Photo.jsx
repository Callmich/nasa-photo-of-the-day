import React from "react";

const Photo = props => {
    return (
        <div className="photo">
            <img src={props.picture} alt={"NASA's Photo of the Day"}/>
        </div>

    )
}

export default Photo;