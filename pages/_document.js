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
        </Html>
    );
}
