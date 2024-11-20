import React from "react"
import { RiSpeakLine } from "react-icons/ri"
import { FaEdit } from "react-icons/fa"
import { SiAdobelightroom } from "react-icons/si"
import {
  BsBrightnessHighFill,
  BsFillAlarmFill,
  BsLightbulb,
} from "react-icons/bs"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Photographer',
      technologies: [
        { name: 'Light', icon: <BsBrightnessHighFill className='text-yellow-600' /> },
        { name: 'Time Management', icon: <BsFillAlarmFill className='text-red-600' /> },
        { name: 'Creativity', icon: <BsLightbulb className='text-pink-600' /> },
        { name: 'Communication', icon: <RiSpeakLine className='text-blue-600' /> },
        { name: 'Editing', icon: <FaEdit className='text-green-500' /> },
        { name: 'AdobeLightroom', icon: <SiAdobelightroom className='text-viole-600' /> },
      ],
    },
    
  ]

const Skills = () => {
  return (
    <div className="max-w-[750px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
        Photography skills refer to the set of skills that you need to capture and produce high-quality photographs.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills