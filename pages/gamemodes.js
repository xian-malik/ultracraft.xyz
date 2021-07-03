import Head from 'next/head'
import Header from '../components/_header'
import Footer from '../components/_footer'
import React from 'react'

class Gamemodes extends React.Component {
  render() {
    return (
      <main>
        <Head>
          <title>UltraCraft</title>
        </Head>
        <div className="page-wrapper">
          <Header />
          <section className="page-title">
            <picture className="image-bg">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 1080px)" />
              <img layout="fill" alt="Nether" src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_nether.jpg" className="image-bg" />
            </picture>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 style={{margin: 0}}>Ultracraft</h3>
                  <h1>GamemodeS</h1>
                </div>
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

export default Gamemodes