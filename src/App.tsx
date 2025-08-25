import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Header,
  Footer,
  Hero,
  CursorTrail,
  FloatingElements,
} from '@/components';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import '@/styles/base/globals.css';
import '@/styles/base/App.css';

// Preload critical sections for better performance
const preloadSections = () => {
  // Preload sections after critical content is rendered
  setTimeout(() => {
    import('@/components/sections/Expertise');
    import('@/components/sections/Education');
    import('@/components/sections/Work');
  }, 1500);
};

// Lazy load non-critical sections with route-based splitting
const Expertise = lazy(() =>
  import('@/components/sections/Expertise').then((module) => ({
    default: module.default,
  }))
);
const Education = lazy(() =>
  import('@/components/sections/Education').then((module) => ({
    default: module.default,
  }))
);
const Work = lazy(() =>
  import('@/components/sections/Work').then((module) => ({
    default: module.default,
  }))
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((module) => ({
    default: module.default,
  }))
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((module) => ({
    default: module.default,
  }))
);

function App() {
  const [sectionsReady, setSectionsReady] = useState(false);

  // Load sections after Hero is ready
  useEffect(() => {
    // Preload sections for smoother UX
    preloadSections();

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
                fallback={<LoadingSpinner message='Loading sections...' />}
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
