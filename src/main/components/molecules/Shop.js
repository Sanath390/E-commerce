import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { dataFV } from "../atoms/data";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../atoms/spinner";
import {addToPrices, removeFromPrices} from '../../features/prices/pricesSlice';


export function Shop() {
    const navigate = useNavigate();
    const items = useSelector((state) => state.shop.item);
    const [cartItems, setCartItems] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const cartDispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const pricesDispatch = useDispatch();
    const { user, getAccessTokenSilently } = useAuth0();
    const [token, setToken] = useState(null);
    const [pricesData, setPricesData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handlePlus = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        // console.log(cart)
    };

    const handleMinus = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
        }));
        // console.log(cart)
    };
    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => setIsClicked(false), 175);
    };
    const uniqueItems = items.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.name.toLowerCase() === item.name.toLowerCase()
        ))
    );

    useEffect(() => {
        // console.log(cartItems);
        cartDispatch(addToCart(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const getToken = async () => {
            try {
                if (user) {
                    const accessToken = await getAccessTokenSilently();
                    setToken(accessToken);
                }
            } catch (error) {
                console.error('Token Error:', error);
            }
        };

        getToken();
    }, [user, getAccessTokenSilently]);

    // Second useEffect for data fetching
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://localhost:5000/prices', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log('Prices data:', response.data.message);
                    setPricesData(response.data.message);
                }
            } catch (error) {
                console.error('Fetch Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (token) {
            fetchPrices();
        }
    }, [token]);

    useEffect(() => {
        pricesDispatch(addToPrices(pricesData));
    }, [pricesData]);


    return (
        <div className="">
            <div key="shop"  >
                {/* display items here(image,name,price) */}
                {uniqueItems.length > 0 &&
                    <div>
                        <div className="font-montserrat font-black text-4xl p-6 text-[#00A6A6]">Search Results...</div>
                        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4`}>
                            {uniqueItems.map((item) => (
                                <div key={item.id} className="flex flex-col items-center p-4 border-solid border-2 border-[#C3AC3B] rounded-lg shadow-md hover:shadow-2xl
                               transition ease-in hover:-translate-y-1 hover:scale-[1.01] duration-0
                               bg-white bg-opacity-30">
                                    <div className="w-48 h-48 overflow-hidden rounded-lg">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-lg font-montserrat font-semibold mt-2 text-[#205614]">{item.name}</h3>
                                    {Boolean(pricesData) ?
                                        <p className="font-montserrat font-medium text-[#42273B]">&#8377;{pricesData[item.id - 1].price_val}</p>
                                        : <Loading />}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => {
                                                handleClick();
                                                handleMinus(item.id);
                                                // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                            }}
                                            className={`mt-2 px-2 py-1 font-montserrat font-semiBold 
                                           bg-[#6274CF] text-white border border-white rounded-xl hover:opacity-90 
                                           transition ease-in delay-75 duration-100
                                           ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}`}
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleClick();
                                                handlePlus(item.id);
                                                // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                            }}
                                            className={`mt-2 px-4 py-2 font-montserrat font-semiBold 
                                           bg-[#6274CF] text-white border border-white rounded-xl 
                                           transition ease-in delay-75 duration-100
                                           ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}
                                           hover:opacity-90`}
                                        >
                                            {cartItems[item.id] ? cartItems[item.id] : 'Add to Cart'}
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleClick();
                                                handlePlus(item.id);
                                                // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                            }}
                                            className={`mt-2 px-2 py-1 font-montserrat font-semiBold 
                                           bg-[#6274CF] text-white border border-white rounded-xl hover:opacity-90 
                                           transition ease-in delay-75 duration-100
                                           ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}`}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {/* display all items from dataFV here(image, name, price) */}
                <div className="font-montserrat font-black text-4xl p-6 text-[#00A6A6]">Shop Items</div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                    {dataFV.map((item) => (
                        <div key={item.id} className="flex flex-col items-center p-4 border-solid border-2 border-[#C3AC3B] rounded-lg shadow-md hover:shadow-2xl
            transition ease-in hover:-translate-y-1 hover:scale-[1.01] duration-0
            bg-white bg-opacity-30">
                            <div className="w-48 h-48 overflow-hidden rounded-lg">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-montserrat font-semibold mt-2 text-[#205614]">{item.name}</h3>
                            {Boolean(pricesData) ?
                                <p className="font-montserrat font-medium text-[#42273B]">&#8377;{pricesData[item.id - 1].price_val}</p>
                                : <Loading />}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        handleClick();
                                        handleMinus(item.id);
                                        // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                    }}
                                    className={`mt-2 px-2 py-1 font-montserrat font-semiBold 
                        bg-[#6274CF] text-white border border-white rounded-xl hover:opacity-90 
                        transition ease-in delay-75 duration-100
                        ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}`}
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => {
                                        handleClick();
                                        handlePlus(item.id);
                                        // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                    }}
                                    className={`mt-2 px-4 py-2 font-montserrat font-semiBold 
                        bg-[#6274CF] text-white border border-white rounded-xl 
                        transition ease-in delay-75 duration-100
                        ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}
                        hover:opacity-90`}
                                >
                                    {cartItems[item.id] ? cartItems[item.id] : 'Add to Cart'}
                                </button>
                                <button
                                    onClick={() => {
                                        handleClick();
                                        handlePlus(item.id);
                                        // cartDispatch(addToCart({[item.id]: cartItems[item.id]}));
                                    }}
                                    className={`mt-2 px-2 py-1 font-montserrat font-semiBold 
                        bg-[#6274CF] text-white border border-white rounded-xl hover:opacity-90 
                        transition ease-in delay-75 duration-100
                        ${isClicked ? ' hover:translate-y-1 hover:scale-[0.99] ' : ''}`}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}