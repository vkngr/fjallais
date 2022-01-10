import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Header />
      <main>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            {/* Hero Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
              Come and explore the incredible Iceland with your local expert
              guide
            </h1>

            {/* Hero Navigation */}
            <ul className="mt-12 flex flex-col md:flex-row gap-6">
              <a href="#experiences">
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
                  <span className="text-lg">Experiences</span>
                </li>
              </a>
              <Link to="http://blog.fjalla.is">
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
                  <span className="text-lg">Check out our blog</span>
                </li>
              </Link>
            </ul>
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

        {/* Section :: Featured Experiences */}
        <div id="experiences" className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            {/* Section Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 font-light text-center mt-24">
              Featured <span className="text-sky-700">experiences</span>
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
              <Link to="/experience/thorsmork">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/thorsmork.webp"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Þórsmörk</h2>
                    <span>From 29.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>

              <Link to="/experience/landmannalaugar">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/brennisteinsalda.jpg"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Landmannalaugar</h2>
                    <span>From 29.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>

              <Link to="/experience/fagradalsfjall">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/fagradalsfjall.webp"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Fagradalsfjall</h2>
                    <span>From 19.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>

              <Link to="/experience/botnssulur">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/botnssulur.webp"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Botnssúlur</h2>
                    <span>From 29.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>

              <Link to="/experience/fimmvorduhals">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/stakkholtsgja.jpg"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Fimmvörðuháls</h2>
                    <span>From 39.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>

              <Link to="/experience/laugavegur">
                <li className="hover:shadow-md cursor-pointer">
                  <StaticImage
                    src="../images/thorhandstand.jpg"
                    alt="A mountain graphic"
                    className="h-64 md:h-80"
                  />
                  <div className="flex flex-col items-center p-3">
                    <h2 className="text-3xl font-thin">Laugavegur</h2>
                    <span>From 159.900 ISK/PERS.</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Section :: Meet our people */}
        <div
          id="about-us"
          className="flex justify-center bg-gradient-to-b from-stone-100 to-whitebg-stone-100"
        >
          <div className="w-full max-w-screen-lg p-6">
            {/* Section Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 font-light text-center mt-24">
              Meet our <span className="text-sky-700">people</span>
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/maggnus-viking.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Maggnus Viking</h2>
                  <span>CEO & Lead Guide</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/unnur-jonsdottir.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Unnur Jonsdottir</h2>
                  <span>Marketing</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/inga-viking.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Inga Viking</h2>
                  <span>CFO</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/joey-iron.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Joey Iron</h2>
                  <span>Mountain Driver</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/hlynur-sigurdsson.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Hlynur Sigurdsson</h2>
                  <span>Polar Guide</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/eyrun-viking.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Eyrun Maggnusdottir</h2>
                  <span>Hiking Guide</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/gunnar-viking.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Gunnar Viking</h2>
                  <span>Mountain Guide</span>
                </div>
              </li>
              <li className="flex flex-col items-center">
                <StaticImage
                  src="../images/maggnus-viking-sr.jpg"
                  alt="A mountain graphic"
                  width={200}
                  height={200}
                  className="h-auto rounded-full"
                />
                <div className="flex flex-col items-center p-3">
                  <h2 className="text-xl font-medium">Maggnus Viking Sr.</h2>
                  <span>Executive Assistant</span>
                </div>
              </li>
            </ul>
            <div className="mt-12">
              <p className="text-xl font-medium">
                We are a small family run business with a great love for the
                nature and beauty of Iceland and nothing makes us happier than
                being able to share our hidden spots and stories with you!
              </p>
              <p className="text-lg mt-6">
                Travel deep into the mountains with us on our specially modified
                superjeeps on the less travelled roads and hike to find the
                hidden gems that you will remember for the rest of your life.
              </p>

              <p className="text-lg mt-6">
                Our goal is to make every experience a dream come true, and that
                is why we are determined to provide the absolutely best support
                and enthusiasm to make it happen.
              </p>

              <p className="text-lg mt-6">
                We are very flexible. None of the things we do are carved in
                stone and we are always looking for ways to enhance the
                satisfaction.
              </p>
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
                  <span className="text-white hover:text-stone-300 font-2xl">
                    Terms & Conditions
                  </span>
                </li>
              </Link>
              <Link to="/cancellation-policy">
                <li>
                  <span className="text-white hover:text-stone-300 font-2xl">
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

export default IndexPage
