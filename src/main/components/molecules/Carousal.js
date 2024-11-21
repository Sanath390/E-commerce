import { useState, useEffect } from "react";

export function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: "/images/vegetables/rachael-gorjestani-XlA2994Txhw-unsplash.jpg",
            title: ["High Quality Vegetables", "For Your Dish"],
            subtitle: ["Only the highest quality varieties are collected from", "the best farms in the world"],
            color: "#876D4C"
        },
        {
            image: "/images/fruits/bon-vivant-Ooj1c6fhdFM-unsplash.jpg", 
            title: ["Fresh Fruits", "For Your Palate"],
            subtitle: ["Fresh varieties collected", "from the best farms in the world"],
            color: "#9B530F"
        },
        {
            image: "/images/vegetables/deniz-altindas-jVLahCBXaJs-unsplash.jpg",
            title: ["Premium Quality", "For The Best!!!"],
            subtitle: ["Premium taste for your", "money invested!!!"],
            color: "#708014"
        },
        {
            image: "/images/fruits/julien-pianetti-Cr9hZrpC1Oc-unsplash.jpg",
            title: ["Tested And Verified", "ISO Verified"],
            subtitle: ["Our products are ISO verified,", "and checked."],
            color: "#364F73"
        },
        {
            image: "/images/vegetables/jonathan-pielmayer-eFFnKMiDMGc-unsplash.jpg",
            title: ["At Affordable Prices", "Huge Discounts!!!"],
            subtitle: ["We have a wide variety of products for various needs at", "affordable prices with huge discounts the more you buy"],
            color: "#1D3B3B"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div key="carousel" className="relative">
            <div className="gallery relative overflow-hidden w-[82rem] h-[38rem] mt-4 mx-auto rounded-2xl">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(${100 * (index - currentSlide)}%)`,
                        }}
                    >
                        <div className="gallery-cell-image w-full h-full bg-no-repeat bg-cover bg-center rounded-2xl" 
                            style={{ backgroundImage: `url('${slide.image}')` }}>
                            <div className="flex flex-col gap-y-8 h-full w-full justify-center p-9">
                                <div>
                                    <div className="font-montserrat font-extrabold text-7xl" style={{color: slide.color}}>{slide.title[0]}</div>
                                    <div className="font-montserrat font-extrabold text-7xl" style={{color: slide.color}}>{slide.title[1]}</div>
                                </div>
                                <div>
                                    <div className="font-montserrat font-semibold text-2xl" style={{color: slide.color}}>{slide.subtitle[0]}</div>
                                    <div className="font-montserrat font-semibold text-2xl" style={{color: slide.color}}>{slide.subtitle[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2"
                onClick={prevSlide}
            >
                ←
            </button>
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2"
                onClick={nextSlide}
            >
                →
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
