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
          <link rel="icon" type="image/png" href="https://res.cloudinary.com/xianmalik/image/upload/w_32,h_32,c_limit,f_auto,q_auto/v1589135860/UltraCraft/uc_favicon.png" />
        </Head>
        <body>
          <Main />

          <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@300;400;700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
          
          <NextScript />

          <img className="custom-cursor-sword" src="https://res.cloudinary.com/xianmalik/image/upload/w_50,h_50,q_auto,f_auto/v1589137162/UltraCraft/cursor.png" />
          
          <script src="/static/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument