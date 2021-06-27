import Head from 'next/head'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import Header from '../../components/_header'
import Footer from '../../components/_footer'
import EffectSlash from '../../components/modules/effectslash.module'
import React from 'react'
import Image from 'next/image'

class Staff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: "play.ultracraft.xyz",
      port: 25582,
      playerCount: "N/A",
      ipText: <span><small>play</small>.UltraCraft.<small>xyz</small></span>
    }
  }
  componentDidMount() {
    const { ip, port } = this.state;
    axios.get('https://mcapi.us/server/status?ip='+ip+'&port='+port+'', { 'Content-Type': 'application/json' })
    .then( response => {
      this.setState({playerCount: (response.data.online) ? response.data.players.now : "N/A"})
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  handleIpCopy(e) {
    this.setState({ipText: <span>IP Copied!</span>})
    navigator.clipboard.writeText(this.state.ip)
    this.timeout = setTimeout(() => {
      this.setState({ipText: <span><small>play</small>.UltraCraft.<small>xyz</small></span>})
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
                  <h3 style={{margin: 0}}>Strong Admin Panel</h3>
                  <h1>Staff memberS</h1>
                </div>
              </div>
            </div>
            <picture className="dividerBottom">
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 480px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 768px)" />
              <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2" media="(max-width: 1080px)" />
              <img layout="fill" alt="Divider" className="dividerBottom" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png" />
            </picture>
          </section>
          
          <section id="Section3">
            <div className="container">
              <div className="row clearfix">
                <div className="col-6 col-md-6 col-push-6">
                  <picture className="user-avatar">
                    <source srcSet="https://crafatar.com/avatars/3b27cb5e-ddaa-41a5-bf77-ec7233b07fc8?overlay=true&size=32" media="(max-width: 480px)" />
                    <source srcSet="https://crafatar.com/avatars/3b27cb5e-ddaa-41a5-bf77-ec7233b07fc8?overlay=true&size=64" media="(max-width: 768px)" />
                    <source srcSet="https://crafatar.com/avatars/3b27cb5e-ddaa-41a5-bf77-ec7233b07fc8?overlay=true&size=80" media="(max-width: 1080px)" />
                    <img layout="fill" alt="Survival" src="https://crafatar.com/avatars/3b27cb5e-ddaa-41a5-bf77-ec7233b07fc8?overlay=true&size=128" />
                  </picture>
                </div>
                <div className="col-6 col-md-6 col-pull-6 text-right"></div>
              </div>
              <br />
              <LazyLoad offset={50}>
                <div className="row column-height">
                  <div className="col-6 col-md-6">
                    <picture>
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 480px)" />
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 768px)" />
                      <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_440,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" media="(max-width: 1080px)" />
                      <img layout="fill" alt="Skybl0ock" src="https://res.cloudinary.com/xianmalik/image/upload/w_540,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2" />
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

export default Staff