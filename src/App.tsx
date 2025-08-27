import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Header,
  Footer,
  Hero,
  CursorTrail,
  FloatingElements,
  ErrorBoundary,
  SectionLoader,
} from '@/components';
import '@/styles/base/globals.css';
import '@/styles/base/App.css';

// Lazy load non-critical sections for optimal performance
const Expertise = lazy(() => import('@/components/sections/Expertise'));
const Education = lazy(() => import('@/components/sections/Education'));
const Work = lazy(() => import('@/components/sections/Work'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function App() {
  const [sectionsReady, setSectionsReady] = useState(false);

  // Load sections after Hero is ready
  useEffect(() => {
    // Start loading sections after Hero is stable
    const timer = setTimeout(() => {
      setSectionsReady(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
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
          )}
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
