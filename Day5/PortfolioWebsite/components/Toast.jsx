

const Toast = (props) => {
    return (
        <div className={`w-fit border border-gray-300 absolute right-10 bottom-6 pl-5 pb-4 rounded-lg bg-white transition-opacity shadow-md ${props.display}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 float-end mx-3 mt-2 cursor-pointer" onClick={()=>{props.setDisplay("opacity-0")}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <div className="text w-96 pt-4">
                <p className="text-xl font-semibold">Message sucessfully submitted!</p>
                <p className="text-sm">Thanks for contacting!</p>
            </div>
        </div>
    )
}

export default Toast