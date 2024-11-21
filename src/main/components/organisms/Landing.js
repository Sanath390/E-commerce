import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

const Landing = () => {
    const navigate = useNavigate();
    const { loginWithRedirect, user, getAccessTokenSilently } = useAuth0();
    
    let linearGradient = 'linear-gradient(0.3turn, #E38119,#C3786C,#82C560,#E3DCD9)';

    useEffect(() => {
        if (user) {
            (async () => {
                const token = await getAccessTokenSilently();
                navigate('dashboard', { replace: true });
            })();
        }
    }, [user]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center
         " style={{
            backgroundImage: "url('/images/background-images/nadine-primeau-sOMcKlIUiGA-unsplash.jpg')",
            position: 'relative'
        }}>
            <div flex className="flex flex-col items-center justify-center backdrop-blur-sm p-5 rounded-full
             transition duration-300 ease-in-out transform hover:scale-105">
            <h1 className="font-montserrat font-black text-7xl text-[#82C560] mb-8">Welcome to F&V</h1>
            <button
                onClick={() => loginWithRedirect()}
                className="font-montserrat font-semibold text-2xl bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300
                ease-in-out transform hover:scale-110"
                style={{ background: linearGradient }}
            >
                Login
            </button>
            </div>
        </div>
    );
};

export default Landing; 