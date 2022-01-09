import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="flex justify-center">
    <div className="w-full max-w-screen-lg p-6 flex flex-row items-center">
      {/* Brand */}
      <Link to="/" className="text-stone-700">
        <StaticImage
          src="../images/black-mountain.svg"
          alt="A mountain graphic"
          className="mr-3"
        />
        <span className=" text-xl">Fjallaþjónustan</span>
      </Link>

      {/* Navigation */}
      <div className="ml-auto">
        <ul className="hidden md:flex gap-6">
          <li className="text-lg">Experiences</li>
          <li className="text-lg">About us</li>
          <li className="text-lg">Get in touch</li>
        </ul>
        <a className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
