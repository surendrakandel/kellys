import React from 'react';
import Head from "next/head";
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import Book from '../sections/book';
import Contact from '../sections/contact';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/build/tailwind.css"/>
      </Head>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 005" />
          <Banner />
          <Book/>
          <KeyFeature />
          <TeamSection />
          <TestimonialCard />
          <BlogSection />
          <Subscribe />
          <Contact/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
