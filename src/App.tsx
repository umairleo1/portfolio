import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Header,
  Footer,
  Hero,
  CursorTrail,
  FloatingElements,
  ErrorBoundary,
  SectionLoader,
  AnalyticsProvider,
} from '@/components';
import { SEO, StructuredData, WebVitalsOptimizer } from '@/components/seo';
import { getContentLoadDelay, isReactSnapRunning } from '@/utils/reactSnap';
// Lazy load analytics to improve initial bundle size
import '@/styles/base/globals.css';
import '@/styles/base/App.css';
import '@/styles/base/accessibility.css';

// Lazy load non-critical sections for optimal performance
const Expertise = lazy(() => import('@/components/sections/Expertise'));
const Education = lazy(() => import('@/components/sections/Education'));
const Work = lazy(() => import('@/components/sections/Work'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function App() {
  // For SEO pre-rendering, load sections immediately
  // For regular users, delay for performance optimization
  const [sectionsReady, setSectionsReady] = useState(isReactSnapRunning());

  // Defer analytics initialization for better performance
  useEffect(() => {
    const initializeAnalytics = async () => {
      // Wait for sections to be ready before loading analytics
      if (!sectionsReady) return;

      try {
        // Dynamic import analytics to reduce initial bundle
        const { initGA, trackPageView } = await import('@/utils/analytics');

        await initGA();
        trackPageView();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to initialize analytics:', error);
        // Continue app functionality even if analytics fails
      }
    };

    initializeAnalytics();
  }, [sectionsReady]); // Only initialize when sections are ready

  // Load sections after Hero is ready
  useEffect(() => {
    // For SEO pre-rendering, load immediately
    // For regular users, delay after Hero is stable
    const delay = getContentLoadDelay(800);
    const timer = setTimeout(() => {
      setSectionsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      {/* SEO Meta Tags - Load immediately for search engines */}
      <SEO />
      <StructuredData />
      <WebVitalsOptimizer />

      <div className='App'>
        {/* Critical Effects - Load immediately with Hero */}
        <ErrorBoundary fallback={null}>
          <CursorTrail />
          <FloatingElements />
        </ErrorBoundary>

        {/* Critical UI - Always available */}
        <Header />

        <main>
          <Hero />

          {/* Sections - Load after Hero is stable */}
          {sectionsReady && (
            <AnalyticsProvider>
              <ErrorBoundary>
                <Suspense
                  fallback={<SectionLoader message='Loading sections...' />}
                >
                  <Expertise />
                  <Education />
                  <Work />
                  <Experience />
                  <Contact />
                </Suspense>
              </ErrorBoundary>
            </AnalyticsProvider>
          )}
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
