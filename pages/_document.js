import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: App => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: Component => Component,
            })

        // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
              <Head>
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                              gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                              });
                            `,
                  }}
                />
              </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
