import React, { useContext } from "react";
import { OPTIONS } from "../data/assete/OPTIONS";
import { HouseContext } from "./Housecontext";
import Option from "./Option";

const Wishlist = () => {
    const { houseItems, resetFromWish } = useContext(HouseContext);

    // فیلتر کردن آیتم‌هایی که در wishlist موجود هستند
    const filteredOptions = OPTIONS.filter(o =>
        houseItems?.some(i => i.id === o.id && i.count > 0)
    );

    return (
        <React.Fragment>
            <div className="row">
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((o) => <Option data={o} key={o.id} />)
                ) : (
                    <h2 className="p-2 m-2 text-secondary">
                        You didn't add the Place to  wishlist.💔</h2>
                )}
            </div>
            <button className="btn btn-outline-success m-3" onClick={resetFromWish}>
                Reset
            </button>
        </React.Fragment>
    );
};

export default Wishlist;
