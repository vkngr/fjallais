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
import ImageDialog from "../components/ImageDialog"

const Bold = ({ children }) => <span className="font-medium">{children}</span>
const Text = ({ children }) => (
  <p className="text-xl sm:text-2xl font-light mt-3 first:mt-0">{children}</p>
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
export default class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.imageDialog = React.createRef()
  }

  render() {
    if (!this.props.data) {
      return (
        <Layout>
          <Seo title="Experience" />
          EXPERIENCE NOT FOUND
        </Layout>
      )
    } else {
      const experience = this.props.data.contentfulExperience
      return (
        <Layout>
          <Seo title={experience.seoTitle || "Experience"} />
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
                  {experience.types.map(type => (
                    <li key={type.id}>
                      <span className="text-lg">{type.name}</span>
                    </li>
                  ))}
                </ul>

                {/* Hero Navigation */}
                <ul className="mt-12 flex flex-col md:flex-row gap-6">
                  <a href="#book">
                    <li className="flex gap-2 items-center group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-sky-700 group-hover:text-sky-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-lg">Book now</span>
                    </li>
                  </a>
                  <a href="#content">
                    <li className="flex gap-2 items-center group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-sky-700 group-hover:text-sky-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
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

              <div className="absolute bottom-6 right-auto left-6 sm:left-auto sm:right-6 z-10">
                <span className="text-white text-lg">
                  {experience.imageDescription}
                </span>
              </div>
            </div>

            <div id="content">
              {/* Section :: Experience Tags */}
              <div className="flex justify-center">
                <div className="w-full max-w-screen-lg p-6">
                  <ul className="mt-12 flex flex-row flex-wrap gap-6">
                    {experience.tags.map(tag => (
                      <li key={tag.id}>
                        <span className="text-lg">{tag.name}</span>
                      </li>
                    ))}
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
                      <li
                        onClick={() =>
                          this.imageDialog.current.openModal(photo)
                        }
                        key={photo.id}
                      >
                        <GatsbyImage
                          image={photo.gatsbyImageData}
                          alt={".."}
                          className="h-64 hover:saturate-200 cursor-pointer"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section :: Experience Calendar */}
            <div className="flex justify-center">
              <div className="w-full max-w-screen-lg p-0 sm:p-6">
                <div id="book">
                  <AvailabilityCalendar experience={experience} />
                  <ImageDialog ref={this.imageDialog} />
                </div>
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
  }
}

export const query = graphql`
  query Experience($slug: String) {
    contentfulExperience(slug: { eq: $slug }) {
      slug
      heading
      types {
        id
        name
      }
      image {
        gatsbyImageData
      }
      imageDescription
      tags {
        id
        name
      }
      body {
        raw
      }
      photos {
        id
        gatsbyImageData
      }
      seoTitle
      priceIsk
    }
  }
`
