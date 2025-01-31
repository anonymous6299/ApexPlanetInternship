

const Sort = () => {
  const categories = ["Books", "Electronics", "Stationery", "Grocery", "Clothing"];
  const price = ["Upto ₹100", "Upto ₹200", "Upto ₹300", "Min", "Max"];
  const rating = ["1 Star", "2 Star", "3 Star", "4 Star", "G.T 4 Star"];


  return (
    <div className="border-r border-gray-200 pr-8">
      <p className="text-xl font-medium mb-6 text-center">Sort Options</p>
      <div className="categories">
        <p className="text-sm pb-1">Category:</p>
        <select name="category" id="categories" className="border border-gray-400 w-40 px-3 py-2 rounded-md outline-none cursor-pointer">
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
              <input type={item.includes("M") ? "text" : "radio"} name={item} id={item} className={item.includes("M") ? "border border-gray-400 outline-none w-20 rounded-sm mx-2 px-2" : ""} />
              <label htmlFor={item} className={item.includes("M") ? "order-first" : "order-last ml-5"}>{item}</label>
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
              <label htmlFor={item}>{item}</label>
            </div>
          })
        }

      </div>
      <button className="float-end border px-4 py-1 rounded-md hover:bg-gray-50 cursor-pointer">Go</button>
    </div>
  )
}

export default Sort