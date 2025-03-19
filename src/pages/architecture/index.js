import React from 'react';
import GalleryPage from '@/util/GalleryPage';

export default function Architecture() {
    const interiorsImage = {
        'RESIDENTIAL': [
            { title: "ARTISTIC", subtitle: "ENGRAVED PATTERNS", image: "/interiors/ARTISTIC-INTERIOR.jpg" },
            { title: "BACK FLOWS", subtitle: "TOUCH OF SHADES", image: "/interiors/FLUTED-CURVE-PANELS.jpg" },
            { title: "MOOD-ULAR MINIMALISM", subtitle: "SOFT TOUCH", image: "/interiors/CLASSIC-KITCHEN.jpg" },
            { title: "GOLDEN AESTHETICS", subtitle: "LUXURY TOUCH", image: "/interiors/BED-ROOM.jpeg" },
            { title: "CREAM PIE", subtitle: "ENGRAVING TOUCH", image: "/interiors/CREAMPIE.jpg" },
            { title: "QUARTZ", subtitle: "TOUCH OF SATVARIO", image: "/interiors/RESIDENTIAL.jpeg" }
        ],
        'COMMERCIAL': [
            { title: "INDUSTRIAL DESIGN", subtitle: "EXPOSED TEXTURES", image: "/interiors/CAPITAL-LAND.jpg" },
            { title: "BACK TO HISTORY", subtitle: "SITTING LOUNGE", image: "/interiors/ENTRANCE-LOUNGE.jpeg" },
            { title: "MODERN WAVES", subtitle: "LUXURY TOUCH", image: "/interiors/RECEPTION.png" },
            { title: "CAFE", subtitle: "TOUCH OF COLOURS", image: "/interiors/CAFETRIA.jpg" },
            { title: "GYM", subtitle: "LIFT UP", image: "/interiors/GYM.jpg" },
            { title: "PEB STRUCTURE", subtitle: "ACP CLADDINGS", image: "/interiors/INDUSTRIAL.jpg" }
        ]
    };

    const description = `Step into a world where contemporary design and sustainability come together to create exceptional interiors. 
    VI Design Studioz specializes in transforming spaces into functional works of art, seamlessly blending modern aesthetics 
    with eco-conscious principles. Each project is a reflection of thoughtful innovation, prioritizing comfort, elegance, 
    and environmental responsibility. From concept to completion, our commitment lies in crafting interiors that inspire, 
    uplift, and stand the test of time, all while respecting the planet. Discover the perfect balance of style and sustainability with us.`;

    return (
        <GalleryPage
            title="ARCHITECTURE"
            description={description}
            imageData={interiorsImage}
            banner="/interiors/interiors-banner.jpeg"
        />
    );
}
