import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@300;400;700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.1/collection/components/icon/icon.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <picture className="image-bg" style={{opacity: .5}}>
            <source srcSet="https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home-bg_f2hhbg.jp2" media="(min-width: 1080px)" />
            <img src="https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589059497/UltraCraft/home-bg_f2hhbg.jp2" className="image-bg" />
          </picture>
          <img className="custom-cursor-sword" src="images/cursor.png" />
          <script type="module" src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.1/ionicons/ionicons.esm.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.1/ionicons/ionicons.js"></script>
          <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
          <script src="/static/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument