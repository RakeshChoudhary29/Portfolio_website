import { useState } from 'react'
import profilePhoto from '../assets/user.jpg'

const tabs = ['skills', 'coding']

const tabContent = {
  skills: (
    <ul className="list-none p-0 m-0 space-y-5">
      <li>
        <span className="text-[#b54769] font-semibold">Frontend Development</span>
        <br />
        <span className="text-offwhite/70">
          React.js | Next.js | JavaScript | TypeScript | HTML | CSS
        </span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Backend Development</span>
        <br />
        <span className="text-offwhite/70">
          Node.js | Express.js | REST APIs | JWT | Socket.io
        </span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Databases and Cloud</span>
        <br />
        <span className="text-offwhite/70">
          MongoDB | MySQL | Redis | Google Cloud Platform
        </span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Programming Languages</span>
        <br />
        <span className="text-offwhite/70">JavaScript | TypeScript | Python | C++ | SQL</span>
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
          visit
        </a>
        <br />
        <span className="text-offwhite/70">Top 100 institute rank | Solved 534+ problems</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">LeetCode</span>{' '}
        <a
          href="https://leetcode.com/RakeshChoudhary29/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-white rounded px-2 py-0.5 text-xs font-mono hover:bg-hotmag transition-colors no-underline"
        >
          visit
        </a>
        <br />
        <span className="text-offwhite/70">Solved 400+ Data Structures problems</span>
      </li>
      <li>
        <span className="text-[#b54769] font-semibold">Highlights</span>
        <br />
        <span className="text-offwhite/70">
          JAM 2022 AIR 317 | Strong problem solving and analytical foundation
        </span>
      </li>
    </ul>
  ),
}

const tabLabels = {
  skills: 'Skills',
  coding: 'Coding Profiles',
}

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">01. About</p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="md:w-[35%] flex-shrink-0 w-full max-w-sm mx-auto md:mx-0">
            <div className="relative group">
              <img
                src={profilePhoto}
                alt="Rakesh Choudhary"
                className="w-full rounded-2xl object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl"
              />
              <div className="absolute inset-0 border-2 border-aqua/30 rounded-2xl translate-x-3 translate-y-3 z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
            </div>
          </div>

          <div className="md:w-[60%] w-full">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">About Me</h2>
            <p className="text-offwhite/70 leading-relaxed mb-8 text-lg">
              I am <span className="text-offwhite font-semibold">Rakesh Choudhary</span>, a full
              stack developer with experience building scalable web applications
              using the MERN stack, Next.js, and Google Cloud Platform. I enjoy
              combining strong problem-solving skills with clean and practical
              frontend interfaces.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8 border-b border-white/10 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab-link-underline text-sm md:text-lg font-medium cursor-pointer bg-transparent border-none p-0 pb-1 transition-colors duration-200 ${
                    activeTab === tab ? 'active text-white' : 'text-offwhite/50 hover:text-offwhite'
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            <div className="text-[#ababab]">{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
