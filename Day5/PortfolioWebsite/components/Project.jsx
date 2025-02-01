

const Project = (props) => {
    const { project } = props
    const fields = ['Name', 'Description', 'TechStack','CompletedOn']
    return (
        <div className="projectCard rounded-lg w-[22rem] max-[760px]:w-[32rem] max-[560px]:w-[28rem] max-[470px]:w-96 max-[400px]:w-80 py-3 border border-black hover:shadow-lg cursor-pointer">
            <img src={project.imageURL} alt="logo" className='h-56 w-full px-10' />
            <hr className='my-4 border-gray-300' />
            <div className="desc px-4 grid" style={{gridTemplateRows:"2rem 3.5rem 3.5rem 2rem 1.5rem"}}>
                {
                    fields.map((item,index)=>{
                        return <div className="grid grid-cols-2">
                        <p className="font-medium">{item}:</p>
                        <p>{project[`${item}`]}</p>
                    </div>
                    })
                }
                <div className="grid grid-cols-2">
                    <p className="font-medium">Links:</p>
                    <div className="flex items-center space-x-3">
                        <a href="#" className="text-blue-800 hover:underline">Live</a>
                        <p>|</p>
                        <a href="#" className="text-blue-800 hover:underline">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project