import { Helmet } from 'react-helmet-async'
import { Footer, Header } from '@/components/layout'
import {
  AboutSection,
  ArchitectureSection,
  ChartSection,
  GovernanceSection,
  HeroSection,
  HowToBuySection,
  KeyStatsSection,
  LegalSection,
  RoadmapSection,
  TeamSection,
  TokenomicsSection,
} from '@/components/sections'
import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/lib/constants'

export default function HomePage() {
  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const faviconHref = `${baseUrl}logo-icon.png`
  const pageTitle = `${SITE_TITLE} | Proof of Culture`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="application-name" content={SITE_TITLE} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" type="image/png" href={faviconHref} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:alt" content="12Cycle hero gradient with logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={TWITTER_HANDLE} />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Helmet>

      <div className="relative min-h-screen bg-hero-gradient text-foreground">
        <Header />

        <main id="main-content" className="flex flex-col pt-16" tabIndex={-1}>
          <HeroSection />
          <KeyStatsSection />
          <AboutSection />
          <ArchitectureSection />
          <TokenomicsSection />
          <ChartSection />
          <HowToBuySection />
          <GovernanceSection />
          <RoadmapSection />
          <TeamSection />
          <LegalSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
