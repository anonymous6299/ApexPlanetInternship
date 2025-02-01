import { useState } from "react"
import NavBar from "./NavBar"
import Toast from "./Toast"

const Contact = () => {
    const [Display, setDisplay] = useState("opacity-0");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setDisplay("opacity-100");
    }
    return (
        <>
            <NavBar />
            <div className="flex w-full justify-between px-40 pt-24 space-x-20 max-[1300px]:px-20 max-[1055px]:space-x-10 max-[925px]:px-10 max-[845px]:flex-col max-[845px]:space-x-0">
                <div className="w-1/2 max-[845px]:w-full">
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Reach me at:
                    </p>
                    <div className="flex justify-between items-center py-16 max-[845px]:py-2">
                        <div className="linkedin">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" className="w-40 hover:w-44 cursor-pointer transition-all max-[430px]:w-32 max-[365px]:w-24" />
                        </div>
                        <div className="github">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedin" className="w-44 hover:w-48 cursor-pointer transition-all max-[430px]:w-36 max-[365px]:w-28" />
                        </div>
                    </div>
                </div>
                <div className="text-2xl min-[845px]:h-80 mt-12 rounded-full border border-gray-200 max-[845px]:w-full max-[845px]:my-5">
                </div>
                <div className="w-1/2 max-[845px]:w-full max-[845px]:mb-3">
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Have a project in mind, a question, or just want to say hi? Feel free to drop a message!
                    </p>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input autoComplete="off" type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50" />

                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input autoComplete="off" type="email" id="Email" name="Email"  className="mt-1 p-2 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50" />

                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea autoComplete="off" name="message" id="message" className="mt-1 p-2 h-32 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50 resize-none" />
                        <button className="mt-6 py-2 px-6 bg-black hover:bg-[#2b3542] text-white rounded-md float-end" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Toast display={Display} setDisplay={setDisplay} />
        </>
    )
}

export default Contact