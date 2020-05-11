import Head from 'next/head'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'
import DownloadView from '../components/modules/downloadview.module'

class Resources extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    const { ip, port } = this.state;
    axios.get('https://mcapi.us/server/status?ip='+ip+'&port='+port+'', { 'Content-Type': 'application/json' })
    .then( response => {
      this.setState({data: response.data})
    });
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
              <img src="https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,c_fill,f_auto,q_auto/v1589143340/UltraCraft/nether_hub.jpg" className="image-bg" />
            </picture>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 style={{margin: 0}}>Things you need</h3>
                  <h1>ResourceS</h1>
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
              <div className="row">
                <div className="col-4 col-xs-6">
                  <DownloadView href="https://drive.google.com/open?id=1YZb0kStbbXuUlufrzpB-fjqxAsCm0Agc"
                    imagePath="/UltraCraft/uc_season2_alt.jp2"
                    meta="World File" text="Season O" />
                </div>
                <div className="col-4 col-xs-6">
                  <DownloadView href="https://drive.google.com/open?id=1xlEvHGj9nhp5iAXGkH_jYG0NWN4Qs3IJ"
                    imagePath="/UltraCraft/uc_season2.jp2"
                    meta="World File" text="Season I" />
                </div>
                <div className="col-4 col-xs-6">
                  <DownloadView href="https://drive.google.com/open?id=1wPN26skuUnRcDqbF8He7W0JhR1amvt4a"
                    imagePath="/UltraCraft/uc_season2.jp2"
                    meta="World File" text="Season II" />
                </div>
                <div className="col-4 col-xs-6">
                  <DownloadView href="https://drive.google.com/open?id=1TXvp4yEjFI4B5BGhQfsYKfzfzvVsR2zS"
                    imagePath="/UltraCraft/uc_season3.jp2"
                    meta="World File" text="Season III" />
                </div>
                <div className="col-4 col-xs-6">
                  <DownloadView href="https://drive.google.com/open?id=1HTq3mVFBJ7jbk0qZ88xysnhws44lkO0q"
                    imagePath="/UltraCraft/uc_season4.jp2"
                    meta="World File" text="Season IV" />
                </div>
                <div className="col-4 col-xs-6">
                  <DownloadView href="#"
                    imagePath="/UltraCraft/chalkboard.jp2"
                    meta="MORE" text="CominG" />
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

export default Resources