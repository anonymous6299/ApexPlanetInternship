import Rating from "../components/Sort"
import Products from "../components/Products"

function App() {

  return (
    <>
    <h1 className="text-center text-3xl font-semibold my-10">Welcome to products page</h1>
    <div className="flex justify-between px-20 space-x-10">
      <Rating/>
      <Products/>
    </div>
    </>
  )
}

export default App
