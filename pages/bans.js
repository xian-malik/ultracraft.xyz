import Head from 'next/head'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'

class Bans extends React.Component {
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
          <title>Punishments | UltraCraft</title>
        </Head>
        <div className="page-wrapper">
          <Header />
          <section className="page-title">
            <picture className="image-bg">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2" media="(max-width: 1080px)" />
              <img src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_nether.jpg" className="image-bg" />
            </picture>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 style={{margin: 0}}>The Hall Of Shame</h3>
                  <h1>PunishmentS</h1>
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
                <div className="col-6 col-md-6">
                  <LazyLoad offset={50}>
                    <picture>
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2" media="(max-width: 480px)" />
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2" media="(max-width: 768px)" />
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2" media="(max-width: 1080px)" />
                      <img src="https://res.cloudinary.com/xianmalik/image/upload/w_540,h_450,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2" />
                    </picture>
                  </LazyLoad>
                </div>
                <div className="col-6 col-md-6">
                  <h5>INTRODUCTION</h5>
                  <h2>
                    What Is... <br/>
                    UltraCraft?
                  </h2>
                  <h6>A Survival &amp; SkyBlock Server</h6>
                  <p>
                    Started back in October 2019, Ultracraft was founded by four of Minecraft Enthusiasts who are eager enough to start their own community of players. Main goal of UltraCraft till now is to provide lag free, toxicity free community to the players of Bangladesh.
                  </p>
                  <a href="#" className="btn-effect btn-white-bg effect-slash">
                    <div className="effect-inner">
                      <span className="effect-l"><span>Learn More</span></span>
                      <span className="effect-r"><span>Learn More</span></span>
                      <span className="effect-shade"><span>Learn More</span></span>
                    </div>
                  </a>
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

export default Bans