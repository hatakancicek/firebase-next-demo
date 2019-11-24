import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const DEFAULT_TITLE = "Caziler | Caiz midir soruları için tek adres";
const DEFAULT_DESCRIPTION =
  "Caizler sayesinde aklınızdaki tüm caiz midir sorularına cevap bulabileceksiniz.";
const DEFAULT_URL = "caizler.com";
const DEFAULT_IMAGE = "https://caizler.com/static/og_facebook.png";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="/static/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      itemProp="image"
      content={props.ogImage}
    />
    <meta
      property="og:image"
      itemProp="image"
      content={props.ogImage}
    />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Caizler" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

Head.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  url: DEFAULT_URL,
  ogImage: DEFAULT_IMAGE
};

export default Head;
