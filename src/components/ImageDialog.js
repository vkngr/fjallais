import * as React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default class ImageDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      photos: null,
      photoIndex: 0,
    }

    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)

    this.previousPhoto = this.previousPhoto.bind(this)
    this.nextPhoto = this.nextPhoto.bind(this)

    this.previousButton = React.createRef()
    this.nextButton = React.createRef()

    if (typeof window !== "undefined") {
      document.addEventListener("keydown", e => {
        if (this.state.isOpen && e.key === "ArrowLeft") {
          this.previousPhoto()
          if (this.previousButton.current) this.previousButton.current.focus()
        } else if (this.state.isOpen && e.key === "ArrowRight") {
          this.nextPhoto()
          if (this.nextButton.current) this.nextButton.current.focus()
        }
      })
    }
  }

  closeModal() {
    this.setState({ isOpen: false })
  }

  openModal(_photos, _photoIndex) {
    this.setState({ isOpen: true, photos: _photos, photoIndex: _photoIndex })
  }

  previousPhoto() {
    if (this.state.photoIndex === 0)
      this.setState({
        photoIndex: this.state.photos.length - 1,
      })
    else this.setState({ photoIndex: this.state.photoIndex - 1 })
  }

  nextPhoto() {
    if (this.state.photoIndex === this.state.photos.length - 1)
      this.setState({
        photoIndex: 0,
      })
    else this.setState({ photoIndex: this.state.photoIndex + 1 })
  }

  render() {
    return (
      <>
        <Transition appear show={this.state.isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-md"
            onClose={this.closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

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
                <div className="relative inline-block w-full max-w-screen overflow-hidden text-left align-middle transition-all transform bg-stone-900 shadow-xl rounded-2xl">
                  <div className="flex flex-col justify-center">
                    <GatsbyImage
                      image={
                        this.state.photos
                          ? this.state.photos[this.state.photoIndex]
                              .gatsbyImageData
                          : null
                      }
                      alt={".."}
                      className="min-h-[420px] h-full w-full hover:saturate-200 cursor-pointer selection:bg-none"
                    />
                    <div className="absolute top-0 right-0 group">
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
                    <div className="absolute left-0">
                      <div
                        role="button"
                        className="p-6 cursor-pointer text-white hover:text-stone-300 focus-visible:outline-none"
                        onClick={this.previousPhoto}
                        onKeyDown={e =>
                          e.key === "Enter" ? this.previousPhoto() : null
                        }
                        tabIndex={0}
                        ref={this.previousButton}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute right-0">
                      <div
                        role="button"
                        className="p-6 cursor-pointer text-white hover:text-stone-300 focus-visible:outline-none"
                        onClick={this.nextPhoto}
                        onKeyDown={e =>
                          e.key === "Enter" ? this.nextPhoto() : null
                        }
                        tabIndex={0}
                        ref={this.nextButton}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-20 w-20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
}
