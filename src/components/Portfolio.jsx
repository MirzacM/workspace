import React from 'react';
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.jpg"
import {  AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import Reveal from './Reveal';


const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Some Description About...",
      links: {
        AiFillInstagram: "#",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "Some Description About...",
      links: {
        AiFillInstagram: "#",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "Some Description About...",
      links: {
        AiFillInstagram: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "Some Description About...",
      links: {
        AiFillInstagram: "#",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: "Some Description About...",
      links: {
        AiFillInstagram: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                       
                        <a href={project.links.instagram}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineInstagram/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio