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
    <div className="bg-primary-dark py-2 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I offer a wide range of services. I can help you build a website or web application, build a mobile application, help you with your SEO, marketing, and branding needs, and teach you how to code.
          </p>
        </div>
        <div className="bg-indigo-600 flex flex-col grid-cols-4 mx-auto mt-16 max-w-2xl justify-around sm:mt-20 lg:mt-24 lg:max-w-4xl">
            {servicesData.map((s) => (<>
              <div key={s.id} className="flex items-center m-4 rounded-lg bg-indigo-600">
                {s.id}
              </div>
              <div className="m-4 flex font-semibold leading-7 text-gray-900 bg-indigo-600">{s.title}</div>
              <div className="m-4 flex font-semibold leading-7 text-gray-900 bg-indigo-600">{s.icon}</div>

              <div className="m-4 flex text-base leading-7 text-gray-600">{s.desc}</div>
            </>
            ))}

        </div>
      </div>
    </div>
  )
}
