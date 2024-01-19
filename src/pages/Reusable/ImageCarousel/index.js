import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import Image from "next/image";


const TourGallery = (props) => {
    const { galleryImages } = props;
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <div className="App">
            {/* <Carousel
               showThumbs={false}
                // autoPlay={true}
                // infiniteLoop={true}
                selectedItem={galleryImages[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {galleryImages.map((image, index) => (
                    <div key={index} style={{ height: "50vh", width: "100%" }}>
                        {/* <img src={image.src} alt={index} style={{ height: "100%", width: "100%", objectFit: "cover" }} /> */}
                        {/* <Image src={image.src} alt={index} key={index} /> */}
                    {/* </div>))}
            </Carousel> */}
        </div>

    );
}
export default TourGallery;