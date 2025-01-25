import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="middleSec flex items-center px-40 justify-between">
                <div>
                    <h1 className='opacity-50 text-4xl font-extrabold'>
                        Hi, I'm
                    </h1>
                    <div className="flex flex-col">
                        <h1 className='text-8xl font-extrabold'>
                            Developer X
                        </h1>
                        <p className='absolute text-justify top-96 w-2/5 text-sm'>
                            I’m a passionate and versatile software developer specializing in creating intuitive, user-focused websites and applications. With a strong foundation in web development, I excel at blending creativity with functionality to deliver high-quality, scalable solutions.
                            <br />
                            I have hands-on experience in a variety of technologies, including HTML, CSS, JavaScript, React.js, Next.js, Node.js, and MongoDB. Over the years, I’ve worked on full-stack applications, focusing on clean code, responsive design, and efficient workflows.
                            <br />
                            When I’m not coding, you’ll find me exploring new tech stacks, mentoring fellow developers, or brainstorming innovative solutions to everyday challenges.
                            <br /><br />
                            If you’re looking for a dedicated developer who’s eager to help you achieve your goals, let’s connect! Together, we can create something amazing.
                        </p>
                    </div>
                </div>
                <div className="img pt-10">
                    <img src="https://png.pngitem.com/pimgs/s/127-1272138_best-web-app-development-company-in-uk-india.png" alt="pic" className='rounded-full w-96' />
                </div>
            </div>
        </>
    )
}

export default Home