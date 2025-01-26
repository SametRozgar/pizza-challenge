import React, { useEffect, useState } from "react";

export default function Slider() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [offsetY, setOffsetY] = useState(0);
    const [direction, setDirection] = useState(1); 

  
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setOffsetY((prev) => {
                if (prev >= 10) {
                    setDirection(-1); 
                } else if (prev <= -10) {
                    setDirection(1); 
                }
                return prev + 0.5 * direction;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [direction]);

    const parallaxStyle = {
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + offsetY}px)`,
    };

    return (
        <div className="banner relative w-full h-screen overflow-hidden">
            <img 
                src="images/bg-2.png" 
                alt="Banner Background" 
                className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            <img 
                src="images/banner-up.png" 
                alt="Banner Foreground" 
                className="absolute top-0 left-0 w-full h-full object-contain" 
                style={parallaxStyle} 
            />
        </div>
    );
}


