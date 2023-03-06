import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from 'react-parallax-tilt';
import { SiMedium } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";



function ServicesComponent() {



   const servicesArray = [
    {
      id: 1,
      title: "WEBSITE DESIGN",
      description: "Transform your online presence with our expert website design services. Our team of skilled designers can craft a stunning and intuitive website that not only impresses your visitors but also helps you rank higher on search engines. We take pride in creating user-friendly websites that keep your customers engaged and drive conversions.",
    },
    {
      id: 2,
      title: "WEBSITE DEVELOPMENT",
      description: "We build websites that are not only visually appealing but also highly functional. Our team of expert developers can build a website that is not only easy to navigate but also helps you achieve your business goals. We build websites that are optimized for speed and performance and are compatible with all devices and browsers.",
    },
    {
      id: 3,
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "We help you rank higher on search engines and drive more traffic to your website. Our team of SEO experts can help you create a customized SEO strategy that helps you rank higher on search engines and drive more traffic to your website. We can help you create a customized SEO strategy that helps you rank higher on search engines and drive more traffic to your website.",
    },
    {
      id: 4,
      title: "SOCIAL MEDIA MARKETING",
      description: "We help you build a strong social media presence and drive more traffic to your website. Our team of social media experts can help you create a customized social media strategy that helps you build a strong social media presence and drive more traffic to your website. We can help you create a customized social media strategy that helps you build a strong social media presence and drive more traffic to your website.",
    },
  ]


  return (<>
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Services
				</p>
			</div>

      <Container className="grid grid-cols-2 mx-auto text-center sm:grid-cols-2 lg:grid-cols-4 rounde d border-1 d-flex bg-zinc-400 justify-content-center">
        {servicesArray.map(s => {
          console.log(s)
          return (

            <Tilt className="w-full text-center Tilt" tiltMaxAngleX={20} tiltMaxAngleY={30} perspective={2000} scale={.99} transitionSpeed={3000} gyroscope={true} glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="all">
              <Card className="w-1/3 m-10">
                {/* <Card.Img
                  className="object-cover h-48 mx-auto w-fit blog-img"
                  variant="top" src={blog.thumbnail} /> */}
                <Card.Body
                  className="grid justify-between text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"
                >
                  <Card.Title
                    className="grid text-2xl font-general-medium text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"
                  >{s.title}</Card.Title>
                  <hr/>

                  <Card.Text
                    className="text-xs text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"
                  >
                    {s.description}
                  </Card.Text>

                  <Tilt className="w-full text-center Tilt" tiltMaxAngleX={-20} tiltMaxAngleY={-10} perspective={-2000} scale={.99} transitionSpeed={5000} gyroscope={true} glareEnable={true} glareMaxOpacity={0.9} glareColor="#ffffff" glarePosition="all">


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

export default ServicesComponent
