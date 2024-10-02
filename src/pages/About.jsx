import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from "../constants";
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Tarek </span>👋
      </h1>

      <div>
        {/* <p className="text-lg font-medium leading-relaxed mb-6"> */}
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I'm a software developer based in Tunisia, currently learning more about React and Node.js. I'm looking forward to working with many clients and making a difference in their lives.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">

          {/* {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="w-1/3">
              <div className="flex items-center gap-4">
                <img src={skill.imageUrl} alt={skill.name} className="w-10 h-10 object-contain" />
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            </div>  
          ))} */}

          {skills.map((skill, index) => (
            <div className='block-container w-20 h-20' key={`skill-${index}`}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with well known companies and picked up many skills along the way, I've also participate in teams and learned a lot from a smart people. Here's a list of companies I've worked with:
          </p>
        </div>

        {/* <div className="mt-16 flex flex-col gap-12">
          {experiences.map((experience, index) => (
            <div key={`experience-${index}`} className="w-full">
              <div className="flex items-center gap-4">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-20 h-20 object-contain"
                />
                <p className="text-lg font-medium">{experience.company_name}</p>
              </div>
            </div>
          ))}
        </div> */}

<div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      
      {/* Call To Action section */}
      <CTA />

      {/* <Loader /> */}

    </section>
  )
}

export default About;