import { useState } from 'react';
import { NavBar } from '../molecules/Navbar';
import { Footer } from '../molecules/Footer';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { HashLink } from 'react-router-hash-link';
import {useAuth0} from '@auth0/auth0-react'

export function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const {logout} = useAuth0();

    const [showButton, setShowButton] = useState(false);
    const [logOutbutton, setLogOutbutton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Get the total height of the document
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Get current scroll position
            const scrollPosition = window.scrollY;

            // Show button when scroll position is more than 50% of total height
            setShowButton(scrollPosition > totalHeight / 2);
            // Show button when scroll position is less than 50% of total height
            setLogOutbutton(scrollPosition < totalHeight / 4 );
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div key="dashboard-container">
            <div key="background-image-container" className="bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: "url('/images/background-images/anto-meneghini-r7OZ7BKOw6Q-unsplash.jpg')" }}>
                <div key="backdrop-blur-container" className="backdrop-blur pb-[19rem]">

                    <NavBar />

                    {/* outlet */}
                    <div key="outlet-container" >
                        <ErrorBoundary>
                            <Outlet />
                        </ErrorBoundary>
                    </div>
                    {/* outlet */}

                    <Footer />

                </div>
            </div>
            {(
                <div className={`nav-top-button fixed bottom-14 left-[90rem] transition-transform duration-300 ease-in-out delay-50
                ${showButton ? '-translate-y-10' : 'translate-y-[200%]'} `} style={{ transform: '' }}>
                    <HashLink smooth to="#top">
                        <svg key="footer-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="
                        mt-2 size-12 stroke-white stroke-2 border-solid border-2 border-white 
                        rounded-full cursor-pointer bg-[#2F7F1E] p-1 hover:bg-[#607F1E] 
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </HashLink>
                </div>
            )}
            <div className={`nav-logout-button fixed top-24 left-[90rem] transition-transform duration-300 ease-out delay-50
                ${logOutbutton ? 'translate-y-0' : '-translate-y-[300%]'} `} onClick={() => logout()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="
                            mt-2 size-12 stroke-white stroke-2 border-solid border-2 border-white 
                            rounded-full cursor-pointer bg-[#2F7F1E] p-1 hover:bg-[#607F1E] 
                            transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            </div>
        </div>
    )
}
// Dashboard.displayName = 'Dashboard';
