import React from 'react';
import GalleryPage from '@/util/GalleryPage';

export default function LandScaping() {
    const interiorsImage = {
      "": [
        {
          title: "WHISPER CURVE",
          subtitle: "",
          image: "LANDSCAPING/Whispering_Curve.jpg",
        },
        {
          title: "VILLASCAPE",
          subtitle: "",
          image: "LANDSCAPING/Villascape.jpg",
        },
        {
          title: "The Tranquil Seat",
          subtitle: "",
          image: "LANDSCAPING/The_Tranquil_Seat.jpg",
        },
        {
          title: "The Gateway Pavilion",
          subtitle: "",
          image: "LANDSCAPING/The_Gateway_Pavilion.jpg",
        },
        {
          title: "Serene Arc Pergola",
          subtitle: "",
          image: "LANDSCAPING/Serene_Arc_Pergola.jpg",
        },
        {
          title: "GreenWood Haven",
          subtitle: "",
          image: "LANDSCAPING/GreenWood_Haven.jpg",
        },
        {
          title: "Crimson Canopy",
          subtitle: "",
          image: "LANDSCAPING/Crimson_Canopy.jpg",
        },
        {
          title: "TimberStone Retreat",
          subtitle: "",
          image: "LANDSCAPING/TimberStone_Retreat.jpg",
        },
        {
          title: "Bamboo Haven Bites",
          subtitle: "",
          image: "LANDSCAPING/Bamboo_Haven_Bites.jpg",
        },
      ],
    };

    const description = `Step into a world where contemporary design and sustainability come together to create exceptional interiors. 
    VI Design Studioz specializes in transforming spaces into functional works of art, seamlessly blending modern aesthetics 
    with eco-conscious principles. Each project is a reflection of thoughtful innovation, prioritizing comfort, elegance, 
    and environmental responsibility. From concept to completion, our commitment lies in crafting interiors that inspire, 
    uplift, and stand the test of time, all while respecting the planet.`;

    return (
        <GalleryPage
            title="LANDSCAPE"
            description={description}
            imageData={interiorsImage}
            banner="/LANDSCAPING/mainLandscape.jpg"
        />
    );
}
