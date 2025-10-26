import { Helmet } from 'react-helmet-async'
import { Footer, Header } from '@/components/layout'
import {
  AboutSection,
  ChartSection,
  CommunitySection,
  HeroSection,
  HowToBuySection,
  KeyStatsSection,
  RoadmapSection,
  TokenomicsSection,
} from '@/components/sections'
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/constants'

export default function HomePage() {
  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const faviconHref = `${baseUrl}logo-icon.png`

  return (
    <>
      <Helmet>
        <title>{`${SITE_NAME} | Liquidity in Motion`}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" type="image/png" href={faviconHref} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${SITE_NAME} | Liquidity in Motion`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="12Cycle hero gradient with logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={TWITTER_HANDLE} />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={`${SITE_NAME} | Liquidity in Motion`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Helmet>

      <div className="relative min-h-screen bg-hero-gradient text-foreground">
        <Header />

        <main id="main-content" className="flex flex-col pt-16" tabIndex={-1}>
          <HeroSection />
          <KeyStatsSection />
          <AboutSection />
          <TokenomicsSection />
          <HowToBuySection />
          <ChartSection />
          <CommunitySection />
          <RoadmapSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
