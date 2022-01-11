import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 - Not Found" />
      <Header />
      <main>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            {/* Hero Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
              404 - Not Found
            </h1>

            {/* Heading Tags */}
            <ul className="mt-12 flex flex-row flex-wrap gap-6">
              <li>
                <span className="text-lg">
                  This might be because the page is not ready, or that you
                  navigated to a broken link.
                </span>
              </li>
              <li>
                <span className="text-lg">
                  If you believe this to be a bug, please report it via email :)
                </span>
              </li>
            </ul>

            {/* Hero Navigation */}
            <ul className="mt-12 flex flex-col md:flex-row gap-6">
              <Link to="/">
                <li className="flex gap-2 items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-sky-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Go to home</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Section :: Get in touch */}
        <div id="contact-us" className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            {/* Section Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 font-light text-center mt-24">
              Get in <span className="text-sky-700">touch</span>
            </h1>
            <ul className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:fjalla@fjalla.is">
                <li className="flex gap-2 items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-stone-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-2xl group-hover:text-stone-300">
                    fjalla@fjalla.is
                  </span>
                </li>
              </a>
              <a href="tel:+3548888889">
                <li className="flex gap-2 items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-stone-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-2xl group-hover:text-stone-300">
                    (354) 888 888 9
                  </span>
                </li>
              </a>
            </ul>
            <ul className="mt-12 flex flex-row gap-12 justify-center items-center">
              <a href="http://facebook.com/fjallathjonustan">
                <li>
                  <StaticImage
                    src="../images/facebook-brands.svg"
                    alt="A mountain graphic"
                    width={48}
                    height={48}
                    className="hover:saturate-50"
                  />
                </li>
              </a>
              <a href="http://m.me/fjallathjonustan">
                <li>
                  <StaticImage
                    src="../images/facebook-messenger-brands.svg"
                    alt="A mountain graphic"
                    width={48}
                    height={48}
                    className="hover:saturate-50"
                  />
                </li>
              </a>
              <a href="http://instagram.com/handstandingviking">
                <li>
                  <StaticImage
                    src="../images/Instagram_icon.png.webp"
                    alt="A mountain graphic"
                    width={48}
                    height={48}
                    className="hover:saturate-50"
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/* Section :: Footer */}
        <div className="relative mt-24">
          <StaticImage
            src="../images/NORTHERN_LIGHTS_HUNT.jpg"
            alt="A mountain graphic"
            className="max-h-[600px]"
          />
          <div className="absolute h-full w-full z-10 top-0 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute z-20 bottom-12 md:bottom-0 ml-6 mb-6">
            <ul className="flex flex-row gap-6">
              <li>
                <StaticImage
                  src="../images/tour_operator.png"
                  alt="A mountain graphic"
                />
              </li>
              <li>
                <StaticImage
                  src="../images/travel_agency.png"
                  alt="A mountain graphic"
                />
              </li>
            </ul>
            <div className="flex flex-col">
              <h3 className="text-white text-2xl font-light mt-6">
                Fjallaþjónustan ehf.
              </h3>
              <span className="text-white">ID. 570216-0230</span>
              <span className="text-white mt-6">Álfhella 4</span>
              <span className="text-white">221 Hafnarfjörður</span>
              <span className="text-white">Iceland</span>
            </div>
          </div>
          <div className="absolute z-20 bottom-0 ml-6 md:ml-0 md:mr-6 md:right-0 mb-6">
            <ul className="flex flex-row gap-6">
              <Link to="/terms-and-conditions">
                <li>
                  <span className="text-white hover:text-stone-300 text-sm sm:text-md">
                    Terms & Conditions
                  </span>
                </li>
              </Link>
              <Link to="/cancellation-policy">
                <li>
                  <span className="text-white hover:text-stone-300 text-sm sm:text-md">
                    Cancellation Policy
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
