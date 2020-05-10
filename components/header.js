import React from 'react'
import Navbar from './navbar'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.addEventListener("mousemove", this.cursor)
  }
  cursor = (e) => {
    const cursor = document.querySelector('.custom-cursor-sword')
    cursor.style.transform = 'matrix(1, 0, 0, 1, '+ (e.pageX) +', '+ (e.pageY - window.scrollY) +')'
  }
  render() {
    return (
      <header id="header">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="logo">
                  <h1 className="logo-text">UltraCraft</h1>
                </div>
              </div>
              <div className="col-9">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header