import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <div className="flex justify-center">
        <div className="max-w-screen-lg p-6">
          <main>
            {/* Hero Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
              Come and explore the incredible Iceland with your local expert
              guide
            </h1>

            {/* Hero Navigation */}
            <ul className="mt-12 flex flex-col md:flex-row gap-6">
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
                <span className="text-lg">Experiences</span>
              </li>
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
                <span className="text-lg">Check out our blog</span>
              </li>
            </ul>
          </main>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <StaticImage
          src="../images/basar-hut-1.jpg"
          alt="A mountain graphic"
          className="min-h-[420px] mt-24"
        />
        <div className="absolute bottom-6 right-6 z-10">
          <span className="text-white text-lg">
            Básar Hut & Campsite, Þórsmörk
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
