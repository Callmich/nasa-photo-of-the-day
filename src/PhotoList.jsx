import React, { useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoList() {

    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState("2020-02-19");
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPhoto();
    },[date] )

    const getPhoto = async () => {
        await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(response => {console.log(response.data);
            setPhotos(response.data);})
        .catch(error => [console.log("No Data", error)]);
        }

    // useEffect(()=> {
    //     axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    //         .then(response => {
    //             console.log(response.data);
    //             setPhotos(response.data);
    //         })
    //         .catch(error => [console.log("No Data", error)]);
    // }, []);

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefualt();
        setDate(search);
        setSearch("");
    }

    return (
        <div>{
            <PhotoCard
                picture={photos.url}
                date={photos.date}
                title={photos.title}
                fact={photos.explanation}
                updateSearch={updateSearch}
                getSearch={getSearch}
            />
            }
        </div>
    )

};

export default PhotoList;