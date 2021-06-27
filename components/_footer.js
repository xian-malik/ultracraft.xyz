import LazyLoad from 'react-lazyload'
import EffectSlash from './modules/effectslash.module'
function Footer() {
  return (
    <LazyLoad offset={50}>
      <footer>
        <picture className="dividerTop">
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2" media="(max-width: 480px)" />
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2" media="(max-width: 768px)" />
          <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2" media="(max-width: 1080px)" />
          <img className="dividerTop" src="https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/bottom_dark.png" alt="Divider" />
        </picture>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="footer-logo">UltraCraft</h3>
              <p>
                Ultracraft is a Bangladeshi server
              </p>
            </div>
            <div className="col-3">
              <ul className="footer-links">
                <li><EffectSlash href="/" title="Home" /></li>
                <li><EffectSlash href="/sta" title="Home" /></li>
                <li><EffectSlash href="/rules" title="Server Rules" /></li>
                <li><EffectSlash href="/support" title="Support" /></li>
              </ul>
            </div>
            <div className="col-3">
              {/* <iframe src="https://discordapp.com/widget?id=630088304901226506&amp;theme=dark" width="350" height="400"></iframe> */}
            </div>
          </div>
        </div>
      </footer>
    </LazyLoad>
  )
}
export default Footer