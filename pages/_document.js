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
          <link rel="icon" type="image/png" href="https://res.cloudinary.com/xianmalik/image/upload/w_32,h_32,c_limit,f_auto,q_auto/v1589135860/UltraCraft/uc_favicon.png" />
        </Head>
        <body className='text-base'>
          <Main />

          <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@300;400;700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/3fa7fd61de.js" async defer crossOrigin="anonymous"></script>
          
          <NextScript />

          {/* <img alt="Cursor" className="custom-cursor-sword" src="https://res.cloudinary.com/xianmalik/image/upload/w_50,h_50,q_auto,f_auto/v1589137162/UltraCraft/cursor.png" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument