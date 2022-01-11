import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MobileMenu from "./MobileMenu"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.mobileMenu = React.createRef()
  }

  render() {
    return (
      <header className="flex justify-center">
        <div className="w-full max-w-screen-lg p-6 flex flex-row items-center">
          {/* Brand */}
          <Link to="/">
            <div className="flex gap-3">
              <StaticImage
                src="../images/black-mountain.svg"
                alt="A mountain graphic"
                className="min-h-[32px]"
              />
              <span className="text-stone-700 text-xl ">Fjallaþjónustan</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="ml-auto">
            <ul className="hidden md:flex gap-6">
              <a href="/#experiences">
                <li className="text-lg hover:text-stone-300">Experiences</li>
              </a>
              <a href="/#about-us">
                <li className="text-lg hover:text-stone-300">About us</li>
              </a>
              <a href="#contact-us">
                <li className="text-lg hover:text-stone-300">Get in touch</li>
              </a>
            </ul>
            <div
              role="button"
              tabIndex={0}
              className="md:hidden flex p-6 -my-6 -mr-6 group"
              onClick={() => this.mobileMenu.current.openModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:text-stone-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <MobileMenu ref={this.mobileMenu} />
          </div>
        </div>
      </header>
    )
  }
}
