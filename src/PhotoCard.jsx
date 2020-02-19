import React from "react";


const PhotoCard = props => {

    return (
        <div>
            <div className='header'>
                <h1>NASA Photo of the day</h1>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>
            <div className="photo">
                <img src={props.picture} alt={"NASA's Photo of the Day"}/>
            </div>
            <div className="funFact">
                <p>{props.fact}</p>
            </div>
        </div>
    )

};

export default PhotoCard;