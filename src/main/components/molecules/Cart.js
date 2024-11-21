import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataFV } from "../atoms/data";
import Badge from '@mui/material/Badge';

export function Cart() {
    const cart = useSelector(state => state.cart.items);
    const prices = useSelector(state => state.prices.prices);
    const cartKeys = Object.keys(cart);
    // console.log('Prices:', prices);
    const total = () => {
        let sum = 0;
        for (let i = 0; i < cartKeys.length; i++) {
            sum += prices[cartKeys[i]-1].price_val * cart[cartKeys[i]];
        }
        return sum;
    }
    return (
        <div key="cart" className="pb-[19rem]">
            <div className="flex flex-row mt-10 bg-white bg-opacity-30 p-9 shadow-2xl border-white border-2 rounded-2xl">
                <div className="grid grid-cols-4 gap-10 p-4">
                    {
                        dataFV.filter((item) => cartKeys.includes(item.id.toString())).map((item) => (
                            <div>
                                <Badge badgeContent={cart[item.id]} color="primary">
                                    <div key={item.id} className="flex flex-col items-center p-4 border-solid border-2 border-[#C3AC3B] rounded-lg shadow-md hover:shadow-2xl
                                transition ease-in hover:-translate-y-1 hover:scale-[1.01] duration-0
                                bg-white bg-opacity-30">
                                        <div className="w-48 h-48 overflow-hidden rounded-lg">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-lg font-montserrat font-semibold mt-2 text-[#205614]">{item.name}</h3>
                                        <p className="font-montserrat font-medium text-[#42273B]">₹{prices[item.id-1].price_val}</p>
                                    </div>
                                </Badge>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col w-[25rem] h-[25rem] gap-3 justify-center items-center self-center border-solid border-2 
                border-[#C3AC3B] rounded-lg bg-white bg-opacity-30 mr-5 ml-10
                 hover:shadow-2xl transition ease-in hover:-translate-y-1 hover:scale-[1.01] duration-0">
                    <div className="font-montserrat font-semibold text-2xl text-[#205614]">
                        {`Subtotal (${cartKeys.length} items): ₹${total()}`}
                    </div>
                    <div className="font-montserrat font-semibold text-2xl text-[#205614] rounded-3xl p-4 bg-[#CFBD62] cursor-pointer">
                        Proceed To Buy
                    </div>
                </div>
            </div>
        </div>
    );
}