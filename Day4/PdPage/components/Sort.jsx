import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";


const Sort = () => {
  const categories = ["Books", "Electronics", "Stationery", "Grocery", "Clothing"];
  const price = [300, 900, 1_500, 7_500,10_000, "Min", "Max"];
  const rating = [1, 2, 3, 4, 5];


  const context = useContext(Context);
  const {ChangeCategory}=context;
  const [Category, setCategory] = useState("");
  useEffect(() => {
    console.log(Category)
    ChangeCategory(Category);
  }, [Category])
  
  return (
    <div className="border-r border-gray-200 pr-8">
      <p className="text-xl font-medium mb-6 text-center">Sort Options</p>
      <div className="categories">
        <p className="text-sm pb-1">Category:</p>
        <select name="category" id="categories" className="border border-gray-400 w-40 px-3 py-1 rounded-md outline-none cursor-pointer" value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="">Select</option>
          {
            categories.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })
          }
        </select>
      </div>
      <hr className="mt-5 border-gray-200" />
      <div className="price">
        <p className="text-sm pt-4 pb-1">Price:</p>
        {
          price.map((item, index) => {
            return <div key={index} className="flex items-center my-2">
              <input type={isNaN(item) ? "text" : "radio"} name={item} id={item} className={isNaN(item) ? "border border-gray-400 outline-none w-20 rounded-sm mx-2 px-2" : ""} />
              <label htmlFor={item} className={isNaN(item) ? "order-first" : "order-last ml-5"}>{isNaN(item)?item:"Upto ₹"+item}</label>
            </div>
          })
        }

      </div>
      <hr className="mt-5 border-gray-200" />
      <div className="rating">
        <p className="text-sm pt-4 pb-1">Rating:</p>
        {
          rating.map((item, index) => {
            return <div key={index} className="my-2 space-x-2">
              <input type="radio" name={item} id={item} />
              <label htmlFor={item}>{item} Star</label>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Sort