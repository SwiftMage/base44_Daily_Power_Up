import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Daily Power Up';
const BASE_URL = 'https://dailypowerup.app';
const DEFAULT_IMAGE = `${BASE_URL}/images/screenshot-1.png`;
const TWITTER_HANDLE = '@DailyPowerUpApp';

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = 'website',
  article = null,
  structuredData = null
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Positive Affirmations App for Kids`;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author || SITE_NAME} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
