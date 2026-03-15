import { useState } from 'react'
import profilePhoto from '../assets/user.jpg'

const tabs = ['skills', 'experience', 'education', 'coding']

const tabContent = {
  skills: (
    <ul className="list-none p-0 m-0 space-y-5">
      <li>
        <span className="text-[#b54769] font-semibold">Programming Languages</span>
        <br />
        <span className="text-offwhite/70">C++ &nbsp;·&nbsp; Python</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Web Development</span>
        <br />
        <span className="text-offwhite/70">HTML &nbsp;·&nbsp; CSS &nbsp;·&nbsp; JavaScript</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Problem Solving</span>
        <br />
        <span className="text-offwhite/70">Data Structures &nbsp;·&nbsp; Algorithms</span>
      </li>
    </ul>
  ),
  experience: (
    <ul className="list-none p-0 m-0 space-y-5">
      <li>
        <span className="text-[#b54769] font-semibold">DBMS Summer Internship</span>
        <br />
        <span className="text-offwhite/70">
          Completed DBMS and OOP internship under the CS Department, NIT Warangal.
        </span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">CODSOFT</span>
        <br />
        <span className="text-offwhite/70">
          Completed a 4-week online virtual internship in C++ programming.
        </span>
      </li>
    </ul>
  ),
  education: (
    <ul className="list-none p-0 m-0 space-y-5">
      <li>
        <span className="text-[#b54769] font-semibold">2024</span>
        <br />
        <span className="text-offwhite/70">MSc Mathematics &amp; Scientific Computing — NIT Warangal</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">2022</span>
        <br />
        <span className="text-offwhite/70">BSc Mathematics — Deshbandhu College, University of Delhi</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">2019</span>
        <br />
        <span className="text-offwhite/70">12th — BS Memorial School</span>
      </li>
    </ul>
  ),
  coding: (
    <ul className="list-none p-0 m-0 space-y-5">
      <li>
        <span className="text-[#b54769] font-semibold">GeeksForGeeks</span>{' '}
        <a
          href="https://auth.geeksforgeeks.org/user/rakeshthnb9s"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-white rounded px-2 py-0.5 text-xs font-mono hover:bg-hotmag transition-colors no-underline"
        >
          visit ↗
        </a>
        <br />
        <span className="text-offwhite/70">
          Under 100 Institute Rank &nbsp;·&nbsp; Solved 540+ Problems
        </span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">LeetCode</span>{' '}
        <a
          href="https://leetcode.com/RakeshChoudhary29/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-white rounded px-2 py-0.5 text-xs font-mono hover:bg-hotmag transition-colors no-underline"
        >
          visit ↗
        </a>
        <br />
        <span className="text-offwhite/70">Solved 400+ Data Structures problems</span>
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
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="section-label mb-2">01. About</p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Profile photo */}
          <div className="md:w-[35%] flex-shrink-0">
            <div className="relative group">
              <img
                src={profilePhoto}
                alt="Rakesh Choudhary"
                className="w-full rounded-2xl object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Decorative border offset */}
              <div className="absolute inset-0 border-2 border-aqua/30 rounded-2xl translate-x-3 translate-y-3 z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-[60%]">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">About Me</h2>
            <p className="text-offwhite/70 leading-relaxed mb-8 text-lg">
              I am <span className="text-offwhite font-semibold">Rakesh Choudhary</span>, currently
              pursuing an MSc in Mathematics and Scientific Computing from the{' '}
              <span className="text-aqua">National Institute of Technology, Warangal</span>. My
              aspiration is to become a Software Developer. I possess skills in C++, HTML, CSS,
              JavaScript, and Data Structures, and I am eager to learn more.
            </p>

            {/* Tab headers */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 border-b border-white/10 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-link-underline text-base md:text-lg font-medium cursor-pointer bg-transparent border-none p-0 pb-1 transition-colors duration-200 ${
                    activeTab === tab ? 'active text-white' : 'text-offwhite/50 hover:text-offwhite'
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
