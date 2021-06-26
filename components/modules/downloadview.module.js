import React, { Component } from 'react'

class DownloadView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pathname: '/'
    }
  }
  
  handleClick = e => (this.props.href == "#") ? e.preventDefault() : null
  
  render() {
    const {href, imagePath, meta, text} = this.props || ''
    return (
      <a href={href} className="fv-folderView" target="_blank" rel="noreferrer">
      <picture className="dividerTop">
        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/bottom.jp2" media="(max-width: 480px)" />
        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/bottom.jp2" media="(max-width: 768px)" />
        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/bottom.jp2" media="(max-width: 1080px)" />
        <img className="dividerTop" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto:eco/v1589138371/UltraCraft/Borders/bottom.png" />
      </picture>
        <picture className="fv-image">
          <source srcSet={"https://res.cloudinary.com/xianmalik/image/upload/w_480,c_limit,f_auto,q_auto/v1589059497" + imagePath} media="(max-width: 480px)" />
          <source srcSet={"https://res.cloudinary.com/xianmalik/image/upload/w_768,c_limit,f_auto,q_auto/v1589059497" + imagePath} media="(max-width: 768px)" />
          <source srcSet={"https://res.cloudinary.com/xianmalik/image/upload/w_480,c_limit,f_auto,q_auto/v1589059497" + imagePath} media="(max-width: 1080px)" />
          <img className="fv-image" src={"https://res.cloudinary.com/xianmalik/image/upload/w_480,c_limit,f_auto,q_auto/v1589138371" + imagePath} />
        </picture>
        <div className="fv-content">
          <h5>{meta}</h5>
          <h3>{text}</h3>
        </div>
        <picture className="dividerBottom">
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 480px)" />
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 768px)" />
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto:eco/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 1080px)" />
          <img className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto:eco/v1589138371/UltraCraft/Borders/header1.png" />
        </picture>
      </a>
    )
  }
}

export default DownloadView