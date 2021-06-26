import React from 'react'
import EffectSlash from './modules/effectslash.module'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleMenu(e) { this.setState({menuOpen: !this.state.menuOpen}) }
  componentDidMount() {
    window.addEventListener("mousemove", this.cursor)
  }
  cursor = (e) => {
    const cursor = document.querySelector('.custom-cursor-sword')
    cursor.style.transform = 'matrix(1, 0, 0, 1, '+ (e.pageX) +', '+ (e.pageY - window.scrollY) +')'
  }
  render() {
    return (
      <header className="absolute top-0 w-full z-50" id="header">
        <div className="hidden md:block relative my-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav className={"navbar relative w-full flex items-center text-center" + (this.state.menuOpen ? " flex" : "")}>
                  <ul className="navbar-nav relative m-0 p-0 list-none mr-auto">
                    <li className="m-0"><a href="/discord"><i className="fab fa-discord fa-lg" aria-hidden='true'></i></a></li>
                    <li className="m-0"><a href="/facebook"><i className="fab fa-facebook-messenger fa-lg" aria-hidden='true'></i></a></li>
                  </ul>
                  <ul className="navbar-nav navbar-center">
                    <div className="nav-left-part">
                      <li><EffectSlash href="/community" title="Community" /></li>
                      <li><EffectSlash href="/forum" title="Forum" /></li>
                      <li><EffectSlash href="/rules" title="Rules" /></li>
                    </div>
                    <li className="logo-wrap">
                      <a href="/" className="logo">
                        <img src='https://res.cloudinary.com/xianmalik/image/upload/v1591696064/UltraCraft/ultracraft.png' alt="Ultracraft" />
                        {/* <h1 className="logo-text">Ultr<small>ac</small>rafT</h1> */}
                      </a>
                    </li>
                    <div className="nav-right-part">
                      <li><EffectSlash href="/resources" title="Resources" /></li>
                      <li><EffectSlash href="/bans" title="Bans" /></li>
                      <li><EffectSlash href="/store" title="Store" /></li>
                    </div>
                  </ul>
                  <ul className="navbar-nav relative m-0 p-0 list-none ml-auto">
                    <li className="m-0" active='true'>
                      <EffectSlash href="/u/login" title="Login" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header