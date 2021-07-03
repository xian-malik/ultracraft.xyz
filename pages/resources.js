import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Header from '../components/_header'
import Footer from '../components/_footer'
import { DownloadView } from '../components/modules/'
import React from 'react'
import { seasons } from '../content/seasonFiles.content'
class Resources extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  render() {
    return (
      <main>
        <Head>
          <title>Resources | UltraCraft</title>
        </Head>
        <div className="page-wrapper">
          <Header />
          <section className="page-title">
            <picture className="image-bg">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2" media="(max-width: 1080px)" />
              <img src="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,c_fill,f_auto,q_auto/v1589143340/UltraCraft/nether_hub.jpg" className="image-bg" alt="Ultracraft Nether Hub" />
            </picture>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="m-0">Things you need</h3>
                  <h1>ResourceS</h1>
                </div>
              </div>
            </div>
            <picture className="dividerBottom">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 1080px)" />
              <img className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png" alt="Divider" />
            </picture>
          </section>
          
          <section id="Section2">
            <div className="container">
              <div className="row">
                { seasons.map( ( el, i ) => {
                  const { category, title } = el
                  return <div key={ i } className="col-4 col-xs-6">
                    <DownloadView href={ el.fileUrl }
                      imagePath={ el.thumbUrl }
                      category={ category } title={ title } />
                  </div>
                } ) }
              </div>
            </div>
            <picture className="dividerBottom">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 1080px)" />
              <img className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png" alt="Divider" />
            </picture>
          </section>
          <Footer />
        </div>
      </main>
    )
  }
}

export default Resources