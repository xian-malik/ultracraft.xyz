import React, { Component } from 'react'

class EffectSlash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pathname: '/punishment'
    }
  }
  
  handleClick = e => {
    if (this.props.href == "#") e.preventDefault()
  }
  
  render() {
    const {href, title, extra} = this.props
    return <a href={this.props.href} onClick={this.handleClick} className={extra + " effect-slash"} active={this.props.active}>
      <div className="effect-inner">
        <span className="effect-l"><span>{title}</span></span>
        <span className="effect-r"><span>{title}</span></span>
        <span className="effect-shade"><span>{title}</span></span>
      </div>
    </a>
  }
}

export default EffectSlash