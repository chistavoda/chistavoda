import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="bg">
            <Head />
            <link
                rel="preload"
                href="/fonts/inter-var-latin.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
