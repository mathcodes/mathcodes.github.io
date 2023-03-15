import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from 'react-parallax-tilt';

function ServicesComponent() {
   const servicesArray = [
    {
      id: 1,
      title: "WEBSITE DESIGN",
      description: "Transform your online presence with expert website design services.",
      description2: "Skilled designers can craft a stunning and intuitive website that not only impresses your visitors but also helps you rank higher on search engines.",
      description3: "Take pride in creating user-friendly websites that keep your customers engaged and drive conversions.",
    },
    {
      id: 2,
      title: "WEBSITE DEVELOPMENT",
      description: "Build websites that are not only visually appealing but also highly functional.",
      description2: "Expert developers can build a website that is not only easy to navigate but also helps you achieve your business goals.",
      description3: "Your site will be optimized for speed and performance and compatible with all devices and browsers.",
    },
    {
      id: 3,
      title: "SEO",
      description: "Help you rank higher on search engines and drive more traffic to your website.",
      description2: "SEO experts can help you create a customized SEO strategy that helps you rank higher on search engines.",
      description3: "Create a customized SEO strategy that drives more traffic to your website.",
    },
    {
      id: 4,
      title: "SOCIAL MEDIA MARKETING",
      description: "Build a strong social media presence and drive more traffic to your website.",
      description2: "Social media experts can help you create a customized social media strategy that helps you build a strong social media presence.",
      description3: "Create a customized social media strategy and hand-in-hand with SEO Optimization, drives more traffic to your website.",
    },
  ]

  // create conditional based on parent element;s color to decide on the glareColor of the Tilt
  // const parentColor = getComputedStyle(parent).getPropertyValue('background-color');
  // const glareColor = parentColor = "bg-ternary-dark" ? "#000000" : "#ffffff"

  return (<>
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Services
				</p>
			</div>

      <Container className="grid justify-center object-center grid-cols-1 p-12 mx-auto text-center bg-ternary-dark md:grid-cols-2 border-1 d-flex">
        {servicesArray.map(s => {

          return (

            <Tilt className="grid m-6 my-2 mb-10 text-center Tilt " tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={2000} scale={.99} transitionSpeed={3000} gyroscope={true} glareEnable={true} glareMaxOpacity={0.5} glareColor="#777" glarePosition="all" glareBorderRadius="6px" >
              <Card className="w-1/3 p-6 m-10 shadow-lg border-1 border-ternary-dark dark:border-ternary-light">

                <Card.Body
                  className="flex flex-col justify-between text-xl rounded-xl text-ternary-dark hover:text-zinc-900 dark:text-ternary-light dark:hover:text-primary-light"
                >
                  <Card.Title
                    className="h-16 p-1 mb-2 text-2xl align-middle scale-100 font-general-medium text-ternary-dark hover:text-zinc-900 hover:scale-125 dark:text-ternary-light dark:hover:text-primary-light"
                  >{s.title}</Card.Title>
                  <hr/>

                  <Card.Text
                    className="text-sm text-left lg:text-lg text-ternary-dark dark:text-ternary-light"
                  >
                    <p className="mt-2">• {s.description}</p>
                    <p className="mt-2">• {s.description2}</p>
                    <p className="mt-2">• {s.description3}</p>
                  </Card.Text>


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
