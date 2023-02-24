import React from 'react'
import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.svg';
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


export const logos = [
  html,
  css,
  typescript,
  javascript,
  react,
  tailwind,
  node,
  python,
  django,
  flask,
  mongodb,
  expressjs,
  bootstrap,
  git,
  github,
  vercel,
  vscode,
  figma,
  wordpress,
  nextJS,
  redux,
  materialui,
  firebase,
  mysql,
  bulma
]

export default function Skills() {

  return (
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
      <div id="projects" className="text-center">
        <p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light selection:bg-ternary-dark">
          Skills
        </p>
      </div>
      <div className="container mx-auto">
        <ul className="grid grid-cols-2 gap-5 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-10">
          {logos.map((logo) => (
            <li key={logo} className="flex justify-center border border-2 border-pink-500 rounded-lg shadow-lg hover:border-40 dark:border-white bg-primary-light dark:bg-ternary-dark shadow-black hover:bg-secondary-dark">
              <div className="flex items-center justify-center p-4 text-sm text-gray-500 bg-indigo-200 rounded-lg ">
                <img src={logo} alt="logo" className="h-20 "/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}




