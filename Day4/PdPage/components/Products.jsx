import Product from "./Product"
import data from '../data.json'

const Products = () => {
  const products = data;
  return (
    <div className="h-[37rem] overflow-y-scroll">
      <div className="grid grid-cols-4 grid-rows-5 gap-10 pr-8">
        {
          products.map((item, index) => {
            return <Product key={index} data={item}/>
          })
        }
      </div>
    </div>
  )
}

export default Products