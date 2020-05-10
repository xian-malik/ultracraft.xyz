class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <footer>
      <img src="images/bottom_dark.png" className="dividerTop" />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3 className="footer-logo">UltraCraft</h3>
            <p>
              Ultracraft is a Bangladeshi server
            </p>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <iframe src="https://discordapp.com/widget?id=630088304901226506&amp;theme=dark" width="350" height="400"></iframe>
          </div>
        </div>
      </div>
    </footer>
  }
}
export default Footer