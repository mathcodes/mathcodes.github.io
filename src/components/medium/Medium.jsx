import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from 'react-parallax-tilt';
import { SiMedium } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";

export const MagGlass = () => {
  return (
    <svg viewBox="0 0 20 20 h-3/4 w-3/4  " aria-hidden="true">
      <path strokeWidth="0" d="M2.5 8.5a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
      <path
        fill="white"
        fill-rule="oddeven"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m13 13 4.5 4.5m-9-3a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
      />
    </svg>
  )
}

export const BookIcon = (props) => {
  return (
    <svg viewBox="0 0 20 20 h-3/4 w-3/4  " aria-hidden="true" {...props}>
      <path
        fill="white"
        fill-rule="oddeven"
        stroke="currentColor"
        stroke-width="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10 5.5-7.5-3v12l7.5 3m0-12 7.5-3v12l-7.5 3m0-12v12"
      />
      <path
        fill="white"
        fill-rule="oddeven"
        stroke="currentColor"
        stroke-width="2.5"

        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17.5 2.5-7.5 3v12l7.5-3v-12Z"
      />
    </svg>
  )
}


function Medium() {

  const [blogs, setBlogs] = useState([])
  const [myBlogs, setMyBlogs] = useState([])


  // useEffect(() => {
  //   fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rgarza7')
  //     .then(resp => resp.json())
  //     .then(dataBlogs => {
  //       setBlogs(dataBlogs.items)
  //     })
  // }, )
  console.log(blogs)

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcircle9')
      .then(resp => resp.json())
      .then(dataJon => {
        setMyBlogs(dataJon.items)
      })
  },)

  return (<>
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Blogs
				</p>
			</div>

      <Container className="grid grid-cols-1 mx-auto text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounde d border-1 d-flex bg-zinc-400 justify-content-center">
        {myBlogs.map(blog => {
          return (
            <Tilt className="w-full text-center Tilt" tiltMaxAngleX={20} tiltMaxAngleY={30} perspective={2000} scale={.99} transitionSpeed={3000} gyroscope={true} glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="all">
              <Card className="w-1/3 m-10">
                <Card.Img
                  className="object-cover h-48 mx-auto w-fit blog-img"
                  variant="top" src={blog.thumbnail} />
                <Card.Body
                  className="flex flex-col justify-between text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"
                >
                  <Card.Title>{blog.title}</Card.Title>
                  {/* <Card.Text>
                      {blog.description}
                    </Card.Text> */}
                  <Card.Text
                  // className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"
                  >
                    {blog.pubDate.slice(0, 10)}
                  </Card.Text>

                  <Tilt className="w-full text-center Tilt" tiltMaxAngleX={-20} tiltMaxAngleY={-10} perspective={-2000} scale={.99} transitionSpeed={5000} gyroscope={true} glareEnable={true} glareMaxOpacity={0.9} glareColor="#ffffff" glarePosition="all">

                    <Card.Link
                      className="text-4xl font-bold text-center text-zinc-200"
                      href={blog.link}>
                      <div className="flex flex-row justify-end ">

                        {/* <GrArticle /> */}
                        <SiMedium />
                        <AiOutlineArrowRight />
                      </div>
                    </Card.Link>
                  </Tilt>
                </Card.Body>
              </Card>
            </Tilt>
          )
        })}
      </Container>

  </section>

  </>)
}

export default Medium
