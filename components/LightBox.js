import { PageSEO } from './SEO'
import siteMetadata from '@/data/siteMetadata'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'

const arrOfImages = ['/static/images/artwork/ArtWork001.jpg']

const arrOfTitle = ['A calm Night']

const arrOfThumnail = ['/static/images/artwork/ArtWork001.jpg']

const captions = ['Date:- 23 Oct 2022']

function ArtWorkLightBox() {
  const [indexOfImages, setIndexOfImages] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index)
    setShowModal(true)
    return
  }
  return (
    <>
      <div className="border-b border-gray-400 dark:border-gray-600">
        <PageTitle>Artwork</PageTitle>
        <Subtitle>:)</Subtitle>
      </div>
      <div className="grid pt-2">
        <i className="block text-lg font-semibold md:hidden ">Click on image to view full Image</i>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {arrOfThumnail.map((image, index) => (
            <div key={index} className="group relative flex ">
              <div className="flex flex-1 transform flex-col pb-3 transition">
                <img
                  // style={{ height: "200px", width: "300px", margin: "20px" }}
                  src={image}
                  alt={image}
                  className="img1 object-cover"
                  // className="pointer-events-none h-52 w-full overflow-hidden rounded-t-[5px] object-cover"
                  onClick={() => openModalAndSetIndex(index)}
                  imageCaption="---------"
                />
              </div>
              <span className="absolute z-50 hidden rounded border  border-white border-opacity-20 bg-[#000] bg-opacity-[70%] px-2 py-1 text-center text-black text-white group-hover:block">
                <small>Click to view full Image</small>
              </span>
            </div>
          ))}
        </div>
        {showModal && (
          <Lightbox
            mainSrc={arrOfImages[indexOfImages]}
            nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
            prevSrc={arrOfImages[(indexOfImages + arrOfImages.length - 1) % arrOfImages.length]}
            mainSrcThumbnail={arrOfThumnail[indexOfImages]}
            nextSrcThumbnail={arrOfThumnail[(indexOfImages + 1) % arrOfThumnail.length]}
            prevSrcThumbnail={
              arrOfThumnail[(arrOfThumnail + arrOfThumnail.length - 1) % arrOfThumnail.length]
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages((indexOfImages + arrOfImages.length - 1) % arrOfImages.length)
            }
            onMoveNextRequest={() =>
              setIndexOfImages((indexOfImages + arrOfImages.length + 1) % arrOfImages.length)
            }
            imageCaption={captions[indexOfImages]}
            imageTitle={arrOfTitle[indexOfImages]}
          />
        )}
      </div>
    </>
  )
}

export default ArtWorkLightBox
