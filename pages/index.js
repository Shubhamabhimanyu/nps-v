import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Banner from "../components/Banner/Banner";
import Stats from "../components/Stats/Stats";
import Map from "../components/Map/Map";
import About from "../components/About/About";
import Inspire from "../components/Inspire/Inspire";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Testimonials from "../components/Testimonials/Testimonials";
import Medals from "../components/Medals/Medals";
const inter = Inter({ subsets: ["latin"] });

const HowItWorks = dynamic(
  () => import("../components/HowItWorks/HowItWorks"),
  { ssr: false }
);

const Tournament = dynamic(
  () => import("../components/Tournament/Tournament"),
  { ssr: false }
);
export default function Home() {
  const schemaData = 
  {
    "@context":"http://schema.org",
    "@type":"WebPage",
    "@id":"https://nationalpokerseries.in/",
    "url":"https://nationalpokerseries.in/",
    "name":"Play National Poker Series and Win 25 Cr + Guaranteed Cash Prizes",
    "description":"Participate in National Poker Series 2023 and Win 25 Cr+ Cash Prizes. National Poker Series is India’s Premium Poker Tournament. NPS hosted on PokerBaazi – India’s Biggest Poker Platform.",
    "potentialAction":[{"@type":"ReadAction",
    "target":"https://nationalpokerseries.in/"
          }
          ]
  }
  
  return (
    <>
      <Head>
        <title>Play National Poker Series and Win 25 Cr + Guaranteed Cash Prizes
</title>
        <meta name="description" content="Participate in National Poker Series 2023 and Win 25 Cr+ Cash Prizes. National Poker Series is India’s Premium Poker Tournament. NPS hosted on PokerBaazi – India’s Biggest Poker Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="Fq4apXshEaSqOB8Ay-prxu50qKyLwXAE4UxW_PVU8Iw"
        />
        <link rel="canonical" href="https://nationalpokerseries.in/" />
        : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
       
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      </Head>
      <main>
        <Banner />
        <Stats />
        <About />
        <DownloadApp />
        <Medals />
        <Inspire />
        <Tournament />
        <HowItWorks />
        <Map />
        <Testimonials />
        {/* <Map /> */}
      </main>
    </>
  );
}
