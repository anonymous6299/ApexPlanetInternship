import Context from "./Context"
import data from '../data.json'
import { useState } from "react"

const ContextState = (props) => {
    const [AllProducts, setAllProducts] = useState(data);
    const ChangeCategory = (cat) => {
        if (cat === "") {
            setAllProducts(data);
        }
        else {
            const newPds = data.filter((item) => {
                return item.category === cat;
            });
            setAllProducts(newPds);
        }
    }
    const filterByRating = (rating) => {
        if (rating!=="") {
            const newpds = data.filter((item) => {
                return item.Rating <= Number.parseInt(rating);
            })
            setAllProducts(newpds);
        }
    }
    const filterByPrice = (price, min, max) => {
        if (!min && !max) {
            const newpds = data.filter((item) => {
                return item.Price <= price;
            })
            setAllProducts(newpds);
        }
        if (min && !max) {
            const newpds = data.filter((item) => {
                return item.Price >= price;
            })
            setAllProducts(newpds);
        }
        if (max && !min) {
            const newpds = data.filter((item) => {
                return item.Price <= price;
            })
            setAllProducts(newpds);
        }
        if (max && min) {
            const newpds = data.filter((item) => {
                return item.Price >= price[0] && item.Price <= price[1];
            })
            setAllProducts(newpds);
        }
    }
    return (
        <Context.Provider value={{ AllProducts, filterByPrice, filterByRating, ChangeCategory }}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextState