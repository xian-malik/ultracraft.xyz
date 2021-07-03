import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="https://res.cloudinary.com/xianmalik/image/upload/w_32,h_32,c_limit,f_auto,q_auto/v1591702017/UltraCraft/LOGO_l9gesi.png" />
        </Head>
        <body className='text-base'>
          <Main />

          <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@300;400;700;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/3fa7fd61de.js" async defer crossOrigin="anonymous"></script>
          
          <NextScript />

          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "118464276227049");
                chatbox.setAttribute("attribution", "biz_inbox");

                window.fbAsyncInit = function() {
                  FB.init( {
                    xfbml            : true,
                    version          : 'v11.0'
                  } );
                };

                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          />

          {/* <img alt="Cursor" className="custom-cursor-sword" src="https://res.cloudinary.com/xianmalik/image/upload/w_50,h_50,q_auto,f_auto/v1589137162/UltraCraft/cursor.png" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument