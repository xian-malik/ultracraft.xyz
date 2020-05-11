import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

class Calender extends React.Component {
  render() {
    return (
      <main>
        <Head>
          <title>Calender | UltraCraft</title>
        </Head>
        <div className="page-wrapper">
          <Header />
          <section className="page-title">
            <picture className="image-bg">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_spawn.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_spawn.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_spawn.jp2" media="(max-width: 1080px)" />
              <img src="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_spawn.jpg" className="image-bg" />
            </picture>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 style={{margin: 0}}>Reset & Events</h3>
                  <h1>CalendeR</h1>
                </div>
              </div>
            </div>
            <picture className="dividerBottom">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2" media="(max-width: 1080px)" />
              <img className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png" />
            </picture>
          </section>
          
          <section id="Section2">
            <div className="container">
              <div className="row column-height">
                <div className="col-12 text-md-center">
                  <h4>Next Reset in</h4>
                  <div className="countdown">
                    20th June
                  </div>
                </div>
              </div>
            </div>
            <picture className="dividerBottom">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 1080px)" />
              <img className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png" />
            </picture>
          </section>
          <Footer />
        </div>
      </main>
    )
  }
}

export default Calender