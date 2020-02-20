import React, { useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import Header from "./PhotoCardPieces/Header";
import Search from "./PhotoCardPieces/Search";
import Photo from "./PhotoCardPieces/Photo";
import Fact from "./PhotoCardPieces/Fact";

function PhotoList() {

    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState("2020-02-19");
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPhoto();
    },[date])

    const getPhoto = async () => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);
        await setPhotos(response.data)  
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
        e.preventDefault();
        setDate(search);
        // setSearch("");
    }

    return (
        <div>
            <Header 
            date={photos.date} 
            title={photos.title}/>
            <Search 
            updateSearch={updateSearch}
            getSearch={getSearch}/>
            <Photo 
            picture={photos.url}/>
            <Fact 
            fact={photos.explanation}/>
        </div>
    )

};

export default PhotoList;
