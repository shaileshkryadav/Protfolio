import "./projectCard.css"

const ProjectCard = () => {
    return(
        <>
            <div className="projectCard">
                <div className="projectCard_img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="img for project" />
                </div>
                <div className="projectCard_description">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <a href="">See the Code </a>
                </div>
                
            </div>
        </>
    )
}

export default ProjectCard;