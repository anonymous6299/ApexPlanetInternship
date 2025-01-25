

const Project = (props) => {
    const { project } = props
    const fields = ['Name', 'Description', 'TechStack','CompletedOn']
    return (
        <div className="projectCard rounded-lg w-[22rem] py-3 border border-black hover:shadow-lg cursor-pointer">
            <img src={project.imageURL} alt="logo" className='h-56 w-full px-10' />
            <hr className='my-4 border-gray-300' />
            <div className="desc px-4 grid grid-rows-5">
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
                    <div className="flex items-center space-x-3 underline text-blue-800">
                        <a href="#">Live</a>
                        <p>|</p>
                        <a href="#">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project