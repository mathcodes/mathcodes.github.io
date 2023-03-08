import React from "react";

export default function Pricing() {

  return (
    <section className="py-5 mt-5 sm:py-10 sm:mt-10">
      <div id="projects" className="text-center">
        <p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
          Let's Get Started!!!
        </p>
      </div>

      <div className="container mx-auto">
        <form action="https://formspree.io/f/xaykzqea" method="POST" id="quote-form">
          {/* Contact form, Photo gallery, Shopping cart, Blog */}
          <div
            className="p-5 py-4 mb-4 border-2 border-t-2 border-gray-200 rounded-lg dark:border-gray-800"
          >
            <p className="mb-12 text-lg font-general-medium text-ternary-dark dark:text-ternary-light">
              Fill in this form as best you can and I will get back to you with options and pricing. Please don't hesitate to add any additional information you think might be helpful in the message box.
            </p>
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="special-features">
                Which service(s) are you interested in?
              </label>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="contact-form">
                    <input className="mr-2 leading-tight" type="checkbox" id="contact-form" name="services[]" value="contact-form" />
                    Web Design
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="photo-gallery">
                    <input className="mr-2 leading-tight" type="checkbox" id="photo-gallery" name="services[]" value="photo-gallery" />
                    Web Development
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="shopping-cart">
                    <input className="mr-2 leading-tight" type="checkbox" id="shopping-cart" name="services[]" value="shopping-cart" />
                    Search Engine Optimization
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="blog">
                    <input className="mr-2 leading-tight" type="checkbox" id="blog" name="services[]" value="blog" />
                    Social Media Marketing
                  </label>
                </div>
              </div>

            </div>
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="page-count">
                How many pages will the website have?
              </label>
              <div>
                <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="page-count" name="page-count" required>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-15">11-15</option>
                  <option value="16-20">16-20</option>
                  <option value="More than 20">More than 20</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="special-features">
                Do you need any special features or functionality on the website?
              </label>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="contact-form">
                    <input className="mr-2 leading-tight" type="checkbox" id="contact-form" name="special-features[]" value="contact-form" />
                    Contact form
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="photo-gallery">
                    <input className="mr-2 leading-tight" type="checkbox" id="photo-gallery" name="special-features[]" value="photo-gallery" />
                    Photo gallery
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="shopping-cart">
                    <input className="mr-2 leading-tight" type="checkbox" id="shopping-cart" name="special-features[]" value="shopping-cart" />
                    Shopping cart
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="blog">
                    <input className="mr-2 leading-tight" type="checkbox" id="blog" name="special-features[]" value="blog" />
                    Blog
                  </label>
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="custom-feature">
                    <input className="mr-2 leading-tight" type="checkbox" id="custom-feature" name="special-features[]" value="custom-feature" />
                    Custom feature
                  </label>
                </div>
              </div>

            </div>
            {/* eCommerce? */}
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="e-commerce" name="commerce">
                Will the website require e-commerce capabilities?
              </label>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="require-e-commerce" name="commerce">
                    <input value='' className="mr-2 leading-tight" type="checkbox" id="require-e-commerce" />
                    Yes
                  </label>
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="no-e-commerce" name="commerce">
                    <input value='' className="mr-2 leading-tight" type="checkbox" id="no-e-commerce" />
                    No
                  </label>
                </div>
              </div>

            </div>
            {/* Logo & Branding */}
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="logo-branding" name="branding">
                Do you have a logo and branding guidelines?
              </label>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="have-logo" name="logo">
                    <input value='' className="mr-2 leading-tight" type="checkbox" id="have-logo" />
                    Yes
                  </label>
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block mb-2 text-xs tracking-wide uppercase text-ternary-dark dark:text-ternary-light" for="no-logo" name="logo">
                    <input value='' className="mr-2 leading-tight" type="checkbox" id="no-logo" />
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="timeline" name="timeline">
                What is the timeline for the project name="project"
              </label>
              <div className="relative">
                <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="timeline">
                  <option value="ASAP</">ASAP</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="12-36">12-36 months</option>
                  <option value="Flexible</">Flexible</option>
                </select>
              </div>
            </div>
          </div>
          {/* Name, Email, Msg */}
          <div
            className="p-5 py-4 mb-4 border-2 border-t-2 border-gray-200 rounded-lg dark:border-gray-800"
          >
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="name">
                Name
              </label>
              <input className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="email">
                Email
              </label>
              <input className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Your email address" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-ternary-dark dark:text-ternary-light" for="message">
                Message
              </label>
              <textarea className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" id="message" name="message" rows="4" placeholder="Your message" required></textarea>
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <div

          >
            <div className="mb-4">
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}