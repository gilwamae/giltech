"use client";
import React, {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/7.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gilwamae/giltech.git",
        previewUrl: "https://giltech-ae4sjva40-gil-wamaes-projects.vercel.app/"
     
    },
    {
        id: 2,
        title: "Advanced Personal Portfolio",
        description: "Project 2 description",
        image: "/images/projects/9.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gilwamae/Personal-Portfolio.git",
        previewUrl: "https://personal-portfolio-2-one.vercel.app/"
    
    },
    {
        id: 3,
        title: "Forex Trading Website",
        description: "Project 2 description",
        image: "/images/projects/10.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/gilwamae/GainwiseFX.git",
        previewUrl: "https://gainwisefx-one.vercel.app/"
    }
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
    

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) =>
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                
            />)}</div>
        </section>
        /* Hello*/
    );
};
export default ProjectSection