import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const TermsAndConditionsPage = () => {
  return (
    <Layout>
      <Seo title="Terms & Conditions" />
      <Header />
      <main>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            {/* Hero Heading */}
            <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
              Terms & Conditions
            </h1>
          </div>
        </div>

        {/* Section :: Terms and Conditions */}
        <div id="terms-and-conditions" className="flex justify-center">
          <div className="w-full max-w-screen-lg p-6">
            <div className="mt-12">
              <p className="text-xl font-medium">
                Please read these terms carefully before you book as it
                constitutes a contract agreement from the time booking was made.
              </p>

              <p className="text-lg mt-6">
                All bookings, cancellations or changes to bookings must be made
                through our website's booking engine, or via email.
              </p>

              <p className="text-lg mt-6">
                Payment can be made by credit card in ISK (Icelandic Krona) or
                by other methods accepted by us via email, and the exchange rate
                from the Central Bank of Iceland shall be used.
              </p>

              <p className="text-lg mt-6">
                All tours must be fully paid before booking will be considered
                confirmed, exceptions can be made via email.
              </p>

              <p className="text-lg mt-6">
                Upon booking you accept our{" "}
                <Link to="/cancellation-policy">
                  <span className="text-sky-700 hover:text-sky-300">
                    cancellation policy
                  </span>
                </Link>
                .
              </p>

              <p className="text-xl font-medium mt-6">
                Responsibility of participants
              </p>

              <p className="text-lg mt-6">
                The person who makes the booking accepts these conditions on
                behalf of all the participants in the group and is responsible
                for all payments due.
              </p>

              <p className="text-lg mt-6">
                All trips are undertaken on the responsibility of its
                participants. We do not assume any responsibility for accidents
                that are caused by its customers, or can be traced to their own
                actions, or failure to use equipment or clothing as recommended
                by their guide, or failure to respond to safety instruction from
                their guide.All tours must be fully paid before booking will be
                considered confirmed, exceptions can be made via email.
              </p>

              <p className="text-lg mt-6">
                Individual travel insurance is not included in the tour price
                and all medical costs and other costs involved must be paid by
                the client. It is therefore strongly recommended that
                participants take out personal travel and/or medical insurance
                prior to departure.
              </p>

              <p className="text-lg mt-6">
                Upon booking you are responsible for all details to be correct.
                Failure to communicate with our customers, or if inadequate or
                wrong information is provided, may result in the cancellation of
                the trip, with no refund available.
              </p>

              <p className="text-xl font-medium mt-6">Liability</p>

              <p className="text-lg mt-6">
                All trips are weather and condition dependent and we reserve the
                right to change your itinerary or cancel your trip last minute
                with your safety in mind.
              </p>

              <p className="text-lg mt-6">
                Northern Light trips carry the inherent risk that no northern
                lights may be found. In that case, we will offer its customers a
                rebooking of their tour on a different date, but will not offer
                refunds.
              </p>

              <p className="text-lg mt-6">
                We act in good faith and cannot be held responsible for any
                schedule changes caused by weather or road conditions, any loss,
                damage, accidents, sickness or acts of god such as natural
                catastrophes, strikes or any other irregularities beyond our
                control.
              </p>

              <p className="text-lg mt-6">
                Luggage and personal belongings is at the owner’s risk at all
                times.
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

export default TermsAndConditionsPage
