import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="bg">
            <Head />
            <link
                rel="preload"
                href="/fonts/MISTRAL.woff"
                as="font"
                type="font/woff"
                crossorigin="anonymous"
            />

            <body>
                <Main />
                <NextScript />
            </body>
            <Script strategy="lazyOnload" src={"https://www.googletagmanager.com/gtag/js?id=AW-11437144145"}></Script>
            <Script stragety="lazyOnload">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-11437144145');
              `}
            </Script>
        </Html>
    );
}
