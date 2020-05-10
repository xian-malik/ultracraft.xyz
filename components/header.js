import React from 'react'
import EffectSlash from './modules/effectslash.module'
import { useRouter } from 'next/router'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleMenu(e) { this.setState({menuOpen: !this.state.menuOpen}) }
  render() {
    return <header id="header">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="logo">
                <img src="/images/UltraCraft.png" alt="UltraCraft" hidden />
                <img src="/images/logo.png" alt="UltraCraft" hidden />
                <h1 className="logo-text">UltraCraft</h1>
              </div>
            </div>
            <div className="col-9">
              <nav className={"navbar" + (this.state.menuOpen) ? " responsive-active" : ""}>
                <ul className="navbar-nav text-right">
                  <li>
                    <EffectSlash href="/" title="Home" active='true' />
                  </li>
                  <li>
                    <EffectSlash href="/calender" title="Calender" />
                  </li>
                  <li>
                    <EffectSlash href="/punishments" title="Punishments" />
                  </li>
                  <li>
                    <EffectSlash href="/resources" title="Resources" />
                  </li>
                  <li>
                    <EffectSlash href="/support" title="Support" />
                  </li>
                  <li>
                    <EffectSlash href="/store" title="Store" />
                  </li>
                  <li active='true' className="header-cta">
                    <EffectSlash href="/login" title="Login" extra="btn-effect" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  }
}
export default Header