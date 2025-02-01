import React from 'react'

const Projects = () => {
    return (
        <div className="about border w-[43rem] max-[890px]:w-[40rem] max-[670px]:w-[36rem] max-[600px]:w-[30rem] max-[503px]:w-[26rem] max-[435px]:w-80 max-[345px]:w-64 my-20 mx-auto pt-1 px-6 pb-6 rounded-lg">
            <h2 className='text-left text-lg font-bold'>My Projects</h2>
            <div className="projs space-y-4 mt-1">
            <div className="proj1">
                <p className='font-bold opacity-80'>1. TaskFlow (React)</p>
                <p><strong className='opacity-80'>Description: </strong> A task management and productivity app designed to help individuals and teams organize their workflow efficiently. Users can create, edit, and prioritize tasks, set deadlines, and categorize them into custom lists. </p>
            </div>
            <div className="proj2">
                <p className='font-bold opacity-80'>2. ShopSphere (MERN)</p>
                <p><strong className='opacity-80'>Description: </strong>A fully functional e-commerce platform that connects buyers and sellers. Built with the MERN stack, it features product listing, search, sorting, and filtering options, a shopping cart, and a checkout process integrated with payment gateways like Stripe or PayPal. </p>
            </div>
            <div className="proj3">
                <p className='font-bold opacity-80'>3. EduVerse (Next.js)</p>
                <p><strong className='opacity-80'>Description: </strong>A modern learning platform for students and educators, providing access to courses, assignments, and study materials. EduVerse supports video lectures, quizzes, and collaborative learning through discussion forums.  </p>
            </div>
            </div>
        </div>
    )
}

export default Projects