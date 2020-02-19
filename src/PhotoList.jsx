import React, { useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoList() {

    const [photos, setPhotos] = useState([]);
    const [date, useDate] = useState("2020-02-19")

    useEffect(()=> {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(response => {
                console.log(response.data);
                setPhotos(response.data);
            })
            .catch(error => [console.log("No Data", error)]);
    }, []);

    return (
        <div>
            {photos.map(function(pic, index) {
                return (
                    <PhotoCard
                        key={index} 
                        picture={pic.url}
                        date={pic.date}
                        title={pic.title}
                        fact={pic.explanation}
                    />
                )
            })}
        </div>
    )

};

export default PhotoList;