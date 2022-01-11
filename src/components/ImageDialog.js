import * as React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default class ImageDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      photo: null,
    }

    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal() {
    this.setState({ isOpen: false })
  }

  openModal(_photo) {
    this.setState({ isOpen: true, photo: _photo })
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
                        this.state.photo
                          ? this.state.photo.gatsbyImageData
                          : null
                      }
                      alt={".."}
                      className="min-h-[420px] h-full w-full hover:saturate-200 cursor-pointer"
                    />
                    <div className="absolute top-6 right-6 z-10">
                      <button
                        type="button"
                        className="ml-auto inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md bg-stone-100 hover:bg-stone-300"
                        onClick={this.closeModal}
                      >
                        Got it, thanks!
                      </button>
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
