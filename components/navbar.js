import React from 'react'
import EffectSlash from './modules/effectslash.module'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleMenu(e) { this.setState({menuOpen: !this.state.menuOpen}) }
  render() {
    return (
      <nav className={"navbar" + (this.state.menuOpen) ? " responsive-active" : ""}>
        <ul className="navbar-nav text-right">
          <li><EffectSlash href="/" title="Home" active='true' /></li>
          <li><EffectSlash href="/calender" title="Calender" /></li>
          <li><EffectSlash href="/punishments" title="Punishments" /></li>
          <li><EffectSlash href="/resources" title="Resources" /></li>
          <li><EffectSlash href="/support" title="Support" /></li>
          <li><EffectSlash href="/store" title="Store" /></li>
          <li active='true' className="header-cta">
            <EffectSlash href="/login" title="Login" extra="btn-effect" />
          </li>
        </ul>
      </nav>
    )
  }
}
export default Navbar