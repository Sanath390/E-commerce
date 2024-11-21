import { Link } from "react-router-dom";
import { useState } from "react";
import { dataFV } from '../atoms/data';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItem } from "../../features/shop/shopSlice";
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";


export const NavBar = () => {
    const navigate = useNavigate();
    const [inp, setInp] = useState("");
    const location = useLocation();
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const cartLen = Object.keys(cart).length;

    const nav = useNavigate();
    const handleAbout = () => {
        // console.log(location.pathname);
        if (location.pathname === '/dashboard/shop') {
            nav(-1);
            setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else {
            setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }

    return (
        <div>
            <div className="h-16 bg-[#CFBD62] border-solid border-2 border-[#C3AC3B] shadow-2xl shadow-[#C3AC3B]/50">
                <div className="grid grid-cols-3">
                    <div
                        className="h-16 w-16 bg-no-repeat bg-cover ml-4 rounded-full"
                        style={{ backgroundImage: "url('/icons/healthy.svg')" }}
                    />

                    <div className="self-center">
                        <div className="h-10 w-60 flex flex-row rounded-full border-solid border-2 border-[#42273B] bg-[#70566D] hover:bg-[#8D6C89] focus-within:bg-[#8D6C89]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                className="size-6 self-center justify-center ml-1 stroke-[#42273B]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                className="placeholder-[#A58AA2] placeholder:italic bg-inherit outline-none ml-2 self-center text-[#F6F8FF] font-montserrat font-regular text-md"
                                placeholder='Search for anything...'
                                type="text"
                                value={inp}
                                onChange={(e) => {
                                    setInp(e.target.value);
                                    // console.log(inp);
                                }}
                            />
                        </div>
                        {inp.length > 0 && (

                            <div className="absolute w-60 p-1 bg-white border-solid border-2 border-[#C3AC3B] shadow-2xl 
                            shadow-[#C3AC3B]/50 z-10 flex flex-col gap-2">{
                                    dataFV.filter((item) => (item.name.toLowerCase().includes(inp.toLowerCase()) || item.category
                                        .toLowerCase().includes(inp.toLowerCase()))).length === 0 ? (
                                        <div key="empty" className="flex flex-row hover:bg-[#CFBD62]">
                                            <div className="flex flex-col w-44">
                                                <div className="font-montserrat font-semibold text-md text-[#2F7F1E] ml-1 h-7 flex flex-col justify-end">
                                                    No Results
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        dataFV.filter((item) => item.name.toLowerCase().includes(inp.toLowerCase()) || item.category
                                            .toLowerCase().includes(inp.toLowerCase()))
                                            .map((item) => (
                                                <Link to="shop" onClick={(e) => { dispatch(setItem(item)); setInp(""); }}>
                                                    <div key={item.id} className="flex flex-row hover:bg-[#CFBD62]">
                                                        <div className="h-12 w-12 bg-no-repeat bg-cover ml-2 rounded-full self-center justify-center"
                                                            style={{ backgroundImage: `url('${item.image}')` }}>
                                                        </div>
                                                        <div className="flex flex-col w-44">
                                                            <div className="font-montserrat font-semibold text-md text-[#2F7F1E] ml-1 h-7 flex flex-col justify-end">
                                                                {item.name}

                                                            </div>
                                                            <div className="font-montserrat font-semibold text-md text-[#2F7F1E] ml-1 h-7 flex flex-col justify-end">
                                                                &#8377;{item.price}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                    )}
                            </div>

                        )}
                    </div>

                    <div className="flex flex-row justify-evenly items-center gap-6 col-start-3">
                        <Link to="shop">
                            <div className="font-montserrat font-regular text-xl">
                                Shop
                            </div>
                        </Link>

                        <div onClick={handleAbout} className="cursor-pointer font-montserrat font-regular text-xl">
                            About
                        </div>

                        <div className="font-montserrat font-regular text-xl">
                            Reviews
                        </div>

                        <Link to="cart">
                            <div className="w-32 flex flex-row justify-center items-center">
                                <Badge badgeContent={cartLen} color="success">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 stroke-[#205614]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </Badge>
                            </div>
                        </Link>               

                    </div>
                </div>
            </div>
        </div>
    );
}



