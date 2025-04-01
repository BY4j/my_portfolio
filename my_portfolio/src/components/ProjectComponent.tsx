"use client";

import { useState } from "react";
import Page from "./Page";


const projects = [
    {
        name: "Connect 4",
        description:
            "Connect 4 was made only using HTML, CSS and JS." +
            "The most tricky part of this project to me was it's victory conditions and the logic behind it",
        image: "",
        deadline: "10 days",
        completion: "85%",
        skills: ["html", "css", "JS"]
    },
    {
        name: "Tweethunter",
        description: "This the biggest project yet. We were a group of 3 to try and recreate twitter with, well only it's most basic features",
        image: "",
        deadline: "4 weeks",
        completion: "60%",
        skills: ["html", "css", "JS", "php", "sql"]
    },
];

export default function ProjectComponent() {

    const [selectedProject, setSelectedProject] = useState<null | typeof projects[number]>(null);

    return (
        <><Page>
            <div className="absolute top-[0.9em] left-[0.1em] flex justify-center items-center w-[16em] h-[4em] bg-[#443020] -rotate-6">
                <h2>Projects</h2>
            </div>
            <div className="flex size-[90%] items-start justify-evenly border-4 border-indigo-600">
                <div className="flex w-[100%] justify-evenly items-center mt-[5em]">
                    {projects.map((project) =>
                        <div className="flex relative items-center h-[10em] w-[15em] border-4 border-blue-500 hover:border-white cursor-pointer"
                            onClick={() => {
                                console.log("test");
                                setSelectedProject(project);
                            }}
                        >
                            <div className="absolute w-[50%] h-[25%] bottom-[-1em] flex items-center justify-center border-4 border-yellow-600 left-1/2 transform -translate-x-1/2">
                                <h5>{project.name}</h5>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Page>
            <Page>
                <div></div>
            </Page>
            <section className="absolute w-[40vw] h-[95vh] p-[1em] right-[7em] top-[2em] border-orange-600 flex justify-center items-center border-4 border-purple-600 bg-[#c8b28b]">
                <div className="flex flex-col size-[95%] items-center justify-start border-4 border-indigo-600 gap-[0.4em]">
                    <div className="flex justify-center items-center w-[40em] h-[3em] bg-[#443020]">
                        <h3>Project details</h3>
                    </div>
                    {selectedProject ? (
                        <>
                            <div className="flex justify-center items-center w-[38em] h-[2em] bg-[#443020]">
                                <h3>{selectedProject.name}</h3>
                            </div>
                            <div className="flex justify-center items-center w-[25em] h-[25%] bg-[#a68458]">
                                <h3>IMG</h3>
                            </div>
                            <div className="flex justify-between items-center w-[38em] h-[2.5em] bg-[#a68458]">
                                <div className="flex justify-evenly items-center w-[40%] h-[100%] border-4 border-yellow-600">
                                    <h4>Deadline</h4>
                                    <div className="flex justify-center items-center w-[40%] h-[90%] border-4 border-blue-600">
                                        <p>
                                            {selectedProject.deadline}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-evenly items-center w-[40%] h-[100%] border-4 border-yellow-600">
                                    <h4>Completion</h4>
                                    <div className="flex justify-center items-center w-[40%] h-[90%] border-4 border-blue-600">
                                        <p>
                                            {selectedProject.completion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-end w-[40em] h-[30%] mt-[2em] border-4 border-yellow-600">
                                <div className="absolute top-[-1.5em] left-[-0.5em] flex justify-center items-center w-[16em] h-[3em] bg-[#a68458]">
                                    <h4>Description</h4>
                                </div>
                                <div className="flex justify-start mt-[2em] items-start w-[100%] h-[90%]">
                                    <p>
                                        <span>
                                            {selectedProject.description}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center w-[40em] h-[30%] mt-[2em] border-4 border-yellow-600 gap-[1em]">
                                <div className="absolute top-[-1.5em] left-[-0.5em] flex justify-center items-center w-[16em] h-[3em] bg-[#a68458]">
                                    <h4>Technologies</h4>
                                </div>
                                {selectedProject.skills.map((skill, index) => (
                                    <div key={index} className="flex justify-center items-center w-[15%] h-[6em] border-4 border-yellow-600">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>Please select a project !</p>
                    )}
                </div>
            </section></>
    )
}