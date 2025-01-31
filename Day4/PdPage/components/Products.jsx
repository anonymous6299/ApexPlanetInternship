import Product from "./Product"
import { useContext } from "react"
import Context from "../Context/Context"



const Products = () => {
  const context=useContext(Context);
  const {AllProducts}=context;
  return (
    <div className="h-[37rem] overflow-y-scroll">
      <div className="grid grid-cols-4 grid-rows-5 gap-10 pr-8">
        {
          AllProducts.length!==0?AllProducts.map((item, index) => {
            return <Product key={index} data={item}/>
          }):"No products to show."
        }
      </div>
    </div>
  )
}

export default Products