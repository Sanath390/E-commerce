import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
export function Footer () {
    return (
        <div key="footer-container" >
            <div key="footer-background" className="w-full h-[15rem] bg-[#CFBD62] border-solid border-2 border-[#C3AC3B] shadow-2xl shadow-[#C3AC3B]/50 
                    grid grid-cols-none auto-cols-max justify-center fixed bottom-0">
                <div key="footer-content" className="flex flex-col justify-center">
                    <div key="footer-logo" className="h-12 w-12 bg-no-repeat bg-cover ml-4 rounded-full self-center justify-center" style={{ backgroundImage: "url('/icons/healthy.svg')" }}>
                        
                    </div>
                    <div key="footer-location" className="flex flex-row self-center items-end my-2">
                        <div>
                            <svg key="footer-location-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 h-7 w-7 stroke-[#2F7F1E] stroke-2 flex flex-col justify-end">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div key="footer-location-text" className="font-montserrat font-semibold text-md text-[#2F7F1E] ml-1 h-7 flex flex-col justify-end"> Bengaluru, Karnataka</div>
                    </div>
                    <hr key="footer-divider" className="h-[10px] w-1/4 mx-auto border-t-2" />
                    <div key="footer-social-icons" className="flex flex-row justify-center items-center gap-4">
                        <Link to="/shop" key="footer-whatsapp-link"><WhatsAppIcon sx={{ fontSize: 30, color: '#2F7F1E' }} /></Link>
                        <InstagramIcon key="footer-instagram-icon" sx={{ fontSize: 30, color: '#2F7F1E' }} />
                        <YouTubeIcon key="footer-youtube-icon" sx={{ fontSize: 30, color: '#2F7F1E' }} />
                    </div>
                    <div key="footer-credits" className="flex flex-col justify-center items-center mt-2">
                        <div key="footer-photo-credit" className="font-montserrat font-medium text-sm text-[#2F7F1E]">Pictures were taken from unsplash.com for educational purposes.</div>
                        <div key="footer-copyright" className="font-montserrat font-medium text-sm text-[#2F7F1E]"><CopyrightIcon sx={{ fontSize: 15, color: '#2F7F1E' }} /> 2024 created by F&V. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}