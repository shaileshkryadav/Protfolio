import "./myProject.css"
import ProjectCard from "../../componets/projectCard/ProjectCard";

const MyProject = () => {
    return (
        <>
            <div className="myProject">
                <div className="myProject_header">
                    <div className="myProject_header-title">
                        <p>Recent Projects</p>
                        <h1>My Protfolio</h1>
                    </div>
                    <div className="myProject_header-btn">
                        <button>Visit My GitHub</button>
                    </div>
                </div>
                <div className="myProject_projects">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    )
}

export default MyProject;