import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";


const TourGallery = (props) => {
    const { galleryImages } = props;
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <div className="App">
            <Carousel
                showArrows={true}
                // autoPlay={true}
                // infiniteLoop={true}
                selectedItem={galleryImages[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {galleryImages?.map((image, index) => (
                    <div key={index} style={{ height: "80vh", width: "100%" }}>
                        <img src={image.src} alt={index} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                    </div>))}
            </Carousel>
        </div>

    );
}
export default TourGallery;