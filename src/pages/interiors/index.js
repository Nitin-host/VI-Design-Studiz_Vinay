import React from 'react';
import GalleryPage from '@/util/GalleryPage';

export default function Interiors() {
    const interiorsImage = {
        'RESIDENTIAL': [
            { title: "ARTISTIC", subtitle: "ENGRAVED PATTERNS", image: "/interiors/ARTISTIC-INTERIOR.webp" },
            { title: "BACK FLOWS", subtitle: "TOUCH OF SHADES", image: "/interiors/FLUTED-CURVE-PANELS.webp" },
            { title: "MOOD-ULAR MINIMALISM", subtitle: "SOFT TOUCH", image: "/interiors/CLASSIC-KITCHEN.webp" },
            { title: "GOLDEN AESTHETICS", subtitle: "LUXURY TOUCH", image: "/interiors/BED-ROOM.webp" },
            { title: "CREAM PIE", subtitle: "ENGRAVING TOUCH", image: "/interiors/CREAMPIE.webp" },
            { title: "QUARTZ", subtitle: "TOUCH OF SATVARIO", image: "/interiors/RESIDENTIAL.webp" }
        ],
        'COMMERCIAL': [
            { title: "INDUSTRIAL DESIGN", subtitle: "EXPOSED TEXTURES", image: "/interiors/CAPITAL-LAND.webp" },
            { title: "BACK TO HISTORY", subtitle: "SITTING LOUNGE", image: "/interiors/ENTRANCE-LOUNGE.webp" },
            { title: "MODERN WAVES", subtitle: "LUXURY TOUCH", image: "/interiors/RECEPTION.webp" },
            { title: "CAFE", subtitle: "TOUCH OF COLOURS", image: "/interiors/CAFETRIA.webp" },
            { title: "GYM", subtitle: "LIFT UP", image: "/interiors/GYM.webp" },
            { title: "PEB STRUCTURE", subtitle: "ACP CLADDINGS", image: "/interiors/INDUSTRIAL.webp" }
        ]
    };

    const description = `Step into a world where contemporary design and sustainability come together to create exceptional interiors. 
    VI Design Studioz specializes in transforming spaces into functional works of art, seamlessly blending modern aesthetics 
    with eco-conscious principles. Each project is a reflection of thoughtful innovation, prioritizing comfort, elegance, 
    and environmental responsibility. From concept to completion, our commitment lies in crafting interiors that inspire, 
    uplift, and stand the test of time, all while respecting the planet.`;

    return (
        <GalleryPage
            title="INTERIORS"
            description={description}
            imageData={interiorsImage}
            banner="/interiors/interiors-banner.webp"
        />
    );
}
