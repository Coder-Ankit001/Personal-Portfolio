import React from 'react'
import DeveloperImage from '../assets/developer_image.png';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <div className='flex flex-col md:flex-row justify-between items-center px-10 py-10 text-white'>

        {/* LEFT */}
        <div className='font-sans max-w-xl space-y-4'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Hi, I am <span className='text-violet-600'>Ankit Chaudhary</span>
          </h1>

          <p className='text-lg font-medium'>
            I build scalable web applications and contribute to open source.
          </p>

          <p className='text-gray-200'>
            Full Stack Developer | Open Source Contributor | DSA Enthusiast
          </p>

          {/* BUTTONS */}
          <div className='flex gap-4 pt-4'>
            <a 
              href="https://github.com/Coder-Ankit001" 
              target="_blank" 
              rel="noreferrer"
              className='bg-slate-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition'
            >
              GitHub
            </a>

            <Link 
              to="/projects" 
              className='bg-violet-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition'
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className='mt-8 md:mt-0'>
          <img 
            src={DeveloperImage} 
            alt="developer" 
            className='h-72 md:h-80 object-contain'
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className='px-10 py-10 text-white bg-violet-800'>
        <h2 className='text-2xl font-bold mb-4'>About Me</h2>
        <p className='text-gray-200 max-w-2xl'>
          I am currently in my 2nd year of Bachelor of technology (Information Technology) at Delhi Technological University (DTU) 
          with strong foundations in Data Structures & Algorithms, and Full Stack Development. I actively contribute to open-source
          projects like Wagtail CMS and enjoy building real-world applications.
        </p>
      </div>

      {/* SKILLS SECTION */}
      <div className='px-10 py-10 text-white'>
        <h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>

        <div className='flex flex-wrap gap-4'>
          {[
            "JavaScript", "React", "Node.js", "Express",
            "MongoDB", "Python", "Django", "PostgreSQL"
          ].map((skill, index) => (
            <span 
              key={index}
              className='bg-violet-500 text-violet-200 px-4 py-2 rounded-full font-medium'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className='px-10 py-10 text-white'>
        <h2 className='text-2xl font-bold mb-6'>Projects</h2>

        <div className='grid md:grid-cols-2 gap-6'>

          {/* PROJECT CARD */}
          <div className='p-5 border rounded-xl shadow hover:shadow-lg border-violet-200 hover:border-white transition bg-slate-600'>
            <h3 className='text-xl font-semibold text-white'>Arcane Hub</h3>
            <p className='text-gray-200 mt-2'>
              MERN stack gaming platform with authentication, wishlist, and API integration.
            </p>

            <div className='flex gap-4 mt-4'>
              <a href="#" className='text-violet-400 font-medium'>Live</a>
              <a href="#" className='text-white font-medium'>Code</a>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className='text-center text-white flex flex-col items-center pb-4 bg-violet-900'>
        <div>
            <h2 className='text-2xl font-bold mb-4'>Let’s Connect</h2>
            <p className='text-gray-200 mb-4'>
            Open to collaborations, open source, and opportunities.
            </p>
        </div>

        <div className='flex gap-x-4'>
            <a 
            href="mailto:ankitchaudhary7157@gmail.com"
            className='bg-slate-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition'
            >
            Contact Me
            </a>

            <a 
            href="https://leetcode.com/u/u56WzQfrVP/"
            className='bg-slate-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition'
            >
            Leet Code
            </a>
        </div>
      </div>

    </div>
  )
}

export default Content