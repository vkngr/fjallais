import * as React from "react"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default class MobileMenu extends React.Component {
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
  }

  openModal() {
    this.setState({ isOpen: true, lastScroll: window.scrollY })
  }

  render() {
    return (
      <>
        <Transition appear show={this.state.isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={this.closeModal}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={this.closeModal}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <ul className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll gap-3">
                      {/* Brand */}
                      <li className="px-6 mt-6 flex items-center justify-start">
                        <Link to="/" onClick={this.closeModal}>
                          <StaticImage
                            src="../images/black-mountain.svg"
                            alt="A mountain graphic"
                            className="min-h-[32px] max-h-20"
                          />
                        </Link>
                      </li>
                      <li className="px-6 mt-3 flex items-center justify-start">
                        <a href="/#experiences" onClick={this.closeModal}>
                          <span className="text-2xl hover:text-stone-300">
                            Experiences
                          </span>
                        </a>
                      </li>
                      <li className="px-6 mt-3 flex items-center justify-start">
                        <a href="/#about-us" onClick={this.closeModal}>
                          <span className="text-2xl hover:text-stone-300">
                            About us
                          </span>
                        </a>
                      </li>
                      <li className="px-6 mt-3 flex items-center justify-start">
                        <a href="#contact-us" onClick={this.closeModal}>
                          <span className="text-2xl hover:text-stone-300">
                            Get in touch
                          </span>
                        </a>
                      </li>
                      {/* Section :: Get in touch */}
                      <div id="contact-us" className="flex justify-start">
                        <div className="w-full max-w-screen-lg p-6">
                          <ul className="mt-12 flex flex-col gap-6 justify-start items-start">
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
                          <ul className="mt-12 flex flex-row gap-12 justify-start items-center">
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
                    </ul>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
}
