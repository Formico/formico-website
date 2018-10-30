import React from 'react'
import Img from "gatsby-image"

import './index.scss';

const Page = ({
  title,
  url,
  categories,
  images
}) => {
  const mobileImage = images.mobile,
        tabletImage = images.tablet,
        desktopImage = images.desktop;

  console.log(images);

  return (
    <div className="page">
      <div>{ title }</div>
      <a href={ url }>{ url }</a>
      <div>{ categories }</div>
      <div className="images-container">
        <div className="screenshot">
          <Img fluid={ mobileImage } />
        </div>
        <div className="screenshot">
          <Img fluid={ tabletImage } />
        </div>
        <div className="screenshot">
          <Img fluid={ desktopImage } />
        </div>
      </div>
    </div>
  )
}

export default Page;