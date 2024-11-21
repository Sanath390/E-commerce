import { useState, useEffect, useCallback } from "react";
import { Carousel } from "./Carousal";
import { HashLink } from 'react-router-hash-link';
import { useRef } from "react";

export function About() {
    let [hidden, setHidden] = useState(true);
    const freshVibesRef = useRef(null);
    
    useEffect(() => {
        if (!hidden && freshVibesRef.current) {
            // console.log("yes,dont worry");
            setTimeout(() => {
                freshVibesRef.current.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [hidden]);

    return (
        <div key="about-main-container">
            {/* carousel */}
            <div key="carousel-container">
                <Carousel />
            </div>
            {/* carousel */}

            {/* about */}
            <div key="about-content-container" id="about" >
                <div key="about-grid-container" className="grid grid-rows-none mt-[4rem] auto-rows-max gap-2 ">
                    <div key="about-title-container" className="font-montserrat font-black text-5xl p-6 text-[#00A6A6]">About Us</div>
                    <div key="about-grid-inner-container" className=" pt-4 grid grid-cols-2 gap-x-16 p-6">
                        <div key="about-grid-left-container" className="grid grid-rows-none auto-rows-max gap-y-6">
                            <p key="about-paragraph-container" className="font-montserrat font-bold text-lg text-white">
                                At F&V, we're passionate about creating a seamless and enjoyable shopping experience for our customers. Our team is dedicated to providing the highest quality products and exceptional customer service, ensuring that every interaction with our brand is a positive one. We believe that shopping should be a pleasure, not a chore, and we're committed to making that a reality for our customers.
                            </p>
                            <div key="about-image-container" className="bg-no-repeat bg-cover bg-center rounded-2xl h-96 w-full" style={{ backgroundImage: "url('/images/background-images/webvilla-hv1MrBzGGNY-unsplash.jpg')" }}></div>
                        </div>
                        <div key="about-grid-right-container" className="grid grid-rows-none auto-rows-max gap-y-6">
                            <div key="about-image-container-2" className="bg-no-repeat bg-cover bg-bottom rounded-2xl h-96 w-full" style={{ backgroundImage: "url('/images/background-images/nathan-dumlao-7VUBgjh2ESw-unsplash.jpg')" }}></div>
                            <div key="about-grid-inner-container-2" className="grid grid-cols-2 gap-x-4 h-[169px]">
                                <div key="about-image-container-3" className="bg-no-repeat bg-cover bg-bottom rounded-2xl w-full" style={{ backgroundImage: "url('/images/background-images/vishang-soni-5i5zmvhVMZ4-unsplash.jpg')" }}></div>
                                <div key="about-more-container" className="place-self-center">
                                    <div key="about-more-button-container" className="font-montserrat font-bold text-4xl border-solid border-4 border-white rounded-full h-28 w-28 flex justify-center items-center text-[#00A6A6] 
                                        cursor-pointer" onClick={() => setHidden(!hidden)}>
                                        More
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about */}

            {/* fresh vibes */}
            {hidden ? null :
            <div 
                ref={freshVibesRef}
                key="fresh-vibes-container" 
                id="fresh-vibes"
            >
                    <div key="fresh-vibes-title-container" className="font-montserrat font-black text-5xl p-6 text-[#00A6A6]">Fresh Vibes</div>
                    <div key="fresh-vibes-grid-container" className="grid grid-cols-2 gap-x-16 p-4 h-[38rem]">
                        <div key="fresh-vibes-grid-left-container" className="grid grid-rows-none auto-rows-max gap-y-6">
                            <div key="fresh-vibes-image-container-1" className="bg-no-repeat bg-cover bg-center rounded-2xl h-[10rem] w-full" style={{ backgroundImage: "url('/images/background-images/jessica-johnston-8izKvE05tLs-unsplash.jpg')" }}></div>
                            <div key="fresh-vibes-image-container-2" className="bg-no-repeat bg-cover bg-center rounded-2xl h-[24rem] w-full" style={{ backgroundImage: "url('/images/background-images/pineapple-supply-co-cf5GPig_KSw-unsplash.jpg')" }}></div>
                        </div>
                        <div key="fresh-vibes-grid-right-container" className="grid grid-rows-none auto-rows-max gap-y-6">
                            <div key="fresh-vibes-image-container-3" className="bg-no-repeat bg-cover bg-center rounded-2xl h-[24rem] w-full" style={{ backgroundImage: "url('/images/background-images/tim-mossholder-S3gNA0HQZo8-unsplash.jpg')" }}></div>
                            <div key="fresh-vibes-grid-inner-container-3" className="grid grid-cols-2 gap-x-4 h-[160px]">
                                <div key="fresh-vibes-image-container-4" className="bg-no-repeat bg-cover bg-center rounded-2xl w-full" style={{ backgroundImage: "url('/images/background-images/tiago-faifa-NXDr9mDZ3cw-unsplash.jpg')" }}></div>
                                <div key="fresh-vibes-close-container" className="place-self-center">
                                    <div key="fresh-vibes-close-button-container" className="bg-no-repeat bg-cover bg-bottom rounded-full h-36 w-36 flex justify-center items-center" onClick={() => setHidden(true)} style={{ backgroundImage: "url('images/background-images/anto-meneghini-r7OZ7BKOw6Q-unsplash.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* fresh vibes */}

        </div>
    );
};
// About.displayName = 'About';