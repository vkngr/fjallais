import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default class BookingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingNumber: 0,
      bookingStatus: 0,
      customerName: "",
      customerEmail: "",
      customerPhone: 0,
      orderExperienceId: 0,
      orderExperienceName: "",
      orderParticipants: 0,
      orderDate: new Date(),
      orderPriceIsk: 0,
      bookingStatusMessages: [],
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch(
      "http://46.22.103.95:65535/booking/" +
        new URLSearchParams(this.props.location.search).get("bookingNumber")
    ).then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          console.log(data)
          this.setState({
            bookingNumber: data.bookingNumber,
            bookingStatus: data.bookingStatus,
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            customerPhone: data.customerPhone,
            orderExperienceId: data.orderExperienceId,
            orderExperienceName: data.orderExperienceName,
            orderParticipants: data.orderParticipants,
            orderDate: new Date(data.orderDate),
            orderPriceIsk: data.orderPriceIsk,
            bookingStatusMessages: data.bookingStatusMessages,
          })
        })
      }
    })
  }

  render() {
    return (
      <Layout>
        <Seo title="Booking no. 911420" />
        <Header />
        <main>
          <div className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              {/* Hero Heading */}
              <h1 className="text-3xl md:text-5xl text-stone-700 mt-24">
                <div class="flex gap-6 items-center">
                  <span>
                    Booking{" "}
                    <span className="text-sky-700">
                      {this.state.bookingNumber}
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      "h-10 w-10" +
                      (this.state.bookingStatus === 0
                        ? " text-red-700"
                        : this.state.bookingStatus === 1
                        ? " text-yellow-500"
                        : " text-green-700")
                    }
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </h1>

              {/* Hero Navigation */}
              <ul className="mt-12 flex flex-col md:flex-row gap-6">
                <a href="">
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
                    <span className="text-lg">Print receipt</span>
                  </li>
                </a>
                <a href="#content">
                  <li className="flex gap-2 items-center group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-700 group-hover:text-red-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Cancel booking</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          {/* Section :: Booking */}
          <div id="about-us" className="flex justify-center">
            <div className="w-full max-w-screen-lg p-6">
              <div className="mt-12">
                <p className="text-xl font-medium">
                  Thank you very much for booking with us!
                </p>
                <p className="text-lg mt-1">
                  <span className="text-green-700">
                    The link to this booking was sent to you via email.
                  </span>
                </p>
                <p className="text-lg mt-1">
                  <span className="text-green-700">
                    Payment will be requested via email.
                  </span>
                </p>
                <p className="text-lg mt-1">
                  <span className="text-green-700">
                    For any questions please dont hesitate to send us an email
                    at fjalla@fjalla.is
                  </span>
                </p>

                <p className="text-xl font-medium mt-6">Customer details</p>

                <p className="text-lg mt-1">{this.state.customerName}</p>

                <p className="text-lg mt-1">{this.state.customerEmail}</p>

                <p className="text-lg mt-1">{this.state.customerPhone}</p>

                <p className="text-xl font-medium mt-6">Order summary</p>

                <p className="text-lg mt-1">{this.state.orderExperienceName}</p>

                <p className="text-lg mt-1">
                  {new Date(this.state.orderDate).toDateString()}
                </p>

                <p className="text-lg mt-1">
                  {this.state.orderParticipants} participants x{" "}
                  {String(this.state.orderPriceIsk).replace(
                    /(.)(?=(\d{3})+$)/g,
                    "$1."
                  )}{" "}
                  ISK
                </p>

                <p className="text-lg mt-1">
                  <strong className="font-medium">TOTAL</strong>{" "}
                  {String(
                    this.state.orderParticipants * this.state.orderPriceIsk
                  ).replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
                  ISK
                </p>

                <p className="text-xl font-medium mt-6">Booking status</p>

                {this.state.bookingStatusMessages.map(msg => (
                  <p className="text-xl font-medium mt-6 ">
                    <div className="flex gap-3 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{msg}</span>
                    </div>
                  </p>
                ))}
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
