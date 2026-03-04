import { useState } from 'react'
import profilePhoto from '../assets/user.jpg'

const tabs = ['skills', 'experience', 'education', 'coding']

const tabContent = {
  skills: (
    <ul className="list-none p-0 m-0 space-y-4">
      <li>
        <span className="text-[#b54769] font-semibold">Programming Languages</span>
        <br />C++ , Python
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Web Development</span>
        <br />HTML , CSS , JavaScript
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Problem Solving</span>
        <br />Data Structures
      </li>
    </ul>
  ),
  experience: (
    <ul className="list-none p-0 m-0 space-y-4">
      <li>
        <span className="text-[#b54769] font-semibold">DBMS Summer Internship</span>
        <br />Completed DBMS and OOP internship under CS department of NITW.
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">CODSOFT</span>
        <br />Completed 4 Week Online Virtual Internship program in C++ Programming Language.
      </li>
    </ul>
  ),
  education: (
    <ul className="list-none p-0 m-0 space-y-4">
      <li>
        <span className="text-[#b54769] font-semibold">2024</span>
        <br />MSc Mathematics and Scientific Computing — NIT Warangal
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">2022</span>
        <br />BSc Mathematics — Deshbandhu College, University of Delhi
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">2019</span>
        <br />12th — BS Memorial School
      </li>
    </ul>
  ),
  coding: (
    <ul className="list-none p-0 m-0 space-y-4">
      <li>
        <span className="text-[#b54769] font-semibold">GeeksForGeeks</span>{' '}
        <a
          href="https://auth.geeksforgeeks.org/user/rakeshthnb9s"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-white rounded px-1 text-sm hover:bg-hotmag transition-colors no-underline"
        >
          visit
        </a>
        <br />Under 100 Institute Rank on GeeksforGeeks. Solved more than 540 Problems.
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">LeetCode</span>{' '}
        <a
          href="https://leetcode.com/RakeshChoudhary29/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-white rounded px-1 text-sm hover:bg-hotmag transition-colors no-underline"
        >
          visit
        </a>
        <br />Successfully solved more than 400 Data Structures problems.
      </li>
    </ul>
  ),
}

const tabLabels = {
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  coding: 'Coding Profiles',
}

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile photo */}
          <div className="md:w-[35%] flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Rakesh Choudhary"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-[60%] text-[#ababab]">
            <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4">About Me</h2>
            <p className="leading-relaxed mb-6">
              I am Rakesh Choudhary, currently pursuing MSc in Mathematics and Scientific Computing
              from the National Institute of Technology, Warangal. My aspiration is to become a
              Software Developer. I possess skills in C++, HTML, CSS, JavaScript, and Data
              Structures, and I am eager to learn more.
            </p>

            {/* Tab headers — scrollable on very small screens */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-link-underline text-lg md:text-xl font-medium cursor-pointer bg-transparent border-none p-0 transition-colors duration-200 ${
                    activeTab === tab
                      ? 'active text-white'
                      : 'text-[#ababab] hover:text-white'
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="text-[#ababab]">{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
