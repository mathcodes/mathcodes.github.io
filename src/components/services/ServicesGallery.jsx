/* eslint-disable */
import React from 'react';
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import { FaTabletAlt, FaBook } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    icon: <BsCodeSlash />,
    desc: 'I build websites and web applications using the latest technologies. I can build a website from scratch or work with an existing design. I can also build a website using a content management system (CMS) like WordPress or Shopify.'
  },
  {
    id: 2,
    title: 'App Development',
    icon: <FaTabletAlt />,
    desc: 'I build mobile applications for both iOS and Android. I can build a mobile application from scratch or work with an existing design. I can also build a mobile application using a content management system (CMS) like WordPress or Shopify.'
  },
  {
    id: 3,
    title: 'SEO, Marketing, and Branding',
    icon: <BsGraphUp />,
    desc: 'I can help you with your SEO, marketing, and branding needs. '
  },
  {
    id: 4,
    title: 'Tutoring',
    icon: <FaBook />,
    desc: 'I can help you learn how to code. I can teach you how to build websites and web applications using the latest technologies. I can also teach you how to build mobile applications for both iOS and Android.'
  },
]

export default function ServicesGallery() {
  return (
    <div className="py-2 bg-primary-dark sm:py-3">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I offer a wide range of services. I can help you build a website or web application, build a mobile application, help you with your SEO, marketing, and branding needs, and teach you how to code.
          </p>
        </div>
        <div className="flex flex-col justify-around max-w-2xl grid-cols-4 mx-auto mt-16 bg-indigo-600 sm:mt-20 lg:mt-24 lg:max-w-4xl">
            {servicesData.map((s) => (<>
              <div key={s.id} className="flex items-center m-4 bg-indigo-600 rounded-lg">
                {s.id}
              </div>
              <div className="flex m-4 font-semibold leading-7 text-gray-900 bg-indigo-600">{s.title}</div>
              <div className="flex m-4 font-semibold leading-7 text-gray-900 bg-indigo-600">{s.icon}</div>

              <div className="flex m-4 text-xs text-base text-pink-500 p-9">{s.desc}</div>
            </>
            ))}

        </div>
      </div>
    </div>
  )
}
