import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                  margin: 0;
                  padding: 0;
                  border: 0;
                  font-size: 100%;
                  font: inherit;
                  vertical-align: baseline;
                }
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                  display: block;
                }
                body {
                  line-height: 1;
                }
                ol,
                ul {
                  list-style: none;
                }
                blockquote,
                q {
                  quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                  content: "";
                  content: none;
                }
                table {
                  border-collapse: collapse;
                  border-spacing: 0;
                }
                * {
                  font-family: Roboto, open-sans !important;
                }

                body {
                  background: linear-gradient(188deg, #1c876b, #366bc5);
                  background-size: 400% 400%;

                  -webkit-animation: AnimationName 10s ease infinite;
                  -moz-animation: AnimationName 10s ease infinite;
                  animation: AnimationName 10s ease infinite;
                }

                @-webkit-keyframes AnimationName {
                  0% {
                    background-position: 0% 64%;
                  }
                  50% {
                    background-position: 100% 37%;
                  }
                  100% {
                    background-position: 0% 64%;
                  }
                }
                @-moz-keyframes AnimationName {
                  0% {
                    background-position: 0% 64%;
                  }
                  50% {
                    background-position: 100% 37%;
                  }
                  100% {
                    background-position: 0% 64%;
                  }
                }
                @keyframes AnimationName {
                  0% {
                    background-position: 0% 64%;
                  }
                  50% {
                    background-position: 100% 37%;
                  }
                  100% {
                    background-position: 0% 64%;
                  }
                }
              `
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(/static/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(/static/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(/static/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(/static/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');
            }
          `
          }}
        />
      </html>
    );
  }
}
