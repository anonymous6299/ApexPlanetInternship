import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="middleSec flex items-center px-40 justify-between max-[1283px]:px-20 max-[882px]:flex-col max-[544px]:px-10">
                <div className='max-[882px]:my-5'>
                    <h1 className='opacity-50 text-4xl font-extrabold max-[1123px]:text-3xl max-[882px]:text-center'>
                        Hi, I'm
                    </h1>
                    <div className="flex flex-col max-[882px]:text-center">
                        <h1 className='text-8xl font-extrabold max-[1123px]:text-7xl'>
                            Developer X
                        </h1>
                        <p className='min-[882px]:absolute text-justify top-96 w-2/5 text-sm max-[1123px]:top-80 max-[882px]:w-full max-[882px]:my-5'>
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
                <div className="img pt-10 max-[882px]:order-first">
                    <img src="https://png.pngitem.com/pimgs/s/127-1272138_best-web-app-development-company-in-uk-india.png" alt="pic" className='rounded-full w-96 max-[1123px]:w-72 max-[882px]:w-96 max-[465px]:w-72' />
                </div>
            </div>
        </>
    )
}

export default Home