import * as React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export default class BookingDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      lastScroll: 0,
    }

    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)

    if (typeof window !== "undefined") {
      document.addEventListener("keydown", e => {
        if (this.state.isOpen && e.key === "Escape") this.closeModal()
      })
    }
  }

  closeModal() {
    this.setState({ isOpen: false })
    if (typeof window !== "undefined") {
      window.scrollTo(0, this.state.lastScroll)
    }
  }

  openModal() {
    this.setState({ isOpen: true, lastScroll: window.scrollY })
    console.log(this.props.calendar)

    if (typeof window !== "undefined") {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }

  render() {
    return (
      <>
        <Transition appear show={this.state.isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed flex justify-center items-center inset-0 z-50 lg:z-10 overflow-y-scroll backdrop-blur-md w-full lg:w-auto"
            onClose={() => {}}
          >
            <div className="min-h-screen text-center">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="relative z-50 inline-block overflow-hidden text-left align-middle transition-all transform bg-stone-100 shadow-xl rounded-2xl w-full max-w-[520px]">
                  <form className="flex flex-col justify-center items-center">
                    <div class="relative">
                      <GatsbyImage
                        image={
                          this.props.calendar.state.experience.image
                            .gatsbyImageData
                        }
                        alt="A mountain graphic"
                        className="hover:saturate-50 h-64 w-auto max-w-screen-lg"
                      />
                      <div className="absolute w-full max-w-screen-lg bottom-6 left-6">
                        <StaticImage
                          src="../images/white-mountain.svg"
                          alt="A mountain graphic"
                        />
                      </div>
                      <div className="absolute top-6 right-6 group">
                        <div
                          className="p-6 cursor-pointer"
                          onClick={this.closeModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white group-hover:text-red-100"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 mt-6 w-full max-w-[600px]">
                      <span className="text-md md:text-lg font-medium">
                        Order summary
                      </span>
                      <span className="text-md md:text-lg">
                        {this.props.calendar.state.experience.seoTitle}
                      </span>
                      <span className="text-md md:text-lg">
                        {new Date(
                          this.props.calendar.state.selectedDate.year,
                          this.props.calendar.state.selectedDate.month,
                          this.props.calendar.state.selectedDate.day
                        ).toDateString()}
                      </span>
                      <span className="text-md md:text-lg">
                        {this.props.calendar.state.participantCount} x{" "}
                        {String(
                          this.props.calendar.state.experience.priceIsk
                        ).replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
                        ISK
                      </span>
                      <span className="text-md md:text-lg">
                        TOTAL{" "}
                        <strong className="font-medium">
                          {String(
                            this.props.calendar.state.participantCount *
                              this.props.calendar.state.experience.priceIsk
                          ).replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
                          ISK
                        </strong>
                      </span>
                    </div>
                    <div className="flex flex-col px-6 mt-6 w-full max-w-[600px]">
                      <span className="text-lg font-medium">
                        Customer details
                      </span>
                      <div className="flex gap-3 items-center mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <input
                          required
                          className="p-1 w-full"
                          type="text"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="flex gap-3 items-center mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <input
                          required
                          className="p-1 w-full"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="flex gap-3 items-center mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <input
                          required
                          className="p-1 w-full"
                          type="tel"
                          placeholder="+XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 items-center px-6 mt-6 w-full max-w-[600px]">
                      <input
                        required
                        className="w-8 h-8 md:w-6 md:h-6"
                        type="checkbox"
                      />
                      <span className="text-md md:text-lg">
                        I accept the terms and conditions and cancellation
                        policy
                      </span>
                    </div>
                    <div className="ml-0 md:ml-auto flex flex-col md:flex-row gap-3 px-6 py-6 w-full max-w-[600px] justify-end">
                      <input
                        type="submit"
                        value="Confirm booking request"
                        className="cursor-pointer inline-flex justify-center w-full md:w-auto px-6 py-3 text-lg rounded-md bg-green-700 hover:bg-green-800 text-white"
                      />
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
}
