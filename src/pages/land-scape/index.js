import React from 'react';
import GalleryPage from '@/util/GalleryPage';

export default function LandScaping() {
    const landscapeImage = {
      "": [
        {
          title: "WHISPER CURVE",
          subtitle: "",
          image: "/LANDSCAPING/Whispering_Curve.webp",
        },
        {
          title: "VILLASCAPE",
          subtitle: "",
          image: "/LANDSCAPING/Villascape.webp",
        },
        {
          title: "The Tranquil Seat",
          subtitle: "",
          image: "/LANDSCAPING/The_Tranquil_Seat.webp",
        },
        {
          title: "The Gateway Pavilion",
          subtitle: "",
          image: "/LANDSCAPING/The_Gateway_Pavilion.webp",
        },
        {
          title: "Serene Arc Pergola",
          subtitle: "",
          image: "/LANDSCAPING/Serene_Arc_Pergola.webp",
        },
        {
          title: "GreenWood Haven",
          subtitle: "",
          image: "/LANDSCAPING/GreenWood_Haven.webp",
        },
        {
          title: "Crimson Canopy",
          subtitle: "",
          image: "/LANDSCAPING/Crimson_Canopy.webp",
        },
        {
          title: "TimberStone Retreat",
          subtitle: "",
          image: "/LANDSCAPING/TimberStone_Retreat.webp",
        },
        {
          title: "Bamboo Haven Bites",
          subtitle: "",
          image: "/LANDSCAPING/Bamboo_Haven_Bites.webp",
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
        imageData={landscapeImage}
        banner="/LANDSCAPING/mainLandscape.webp"
      />
    );
}
