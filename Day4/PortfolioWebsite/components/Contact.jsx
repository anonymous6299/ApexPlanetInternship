import React from 'react'

const Contact = () => {
    return (
        <div className="contact border w-[45%] my-20 mx-auto pt-1 px-6 pb-6 rounded-lg">
            <h2 className='text-left text-lg font-bold'>Contact Me</h2>
            <p className='text-justify text-sm'>
                Connect with me at:
            </p>
            <div className="flex justify-between w-full items-center">
                <div className="linkedin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" className="w-40 hover:w-44 cursor-pointer transition-all" />
                </div>
                <div className="github">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedin" className="w-44 hover:w-48 cursor-pointer transition-all" />
                </div>
            </div>
        </div>
    )
}

export default Contact