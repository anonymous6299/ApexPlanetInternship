

const Product = (props) => {
    const particulars = [ "Name", "Price", "Rating",]
    return (
        <div className="border h-[21rem] px-6 py-3 rounded-lg hover:shadow-lg cursor-pointer flex flex-col justify-between">
            <img src={props.data.image_url} alt="img" className="w-36 mx-auto"/>
            <div className="particulars flex flex-col space-y-1">
            {
                particulars.map((item, index) => {
                    return (
                     
                        <div className="name flex space-x-3 items-center" key={index}>
                        <p className="font-semibold">{item}:</p>
                        <p>{`${item==="Price"?"₹":""}`+props.data[`${item}`]}</p>
                    </div>
                    )
                    
                })
            }
            </div>
        </div>
    )
}

export default Product