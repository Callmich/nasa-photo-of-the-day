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
        <div>{
            <PhotoCard
                picture={photos.url}
                date={photos.date}
                title={photos.title}
                fact={photos.explanation}
            />
            }
        </div>
    )

};

export default PhotoList;