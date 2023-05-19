import React from 'react'
import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.svg';
import squarespace from '../../images/skills/squarespace.png';
import reactnative from '../../images/skills/reactnative.png';
import javascript from '../../images/skills/javascript.svg';
import react from '../../images/skills/react.svg';
import node from '../../images/skills/node.svg';
import mongodb from '../../images/skills/mongodb.svg';
import expressjs from '../../images/skills/expressjs.png';
import bootstrap from '../../images/skills/bootstrap.svg';
import tailwind from '../../images/skills/tailwind.svg';
import git from '../../images/skills/git.svg';
import github from '../../images/skills/github.svg';
import vercel from '../../images/skills/vercel.svg';
import vscode from '../../images/skills/vscode.svg';
import figma from '../../images/skills/figma.svg';
import wordpress from '../../images/skills/wordpress.svg';
import nextJS from '../../images/skills/nextJS.svg';
import redux from '../../images/skills/redux.png';
import typescript from '../../images/skills/typescript.svg';
import materialui from '../../images/skills/materialui.svg';
import firebase from '../../images/skills/firebase.svg';
import mysql from '../../images/skills/mysql.svg';
import bulma from '../../images/skills/bulma.svg';
import django from '../../images/skills/django.svg';
import flask from '../../images/skills/flask.svg';
import python from '../../images/skills/python.svg';
import openai from '../../images/skills/openai.svg';


export const logos = [
  { image: html, name: 'HTML', category: 'Frontend Development', color: 'text-green-700', description: 'A markup language for creating web pages.' },
  { image: css, name: 'CSS', category: 'Frontend Development', color: 'text-green-700', description: 'A style-sheet language for styling web pages.' },
  { image: javascript, name: 'JavaScript', category: 'Frontend Development', color: 'text-green-700', description: 'A high-level programming language commonly used in web development.' },
  { image: typescript, name: 'TypeScript', category: 'Frontend Development', color: 'text-green-700', description: 'An open-source language which builds on JavaScript by adding static type definitions.' },
  { image: react, name: 'React', category: 'Frontend Development', color: 'text-green-700', description: 'A JavaScript library for building user interfaces.' },
  { image: reactnative, name: 'React Native', category: 'Frontend Development', color: 'text-green-700', description: 'A framework for building native apps using React.' },
  { image: bootstrap, name: 'Bootstrap', category: 'Frontend Development', color: 'text-green-700', description: 'A CSS framework for developing responsive and mobile-first websites.' },
  { image: tailwind, name: 'Tailwind CSS', category: 'Frontend Development', color: 'text-green-700', description: 'A utility-first CSS framework for rapidly building custom user interfaces.' },
  { image: nextJS, name: 'Next.js', category: 'Frontend Development', color: 'text-green-700', description: 'A React framework for production - it gives you the best developer experience with all the features you need for production.' },
  { image: redux, name: 'Redux', category: 'Frontend Development', color: 'text-green-700', description: 'A predictable state container for JavaScript apps.' },
  { image: materialui, name: 'Material-UI', category: 'Frontend Development', color: 'text-green-700', description: 'A popular React UI framework.' },
  { image: bulma, name: 'Bulma', category: 'Frontend Development', color: 'text-green-700', description: 'A free and open-source CSS framework based on Flexbox.' },
  { image: node, name: 'Node.js', category: 'Backend Development', color: 'text-blue-500', description: 'A JavaScript runtime environment for server-side scripting.' },
  { image: python, name: 'Python', category: 'Backend Development', color: 'text-blue-500', description: 'A high-level and general-purpose programming language.' },
  { image: expressjs, name: 'Express.js', category: 'Backend Development', color: 'text-blue-500', description: 'A minimal and flexible Node.js web application framework.' },
  { image: django, name: 'Django', category: 'Backend Development', color: 'text-blue-500', description: 'A high-level Python Web framework that encourages rapid development and clean, pragmatic design.' },
  { image: flask, name: 'Flask', category: 'Backend Development', color: 'text-blue-500', description: 'A micro web framework written in Python.' },
  { image: mongodb, name: 'MongoDB', category: 'Databases', color: 'text-yellow-500', description: 'A NoSQL database for modern apps.' },
  { image: firebase, name: 'Firebase', category: 'Databases', color: 'text-yellow-500', description: 'A platform developed by Google for creating mobile and web applications.' },
  { image: mysql, name: 'MySQL', category: 'Databases', color: 'text-yellow-500', description: 'An open-source relational database management system.' },
  { image: wordpress, name: 'WordPress', category: 'Content Management System', color: 'text-orange-500', description: 'A content management system based on PHP and MySQL.' },
  { image: squarespace, name: 'Squarespace', category: 'Content Management System', color: 'text-orange-500', description: 'A website builder, blogging platform and hosting service.' },
  { image: git, name: 'Git', category: 'Version Control System', color: 'text-red-500', description: 'A distributed version control system for tracking changes in source code.' },
  { image: github, name: 'GitHub', category: 'Version Control System', color: 'text-red-500', description: 'A hosting service for Git repositories providing collaboration features.' },
  { image: openai, name: 'OpenAI', category: 'Artificial Intelligence', color: 'text-pink-900', description: 'An artificial intelligence research laboratory.' },
  { image: vercel, name: 'Vercel', category: 'Deployment and Hosting', color: 'text-purple-500', description: 'A platform for static sites and Serverless Functions.' },
  { image: vscode, name: 'VS Code', category: 'Software', color: 'text-blue-600', description: 'A lightweight but powerful source code editor.' },
  { image: figma, name: 'Figma', category: 'Software', color: 'text-pink-500', description: 'A web-based vector graphics editor and prototyping tool.' },
]




export default function Skills() {
  return (
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
      {/* ... */}
      <div className="container mx-auto">
        <ul className="grid grid-cols-2 gap-5 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-10">
          {logos.map((logo, index) => (
            <>
            <li key={index} className="flex
            flex-col items-center
            justify-center border border-2 border-orange-600 rounded-lg shadow-lg hover:border-40 dark:border-white bg-primary-light dark:bg-ternary-dark shadow-black hover:bg-secondary-dark">
              <div className="flex items-center justify-center p-4 text-sm text-gray-500 bg-indigo-200 rounded-lg">
                <img src={logo.image} alt="logo" className="h-20" data-tip={logo.name} />
              </div>

              <p className={(`text-sm text-center ${logo.color} font-bold p-1
              `)}>{logo.name}</p>


            <p className={(`text-sm text-center ${logo.color} p-1`)}>{logo.category}</p>
            </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  )
}
