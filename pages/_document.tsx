// *this file is for document level configuration
// * the js is never compiled in browser but get on server, 

import Document , { Html , Head , Main , NextScript } from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang = "en" >
                <Head>
                    <meta charSet = "utf-8" />
                    <meta name = "viewport" content = "initial-scale=1.0, width=device-width" />
                    <meta name = "description" content = "Code For Community is a non-profit organization that provides free coding courses to the community." />
                    <meta name="tags" content='code, coding, community, free, courses, learn, programming, html, css, javascript, react, nextjs, nodejs, python, java, c++, c#' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}