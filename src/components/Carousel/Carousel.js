import axios from "axios";
import React, { useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css";

const handleDragSt = (e) => e.preventDefault();

const Gallery = ({id, media_type}) => {
    const [credits, setCredits] = useState([]);

    const items = credits.map((c) => (
        <div className="carouselItem">
            <img src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart={handleDragSt}
                className="carouselItem_img"
            />
            <b className="carouselItem_txt">{c?.name}</b>
        </div>
    ))

    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 5
        },
        1024: {
            items: 7
        }
    }

    const fetchCredits = async () => {
        console.log(process.env.REACT_APP_API_KEY);
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setCredits(data.cast)
    }

    useEffect(() => {
        fetchCredits()
    }, []);

    return (
        <AliceCarousel 
            mouseTracking
            infinite
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )
}
export default Gallery;