import React from "react"
import { useGlobalContext } from "../context/context"
import Image from "next/image"
import { BsXLg } from "react-icons/bs"

const GalleryModal = (character: any) => {
  const { IsGalleryModalOpen, closeGalleryModal } = useGlobalContext()
  return (
    <section>
      {IsGalleryModalOpen ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <Image
                    src={character.character?.image?.src}
                    width={768}
                    height={643}
                    objectFit="contain"
                    priority
                    className="rounded-tr-md rounded-tl-md object-center"
                  />
                </div>
                <div className="bg-transparent px-4 py-3 sm:flex justify-center items-center sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeGalleryModal}
                  >
                    <BsXLg className="text-red-700"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  )
}

export default GalleryModal
