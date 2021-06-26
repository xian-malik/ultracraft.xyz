import Head from 'next/head'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import Header from '../components/header'
import Footer from '../components/footer'
import ParticleView from '../components/particle'
import EffectSlash from '../components/modules/effectslash.module'
import React from 'react'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: "play.ultracraftbd.com",
      port: 25565,
      playerCount: "N/A",
      ipText: <span><small>play</small>.UltraCraftBD.<small>com</small></span>
    }
  }

  componentDidMount() {
    const { ip, port } = this.state;

    axios.get('https://api.minetools.eu/ping/'+ip+'/'+port+'', { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    .then( response => {
      const { data } = response;
      console.log( data );
      this.setState({playerCount: ( ! data.error ) ? data.players.online : "N/A"})
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  handleIpCopy(e) {
    this.setState({ipText: <span>IP Copied!</span>})
    navigator.clipboard.writeText(this.state.ip)
    this.timeout = setTimeout(() => {
      this.setState({ipText: <span><small>play</small>.UltraCraftBD.<small>com</small></span>})
    },800)
  }
  render() {
    return (
      <main>
        <Head>
          <title>UltraCraft</title>
        </Head>
        <div className="page-wrapper">
          <Header />
            <section id="Slider">
              <ParticleView />
              <picture className="image-bg">
                <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg" media="(max-width: 480px)" />
                <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg" media="(max-width: 768px)" />
                <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg" media="(max-width: 1080px)" />
                <img src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg" className="image-bg" />
              </picture>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div style={{margin: '0 0 5% 0'}}>
                      <h3 style={{margin: 0}}>
                        Survival <span>//</span> Skyblock <span>//</span> Skywars
                      </h3>
                      <h1>UltraCrafT</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <h3 className="slider-playercount">Join {this.state.playerCount} other players</h3>
                    <a href="#" className="server-ip btn-effect btn-secondary effect-slash" onClick={() => this.handleIpCopy()}>
                      <div className="effect-inner">
                        <span className="effect-l">{this.state.ipText}</span>
                        <span className="effect-r">{this.state.ipText}</span>
                        <span className="effect-shade">{this.state.ipText}</span>
                      </div>
                    </a>
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
                        <img src="https://res.cloudinary.com/xianmalik/image/upload/w_540,h_450,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jpg" />
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
                    <EffectSlash href="/#" title="Learn More" extra="btn-effect btn-white-bg" />
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
            
            <section id="Section3">
              <div className="container">
                <LazyLoad offset={50}>
                  <div className="row column-height clearfix">
                    <div className="col-6 col-md-6 col-push-6">
                      <picture>
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2" media="(max-width: 480px)" />
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2" media="(max-width: 768px)" />
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_440,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2" media="(max-width: 1080px)" />
                        <img src="https://res.cloudinary.com/xianmalik/image/upload/w_540,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2" alt="Survival" />
                      </picture>
                    </div>
                    <div className="col-6 col-md-6 col-pull-6 text-right">
                      <h5>GAMEMODES</h5>
                      <h2>
                        Survival
                      </h2>
                      <h6>An Enhanced Survival Experience</h6>
                      <p>
                        Survival mode is one of the main game modes in Minecraft. Players must collect resources, build structures, battle mobs, eat, and explore the world in an effort to thrive and survive.
                      </p>
                      <EffectSlash href="/gamemode/survival" title="Survival Guide" extra="btn-effect btn-white-bg" />
                    </div>
                  </div>
                </LazyLoad>
                <LazyLoad offset={50}>
                  <br />
                  <div className="row column-height">
                    <div className="col-6 col-md-6">
                      <picture>
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 480px)" />
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 768px)" />
                        <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_440,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 1080px)" />
                        <img src="https://res.cloudinary.com/xianmalik/image/upload/w_540,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" alt="Survival" />
                      </picture>
                    </div>
                    <div className="col-6 col-md-6">
                      <h5>GAMEMODES</h5>
                      <h2>
                        SkyBlock
                      </h2>
                      <h6>Enhanced Skyblock <small>(Coming Soon)</small></h6>
                      <p>
                        SkyBlock is a survival gamemode where players live and build on a floating island. The goal of the map is to survive without cheating, expand your island, grow your own food and thrive.
                      </p>
                      <EffectSlash href="/gamemode/skyblock" title="SkyBlock Guide" extra="btn-effect btn-white-bg" />
                    </div>
                  </div>
                </LazyLoad>
              </div>
            </section>
          <Footer />
        </div>
      </main>
    )
  }
}

export default HomePage