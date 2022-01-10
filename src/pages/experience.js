import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import AvailabilityCalendar from "../components/AvailabilityCalendar"

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="font-medium">{children}</span>
const Text = ({ children }) => (
  <p className="text-2xl font-light mt-3 first:mt-0">{children}</p>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Experience = ({ data }) => {
  if (!data) {
    return (
      <Layout>
        <Seo title="Experience" />
        EXPERIENCE NOT FOUND
      </Layout>
    )
  } else {
    const experience = data.contentfulExperience
    console.log(experience)
    return (
      <Layout>
        <Seo title="Experience" />
        <Header />
        <main>
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              {/* Hero Heading */}
              <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: experience.heading,
                  }}
                ></span>
              </h1>

              {/* Heading Tags */}
              <ul className="mt-12 flex flex-row flex-wrap gap-6">
                {experience.type.map(type => (
                  <li>
                    <span className="text-lg">{type.name}</span>
                  </li>
                ))}
              </ul>

              {/* Hero Navigation */}
              <ul className="mt-12 flex flex-col md:flex-row gap-6">
                <a href="#book">
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-sky-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Book now</span>
                  </li>
                </a>
                <a href="">
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-sky-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Read more</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <GatsbyImage
              image={experience.image.gatsbyImageData}
              alt={".."}
              className="min-h-[420px] mt-24"
            />

            <div className="absolute bottom-6 right-6 z-10">
              <span className="text-white text-lg">
                {experience.imageDescription}
              </span>
            </div>
          </div>

          {/* Section :: Experience Tags */}
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              <ul className="mt-12 flex flex-row flex-wrap gap-6">
                <li>
                  <span className="text-lg">Free pick-up</span>
                </li>
                <li>
                  <span className="text-lg">12 hours duration</span>
                </li>
                <li>
                  <span className="text-lg">Departure at 09:00</span>
                </li>
                <li>
                  <span className="text-lg">Suitable for everyone</span>
                </li>
                <li>
                  <span className="text-lg">Professional guide</span>
                </li>
                <li>
                  <span className="text-lg">Transportation in super-jeep</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section :: Experience Body */}
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              {renderRichText(experience.body, options)}
            </div>
          </div>

          {/* Section :: Experience Photos */}
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experience.photos.map(photo => (
                  <li>
                    <GatsbyImage
                      image={photo.gatsbyImageData}
                      alt={".."}
                      className="h-64"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section :: Experience Calendar */}
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              <AvailabilityCalendar />
              {/* <ul className="grid grid-cols-7">
                <li className="col-span-7 flex items-center justify-center bg-sky-700 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mr-auto text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <span className="text-2xl text-white">January</span>
                    <span className="text-2xl text-white">2022</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 ml-auto text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(weekDay => (
                  <li className="flex items-center justify-center bg-stone-100 p-6">
                    {weekDay}
                  </li>
                ))}
                {[...Array(new Date(2022, 0, 0).getDate())].map((e, day) => (
                  <li className="flex items-center justify-center bg-stone-200 hover:bg-stone-300 cursor-pointer p-6">
                    {day + 1}
                  </li>
                ))}
              </ul> */}
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
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-2xl">fjalla@fjalla.is</span>
                  </li>
                </a>
                <a href="tel:+3548888889">
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-2xl">(354) 888 888 9</span>
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
                      className="text-sky-700"
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
                    <span className="text-white font-2xl">
                      Terms & Conditions
                    </span>
                  </li>
                </Link>
                <Link to="/cancellation-policy">
                  <li>
                    <span className="text-white font-2xl">
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
}

export default Experience

export const query = graphql`
  query ($slug: String!) {
    contentfulExperience(slug: { eq: $slug }) {
      slug
      heading
      type {
        name
      }
      image {
        gatsbyImageData
      }
      imageDescription
      duration
      body {
        raw
      }
      photos {
        gatsbyImageData
      }
    }
  }
`
