import Context from "./Context"
import data from '../data.json'
import { useEffect, useState } from "react"

const ContextState = (props) => {
    const [AllProducts, setAllProducts] = useState(data);
    const [Category, setCategory] = useState("");
    const [Rating, setRating] = useState("");
    const [Price, setPrice] = useState("0");
    const ChangeCategory = (cat) => {
        if (cat === "") {
            return data;
        }
        else {
            const newPds = data.filter((item) => {
                return item.category === cat;
            });
            return newPds;
        }
    }
    const filterByRating = (rating) => {
        if (rating !== "") {
            const newpds = data.filter((item) => {
                return item.Rating <= Number.parseInt(rating);
            })
            return newpds;
        }
    }
    const filterByPrice = (price) => {
        const newpds = data.filter((item) => {
            return item.Price <= Number.parseInt(price);
        })
        return newpds;

    }

    const getIntersection = (array1, array2, array3) => {
        if (array1 || array2 || array3.length !== 0) {
            let newArray = [];
            if (array3.length !== 0) {
                if (!array1 && !array2) {
                    return array3;
                }
                if (array1 && !array2) {
                    newArray = array1.filter((item) => {
                        return array3.includes(item);
                    })
                }
                if (!array1 && array2) {
                    newArray = array2.filter((item) => {
                        return array3.includes(item);
                    })
                }
                if (array1 && array2) {
                    newArray = array1.filter((item) => {
                        return array2.includes(item) || array3.includes(item);
                    })
                }
            }
            else {
                if (!array1 && !array2) {
                    return [];
                }
                if (array1 && !array2) {
                    return array1;
                }
                if (!array1 && array2) {
                    return array2;
                }
                if (array1 && array2) {
                    newArray = array1.filter((item) => {
                        return array2.includes(item);
                    })
                }
            }
            return newArray;
        }
        else {
            return data;
        }
    }


    useEffect(() => {
        let data1, data2, data3;
        if (Category !== "") {
            data1 = ChangeCategory(Category)
        }
        if (Rating !== "") {
            data2 = filterByRating(Rating)
        }
        if (Price !== "") {
            data3 = filterByPrice(Price)
        }
        console.log(data1, data2, data3)
        const newpds = getIntersection(data1, data2, data3);
        setAllProducts(newpds);
    }, [Category, Rating, Price])



    return (
        <Context.Provider value={{ AllProducts, filterByPrice, filterByRating, ChangeCategory, setCategory, setRating, Category, setPrice }}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextState