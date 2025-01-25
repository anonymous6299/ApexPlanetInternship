import NavBar from "./NavBar"


const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="flex w-full justify-between px-40 pt-24 space-x-20">
                <div className="w-1/2">
                    <p class="text-lg text-gray-600 mb-8 text-center">
                        Reach me at:
                    </p>
                    <div className="flex justify-between items-center py-16">
                        <div className="linkedin">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" className="w-40 hover:w-44 cursor-pointer transition-all" />
                        </div>
                        <div className="github">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedin" className="w-44 hover:w-48 cursor-pointer transition-all" />
                        </div>
                    </div>
                </div>
                <div className="text-2xl h-80 mt-12 rounded-full border border-gray-200">
                </div>
                <div className="w-1/2">
                    <p class="text-lg text-gray-600 mb-8 text-center">
                        Have a project in mind, a question, or just want to say hi? Feel free to drop a message!
                    </p>
                    <form>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50" />
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50" />
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea className="mt-1 p-2 h-32 block w-full border border-gray-300 rounded-lg my-2 outline-none focus:bg-white bg-gray-50 resize-none" />
                        <button className="mt-6 py-2 px-6 bg-black hover:bg-[#2b3542] text-white rounded-md float-end">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact